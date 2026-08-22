import type { ManualItem } from "../../manuals";

// 20/08/2026: Ngành hàng Máy nước nóng TOSHIBA — chưa có sách HDSD nào trước đây
// (các model RWF-IW2469BVN cũ đang nằm chung với Máy lọc nước ở waterPurifierManual.ts,
// giữ nguyên không đổi). Các model MỚI dưới đây được xếp đúng vào category "waterHeater"
// và lấy link PDF TRỰC TIẾP từ toshiba-lifestyle.com/vn (chưa re-host qua Google Drive).
export const waterHeaterManuals: ManualItem[] = [
  {
    id: "wh1",
    category: "waterHeater",
    brand: "TOSHIBA",
    model: "RWF-W1917TV(K)",
    title: "Sách HDSD Máy nước nóng lạnh TOSHIBA RWF-W1917TV(K)",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/download/may-loc-nuoc/SHD%20W1917TV.pdf",
  },
  {
    id: "wh2",
    category: "waterHeater",
    brand: "TOSHIBA",
    model: "RWF-W1830BV(K)",
    title:
      "Sách HDSD Máy nước nóng lạnh TOSHIBA RWF-W1830BV(K) (Phần 1/2, xem thêm phần 2 tại trang chủ Toshiba)",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/download/may-loc-nuoc/SHD%20W1830BV%20(p1-p10).pdf",
  },
  {
    id: "wh3",
    category: "waterHeater",
    brand: "TOSHIBA",
    model: "RWF-W1830UVBV(T)",
    title:
      "Sách HDSD Máy nước nóng lạnh TOSHIBA RWF-W1830UVBV(T) (Phần 1/2, xem thêm phần 2 tại trang chủ Toshiba)",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/download/may-loc-nuoc/SHD%20W1830UVBV%20(p1-p10).pdf",
  },
  {
    id: "wh4",
    category: "waterHeater",
    brand: "TOSHIBA",
    model: "RWF-W1664TV(K1)",
    title: "Sách HDSD Máy nước nóng lạnh TOSHIBA RWF-W1664TV(K1)",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/download/may-loc-nuoc/SHD%20W1664TV_Viet.pdf",
  },
  {
    id: "wh5",
    category: "waterHeater",
    brand: "TOSHIBA",
    model: "RWF-W1669BV(K1)",
    title: "Sách HDSD Máy nước nóng lạnh TOSHIBA RWF-W1669BV(K1)",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/download/may-loc-nuoc/SHD%20W1669BV_Viet.pdf",
  },
  {
    id: "wh6",
    category: "waterHeater",
    brand: "TOSHIBA",
    model:
      "TWH-45MCNVN(S)-WB, TWH-45MCNVN(W)-WB, TWH-45MCPVN(S)-WB, TWH-45EMCPVN(S)-CB, TWH-45EMCPVN(K)-CB, TWH-45EMC1PVN(K)-KB",
    title: "Sách HDSD Máy tắm nước nóng trực tiếp TOSHIBA dòng 45MCN/45EMC/45EMC1",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/thiet-bi-can-nuoc/may-tam-nong/HDSD-M%C3%A1y-T%E1%BA%AFm-N%C3%B3ng-Toshiba-45MCN-45EMC-45EMC1-.pdf",
  },
  // 21/08/2026: Bổ sung Máy tắm nước nóng mang thương hiệu COMFEE (TOSHIBA VN cũng
  // phân phối), lấy link PDF TRỰC TIẾP từ feelcomfee.com/vn.
  {
    id: "wh-cf1",
    category: "waterHeater",
    brand: "COMFEE",
    model: "CWH-45EPGNVN(W)-CB, CWH-45EPGPVN(W)-CB",
    title: "Sách HDSD Máy Tắm Nước Nóng Comfee CWH-45EPGNVN(W)-CB, CWH-45EPGPVN(W)-CB",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/may-tam-nuoc-nong/4.2%20Sach%20huong%20dan_45EPG.pdf",
  },
  {
    id: "wh-cf2",
    category: "waterHeater",
    brand: "COMFEE",
    model: "CWH-45MVNVN(W)-CB",
    title: "Sách HDSD Máy Tắm Nước Nóng Comfee CWH-45MVNVN(W)-CB",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/may-tam-nuoc-nong/4.1%20Sach%20huong%20dan_45MVN.pdf",
  },
];
