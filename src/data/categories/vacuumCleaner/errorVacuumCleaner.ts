import type { ErrorItem } from "../../errors";

// 21/08/2026: Mã lỗi/xử lý sự cố cho Máy hút bụi COMFEE, trích từ mục "SỰ CỐ & CÁCH
// KHẮC PHỤC" / "KHẮC PHỤC SỰ CỐ" trong sách HDSD chính hãng của 3 model đang có trong
// app: CVC-SBLA1(B) (cầm tay), CVC-CBLA1(B) (đứng không dây), CXC05APGY (lau nhà) —
// nguồn feelcomfee.com/vn.
export const vacuumCleanerError: ErrorItem[] = [
  {
    id: "VC01",
    category: "vacuumCleaner",
    code: "(VC01) Máy hút bụi ngừng hoạt động đột ngột",
    title: "Máy hút bụi Comfee - Máy dừng hoạt động đột ngột",
    description:
      "Máy đang hút thì tự dừng (Model: CVC-SBLA1(B), CVC-CBLA1(B))",
    steps: [
      { text: "Kiểm tra phích cắm/pin — nếu dùng sạc, kiểm tra phích cắm chưa bị rút ra." },
      { text: "Kiểm tra máy có đang bị bảo vệ quá nhiệt không (dùng liên tục lâu, nhiệt độ cao) → Để máy nguội khoảng 1 giờ trước khi dùng lại." },
      { text: "Kiểm tra đầu ống hút hoặc lỗ thông khí có bị tắc nghẽn không → Vệ sinh thông thoáng." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "VC02",
    category: "vacuumCleaner",
    code: "(VC02) Lực hút bị giảm",
    title: "Máy hút bụi Comfee - Lực hút giảm rõ rệt",
    description: "Model: CVC-SBLA1(B), CVC-CBLA1(B)",
    steps: [
      { text: "Rút phích cắm/tắt máy, tháo hộp chứa bụi và đổ bỏ bụi." },
      { text: "Kiểm tra các bộ lọc (kể cả lọc HEPA nếu có) — nếu bám bụi nhiều → Vệ sinh bộ lọc, để khô hoàn toàn trước khi lắp lại." },
      { text: "Nếu đã vệ sinh mà lực hút vẫn yếu → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "VC03",
    category: "vacuumCleaner",
    code: "(VC03) Tiếng ồn to hơn bình thường",
    title: "Máy hút bụi Comfee - Tiếng ồn to hơn bình thường",
    description: "Model: CVC-SBLA1(B), CVC-CBLA1(B)",
    steps: [
      { text: "Kiểm tra đầu ống hút có bị tắc nghẽn (rác/tóc mắc kẹt) không → Đổ bỏ rác/bụi." },
      { text: "Kiểm tra bộ lọc có bị tắc, bám bụi nhiều không → Vệ sinh bộ lọc." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "VC04",
    category: "vacuumCleaner",
    code: "(VC04) Có mùi hôi khi hoạt động",
    title: "Máy hút bụi Comfee - Có mùi hôi khi hoạt động",
    description: "Model: CVC-SBLA1(B), CVC-CBLA1(B)",
    steps: [
      { text: "Kiểm tra lỗ thông khí có bị tắc nghẽn không → Xử lý tắc nghẽn." },
      { text: "Kiểm tra rác/bụi trong hộp chứa có bị ẩm mốc lâu ngày không → Đổ bỏ, vệ sinh sạch bộ lọc và hộp chứa bụi." },
      { text: "Để các bộ phận khô hoàn toàn rồi mới sử dụng lại (khoảng 1 giờ)." },
    ],
  },
  {
    id: "VC05",
    category: "vacuumCleaner",
    code: "(VC05) Dây nguồn không thể cuốn lại (chỉ model đứng CVC-CBLA1)",
    title: "Máy hút bụi đứng Comfee CVC-CBLA1(B) - Dây nguồn không cuốn lại được",
    description: "Model: CVC-CBLA1(B)",
    steps: [
      { text: "Kéo dây nguồn ra hết rồi thử cuốn lại." },
      { text: "Nếu dây bị xoắn, kéo thẳng dây trước khi cuốn." },
      { text: "Thử thao tác cuốn/kéo lặp lại vài lần để dây tự thẳng lại." },
      { text: "Nếu vẫn không cuốn được → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "VC06",
    category: "vacuumCleaner",
    code: "(VC06) Máy hút bụi lau nhà CXC05APGY không hoạt động",
    title: "Máy hút bụi lau nhà Comfee CXC05APGY - Máy không hoạt động",
    description: "Model: CXC05APGY",
    steps: [
      { text: "Kiểm tra chổi xoay có bị kẹt bởi tóc hoặc vật lạ không → Tháo chổi xoay để vệ sinh và lắp lại." },
      { text: "Kiểm tra bình đựng nước bẩn đã được lắp đúng vị trí chưa → Tháo ra, lắp lại cho khớp." },
      { text: "Kiểm tra pin còn đủ không → Sạc pin đầy." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "VC07",
    category: "vacuumCleaner",
    code: "(VC07) CXC05APGY công suất hút yếu / tiếng ồn khi quạt chạy",
    title: "Máy hút bụi lau nhà Comfee CXC05APGY - Công suất hút yếu",
    description: "Model: CXC05APGY",
    steps: [
      { text: "Kiểm tra đầu hút sàn hoặc đường ống có vật lạ mắc kẹt không → Vệ sinh sạch." },
      { text: "Kiểm tra bình đựng nước bẩn đã đầy chưa → Vệ sinh, đổ nước bẩn." },
      { text: "Kiểm tra bộ lọc có bị bẩn không → Vệ sinh bộ lọc." },
      { text: "Nếu chổi xoay bị kẹt tóc gây ồn khi quạt chạy → Vệ sinh chổi xoay." },
    ],
  },
  {
    id: "VC08",
    category: "vacuumCleaner",
    code: "(VC08) CXC05APGY rò rỉ nước / không ra nước ở chổi xoay",
    title: "Máy hút bụi lau nhà Comfee CXC05APGY - Rò rỉ nước hoặc không ra nước",
    description: "Model: CXC05APGY",
    steps: [
      { text: "Không có nước ở chổi xoay: kiểm tra bình đựng nước sạch còn đủ nước không → Thêm nước." },
      { text: "Không có nước ở chổi xoay: kiểm tra bình đựng nước sạch đã lắp đúng vị trí chưa → Lắp lại." },
      { text: "Rò rỉ nước ở cửa thoát khí: bộ lọc chưa được làm khô → Vệ sinh bộ lọc, để khô hoàn toàn trước khi lắp lại." },
      { text: "Rò rỉ nước dưới đế máy: kiểm tra bình đựng nước bẩn và bộ lọc đã được lắp đầy đủ vào máy chưa → Lắp lại cho đúng." },
    ],
  },
];
