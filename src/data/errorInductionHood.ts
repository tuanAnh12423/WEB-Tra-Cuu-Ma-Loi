import type { ErrorItem } from "./errors";

export const inductionHoodError: ErrorItem[] = [
  {
    id: "IH01",
    category: "inductionHood",
    code: "(IH05) E1 Lỗi cảm biến nhiệt độ tấm gia nhiệt - hở mạch",
    title: "Bếp từ / Hút mùi - E1 Lỗi cảm biến nhiệt độ tấm gia nhiệt - hở mạch",
    description: "E1 Lỗi cảm biến nhiệt độ tấm gia nhiệt - hở mạch",
    steps: [
      { text: "Kiểm tra kết nối hoặc thay thế cảm biến nhiệt độ tấm gia nhiệt" },
    ],
  },
  {
    id: "IH02",
    category: "inductionHood",
    code: "(IH06) E2 Lỗi cảm biến nhiệt độ tấm gia nhiệt - ngắn mạch",
    title: "Bếp từ / Hút mùi - E2 Lỗi cảm biến nhiệt độ tấm gia nhiệt - ngắn mạch",
    description: "E2 Lỗi cảm biến nhiệt độ tấm gia nhiệt - ngắn mạch",
    steps: [
      { text: "Kiểm tra kết nối hoặc thay thế cảm biến nhiệt độ tấm gia nhiệt" },
    ],
  },
  {
    id: "IH03",
    category: "inductionHood",
    code: "(IH07) E7 Lỗi cảm biến nhiệt độ tấm gia nhiệt",
    title: "Bếp từ / Hút mùi - E7 Lỗi cảm biến nhiệt độ tấm gia nhiệt",
    description: "E7 Lỗi cảm biến nhiệt độ tấm gia nhiệt",
    steps: [
      { text: "Kiểm tra kết nối hoặc thay thế cảm biến nhiệt độ tấm gia nhiệt" },
    ],
  },
  {
    id: "IH04",
    category: "inductionHood",
    code: "(IH08) C1",
    title: "Bếp từ / Hút mùi - C1",
    description: "C1",
    steps: [
      { text: "Đợi nhiệt độ của tấm gia nhiệt trở lại bình thường" },
      { text: "Nhấn nút BẬT - TẮT để khởi động lại thiết bị" },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "IH05",
    category: "inductionHood",
    code: "(IH09) E3 Cảm biến nhiệt độ cũa IGBT (mạch bảo vệ quá nhiệt) bị hỏng - ngăn mạch",
    title: "Bếp từ / Hút mùi - E3 Cảm biến nhiệt độ cũa IGBT (mạch bảo vệ quá nhiệt) bị hỏng - ngăn mạch",
    description: "E3 Cảm biến nhiệt độ cũa IGBT (mạch bảo vệ quá nhiệt) bị hỏng - ngăn mạch",
    steps: [
      { text: "Thay board mạch" },
    ],
  },
  {
    id: "IH06",
    category: "inductionHood",
    code: "(IH10) E4 Cảm biến nhiệt độ cũa IGBT (mạch bảo vệ quá nhiệt) bị hỏng - hở mạch",
    title: "Bếp từ / Hút mùi - E4 Cảm biến nhiệt độ cũa IGBT (mạch bảo vệ quá nhiệt) bị hỏng - hở mạch",
    description: "E4 Cảm biến nhiệt độ cũa IGBT (mạch bảo vệ quá nhiệt) bị hỏng - hở mạch",
    steps: [
      { text: "Thay board mạch" },
    ],
  },
  {
    id: "IH07",
    category: "inductionHood",
    code: "(IH11) C2 Cảm biến nhiệt độ của IGBT (mạch bảo vệ quá nhiệt)",
    title: "Bếp từ / Hút mùi - C2 Cảm biến nhiệt độ của IGBT (mạch bảo vệ quá nhiệt)",
    description: "C2 Cảm biến nhiệt độ của IGBT (mạch bảo vệ quá nhiệt)",
    steps: [
      { text: "Đợi nhiệt độ của tấm gia nhiệt trở lại bình thường" },
      { text: "Nhấn nút BẬT - TẮT để khởi động lại thiết bị" },
      { text: "Kiểm tra xem quạt có chạy êm không? Nếu không hãy thay quạt" },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "IH08",
    category: "inductionHood",
    code: "(IH12) EL Điện áp nguồn thấp hơn điện áp định mức",
    title: "Bếp từ / Hút mùi - EL Điện áp nguồn thấp hơn điện áp định mức",
    description: "EL Điện áp nguồn thấp hơn điện áp định mức",
    steps: [
      { text: "Tư vấn Khách hàng kiểm tra lại nguồn điện" },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "IH09",
    category: "inductionHood",
    code: "(IH13) EH Điện áp cao thấp hơn điện áp định mức",
    title: "Bếp từ / Hút mùi - EH Điện áp cao thấp hơn điện áp định mức",
    description: "EH Điện áp cao thấp hơn điện áp định mức",
    steps: [
      { text: "Tư vấn Khách hàng kiểm tra lại nguồn điện" },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "IH10",
    category: "inductionHood",
    code: "(IH14) EU Lỗi giao tiếp",
    title: "Bếp từ / Hút mùi - EU Lỗi giao tiếp",
    description: "EU Lỗi giao tiếp",
    steps: [
      { text: "TDV báo Trạm kiểm tra lại kết nối board hiển thị - board chính" },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "IH11",
    category: "inductionHood",
    code: "(IH15) EF Có nước trên bề mặt bếp",
    title: "Bếp từ / Hút mùi - EF Có nước trên bề mặt bếp",
    description: "EF Có nước trên bề mặt bếp",
    steps: [
      { text: "TDV tư vấn khách hàng kiểm tra xem khu vực nấu có nước hay không?" },
      { text: "Hãy vệ sinh" },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "IH12",
    category: "inductionHood",
    code: "(IH16) F6 Lỗi quạt",
    title: "Bếp từ / Hút mùi - F6 Lỗi quạt",
    description: "F6 Lỗi quạt",
    steps: [
      { text: "TDV báo Trạm kiểm tra lại quạt." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "IH13",
    category: "inductionHood",
    code: "(IH17) Không bật được bếp điện từ.",
    title: "Bếp từ / Hút mùi - Không bật được bếp điện từ.",
    description: "Không bật được bếp điện từ.",
    steps: [
      { text: "Hãy chắc chắn rằng bếp điện từ được kết nối với nguồn điện và nó được bật." },
      { text: "Kiểm tra xem trong nhà hoặc khu vực của bạn có mất điện không." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "IH14",
    category: "inductionHood",
    code: "(IH18) Các nút điều khiển cảm ứng rất khó để thao tác.",
    title: "Bếp từ / Hút mùi - Các nút điều khiển cảm ứng rất khó để thao tác.",
    description: "Các nút điều khiển cảm ứng rất khó để thao tác.",
    steps: [
      { text: "Đảm bảo vùng điều khiển cảm ứng khô và sử dụng phần đầu tròn của ngón tay khi chạm vào nút điều khiển." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "IH15",
    category: "inductionHood",
    code: "(IH19) Mặt kính bị trầy xước.",
    title: "Bếp từ / Hút mùi - Mặt kính bị trầy xước.",
    description: "Mặt kính bị trầy xước.",
    steps: [
      { text: "Sử dụng dụng cụ nấu ăn với đế phẳng và mịn." },
      { text: "Xem “Dụng cụ nấu bếp phù hợp”." },
      { text: "Xem “Vệ sinh và bảo dưỡng”." },
    ],
  },
  {
    id: "IH16",
    category: "inductionHood",
    code: "(IH20) Một số dụng cụ nấu tạo ra tiếng lốp cốp hoặc leng keng trong khi nấu.",
    title: "Bếp từ / Hút mùi - Một số dụng cụ nấu tạo ra tiếng lốp cốp hoặc leng keng trong khi nấu.",
    description: "Một số dụng cụ nấu tạo ra tiếng lốp cốp hoặc leng keng trong khi nấu.",
    steps: [
      { text: "Điều này là bình thường đối với dụng cụ nấu ăn và không phải là lỗi." },
    ],
  },
  {
    id: "IH17",
    category: "inductionHood",
    code: "(IH21) Bếp điện từ tạo ra tiếng ồn nhỏ khi sử dụng ở chế độ nhiệt cao.",
    title: "Bếp từ / Hút mùi - Bếp điện từ tạo ra tiếng ồn nhỏ khi sử dụng ở chế độ nhiệt cao.",
    description: "Bếp điện từ tạo ra tiếng ồn nhỏ khi sử dụng ở chế độ nhiệt cao.",
    steps: [
      { text: "Điều này là bình thường, nhưng tiếng ồn sẽ giảm hoặc biến mất hoàn toàn khi bạn giảm mức công suất nấu." },
    ],
  },
  {
    id: "IH18",
    category: "inductionHood",
    code: "(IH22) Tiếng ồn của quạt tản nhiệt của bếp nấu.",
    title: "Bếp từ / Hút mùi - Tiếng ồn của quạt tản nhiệt của bếp nấu.",
    description: "Tiếng ồn của quạt tản nhiệt của bếp nấu.",
    steps: [
      { text: "Điều này là bình thường và không cần hành động. Không ngắt cầu dao điện trên tường cho bếp điện từ trong khi quạt đang chạy." },
    ],
  },
  {
    id: "IH19",
    category: "inductionHood",
    code: "(IH23) Dụng cụ nấu không nóng và xuất hiện ký tự trên màn hình hiển thị.",
    title: "Bếp từ / Hút mùi - Dụng cụ nấu không nóng và xuất hiện ký tự trên màn hình hiển thị.",
    description: "Dụng cụ nấu không nóng và xuất hiện ký tự trên màn hình hiển thị.",
    steps: [
      { text: "Sử dụng dụng cụ nấu phù hợp cho bếp điện từ. Xem “Dụng cụ nấu bếp phù hợp”. Căn tâm của dụng cụ nấu và đảm bảo đế của nó khớp với kích thước của vùng nấu." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "IH20",
    category: "inductionHood",
    code: "(IH24) Các nút điều khiển cảm ứng không phản hồi",
    title: "Bếp từ / Hút mùi - Các nút điều khiển cảm ứng không phản hồi",
    description: "Các nút điều khiển cảm ứng không phản hồi",
    steps: [
      { text: "Các nút điều khiển bị khóa." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
];
