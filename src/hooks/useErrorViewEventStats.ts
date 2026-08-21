// Hook đọc lượt xem theo TỪNG SỰ KIỆN (collection "error_view_events") trong
// 1 khoảng thời gian cụ thể — dùng khi người dùng chọn "Tuần này/Tháng
// này/Năm nay/1 tháng cụ thể" ở trang Thống kê, vì collection
// "error_view_counts" (dùng bởi useErrorViewStats) chỉ giữ TỔNG cộng dồn,
// không lọc lại theo thời gian được.
//
// Đây là truy vấn 1 lần (getDocs) chứ không lắng nghe trực tiếp (onSnapshot)
// vì số liệu quá khứ theo khoảng thời gian không cần cập nhật theo thời gian
// thực — mỗi lần đổi khoảng thời gian sẽ tự truy vấn lại.
import { useEffect, useMemo, useState } from "react";
import { collection, query, where, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { errors } from "../data/errors";
import { hasIllustration } from "../utils/analytics";
import { getPeriodRange, type PeriodKey } from "../utils/dateRanges";
import type { ErrorViewStatRow } from "./useErrorViewStats";

export function useErrorViewEventStats(period: PeriodKey) {
  const range = useMemo(() => getPeriodRange(period), [period]);
  const rangeStartMs = range ? range.start.getTime() : null;
  const rangeEndMs = range ? range.end.getTime() : null;

  const [rows, setRows] = useState<ErrorViewStatRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    // period === "ALL" → getPeriodRange trả về null, không cần đọc collection
    // sự kiện chi tiết (tốn hơn); màn hình gọi hook nên dùng useErrorViewStats
    // (số liệu tổng) trong trường hợp này thay vì kết quả của hook này.
    if (rangeStartMs === null || rangeEndMs === null) {
      setRows([]);
      setLoading(false);
      setLoadError(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setLoadError(false);

    const q = query(
      collection(db, "error_view_events"),
      where("viewedAt", ">=", Timestamp.fromMillis(rangeStartMs)),
      where("viewedAt", "<", Timestamp.fromMillis(rangeEndMs)),
    );

    getDocs(q)
      .then((snapshot) => {
        if (cancelled) return;

        const counts = new Map<
          string,
          { code: string; category: string; count: number; lastViewedAt: Date | null }
        >();

        snapshot.docs.forEach((d) => {
          const v = d.data() as {
            errorId?: string;
            code?: string;
            category?: string;
            viewedAt?: { toDate?: () => Date } | null;
          };
          const errorId = v.errorId;
          if (!errorId) return;
          const viewedAt = v.viewedAt?.toDate ? v.viewedAt.toDate() : null;
          const existing = counts.get(errorId);
          if (existing) {
            existing.count += 1;
            if (
              viewedAt &&
              (!existing.lastViewedAt || viewedAt > existing.lastViewedAt)
            ) {
              existing.lastViewedAt = viewedAt;
            }
          } else {
            counts.set(errorId, {
              code: v.code || "",
              category: v.category || "",
              count: 1,
              lastViewedAt: viewedAt,
            });
          }
        });

        const data: ErrorViewStatRow[] = Array.from(counts.entries())
          .map(([id, v]) => {
            const item = errors.find((e) => e.id === id);
            return {
              id,
              code: v.code,
              title: item?.title || "",
              category: v.category,
              count: v.count,
              lastViewedAt: v.lastViewedAt,
              exists: !!item,
              hasImage: item ? hasIllustration(item) : false,
            };
          })
          .sort((a, b) => b.count - a.count);

        setRows(data);
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setLoadError(true);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [rangeStartMs, rangeEndMs]);

  return { rows, loading, loadError };
}
