import type { ManualItem } from "../../manuals";

// 21/08/2026: Ngành hàng Lò vi sóng — ban đầu chỉ có 1 model COMFEE (TOSHIBA VN cũng
// phân phối), lấy link PDF TRỰC TIẾP từ feelcomfee.com/vn. Category "microwave" đã có
// nút lọc riêng trong trang tra cứu Manual từ 21/08/2026 (xem categories trong errors.ts).
export const microwaveManuals: ManualItem[] = [
  {
    id: "mw-cf1",
    category: "microwave",
    brand: "COMFEE",
    model: "CMW-S20KB",
    title: "Sách HDSD Lò Vi Sóng Comfee CMW-S20KB",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/san-pham/lo-vi-song/cmw-s20kb/S%C3%A1ch-HDSD-L%C3%B2-vi-s%C3%B3ng-Comfee.pdf",
  },
  // 22/08/2026: Bổ sung toàn bộ dòng Lò vi sóng TOSHIBA (4 nhóm sản phẩm chính thức
  // trên toshiba-lifestyle.com/vn: Cơ, Cơ có nướng, Điện tử, Điện tử có nướng), lấy
  // link PDF TRỰC TIẾP từ toshiba-lifestyle.com/vn. Một số file là bản scan ảnh
  // (không có lớp văn bản) nhưng vẫn xem/tải được bình thường qua khung PDF của app.
  {
    id: "mw-t1",
    category: "microwave",
    brand: "TOSHIBA",
    model: "MWP-MM20P(WH), MWP-MM20P(BK)",
    title: "Sách HDSD Lò Vi Sóng Cơ Toshiba MWP-MM20P(WH), MWP-MM20P(BK)",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/s%C3%A1ch-hdsd/SHD-MWP-MM20P.pdf",
  },
  {
    id: "mw-t2",
    category: "microwave",
    brand: "TOSHIBA",
    model: "MW2-AG24PC(BK)",
    title: "Sách HDSD Lò Vi Sóng Cơ Có Nướng Toshiba MW2-AG24PC(BK)",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/download/lo-vi-song/UM%20Huong%20dan%20su%20dung%20Lo%20vi%20song_MW2-AG24PC_update%20grill.pdf",
  },
  {
    id: "mw-t3",
    category: "microwave",
    brand: "TOSHIBA",
    model: "ER-SS23(W1)VN",
    title: "Sách HDSD Lò Vi Sóng Điện Tử Toshiba ER-SS23(W1)VN",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/s%C3%A1ch-hdsd/SHD-SS23.pdf",
  },
  {
    id: "mw-t4",
    category: "microwave",
    brand: "TOSHIBA",
    model: "MW3-EM26PE(BM)VN",
    title: "Sách HDSD Lò Vi Sóng Điện Tử Toshiba MW3-EM26PE(BM)VN",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/s%C3%A1ch-hdsd/SHD-MW3-EM26PE-BM-VN.pdf",
  },
  {
    id: "mw-t5",
    category: "microwave",
    brand: "TOSHIBA",
    model: "ER-SGS20(S1)VN, ER-SGS23(S1)VN, ER-SGS34(S1)VN",
    title: "Sách HDSD Lò Vi Sóng Điện Tử Có Nướng Toshiba dòng SGS20/23/34",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/lo-vi-song-dien-tu-co-nuong/lo-vi-song-toshiba-eer-sgs34-s1-vn/SHD%20SGS20,23,34.pdf",
  },
  {
    id: "mw-t6",
    category: "microwave",
    brand: "TOSHIBA",
    model: "MW3-AC27PE(BM)VN",
    title: "Sách HDSD Lò Vi Sóng Điện Tử Có Nướng Toshiba MW3-AC27PE(BM)VN",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/s%C3%A1ch-hdsd/SHD-MW3-AC27PE-BM-VN.pdf",
  },
  {
    id: "mw-t7",
    category: "microwave",
    brand: "TOSHIBA",
    model: "MW3-MM25PE(BK), MW3-MM25PE(WH)",
    title: "Sách HDSD Lò Vi Sóng Cơ Toshiba MW3-MM25PE(BK), MW3-MM25PE(WH)",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/s%C3%A1ch-hdsd/SHD-MW3-MM25PE.pdf",
  },
  {
    id: "mw-t8",
    category: "microwave",
    brand: "TOSHIBA",
    model: "MW3-EG26PE(BM)VN",
    title: "Sách HDSD Lò Vi Sóng Điện Tử Có Nướng Toshiba MW3-EG26PE(BM)VN",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/s%C3%A1ch-hdsd/SHD-MW3-EG26PE-BM-VN.pdf",
  },
  {
    id: "mw-t9",
    category: "microwave",
    brand: "TOSHIBA",
    model: "MM-EM25PE(BM)",
    title: "Sách HDSD Lò Vi Sóng Điện Tử Toshiba MM-EM25PE(BM)",
    pdfUrl:
      "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/s%C3%A1ch-hdsd/SHD-MM-EM25PE-BM-.pdf",
  },
];
