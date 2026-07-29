import type { ErrorItem } from "./errors";

export const fridgeErrors: ErrorItem[] = [
  {
    id: "F01",
    category: "fridge",
    code: "(R001) Cả tủ không lạnh",
    title: "Tủ lạnh không làm lạnh",
    description: "Mở tủ ra không thấy có hơi lạnh",
    steps: [
      {
        text: "Kiểm tra tủ có nguồn không? Vui lòng kiểm tra đèn led có sáng và máy nén có hoạt động không, xem lại ổ cắm điện",
      },
      { text: "KH cách cài đặt theo từng model đã đúng cách chưa?" },
      { text: "Nếu Led sáng + 2 bên hông tủ có nóng không +  cài đặt đúng" },
      { text: "Báo ASP kiểm tra" },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/17RWtS1AsR0Qfxtd3B_Te09xQX3AagB9v",
    ],
  },
  {
    id: "F02",
    category: "fridge",
    code: "(R002) Mùi bất thường",
    title: "Tủ lạnh có mùi bất thường",
    description:
      "Tủ lạnh bạn sử dụng có mùi hôi, mùi lạ, mùi khó chịu. Khẳng định: Bản thân tủ không tự tạo ra mùi, chỉ có thể xuất phát từ thực phẩm nào đó. Đề nghị vệ sinh và đặt vào tủ café, trà, hoặc vỏ chanh cắt nhỏ.",
    steps: [
      {
        text: "Mùi đang phản ánh chi tiết là mùi gì?",
      },
      {
        text: "Mùi lạ xuất hiện ở ngăn nào? từ khi nào?  vệ sinh tủ định kỳ chưa?",
      },
      {
        text: "Có trữ thực phẩm nặng mùi trong tủ không (mít, sầu riêng, cá khô) → Dùng màng bọc thực phẩm hoặc bỏ hộp kín)",
      },
      {
        text: "Tư vấn khách hàng vệ sinh tủ + dùng bột café chưa pha/ trà để khử mùi vào chén và bỏ trong tủ để khử mùi",
      },
      {
        text: " Nếu mùi vẫn còn, báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F03",
    category: "fridge",
    code: "(R003) Không thể đóng được cửa",
    title: "Tủ lạnh không thể đóng được cửa",
    description: "Tủ lạnh bạn sử dụng không thể đóng được cửa.  ",
    steps: [
      {
        text: "Đã lắp đúng khay kệ cửa chưa. Có thể khay kệ làm cấn cửa không thể đóng được?",
      },
      {
        text: "Các hộp thực phẩm có đặt sau viền khay kính không?",
      },
      {
        text: " Nếu sau khi sắp xếp cửa vẫn không đóng được, báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F04",
    category: "fridge",
    code: "(R004) Tủ lạnh không hoạt động",
    title: "Tủ lạnh không hoạt động",
    description:
      "Tủ lạnh bạn sử dụng không hoạt động, không làm lạnh hoặc không sáng đèn.  ",
    steps: [
      {
        text: "Thuyết phục khách hàng kiểm tra phích cắm tủ có bị hư hỏng không?",
      },
      {
        text: "Ổ cắm điện có nguồn không?. Cắm thử ổ cắm khác để kiểm tra hoặc cắm thiết bị khác vào ổ cắm để kiểm tra.",
      },
      {
        text: "Nếu 2 yếu tố trên tốt, báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F05",
    category: "fridge",
    code: "(R005) Sương, hơi nước đọng bên ngoài tủ",
    title:
      "Có sương, hoặc hơi nước đọng ở cửa thân tủ hoặc bên ngoài tủ lạnh của bạn.",
    description:
      "Tủ lạnh của bạn có sương hoặc hơi nước đọng ở cửa thân tủ hoặc bên ngoài tủ lạnh. Đây là hiện tượng bình thường khi môi trường xung quanh có độ ẩm cao, hoặc tủ lạnh được đặt ở nơi gần cửa sổ trong thời tiết ẩm.",
    steps: [
      {
        text: "Khi độ ẩm trong không khí tăng lên như trong những ngày mưa, ban đêm hoặc sáng sớm sương có thể ngưng tụ trên bề mặt bên ngoài của tủ lạnh. Hãy sạch lau sương bằng một mảnh vải khô",
      },
      {
        text: "Khi nhiệt độ được đặt ở mức lạnh nhất, sương có thể ngưng tụ trên bề mặt bên ngoài của tủ lạnh. Hãy thiết lập chế độ Trung Bình. Ngoài ra, hãy lau sạch sương bằng một mảnh vải khô.",
      },
      {
        text: "Tư vấn KH mua thiết bị theo dõi độ ẩm đặt ở khu vực xung quanh tủ. (Thường độ ẩm cao >70%).",
      },
      { text: " Nếu sương đọng ngày này qua ngày khác, báo ASP kiểm tra" },
    ],
    images: [],
  },
  {
    id: "F06",
    category: "fridge",
    code: "(R006) Sương, hơi nước đọng bên trong tủ",
    title:
      "Có sương, hoặc hơi nước đọng ở bên trong tủ lạnh (Chủ yếu là ngăn trữ)",
    description:
      "Tủ lạnh của bạn có sương hoặc hơi nước đọng ở bên trong ngăn mát, trên đồ ăn, khay kính hoặc vách trong của tủ lạnh. Đây là hiện tượng bình thường khi môi trường xung quanh có độ ẩm cao, Tần suất mở cửa thường xuyên sẽ làm ẩm lọt vào bên trong.",
    steps: [
      {
        text: "Ktra cửa tủ lạnh có bị hở không? quan sát bề mặt ron tủ có bị đọng sương ko? Hãy kiểm tra không để túi thực phẩm hoặc túi nhựa kẹp giữa cửa và khung cửa khi đóng tủ",
      },
      {
        text: "Khi mở cửa thường xuyên hoặc nếu mở cửa khi độ ẩm xung quanh tủ lạnh là rất cao, độ ẩm trong không khí có thể trở thành sương đọng trên thành bên trong hoặc các bộ phận của ngăn mát hoặc xung quanh (ống thổi khí mát - cửa thổi gió). Đây không phải là vấn đề. Hãy cố gắng không mở cửa quá nhiều lần hoặc để cửa mở quá lâu.",
      },
      {
        text: "Ngoài ra, hãy dùng một mảnh vải khô lau sạch sương được tạo ra bên trong ngăn mát. Mở cửa nhiều lần làm tủ chạy mạnh hơn tiếu hao năng lượng điện nhiều hơn. Khẳng định tủ ko tự tạo ra sương, sương chỉ xuất hiện hiện khi có nguồn hơi nước từ thực phẩm hoặc do mở cửa tủ nhiều lần.",
      },
      {
        text: "Độ ẩm của ngăn rau quả cao hơn so với các ngăn khác. Theo đó, tùy thuộc vào số lượng hoặc loại rau củ được bảo quản, lượng sương ngưng tụ được tạo ra có thể khác nhau trên nắp nhựa của ngăn rau quả. Tuy nhiên, đây không phải là vấn đề. Nếu bạn (không cần loại sương này - muốn giảm hiện tượng sương này), hãy bọc rau quả trong màng nhựa. Ngoài ra, khi sự ngưng tụ sương xảy ra nhiều lần, nước có thể bị đọng lại trong ngăn rau quả. Hãy lau sạch nước bằng một mảnh vải khô.",
      },
    ],
    images: [],
  },
  {
    id: "F07",
    category: "fridge",
    code: "(R007) Tuyết xuất hiện vách tủ. Tuyết xuất hiện trên ngăn đá.",
    title:
      "Có tuyết xuất hiện trên vách tủ hoặc trên ngăn đá (Chủ yếu là ngăn đá)",
    description:
      "Tủ lạnh của bạn có tuyết xuất hiện trên vách tủ hoặc trên ngăn đá. Đây là hiện tượng bình thường khi môi trường xung quanh có độ ẩm cao, Tần suất mở cửa thường xuyên sẽ làm ẩm lọt vào bên trong.",
    steps: [
      {
        text: "Ktra cửa tủ lạnh có bị hở không? quan sát bề mặt ron tủ có bị đọng sương ko? Kiểm tra màng bọc giấy gói thực phẩm không bị kẹp để không tạo khoảng cách giữa cánh cửa và gioăng khi bạn đóng cửa",
      },
      {
        text: "Khi mở cửa thường xuyên hoặc nếu mở cửa khi độ ẩm xung quanh tủ lạnh cao, độ ẩm trong không khí có thể trở thành tuyết hoặc đá đọng trên thành bên trong hoặc các bộ phận của ngăn đá, hoặc xung quanh (ống dẫn khí - cửa thổi gió). Đây không phải là vấn đề. Hãy cố gắng không mở cửa quá nhiều lần hoặc để cửa mở quá lâu. Ngoài ra, hãy dùng một mảnh vải khô lau sạch tuyết hoặc đá được tạo ra bên trong ngăn đá.",
      },
      {
        text: "Khi trong tủ lạnh lưu trữ nhiều chất lỏng hoặc nước trong cùng một thời điểm, nước hoặc chất lỏng có thể bốc hơi và biến thành tuyết hoặc đá đọng trên thành tủ lạnh hoặc các bộ phận của ngăn đá",
      },
      {
        text: "Xung quanh (ống dẫn khí - cửa thổi gió). Bạn có thể (ngăn chặn - giảm) tuyết và đá bằng cách (đậy nắp - chứa thực phẩm trong hộp kín hoặc màng bọc thực phẩm) để tránh bay hơi. Hãy dùng một mảnh vải khô lau sạch tuyết hoặc đá được tạo ra bên trong ngăn đá.",
      },
      {
        text: "Nếu không khắc phục được, báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F08",
    category: "fridge",
    code: "(R008) Nứt, bể, vỡ",
    title: "Có nứt, bể, vỡ.",
    description: "Nứt, bể, vỡ",
    steps: [
      {
        text: "Dealer căn cứ theo chính sách bể vỡ không nằm trong phạm vi bảo hành",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F09",
    category: "fridge",
    code: "(R009) Lỗi màu sơn cửa",
    title: "Có lỗi màu sơn cửa.",
    description: "Lỗi màu sơn cửa",
    steps: [
      {
        text: "Thuyết phục khách hàng gửi các hình ảnh để CC làm việc với BPKT",
      },
      {
        text: "Hình tổng thể tủ (Khoanh vị trí lỗi)",
      },
      {
        text: "Tem tủ (Số máy)",
      },
      {
        text: "Hình lỗi chi tiết. Đối các lỗi màu cửa kính khuyến cáo EU chụp góc nghiên để BPKT nhìn rõ hơn",
      },
    ],
    images: [],
  },
  {
    id: "F10",
    category: "fridge",
    code: "(R010) Tủ bị biến dạng, nứt, bể.",
    title: "Tủ bị biến dạng, nứt, bể.",
    description: "Tủ bị biến dạng, nứt, bể.",
    steps: [
      {
        text: "Thuyết phục khách hàng gửi các hình ảnh để CC làm việc với BPKT",
      },
      {
        text: "Hình tổng thể tủ (Khoanh vị trí lỗi)",
      },
      {
        text: "Hình lỗi chi tiết (3- 4 tấm hình)",
      },
      {
        text: "Riêng TH của Dealer",
      },
      {
        text: "Hình 4 mặt vỏ thùng",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
];
