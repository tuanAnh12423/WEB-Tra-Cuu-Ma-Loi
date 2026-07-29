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
  {
    id: "F11",
    category: "fridge",
    code: "(R011) Cửa không đều, không cân bằng.",
    title: "Cửa không đều, không cân bằng.",
    description: "Cửa không đều, không cân bằng.",
    steps: [
      {
        text: "Tình trạng này sẽ xuất hiện ở các dòng nhiều cửa/ SBS - Sách HDSD có ghi chú cách cân chỉnh bằng chân tăng đưa. Thuyết phục KH cân chỉnh, và chỉ có khả năng cân chỉnh tương đối, không thể tuyệt đối ",
      },
      {
        text: "TDV báo ASP kiểm tra + cân chỉnh cho KH",
      },
    ],
    images: [],
  },
  {
    id: "F12",
    category: "fridge",
    code: "(R012) Đóng cửa này bật cửa kia.",
    title: "Đóng cửa này bật cửa kia.",
    description: "Đóng cửa này bật cửa kia.",
    steps: [
      {
        text: "Vì ngăn đá và ngăn lạnh thông với nhau nên khi đóng mạnh cửa này sẽ tạo áp lực đẩy cửa kia ra",
      },
      {
        text: "Điều này bình thường, nên đóng cửa nhẹ nhàng",
      },
      {
        text: "HIỆN TƯỢNG NÀY THƯỜNG XẢY RA TỦ NGĂN ĐÁ TRÊN/ NGĂN ĐÁ DƯỚI",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F13",
    category: "fridge",
    code: "(R013) Có khe hở ở ron cửa tủ lạnh.",
    title: "Có khe hở ở ron cửa tủ lạnh.",
    description: "Có khe hở ở ron cửa tủ lạnh.",
    steps: [
      {
        text: "Các hộp thực phẩm có đặt sau viền khay kính không?",
      },
      {
        text: "Ron cửa có bị gập không?",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F14",
    category: "fridge",
    code: "(R014) Nóng 2 bên hông tủ lạnh.",
    title: "Nóng 2 bên hông tủ lạnh.",
    description: "Nóng 2 bên hông tủ lạnh.",
    steps: [
      {
        text: "Hệ thống giải nhiệt được bố trí (bên trong vách - xung quanh thân) tủ khi tủ hoạt động. Sau lưng và 2 bên thân tủ sẽ nên nhiệt độ mặt sau và hai bên tủ có thể bị nóng nóng hơn khi tủ mới hoạt động hoặc khi đóng, mở cửa tủ quá thường xuyên",
      },
      {
        text: "Đây là hiện tượng bình thường của sản phẩm",
      },
      {
        text: "Với một thiết bị điện lạnh, tương tự như máy lạnh, thì sẽ có cục nóng để tản nhiệt, trao đổi nhiệt với môi trường, và cục lạnh để làm giảm nhiệt độ nơi mong muốn, thì tủ lạnh cũng vậy, cũng sẽ có bên ngoài thân tủ là nơi để tản nhiệt, trao đổi nhiệt với môi trường bên ngoài, và bên trong ngăn sẽ có dàn lạnh để giảm nhiệt độ tủ lạnh. Khi trao đổi tản nhiệt bên ngoài tốt, thì tủ làm lạnh cũng sẽ tốt, để trao đổi, giải nhiệt được, thì bắt buộc nhiệt độ thân vỏ phải cao hơn so với nhiệt độ môi trường, chưa kể còn phụ thuộc vào mức độ nhiệt đang mong muốn càng sâu càng lạnh, thì sẽ tỏa nhiệt sẽ cao hơn !",
      },
      {
        text: "Đó là cơ chế hoạt động bình thường của tủ không phải hư hỏng !",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F15",
    category: "fridge",
    code: "(R015) Đá viên nhỏ, hình dáng không đều.",
    title: "Đá viên nhỏ, hình dáng không đều.",
    description: "Đá viên nhỏ, hình dáng không đều.",
    steps: [
      {
        text: "Vì khay làm đá có các rãnh để nước được châm đều, do đó viên đá có thể có các phần thừa này",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F16",
    category: "fridge",
    code: "(R016) Đá viên dính chặt lại với nhau ",
    title: "Đá viên dính chặt lại với nhau ",
    description: "Đá viên dính chặt lại với nhau ",
    steps: [
      {
        text: "Có bị cúp điện không?.",
      },
      {
        text: "Cửa có bị mở thường xuyên không?.",
      },
      {
        text: "Vì khi nhiệt độ trong ngăn đá tăng lên, các viên đá tan ra và dính lại với nhau. Hãy lấy hộc chứa đá ra và đổ bỏ lượng đá này đi, sau đó làm mẻ đá mới. Trong lúc này nên hạn chế mở cửa tủ quá thường xuyên. Không sử dụng chức năng lấy đá ngoài trong thời gian dài",
      },
      {
        text: "Nếu chức năng lấy đá ngoài không được sử dụng thường xuyên các viên đá có thể dính lại với nhau, nên lấy đá ngoài thường xuyên hơn.",
      },
      {
        text: "Cửa tủ có bị hở không?. Nếu cửa tủ không được đóng kín, nhiệt độ ngăn đông có thể tăng lên và các viên đá tan ra và dính lại với nhau. Hãy đóng cửa tủ cho kín",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F17",
    category: "fridge",
    code: "(R017) Lỗi làm đá tự động -  Đá tự động không rơi xuống ",
    title: "Lỗi làm đá tự động -  Đá tự động không rơi xuống ",
    description: "Lỗi làm đá tự động -  Đá tự động không rơi xuống ",
    steps: [
      {
        text: "Bảng điều khiển của khách hàng có chớp đèn báo lỗi không (model tủ RT, RB)? Hoặc hiển thị lỗi E0/EP (model tủ RF,RS)",
      },
      {
        text: "Có : tư vấn KH rút điện, ghim lại, để theo dõi 15p, xem còn báo lỗi nữa không ?",
      },
      {
        text: "KH có đang bật chế độ làm đá tự động ? hiển thị ICE ON đang sáng không ? ( đặc biệt model GR-RS755WIA)",
      },
      {
        text: "Hộp nước đã được lắp đúng vị trí chưa ? Có nước trong hộp chứa nước không ? (lấy nước uống được ko?)",
      },
      {
        text: "Có => Tạo WO chuyển ASP kiểm tra",
      },
      {
        text: "Không => Chức năng làm đá đã được kích hoạt + nhiệt độ ngăn ĐÔNG  đã chỉnh mức lạnh nhất chưa?",
      },
    ],
    images: [],
  },
  {
    id: "F18",
    category: "fridge",
    code: "(R018) Tủ có tiếng ồn bất thường",
    title: "Tủ có tiếng ồn bất thường",
    description: "Tủ có tiếng ồn bất thường",
    steps: [
      {
        text: "Kiểm tra tủ đã được lắp đặt trên sàn chắc chắn chưa?",
      },
      {
        text: "Vị trí đặt tủ có gần giường ngủ ko?",
      },
      {
        text: "Kiểm tra các phụ kiện (ngăn, hộc, khay) có được lắp đặt đúng vị trí chưa?",
      },
      {
        text: "Hướng dẫn KH mở cửa tủ ra có còn nghe tiếng ồn nữa không?",
      },
      {
        text: "Có => Giải thích là do máy nén hoạt động",
      },
      {
        text: "Không => Do quạt gió chém vào đá nghe tiếng kêu lạch cạch. Nếu là TH này thì tạo WO chuyển ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F19",
    category: "fridge",
    code: "(R019) Ngăn đông không lạnh",
    title: "Ngăn đông không lạnh",
    description: "Ngăn đông không lạnh",
    steps: [
      {
        text: "Thuyết phục khách hàng kiểm tra lại bảng điều khiển đã điều chỉnh mức thấp nhất chưa? (Hỏi thăm KH đang chỉnh nhiệt độ mức nào?)",
      },
      {
        text: "Thực phẩm đã khách hàng trữ có cản trở luồng gió lạnh thổi ra không?",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F20",
    category: "fridge",
    code: "(R020) Không nguồn",
    title: "Tủ lạnh Không nguồn",
    description: "Tủ lạnh Không nguồn",
    steps: [
      {
        text: "Kiểm tra ổ cắm điện có nguồn không? Phích dây nguồn đã được cắm chặt vào ổ cắm điện chưa?",
      },
      {
        text: "Nếu ổ cắm điện có nguồn. Mở ngăn mát ra mà đèn không sáng. Hoặc Bảng điều khiển không sáng",
      },
      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
];
