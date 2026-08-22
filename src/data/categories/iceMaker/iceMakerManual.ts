import type { ManualItem } from "../../manuals";

// 21/08/2026: Ngành hàng Máy làm đá — sản phẩm mang thương hiệu COMFEE (TOSHIBA VN
// cũng phân phối), lấy link PDF TRỰC TIẾP từ feelcomfee.com/vn. Category "iceMaker"
// là category MỚI, app hiện chưa có mã lỗi riêng cho ngành hàng này nên chỉ hiện dưới
// mục "Tất cả Ngành" trong phần tra cứu Manual.
export const iceMakerManuals: ManualItem[] = [
  {
    id: "im-cf1",
    category: "iceMaker",
    brand: "COMFEE",
    model: "RCI12BL1VN(E)",
    title: "Sách HDSD Máy Làm Đá Viên Comfee RCI12BL1VN(E)",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/may-lam-da/RCI12BL1VN-E-User-Manual-VN.pdf",
  },
];
