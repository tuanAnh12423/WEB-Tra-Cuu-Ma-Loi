// Hook dùng chung để đọc số liệu "lượt xem từng mã lỗi" từ Firestore
// (collection error_view_counts, xem src/utils/analytics.ts) và ghép thêm
// thông tin "đã có hình ảnh minh hoạ chưa" — dùng chung cho cả trang
// Thống kê (/analytics) và widget "Mã lỗi đang HOT" ở Trang chủ, để 2 nơi
// luôn khớp số liệu với nhau thay vì mỗi nơi tự đọc/tính 1 kiểu.
import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { errors } from "../data/errors";
import { hasIllustration } from "../utils/analytics";

export type ErrorViewStatRow = {
  id: string; // = errorId
  code: string;
  title: string;
  category: string;
  count: number;
  lastViewedAt: Date | null;
  exists: boolean;
  hasImage: boolean;
};

// enabled=false: bỏ qua việc mở kết nối lắng nghe (onSnapshot) — dùng khi màn
// hình đang hiển thị số liệu theo khoảng thời gian cụ thể (tuần/tháng/năm) từ
// useErrorViewEventStats thay vì số liệu "mọi thời gian" của hook này, để khỏi
// giữ 1 kết nối Firestore không cần dùng tới.
export function useErrorViewStats(enabled: boolean = true) {
  const [rawRows, setRawRows] = useState<
    Omit<ErrorViewStatRow, "exists" | "hasImage">[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      return;
    }
    try {
      const unsubscribe = onSnapshot(
        collection(db, "error_view_counts"),
        (snapshot) => {
          const data = snapshot.docs.map((d) => {
            const v = d.data() as {
              code?: string;
              title?: string;
              category?: string;
              count?: number;
              lastViewedAt?: { toDate?: () => Date } | null;
            };
            return {
              id: d.id,
              code: v.code || "",
              title: v.title || "",
              category: v.category || "",
              count: v.count || 0,
              lastViewedAt: v.lastViewedAt?.toDate
                ? v.lastViewedAt.toDate()
                : null,
            };
          });
          setRawRows(data);
          setLoading(false);
        },
        () => {
          setLoadError(true);
          setLoading(false);
        },
      );
      return () => unsubscribe();
    } catch {
      setLoadError(true);
      setLoading(false);
      return undefined;
    }
  }, [enabled]);

  // Ghép thêm "đã có ảnh chưa" từ dữ liệu mã lỗi hiện có trong app, sắp theo lượt xem giảm dần
  const rows: ErrorViewStatRow[] = useMemo(() => {
    return rawRows
      .map((row) => {
        const item = errors.find((e) => e.id === row.id);
        return {
          ...row,
          exists: !!item,
          hasImage: item ? hasIllustration(item) : false,
        };
      })
      .sort((a, b) => b.count - a.count);
  }, [rawRows]);

  return { rows, loading, loadError };
}
