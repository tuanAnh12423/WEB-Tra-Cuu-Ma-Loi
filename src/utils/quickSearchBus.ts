// Kênh sự kiện nhỏ gọn để nút "Chatbot nổi" (dùng chung toàn app) có thể
// yêu cầu trang hiện tại (ErrorDetailPage / ErrorListPage) mở popup
// "Tìm kiếm nhanh mã lỗi" của riêng trang đó — thay vì mỗi trang tự vẽ
// 1 nút kính lúp nổi riêng dễ bị đè lên nút chatbot.
const EVENT_NAME = "app:open-quick-search";

export function openQuickSearch() {
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function onOpenQuickSearch(handler: () => void): () => void {
  window.addEventListener(EVENT_NAME, handler);
  return () => window.removeEventListener(EVENT_NAME, handler);
}
