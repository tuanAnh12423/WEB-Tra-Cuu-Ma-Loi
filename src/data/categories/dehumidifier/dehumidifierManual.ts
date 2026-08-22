import type { ManualItem } from "../../manuals";

// 21/08/2026: Ngành hàng Máy hút ẩm — sản phẩm mang thương hiệu COMFEE (TOSHIBA VN
// cũng phân phối), lấy link PDF TRỰC TIẾP từ feelcomfee.com/vn. Category "dehumidifier"
// là category MỚI, app hiện chưa có mã lỗi riêng cho ngành hàng này nên chỉ hiện dưới
// mục "Tất cả Ngành" trong phần tra cứu Manual.
export const dehumidifierManuals: ManualItem[] = [
  {
    id: "dh-cf1",
    category: "dehumidifier",
    brand: "COMFEE",
    model: "CFDF7-20L",
    title: "Sách HDSD Máy Hút Ẩm Comfee CFDF7-20L",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/may-hut-am/S%C3%A1ch-HDSD-CFDF7-20L.pdf",
  },
  {
    id: "dh-cf2",
    category: "dehumidifier",
    brand: "COMFEE",
    model: "CFDP-50L",
    title: "Sách HDSD Máy Hút Ẩm Công Nghiệp Comfee CFDP-50L",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/may-hut-am/S%C3%A1ch-HDSD-CFDP-50L.pdf",
  },
  {
    id: "dh-cf3",
    category: "dehumidifier",
    brand: "COMFEE",
    model: "CFDA-30L",
    title: "Sách HDSD Máy Hút Ẩm Comfee CFDA-30L",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/may-hut-am/S%C3%A1ch-HDSD-CFDA-30L.pdf",
  },
];
