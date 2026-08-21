import type { ErrorItem } from "./errors";

export const dishWasherError: ErrorItem[] = [
  {
    id: "DW01",
    category: "dishWasher",
    code: "(DW01) Cảnh báo E1",
    title: "Máy rửa chén hiện cảnh báo E1",
    description:
      "Thời gian cấp nước vào lâu. Nguyên nhân có thể do áp lực nước cấp vào quá yếu, hoặc bị cúp nước, hoặc van khoá nguồn nước cấp bị khoá lại, hoặc ống cấp nước bị gấp khúc hoặc xoắn",
    steps: [
      {
        text: "Kiểm tra xem có bị cúp nước, hoặc áp lực nước cấp vào có quá yếu. Áp lực nước tối thiểu là: 0.04MPa, Tối đa là: 1MPa.",
        images: [
          "https://lh3.googleusercontent.com/d/17RWtS1AsR0Qfxtd3B_Te09xQX3AagB9v",
          "https://lh3.googleusercontent.com/d/1WLexKVEsKO8SD6aQLUmhzuRiTVOwt94N",
        ],
      },
      {
        text: "Kiểm tra van khoá nguồn nước cấp có bị khoá lại hay không ?",
        images: [
          "https://lh3.googleusercontent.com/d/1-b_lHmxY0cSLkn0ZyfdoPuPWIaHtTVCr",
        ],
      },
      {
        text: "Kiểm tra ống cấp nước có bị gấp khúc hoặc xoắn",
        images: [
          "https://lh3.googleusercontent.com/d/1w_ljL1Sr4wn2BO_W_80GDTipslvJi-Qo",
          "https://lh3.googleusercontent.com/d/1XP6ifwy0_hRHL3hj71Hi7UwUu4-fNCEe",
        ],
      },
      {
        text: "Kiểm tra lại ổ cắm điện",
        images: [
          "https://lh3.googleusercontent.com/d/16s4paTA6w5iurRt6EsByaVPUWkRwAcSE",
        ],
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1egUhySEkbnAwsHWBkmriTliPWDy6pEqk",
      "https://lh3.googleusercontent.com/d/1qG-yZUQ3XwasKqqOP-wqd5lJltD4x9As",
    ],
  },
  {
    id: "DW02",
    category: "dishWasher",
    code: "(DW02) Cảnh báo E3",
    title: "Nhiệt độ nước không đạt yêu cầu",
    description: "Cảnh báo liên quan đến lỗi kỹ thuật",
    steps: [
      {
        text: "Tổng đài viên thu thập thông tin. Báo ASP kiểm tra",
      },
    ],
  },
  {
    id: "DW03",
    category: "dishWasher",
    code: "(DW03) Cảnh báo E4",
    title: "Tràn nước hoặc vấn đề về khoang chứa",
    description: "Cảnh báo liên quan đến lỗi kỹ thuật",
    steps: [
      {
        text: "Tổng đài viên thu thập thông tin. Báo ASP kiểm tra",
      },
    ],
  },
  {
    id: "DW04",
    category: "dishWasher",
    code: "(DW04) Cảnh báo E8",
    title: "Lỗi van phân phối nước",
    description: "Cảnh báo liên quan đến lỗi kỹ thuật",
    steps: [
      {
        text: "Tổng đài viên thu thập thông tin. Báo ASP kiểm tra",
      },
    ],
  },
  {
    id: "DW05",
    category: "dishWasher",
    code: "(DW05) Cảnh báo EC",
    title: "Hệ thống điều khiển rửa bị lỗi",
    description: "Cảnh báo liên quan đến lỗi kỹ thuật",
    steps: [
      {
        text: "Tổng đài viên thu thập thông tin. Báo ASP kiểm tra",
      },
    ],
  },
  {
    id: "DW06",
    category: "dishWasher",
    code: "(DW06) Cảnh báo ED",
    title: "Giao tiếp giữa bo mạch chính vào bo mạch hiển thị bị lỗi",
    description: "Cảnh báo liên quan đến lỗi kỹ thuật",
    steps: [
      {
        text: "Tổng đài viên thu thập thông tin. Báo ASP kiểm tra",
      },
    ],
  },
  {
    id: "DW07",
    category: "dishWasher",
    code: "(DW07) Máy không hoạt động",
    title: "Máy rửa chén không hoạt động",
    description: "Máy rửa chén không hoạt động không sáng đèn.",
    steps: [
      {
        text: "Kiểm tra lại ổ cắm - dây nguồn",
      },
      {
        text: "Cửa đã đóng kín chưa, có đang kẹt vật gì hay không.",
      },
      {
        text: "Đã nhấn khởi động trước khi đóng chưa (dành cho sp TOSHIBA model 15F7 - 15F8).",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
  },
  {
    id: "DW08",
    category: "dishWasher",
    code: "(DW08) Không xả hết nước ra ngoài, còn nhiều nước trong khoang rửa",
    title: "Máy rửa chén không xả hết nước ra ngoài",
    description:
      "Máy rửa chén không xả hết nước ra ngoài, còn nhiều nước trong khoang rửa",
    steps: [
      {
        text: "Ống nước xả có bị gập không?",
      },
      {
        text: "Lưới lọc trong máy có bị tắc không?",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
  },
  {
    id: "DW09",
    category: "dishWasher",
    code: "(DW09) Bọt xà phòng còn trong khoang rửa",
    title: "Máy rửa chén có bọt xà phòng còn trong khoang rửa",
    description: "Máy rửa chén có bọt xà phòng còn trong khoang rửa",
    steps: [
      {
        text: "Đã dùng đúng chất tẩy rửa dành riêng cho máy rửa chén chưa?",
      },
      {
        text: " Kiểm tra lại đang thiếu chất trợ xã?",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
  },
  {
    id: "DW09",
    category: "dishWasher",
    code: "(DW09) Bọt xà phòng còn trong khoang rửa",
    title: "Máy rửa chén có bọt xà phòng còn trong khoang rửa",
    description: "Máy rửa chén có bọt xà phòng còn trong khoang rửa",
    steps: [
      {
        text: "Đã dùng đúng chất tẩy rửa dành riêng cho máy rửa chén chưa?",
      },
      {
        text: " Kiểm tra lại đang thiếu chất trợ xã?",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
  },
  {
    id: "DW10",
    category: "dishWasher",
    code: "(DW15) Máy rửa chén sấy không khô",
    title: "Máy rửa chén sau khi rửa xong chén đĩa không khô",
    description:
      "Sau khi rửa xong chu trình bạn mở cửa máy ra và phát hiện chén đĩa có cái khô cái không, hoặc chưa khô hẳn",
    steps: [
      {
        text: "Kiểm tra đèn muối và nước bóng có báo. Nếu thiếu cần bổ sung thêm cả 2",
      },
      {
        text: "Kiểm tra chương trình đang chọn là gì. Một số chương trình không tích hợp tính năng sấy",
      },
      { text: "Bạn nên sử dụng thêm tính năng bảo quản tích hợp trên máy" },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1xx7u47fe0DWdbkc_BJtsCEXvVW4DT-mg",
    ],
  },
  {
    id: "DW11",
    category: "dishWasher",
    code: "(DW12) Máy rửa chén rửa không sạch, dơ, rửa dơ",
    title: "Máy rửa chén sau khi rửa xong chén đĩa không sạch, dơ",
    description:
      "Sau khi rửa xong chu trình bạn mở cửa máy ra và phát hiện chén đĩa có cái sạch cái không, hoặc chưa sạch hẳn, dơ",
    steps: [
      {
        text: "Kiểm tra đèn muối và nước bóng có báo. Nếu thiếu cần bổ sung thêm cả 2",
      },
      {
        text: "Kiểm tra chương trình đang chọn là gì. Một số chương trình không tích hợp tính năng sấy",
      },
      { text: "Bạn nên sử dụng thêm tính năng bảo quản tích hợp trên máy" },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1kswgCeI58wIlLp_6CwNE0pMCwIzWfZxU",
      "https://lh3.googleusercontent.com/d/1yWN4JGOQ52vjPR8D1SNjsqVFs9PvQfva",
    ],
  },
  {
    id: "DW12",
    category: "dishWasher",
    code: "(DW10) Lớp màng trắng trong khoang máy",
    title: "Máy rửa chén - Lớp màng trắng trong khoang máy",
    description: "Lớp màng trắng trong khoang máy",
    steps: [
      { text: "khách sử dụng miếng bọt biển ướt với dung dịch/viên rửa chén và đeo găng tay cao su để làm sạch bên trong." },
      { text: "Không sử dụng chất tẩy rửa nào khác ngoài dung dịch/viên rửa chén vì có thể tạo bọt hoặc bong bóng" },
      { text: "Đèn báo muối có sáng đèn hay không? Nếu có bổ sung thêm muối + điều chỉnh phù hợp" },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "DW13",
    category: "dishWasher",
    code: "(DW11) Tiếng ồn từ máy rửa chén",
    title: "Máy rửa chén - Tiếng ồn từ máy rửa chén",
    description: "Tiếng ồn từ máy rửa chén",
    steps: [
      { text: "Kiểm tra lại cách sắp xếp chén đã hợp lý chưa? Có thể nguyên nhân phát sinh từ việc sắp xếp chén chưa phù hợp" },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "DW14",
    category: "dishWasher",
    code: "(DW13) Đốm trắng trên chén đĩa hoặc đồ thủy tinh",
    title: "Máy rửa chén - Đốm trắng trên chén đĩa hoặc đồ thủy tinh",
    description: "Đốm trắng trên chén đĩa hoặc đồ thủy tinh",
    steps: [
      { text: "Đèn báo thiếu muối có đang sáng hoặc đang chọn mức độ muối chưa phù hợp" },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "DW15",
    category: "dishWasher",
    code: "(DW14) Viên rửa chén vẫn còn trong ngăn chứa",
    title: "Máy rửa chén - Viên rửa chén vẫn còn trong ngăn chứa",
    description: "Viên rửa chén vẫn còn trong ngăn chứa",
    steps: [
      { text: "CC trao đổi với khách hàng xem cách sắp xếp chén/ nồi có gây cản trở khi mở nắp hộp đựng viên rửa không" },
      { text: "CC xin khách hàng 1 tấm hình chén đang sắp trong khoang máy như thế nào - đính kèm WO Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "DW16",
    category: "dishWasher",
    code: "(DW16) Thành máy còn đọng nước",
    title: "Máy rửa chén - Thành máy còn đọng nước",
    description: "Thành máy còn đọng nước",
    steps: [
      { text: "CC khuyến nghị khách hàng dùng chế độ bảo quản." },
    ],
  },
  {
    id: "DW17",
    category: "dishWasher",
    code: "(DW17) Đối với model 15F7 khi khách hàng gõ cửa nhưng cửa không mở?",
    title: "Máy rửa chén - Đối với model 15F7 khi khách hàng gõ cửa nhưng cửa không mở?",
    description: "Đối với model 15F7 khi khách hàng gõ cửa nhưng cửa không mở?",
    steps: [
      { text: "CC khuyến nghị thực hiện lại chậm theo sách HDSD" },
      { text: "Khoảng thời gian giữa hai lần gõ phải từ 0,1 đến 0,8 giây. Nếu gõ quá nhanh, cảm biến sẽ coi hai lần gõ là một. Nếu gõ quá chậm và khoảng thời gian giữa hai lần gõ quá dài (hơn 1 giây), cảm biến sẽ coi hai lần gõ là nhầm lẫn (như va chạm của trẻ em)." },
      { text: "Khi phát hiện nhiều lần gõ không hiệu quả, cần chờ hơn 2 giây trước khi thử lại." },
      { text: "Kỹ thuật gõ được khuyến nghị: Cong ngón tay tự nhiên, cách cửa từ 3 đến 5 cm. Sau khi gõ lần đầu, thả lỏng ngón tay ra và gõ lần thứ hai." },
    ],
  },
  {
    id: "DW18",
    category: "dishWasher",
    code: "(DW18) Khách hàng phản ánh sau khi rửa, tráng lại nước thì còn bọt",
    title: "Máy rửa chén - Khách hàng phản ánh sau khi rửa, tráng lại nước thì còn bọt",
    description: "Khách hàng phản ánh sau khi rửa, tráng lại nước thì còn bọt",
    steps: [
      { text: "TDV tư vấn khách:" },
      { text: "Nếu KH dùng gel rửa thì xem lại liều lượng cho phù hợp" },
      { text: "Hiện khách hàng đang dùng mức làm bóng bao nhiêu? Khuyến nghị giảm đi thì xem còn tình trạng này ko?" },
      { text: "Khách hàng dùng Chương trình rửa là gì? Khuyến nghị các chương trình rửa Chuyên Sâu, AI." },
      { text: "Khách hàng lấy chén rửa ra và đem đi rửa ở nước lạnh liền?( Giải thích khi đó chén còn nóng, đưa vô nước lạnh sẽ làm chất trợ trên chén trôi ra và có hiện tượng trên)" },
    ],
  },
  {
    id: "DW19",
    category: "dishWasher",
    code: "(DW19) Khách hàng phản ánh sau khi rửa viên rửa chén không tan.",
    title: "Máy rửa chén - Khách hàng phản ánh sau khi rửa viên rửa chén không tan.",
    description: "Khách hàng phản ánh sau khi rửa viên rửa chén không tan.",
    steps: [
      { text: "Tư vấn KH sử dụng viên rửa chén chất lượng và bỏ viên rửa chén đúng vị trí yêu cầu của nhà sản xuất." },
      { text: "Khai thác thông tin KH sử dụng chương trình rửa nào." },
    ],
  },
  {
    id: "DW20",
    category: "dishWasher",
    code: "(DW20) Khách không điều khiển được máy rửa chén thông qua app Tsmart life",
    title: "Máy rửa chén - Khách không điều khiển được máy rửa chén thông qua app Tsmart life",
    description: "Khách không điều khiển được máy rửa chén thông qua app Tsmart life",
    steps: [
      { text: "CC chia sẻ đến khách hàng: - Kiểm tra lại máy đã kết nối với app chưa? -Lưu ý khi bật điều khiển từ xa phải đóng cửa trong vòng 3 giây - nếu không tính năng sẽ tự động tắt" },
    ],
    videoUrls: [
      { url: "https://www.youtube.com/watch?v=aGudUGXfpOw&list=PLfUiFUmhOVfdxppXL-zbAyP8b4k9OK57h&index=3", type: "horizontal" },
    ],
  },
  {
    id: "DW21",
    category: "dishWasher",
    code: "(DW21) Khách hàng phản ánh máy không ghi nhớ chương trình rửa đã sử dụng trước đó",
    title: "Máy rửa chén - Khách hàng phản ánh máy không ghi nhớ chương trình rửa đã sử dụng trước đó",
    description: "Khách hàng phản ánh máy không ghi nhớ chương trình rửa đã sử dụng trước đó",
    steps: [
      { text: "CC chia sẻ đến khách hàng: - Đây là thiết kế mặc định của sản phẩm, máy không hỗ trợ ghi nhớ chương trình rửa trước đó. - Mỗi lần bật nguồn, máy sẽ tự động hiển thị chương trình Eco. KH vui lòng chọn lại chương trình mong muốn khi sử dụng." },
    ],
  },
];
