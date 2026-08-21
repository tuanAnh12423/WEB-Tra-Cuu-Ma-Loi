// Đếm số lượt xem từng mã lỗi để làm báo cáo "mã lỗi nào được tra cứu nhiều nhất",
// giúp ưu tiên tìm/bổ sung hình ảnh minh hoạ cho đúng mã đang được hỏi nhiều.
//
// Ghi vào 2 nơi mỗi lượt xem:
// 1) "error_view_counts" — 1 document / 1 mã lỗi, chỉ giữ TỔNG cộng dồn (increment).
//    Rẻ, đọc nhanh — dùng cho báo cáo "mọi thời gian" (mặc định).
// 2) "error_view_events" — 1 document / 1 LƯỢT xem, có mốc thời gian viewedAt.
//    Dùng để lọc báo cáo theo tuần/tháng/năm cụ thể (xem nam tháng nào máy lạnh
//    tăng, tháng nào máy giặt/sấy tăng...) — thứ mà collection #1 không làm được
//    vì không giữ lại lịch sử theo thời gian, chỉ có mỗi tổng số.
import {
  doc,
  setDoc,
  addDoc,
  collection,
  increment,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import type { ErrorItem } from "../data/errors";

const VIEW_COUNTS_COLLECTION = "error_view_counts";
const VIEW_EVENTS_COLLECTION = "error_view_events";

// Chặn đếm trùng khi React gọi effect 2 lần liên tiếp trong tích tắc (StrictMode
// lúc chạy "npm run dev" để test — bản build thật /dist/index.html đưa lên GAS
// không bị vậy). Chỉ chặn nếu gọi lại CÙNG 1 mã trong vòng 2 giây, còn xem lại
// sau đó vẫn tính là 1 lượt mới bình thường.
const lastCallAt = new Map<string, number>();
const DUPLICATE_GUARD_MS = 2000;

// Gọi 1 lần mỗi khi trang chi tiết mã lỗi được mở (xem cách gọi trong
// ErrorDetailPage.tsx — useEffect khoá theo errorId, nên chỉ tăng 1 lần / lượt mở
// trang; nếu người dùng rời đi rồi quay lại xem cùng mã đó, đó là 1 lượt mới hợp lệ).
export async function trackErrorView(item: ErrorItem): Promise<void> {
  if (!item?.id) return;

  const now = Date.now();
  const last = lastCallAt.get(item.id);
  if (last && now - last < DUPLICATE_GUARD_MS) return;
  lastCallAt.set(item.id, now);

  // 2 lượt ghi độc lập — lỗi 1 cái (vd. do rules Firestore chưa mở collection
  // mới) không được làm mất luôn lượt ghi kia.
  const results = await Promise.allSettled([
    setDoc(
      doc(db, VIEW_COUNTS_COLLECTION, item.id),
      {
        code: item.code || "",
        title: item.title || "",
        category: item.category || "",
        count: increment(1),
        lastViewedAt: serverTimestamp(),
      },
      { merge: true },
    ),
    addDoc(collection(db, VIEW_EVENTS_COLLECTION), {
      errorId: item.id,
      code: item.code || "",
      category: item.category || "",
      viewedAt: serverTimestamp(),
    }),
  ]);

  for (const r of results) {
    if (r.status === "rejected") {
      // Không có mạng / Firestore lỗi thì bỏ qua âm thầm, không ảnh hưởng người dùng
      console.error("Không thể ghi nhận lượt xem mã lỗi:", r.reason);
    }
  }
}

export function hasIllustration(item: ErrorItem): boolean {
  if (item.images && item.images.length > 0) return true;
  if (item.videoUrls && item.videoUrls.length > 0) return true;
  if (Array.isArray(item.steps)) {
    return item.steps.some(
      (s) =>
        typeof s !== "string" && (s.image || (s.images && s.images.length > 0)),
    );
  }
  return false;
}
