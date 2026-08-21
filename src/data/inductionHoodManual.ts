import type { ManualItem } from "./manuals";

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
];
