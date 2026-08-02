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
    id: "DW05",
    category: "dishWasher",
    code: "(DW12) Máy rửa chén rửa không sạch",
    title: "Máy rửa chén sau khi rửa xong chén đĩa không sạch",
    description:
      "Sau khi rửa xong chu trình bạn mở cửa máy ra và phát hiện chén đĩa có cái sạch cái không, hoặc chưa sạch hẳn",
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
];
