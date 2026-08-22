// 📖 Kiến thức bổ sung cho CHATBOT — ĐỢT 5 (22/08/2026).
// Tích hợp toàn bộ dòng Lò vi sóng TOSHIBA (4 nhóm sản phẩm chính thức trên
// toshiba-lifestyle.com/vn: Cơ, Cơ có nướng, Điện tử, Điện tử có nướng), song song với
// việc bổ sung 9 ManualItem tương ứng ở src/data/categories/microwave/microwaveManual.ts
// và các mã lỗi Toshiba mới (MW03-MW07) ở errorMicrowave.ts.
// Một số model có sách HDSD dạng scan ảnh (không đọc được văn bản) — với các model này,
// nội dung dưới đây chỉ là hướng dẫn sử dụng cơ bản theo loại lò (Cơ/Điện tử, có nướng
// hay không), KHÔNG phải trích nguyên văn từ sách HDSD gốc.
import type { KnowledgeItem } from "../chatbotKnowledge";

export const manualKnowledge5: KnowledgeItem[] = [
  {
    id: "mk5-mw-1",
    title: "Lò vi sóng cơ Toshiba MWP-MM20P(WH), MWP-MM20P(BK) — Hướng dẫn sử dụng",
    categoryName: "Toshiba — Lò vi sóng",
    keywords: [
      "MWP-MM20P",
      "MWP-MM20P(WH)",
      "MWP-MM20P(BK)",
      "lò vi sóng cơ Toshiba",
      "lò vi sóng 20 lít",
    ],
    answer:
      "### 🍱 Lò vi sóng cơ Toshiba MWP-MM20P(WH), MWP-MM20P(BK)\n---\n* **Model:** MWP-MM20P(WH), MWP-MM20P(BK) — dung tích 20L, loại cơ (núm vặn)\n* **Cách dùng:** đặt thực phẩm vào lò, đóng kín cửa, vặn núm chọn mức công suất và núm hẹn giờ theo món ăn — lò tự chạy đến khi hết giờ\n* **Lưu ý an toàn:** không bật lò khi không có thực phẩm bên trong, không dùng đồ kim loại/giấy bạc\n* **Tài liệu HDSD:** có file PDF chính hãng trên toshiba-lifestyle.com/vn (bản scan)",
    link: "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/s%C3%A1ch-hdsd/SHD-MWP-MM20P.pdf",
  },
  {
    id: "mk5-mw-2",
    title: "Lò vi sóng cơ có nướng Toshiba MW2-AG24PC(BK) — Hướng dẫn sử dụng",
    categoryName: "Toshiba — Lò vi sóng",
    keywords: [
      "MW2-AG24PC",
      "MW2-AG24PC(BK)",
      "lò vi sóng có nướng Toshiba",
      "lò vi sóng cơ có nướng",
    ],
    answer:
      "### 🍱 Lò vi sóng cơ có nướng Toshiba MW2-AG24PC(BK)\n---\n* **Model:** MW2-AG24PC(BK) — loại cơ (núm vặn), có thêm chức năng nướng (Grill)\n* **Cách dùng:** chọn chế độ Vi sóng / Nướng / Kết hợp bằng núm chuyển chế độ, sau đó vặn núm công suất và hẹn giờ phù hợp\n* **Lưu ý:** khi dùng chế độ Nướng, khay/giá nướng có thể rất nóng — dùng găng tay khi lấy ra\n* **Tài liệu HDSD:** có file PDF chính hãng trên toshiba-lifestyle.com/vn (bản scan)",
    link: "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/download/lo-vi-song/UM%20Huong%20dan%20su%20dung%20Lo%20vi%20song_MW2-AG24PC_update%20grill.pdf",
  },
  {
    id: "mk5-mw-3",
    title: "Lò vi sóng điện tử Toshiba ER-SS23(W1)VN — Hướng dẫn sử dụng",
    categoryName: "Toshiba — Lò vi sóng",
    keywords: ["ER-SS23", "ER-SS23(W1)VN", "lò vi sóng điện tử Toshiba", "lò vi sóng 23 lít"],
    answer:
      "### 🍱 Lò vi sóng điện tử Toshiba ER-SS23(W1)VN\n---\n* **Model:** ER-SS23(W1)VN — dung tích 23L, loại điện tử (bảng phím + màn hình)\n* **Cách dùng:** nhấn chọn chức năng trên bảng điều khiển (Vi sóng / Rã đông / các chương trình nấu dựng sẵn), nhập thời gian hoặc khối lượng thực phẩm rồi nhấn Start\n* **Rã đông:** chọn chức năng Defrost, nhập khối lượng thực phẩm (gram), lò tự tính thời gian rã đông phù hợp\n* **Tài liệu HDSD:** có file PDF chính hãng trên toshiba-lifestyle.com/vn (bản scan)",
    link: "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/s%C3%A1ch-hdsd/SHD-SS23.pdf",
  },
  {
    id: "mk5-mw-4",
    title: "Lò vi sóng điện tử Toshiba MW3-EM26PE(BM)VN — Hướng dẫn sử dụng",
    categoryName: "Toshiba — Lò vi sóng",
    keywords: [
      "MW3-EM26PE",
      "MW3-EM26PE(BM)VN",
      "lò vi sóng mặt gương Toshiba",
      "lò vi sóng điện tử 26 lít",
    ],
    answer:
      "### 🍱 Lò vi sóng điện tử Toshiba MW3-EM26PE(BM)VN\n---\n* **Model:** MW3-EM26PE(BM)VN — dung tích 26L, mặt gương, loại điện tử\n* **Cách dùng:** nhấn chọn chương trình/công suất trên bảng điều khiển cảm ứng hoặc phím bấm, nhập thời gian rồi nhấn Start\n* **Xử lý sự cố (trích sách HDSD):** lò không khởi động → kiểm tra dây nguồn, cầu chì/CB, ổ cắm, cửa lò đã đóng kín chưa; thực phẩm chín không đều/rã đông không đúng → xếp thực phẩm đều, đảo giữa chừng; xuất hiện hồ quang điện/tia lửa → kiểm tra không dùng đồ kim loại, vệ sinh khoang lò\n* **Tài liệu HDSD:** có file PDF chính hãng trên toshiba-lifestyle.com/vn (đọc được văn bản)",
    link: "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/s%C3%A1ch-hdsd/SHD-MW3-EM26PE-BM-VN.pdf",
  },
  {
    id: "mk5-mw-5",
    title: "Lò vi sóng điện tử có nướng Toshiba dòng SGS20/23/34 — Hướng dẫn sử dụng",
    categoryName: "Toshiba — Lò vi sóng",
    keywords: [
      "ER-SGS20",
      "ER-SGS23",
      "ER-SGS34",
      "ER-SGS23(S1)VN",
      "ER-SGS34(S1)VN",
      "lò vi sóng có nướng Toshiba",
    ],
    answer:
      "### 🍱 Lò vi sóng điện tử có nướng Toshiba dòng SGS20/23/34\n---\n* **Model:** ER-SGS20(S1)VN, ER-SGS23(S1)VN, ER-SGS34(S1)VN — loại điện tử, có chức năng Nướng (Grill) và Kết hợp (Combi)\n* **Cách dùng:** chọn chế độ Vi sóng / Nướng / Kết hợp trên bảng điều khiển, nhập thời gian/công suất rồi nhấn Start\n* **Lưu ý:** khi dùng chế độ Nướng/Kết hợp, không dùng đồ nhựa thường (dễ chảy do nhiệt độ cao từ thanh nướng)\n* **Tài liệu HDSD:** có file PDF chính hãng trên toshiba-lifestyle.com/vn (bản scan, áp dụng chung cho cả 3 dung tích 20/23/34L)",
    link: "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/lo-vi-song-dien-tu-co-nuong/lo-vi-song-toshiba-eer-sgs34-s1-vn/SHD%20SGS20,23,34.pdf",
  },
  {
    id: "mk5-mw-6",
    title: "Lò vi sóng điện tử có nướng Toshiba MW3-AC27PE(BM)VN — Hướng dẫn sử dụng",
    categoryName: "Toshiba — Lò vi sóng",
    keywords: [
      "MW3-AC27PE",
      "MW3-AC27PE(BM)VN",
      "lò vi sóng có nướng Toshiba 27 lít",
    ],
    answer:
      "### 🍱 Lò vi sóng điện tử có nướng Toshiba MW3-AC27PE(BM)VN\n---\n* **Model:** MW3-AC27PE(BM)VN — dung tích 27L, loại điện tử, có chức năng Nướng\n* **Xử lý sự cố (trích sách HDSD, mục XỬ LÝ SỰ CỐ):** lò không khởi động → kiểm tra phích cắm đã cắm chặt chưa, cầu chì/CB có bị ngắt không, thử ổ cắm khác; cửa lò chưa đóng kín → đóng lại; lò không làm nóng được → kiểm tra cửa lò đã đóng kín chưa\n* **Tài liệu HDSD:** có file PDF chính hãng trên toshiba-lifestyle.com/vn (đọc được văn bản)",
    link: "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/s%C3%A1ch-hdsd/SHD-MW3-AC27PE-BM-VN.pdf",
  },
  {
    id: "mk5-mw-7",
    title: "Lò vi sóng cơ Toshiba MW3-MM25PE(BK), MW3-MM25PE(WH) — Hướng dẫn sử dụng",
    categoryName: "Toshiba — Lò vi sóng",
    keywords: [
      "MW3-MM25PE",
      "MW3-MM25PE(BK)",
      "MW3-MM25PE(WH)",
      "lò vi sóng cơ Toshiba 25 lít",
    ],
    answer:
      "### 🍱 Lò vi sóng cơ Toshiba MW3-MM25PE(BK), MW3-MM25PE(WH)\n---\n* **Model:** MW3-MM25PE(BK), MW3-MM25PE(WH) — dung tích 25L, loại cơ (núm vặn)\n* **Cách dùng:** đặt thực phẩm vào lò, đóng kín cửa, vặn núm chọn công suất và núm hẹn giờ phù hợp với món ăn\n* **Tài liệu HDSD:** có file PDF chính hãng trên toshiba-lifestyle.com/vn (bản scan)",
    link: "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/s%C3%A1ch-hdsd/SHD-MW3-MM25PE.pdf",
  },
  {
    id: "mk5-mw-8",
    title: "Lò vi sóng điện tử có nướng Toshiba MW3-EG26PE(BM)VN — Hướng dẫn sử dụng",
    categoryName: "Toshiba — Lò vi sóng",
    keywords: [
      "MW3-EG26PE",
      "MW3-EG26PE(BM)VN",
      "lò vi sóng có nướng Toshiba 26 lít",
    ],
    answer:
      "### 🍱 Lò vi sóng điện tử có nướng Toshiba MW3-EG26PE(BM)VN\n---\n* **Model:** MW3-EG26PE(BM)VN — dung tích 26L, loại điện tử, có chức năng Nướng\n* **Xử lý sự cố (trích sách HDSD, mục XỬ LÝ SỰ CỐ):** lò không khởi động → kiểm tra dây nguồn, cầu chì/cầu dao, ổ cắm, cửa lò đã đóng đúng cách chưa; đèn lò giảm sáng khi nấu công suất thấp → hiện tượng bình thường; TUYỆT ĐỐI không để lò tự chạy khi không có thực phẩm bên trong\n* **Tài liệu HDSD:** có file PDF chính hãng trên toshiba-lifestyle.com/vn (đọc được văn bản)",
    link: "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/s%C3%A1ch-hdsd/SHD-MW3-EG26PE-BM-VN.pdf",
  },
  {
    id: "mk5-mw-9",
    title: "Lò vi sóng điện tử Toshiba MM-EM25PE(BM) — Hướng dẫn sử dụng",
    categoryName: "Toshiba — Lò vi sóng",
    keywords: ["MM-EM25PE", "MM-EM25PE(BM)", "lò vi sóng điện tử Toshiba 25 lít"],
    answer:
      "### 🍱 Lò vi sóng điện tử Toshiba MM-EM25PE(BM)\n---\n* **Model:** MM-EM25PE(BM) — dung tích 25L, loại điện tử\n* **Khắc phục sự cố (trích sách HDSD, mục KHẮC PHỤC SỰ CỐ):** nhiễu sóng radio/TV, đèn cửa sáng khi nấu công suất thấp, hơi nước thoát ra khỏi khay khi nấu → đều là hiện tượng bình thường; lò không khởi động/không làm nóng được → kiểm tra nguồn điện, cửa lò; khay kính xoay gây ồn → kiểm tra vòng đỡ khay đặt đúng vị trí chưa\n* **Tài liệu HDSD:** có file PDF chính hãng trên toshiba-lifestyle.com/vn (bản scan nhưng đọc được)",
    link: "https://www.toshiba-lifestyle.com/content/dam/toshiba-aem/vn/lo-vi-song/s%C3%A1ch-hdsd/SHD-MM-EM25PE-BM-.pdf",
  },
];
