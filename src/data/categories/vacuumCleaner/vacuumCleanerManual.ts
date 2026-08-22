import type { ManualItem } from "../../manuals";

// 21/08/2026: Ngành hàng Máy hút bụi — sản phẩm mang thương hiệu COMFEE (TOSHIBA VN
// cũng phân phối), lấy link PDF TRỰC TIẾP từ feelcomfee.com/vn. Category "vacuumCleaner"
// là category MỚI, app hiện chưa có mã lỗi riêng cho ngành hàng này nên chỉ hiện dưới
// mục "Tất cả Ngành" trong phần tra cứu Manual (đã có nút lọc riêng từ 21/08/2026).
export const vacuumCleanerManuals: ManualItem[] = [
  {
    id: "vc-cf1",
    category: "vacuumCleaner",
    brand: "COMFEE",
    model: "CVC-SBLA1(B)",
    title: "Sách HDSD Máy Hút Bụi Cầm Tay Comfee CVC-SBLA1(B)",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/hut-bui/SHD%20CVC-SBLA1.pdf",
  },
  {
    id: "vc-cf2",
    category: "vacuumCleaner",
    brand: "COMFEE",
    model: "CVC-CBLA1(B)",
    title: "Sách HDSD Máy Hút Bụi Đứng Không Dây Comfee CVC-CBLA1(B)",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/hut-bui/SHD%20CVC-CBLA1.pdf",
  },
  {
    id: "vc-cf3",
    category: "vacuumCleaner",
    brand: "COMFEE",
    model: "CXC05APGY",
    title: "Sách HDSD Máy Hút Bụi Lau Sàn Thông Minh Comfee CXC05APGY",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/hut-bui/HDSD-CXC05APGY.pdf",
  },
];
