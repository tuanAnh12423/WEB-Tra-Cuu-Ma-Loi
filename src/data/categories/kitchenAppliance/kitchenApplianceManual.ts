import type { ManualItem } from "../../manuals";

// 21/08/2026: Ngành hàng Đồ dùng nhà bếp nhỏ (nồi chiên không dầu, máy ép, máy làm
// sữa hạt, máy xay) — sản phẩm mang thương hiệu COMFEE (TOSHIBA VN cũng phân phối),
// lấy link PDF TRỰC TIẾP từ feelcomfee.com/vn. Category "kitchenAppliance" là category
// MỚI, app hiện chưa có mã lỗi riêng cho ngành hàng này nên chỉ hiện dưới mục "Tất cả
// Ngành" trong phần tra cứu Manual (đã có nút lọc riêng từ 21/08/2026).
export const kitchenApplianceManuals: ManualItem[] = [
  {
    id: "ka-cf1",
    category: "kitchenAppliance",
    brand: "COMFEE",
    model: "CAF-75PGP0A0",
    title: "Sách HDSD Nồi Chiên Không Dầu Comfee CAF-75PGP0A0",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/noi-chien-khong-dau/SHD-CAF-75PGP0A0.pdf",
  },
  {
    id: "ka-cf2",
    category: "kitchenAppliance",
    brand: "COMFEE",
    model: "CJC-28SGJ0A0",
    title: "Sách HDSD Máy Ép Trái Cây Comfee CJC-28SGJ0A0",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/may-ep-trai-cay/5-SHD-CJC-28SGJ0A0.pdf",
  },
  {
    id: "ka-cf3",
    category: "kitchenAppliance",
    brand: "COMFEE",
    model: "CBL-50HGBHA0",
    title: "Sách HDSD Máy Làm Sữa Hạt Comfee CBL-50HGBHA0",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/may-lam-sua-hat/5-SHD-CBL-50HGBHA0.pdf",
  },
  {
    id: "ka-cf4",
    category: "kitchenAppliance",
    brand: "COMFEE",
    model: "CBL-60GGKDB0",
    title: "Sách HDSD Máy Xay Sinh Tố Comfee CBL-60GGKDB0",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/may-sinh-to/HDSD-CBL-60GGKDB0.pdf",
  },
  {
    id: "ka-cf5",
    category: "kitchenAppliance",
    brand: "COMFEE",
    model: "CAD-75PG00A0",
    title: "Sách HDSD Nồi Chiên Không Dầu Comfee CAD-75PG00A0 (màn hình cảm ứng)",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/noi-chien-khong-dau/5-1-SHD-CAD-75PG00A0.pdf",
  },
];
