// 🔑 Xác thực khu vực dành cho Kỹ thuật viên (Sửa chữa chuyên sâu).
//
// Lưu ý: đây chỉ là lớp chặn ở phía trình duyệt (giấu bớt nội dung khỏi
// người dùng thông thường), KHÔNG phải bảo mật thực sự — vì mật khẩu và
// dữ liệu vẫn nằm sẵn trong file JS gửi về máy khách. Nếu cần bảo mật
// thật, phải kiểm tra quyền truy cập ở phía server.
//
// sessionStorage giúp người dùng chỉ cần nhập mật khẩu 1 lần cho mỗi
// phiên làm việc (đóng tab/trình duyệt sẽ mất, phải nhập lại), thay vì
// mỗi lần chuyển trang lại hỏi lại.
export const TECHNICIAN_PASSWORD = "123456";

const AUTH_KEY = "technician_authed";

export function isTechnicianAuthed(): boolean {
  try {
    return sessionStorage.getItem(AUTH_KEY) === "1";
  } catch {
    return false;
  }
}

export function setTechnicianAuthed(): void {
  try {
    sessionStorage.setItem(AUTH_KEY, "1");
  } catch {
    /* ignore (trình duyệt chặn sessionStorage - ví dụ chế độ ẩn danh nghiêm ngặt) */
  }
}

export function clearTechnicianAuthed(): void {
  try {
    sessionStorage.removeItem(AUTH_KEY);
  } catch {
    /* ignore */
  }
}
