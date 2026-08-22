import type { ManualItem } from "../../manuals";

// 20/08/2026: Ngành hàng Bếp từ - Hút mùi TOSHIBA — chưa có sách HDSD nào trước đây,
// lấy link PDF TRỰC TIẾP từ toshiba-lifestyle.com/vn (chưa re-host qua Google Drive).
// LƯU Ý: Toshiba VN (toshiba-lifestyle.com/vn) hiện KHÔNG bán Máy hút mùi (range hood) —
// chỉ có Bếp điện từ đơn. Vì vậy mục "Hút mùi" tạm thời chưa có sách HDSD nào, không
// phải do sót mà do dòng sản phẩm này không được bán chính thức tại VN qua kênh này.
export const inductionHoodManuals: ManualItem[] = [
  {
    id: "ih1",
    category: "inductionHood",
    brand: "TOSHIBA",
    model: "IC-20S1PV, IC-20S2PV, IC-20S3PV, IC-20S4PV",
    title: "Sách HDSD Bếp điện từ đơn TOSHIBA IC-20S1PV, S2PV, S3PV, S4PV",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/thiet-bi-nha-bep/bep-dien-tu/SHD-20S1-2-3-4PV.pdf",
  },
  {
    id: "ih2",
    category: "inductionHood",
    brand: "TOSHIBA",
    model: "IC-20R1SV, IC-20R2SV",
    title: "Sách HDSD Bếp điện từ đơn TOSHIBA IC-20R1SV, IC-20R2SV",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/vn-new/pdf/ic-20r2sv/SHD-20R1-2SV.pdf",
  },
  // 21/08/2026: Bổ sung Bếp từ + Máy hút mùi mang thương hiệu COMFEE (TOSHIBA VN cũng
  // phân phối), lấy link PDF TRỰC TIẾP từ feelcomfee.com/vn. Máy hút mùi Comfee được xếp
  // chung category "inductionHood" vì app chưa có category riêng cho Hút mùi.
  {
    id: "ih-cf1",
    category: "inductionHood",
    brand: "COMFEE",
    model: "CIH-55DSU",
    title: "Sách HDSD Bếp từ đôi Comfee CIH-55DSU",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/bep-tu/1-UM-Viet-CIH-55DSU.pdf",
  },
  {
    id: "ih-cf2",
    category: "inductionHood",
    brand: "COMFEE",
    model: "CIH-40DHE",
    title: "Sách HDSD Bếp điện từ đôi Comfee CIH-40DHE",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/bep-tu/1-UM-Viet-CIH-40DHE-3-VN-COMFEE-MC-7D40A5S117-Bep-dien-tu-doi-.pdf",
  },
  {
    id: "ih-cf3",
    category: "inductionHood",
    brand: "COMFEE",
    model: "CIH-52DHP, CIH-52DIU",
    title: "Sách HDSD Bếp từ đôi Comfee CIH-52DHP, CIH-52DIU",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/bep-tu/1-UM-Viet-CIH-52DIU-DHP-3-VN-COMFEE-MC-7D52A6S118-Bep-dien-t-.pdf",
  },
  {
    id: "ih-cf4",
    category: "inductionHood",
    brand: "COMFEE",
    model: "CH-70TM77B",
    title: "Sách HDSD Máy Hút Mùi Comfee CH-70TM77B",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/catalogue-comfee-/HDSD-CH-70TM77B-update2026.pdf",
  },
  {
    id: "ih-cf5",
    category: "inductionHood",
    brand: "COMFEE",
    model: "CH-90WJ07B",
    title: "Sách HDSD Máy Hút Mùi Comfee CH-90WJ07B",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/download/may-hut-mui/1-UM-Viet-CH-90WJ07B.pdf",
  },
  {
    id: "ih-cf6",
    category: "inductionHood",
    brand: "COMFEE",
    model: "CH-70SF49B",
    title: "Sách HDSD Máy Hút Mùi Comfee CH-70SF49B",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/catalogue-comfee-/HDSD-CH-70SF49B-update2026.pdf",
  },
];
