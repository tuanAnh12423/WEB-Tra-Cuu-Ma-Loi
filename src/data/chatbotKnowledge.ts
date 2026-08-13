export interface KnowledgeItem {
  id: string;
  title?: string;
  categoryName?: string;
  keywords: string[]; // Các từ khóa/câu hỏi người dùng có thể gõ
  answer: string; // Câu trả lời cố định
  link?: string; // Link đính kèm nếu có (ví dụ link web/PDF)
}

export const chatbotKnowledge: KnowledgeItem[] = [
  {
    id: "k1",
    keywords: ["bao hanh", "tong dai", "so dien thoại", "hotline", "lien he"],
    answer:
      "📞 **Số tổng đài hỗ trợ bảo hành:** 1800.XXXX (Miễn phí).\n⏰ **Thời gian làm việc:** 8h00 - 17h30 (Từ Thứ 2 đến Thứ 7).",
  },
  {
    id: "k2",
    title: "Chức năng khí nóng máy rửa chén",
    keywords: [
      "khi nóng",
      "khí nóng",
      "khí nong",
      "hot air",
      "khi nong",
      "dw-15f7",
      "dw-15f8",
    ],
    answer:
      "### 📌 [CHƯƠNG TRÌNH KHÍ NÓNG (HOT AIR) CỦA MÁY RỬA CHÉN]\n---\nLàm khô chén đĩa của bạn với 3 tùy chọn. Đáp ứng các nhu cầu khác nhau, các chế độ này có thể được sử dụng sau khi chén đĩa đã được rửa sạch.\n\n* **Làm mới & Sấy khô 60 phút**\n* **Làm ấm & Sấy khô 120 phút**\n* **Rửa tráng & Sấy khô 100 phút**",
  },
  {
    id: "k3",
    title: "Chức năng bảo quản máy rửa chén",
    keywords: [
      "bảo quản",
      "bao quan",
      "storage",
      "dw-15f7",
      "dw-15f8",
      "dw-15f9",
    ],
    answer:
      "### CHỨC NĂNG BẢO QUẢN MÁY RỬA CHÉN\nDưới tác động của tuabin quạt, chức năng bảo quản có thể mang lại hiệu quả sấy tốt hơn và giữ không khí trong máy rửa chén luôn tươi mới.\n\n* **Thời gian hoạt động:** Tối đa 168 giờ sau khi hoàn thành chương trình rửa.\n* **Lưu ý:** Không thể sử dụng cùng lúc với chức năng *Auto Open* (Mở cửa tự động).\n* **Chế độ hỗ trợ:** Tự động AI, Chuyên sâu, Tiết kiệm, 90 phút, Vệ sinh, Đồ thủy tinh, Khử trùng, Yên tĩnh...",
  },
  {
    id: "k4",
    title: "Chức năng tăng tốc máy rửa chén",
    keywords: [
      "tăng tốc",
      "tang toc",
      "tăng tôc",
      "tang tôc",
      "tăng toc",
      "dw-15f7",
      "dw-15f8",
      "dw-15f9",
    ],
    answer:
      "### 📌 TÍNH NĂNG TĂNG TỐC TRÊN MÁY RỬA CHÉN\n---\nGiảm thời gian chương trình. \n\n* **Chỉ sử dụng với các chế độ:** Chuyên sâu, Tiết kiệm, 90 phút, Đồ thủy tinh, Khử trùng, Yên tĩnh",
  },
  {
    id: "mã_định_danh_duy_nhất",
    keywords: ["từ khóa 1", "từ khóa 2", "câu hỏi mẫu"],
    answer:
      "### 📌 [TÊN NỘI DUNG / TIÊU ĐỀ IN HOA]\n---\n[Đoạn mô tả ngắn gọn nội dung tổng quan...]\n\n* **[Thông số / Ý 1]:** Nội dung chi tiết ý 1.\n* **[Thông số / Ý 2]:** Nội dung chi tiết ý 2.\n* **Lưu ý:** [Các ghi chú quan trọng nếu có].",
  },

  // ➕ Bạn chỉ cần copy thêm các khối tương tự ở đây để "huấn luyện" thêm cho Bot
];
