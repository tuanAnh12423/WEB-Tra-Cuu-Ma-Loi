export interface KnowledgeItem {
  id: string;
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
  // ➕ Bạn chỉ cần copy thêm các khối tương tự ở đây để "huấn luyện" thêm cho Bot
];
