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
  {
    id: "F21",
    category: "fridge",
    code: "(R021) Đèn LED không sáng",
    title:
      "Tủ lạnh Đèn LED không sáng, đèn LED trong ngăn mát hoặc ngăn đông không sáng",
    description: "Tủ lạnh Đèn LED trong ngăn mát hoặc ngăn đông không sáng",
    steps: [
      {
        text: "Kiểm tra ổ cắm điện có nguồn không? Phích dây nguồn đã được cắm chặt vào ổ cắm điện chưa?",
      },
      {
        text: "Kiểm tra lại máy nén có đang hoạt động không?",
      },
      {
        text: "Nếu có, báo MSC kiểm tra và xử lý cho KH",
      },
    ],
    images: [],
  },
  {
    id: "F22",
    category: "fridge",
    code: "(R022) Tiếng kêu to từ máy nén",
    title: "Tủ lạnh Tiếng kêu to từ máy nén",
    description: "Tủ lạnh Tiếng kêu to từ máy nén",
    steps: [
      {
        text: "Máy nén có thể kêu to hơn thông thường khi tủ làm lạnh với công suất cao trong trường hợp: sử dụng tủ lần đầu, tủ chưa đủ lạnh, đóng/mở cửa quá thường xuyên. Máy nén sẽ êm hơn khi tủ đã đủ lạnh",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F23",
    category: "fridge",
    code: "(R023) Tiếng kêu khác - âm thanh bình thường của tủ",
    title: "Tủ lạnh Tiếng kêu khác - âm thanh bình thường của tủ",
    description: "Tủ lạnh Tiếng kêu khác - âm thanh bình thường của tủ",
    steps: [
      {
        text: "Âm thanh như tiếng nước chảy, tiếng sôi, tiếng lách tách. Đây là âm thanh của dòng chảy của môi chất lạnh (gas lạnh) trong hệ thống lạnh",
      },
      {
        text: "Âm thanh kêu lớn KH đang phản ánh là tiếng gas luân chuyển trong hệ thống dàn, thường thì sau khi chạy xả đá xong, tủ cần chạy lại công suất cao để giữ nhiệt lạnh cho thực phẩm, nên sẽ nghe tiếng gas rõ tiếng hơn trong vài phút và hết, đó là là tiếng vận hành của tủ không phải hư hỏng",
      },
      {
        text: "Tiếng lách tách. Đây là âm thanh của lớp nhựa bên trong tủ co dãn khi nhệt độ thay đổi (thông thường các tủ mới sẽ có)",
      },
      {
        text: " Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F24",
    category: "fridge",
    code: "(R024) Ngăn mát không lạnh",
    title: "Tủ lạnh Ngăn mát không lạnh",
    description: "Tủ lạnh Ngăn mát không lạnh",
    steps: [
      {
        text: "Thuyết phục khách hàng kiểm tra lại bảng điều khiển đã điều chỉnh mức thấp nhất chưa?",
      },
      {
        text: "Thực phẩm đã khách hàng trữ có cản trở luồng gió lạnh thổi ra không?",
      },
      {
        text: " Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F25",
    category: "fridge",
    code: "(R025) Ngăn mát quá lạnh",
    title: "Tủ lạnh Ngăn mát quá lạnh",
    description: "Tủ lạnh Ngăn mát quá lạnh",
    steps: [
      {
        text: "Nhiệt độ có đang cài đặt ở mức 'lạnh nhất' không?  => Chỉnh lại nhiệt độ trung bình/ cao nhất",
      },
      {
        text: "Có đặt thực phẩm sát các khe thoát khí lạnh? Thực phẩm sẽ dễ bị đông đá. => Giữ khoảng cách vừa đủ giữa các loại thực phẩm. Không chặn lỗ thông hơi lạnh",
      },
      {
        text: " Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F26",
    category: "fridge",
    code: "(R026) Ron cửa hít không chặt",
    title: "Tủ lạnh Ron cửa hít không chặt",
    description: "Tủ lạnh Ron cửa hít không chặt",
    steps: [
      {
        text: "Trường hợp khách hàng mua hơn 3 tháng, khuyến nghị khách hàng vệ sinh lại ron cửa bằng nước ấm",
      },
      {
        text: "Điều chỉnh lại tủ cân bằng",
      },
      {
        text: "Kiểm tra lại ron cửa có bị gập không?",
      },
      {
        text: "Kiểm tra lại khay kệ có bị cấn thực phẩm trong tủ không?",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F27",
    category: "fridge",
    code: "(R027) Thời gian đông đá quá lâu",
    title: "Tủ lạnh Thời gian đông đá quá lâu",
    description: "Tủ lạnh Thời gian đông đá quá lâu",
    steps: [
      {
        text: "TDV hỏi khách hàng số lượng lon đá làm cùng 1 lúc bao nhiêu lon?",
      },
      {
        text: "Khuyến nghị khách hàng làm từ 6-8 lon (tuỳ theo dung tích lon đá) sau khi lon đá đông sẽ làm thêm và xen kẽ",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F28",
    category: "fridge",
    code: "(R028) Tủ kém lạnh",
    title: "Tủ lạnh kém lạnh",
    description: "Tủ lạnh kém lạnh",
    steps: [
      {
        text: "Thuyết phục khách hàng kiểm tra lại bảng điều khiển đã điều chỉnh mức nhiệt độ thấp nhất chưa?",
      },
      {
        text: "Thực phẩm đã khách hàng trữ có cản trở luồng gió lạnh thổi ra không?",
      },
      {
        text: "Tủ có đặt vị trí có ánh nắng chiếu tực tiếp vào tủ hoặc gần các thiết bị điện, nhiệt?",
      },
      {
        text: "Luôn chừa khoảng trống xung quanh để tủ làm lạnh hiệu quả: Trên 30cm, hông 10cm, sau 10cm (Lưu ý dòng JAPANDi sẽ nhỏ hơn)",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F29",
    category: "fridge",
    code: "(R029) Tủ gợn sóng bên hông tủ",
    title: "Tủ lạnh gợn sóng bên hông tủ",
    description: "Tủ lạnh gợn sóng bên hông tủ",
    steps: [
      {
        text: "Đây không phải lỗi sản phẩm",
      },
      {
        text: "Dàn nóng được thiết kế đặt bên hông tủ đổ form cách nhiệt và điều này được tạo ra trong quá trình sản xuất",
      },
      {
        text: "Vấn đề này sẽ dễ nhận thấy khi tủ đặt ở vị trí có ánh sáng tốt và nhìn nghiêng",
      },
      {
        text: "Tình trạng này không ảnh hưởng đến vận hành của tủ",
      },
    ],
    images: [],
  },
  {
    id: "F30",
    category: "fridge",
    code: "(R030) Cảnh báo EF",
    title: "Tủ lạnh Cảnh báo EF",
    description: "Mã lỗi này chỉ báo ở model: GR-RS755WIA-PGV(22)-XK",
    steps: [
      {
        text: "TDV tư vấn KH điều chỉnh lại hộp đựng nước (hình bên cạnh)",
      },
      {
        text: "Sau đó nhờ KH lấy lại nước để lấy xác nhận hộp nước đã vô đúng vị trí",
      },

      {
        text: "Nếu KH đã làm đúng mà vẫn báo EF, TDV tạo WO chuyển ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F31",
    category: "fridge",
    code: "(R031) Tủ Side By Side không lấy được đá ngoài",
    title: "Tủ lạnh Tủ Side By Side không lấy được đá ngoài",
    description: "Tủ lạnh Tủ Side By Side không lấy được đá ngoài",
    steps: [
      {
        text: "TDV tư vấn khách hàng kiểm tra xem đá trong hộc trữ có dính lại với nhau không?",
      },
      {
        text: "Nếu có hãy bỏ và vệ sinh",
      },

      {
        text: "Nguyên nhân gây đá dính với nhau: Có bị cúp điện không?, Cửa có bị mở thường xuyên không",
      },
      {
        text: "Nếu không khắc phục được. Chuyển ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F32",
    category: "fridge",
    code: "(R032) Tủ lạnh không làm đá tự động",
    title: "Tủ lạnh không làm đá tự động:",
    description:
      "Các model: GR-RT435WEA-PMV(06)-MG, GR-RT535WEA-PMV(06)-MG, GR-RB405WEA-PMV(06)-MG, GR-RF665WIA-PGV(22)-XK, GR-RS755WIA-PGV(22)-XK",
    steps: [
      {
        text: "TDV tư vấn khách hàng bật ON tính năng làm đá tự động",
      },
      {
        text: "Tư vấn khách hàng kiểm tra vị trí lắp đặt hộp nước + đổ đầy bình",
      },

      {
        text: "Nếu bước 1-2 đã ok nhưng tủ không làm đá",
      },
      {
        text: "Báo ASP kiểm tra - kèm ghi chú các nội dung đã tư vấn vào WO",
      },
    ],
    images: [],
  },
  {
    id: "F33",
    category: "fridge",
    code: "(R033) Tủ bị bẩn (Dơ) (Có thể vệ sinh) ",
    title: "Tủ bị bẩn (Dơ) (Có thể vệ sinh)",
    description: "Tủ dơ, chảy nước có màu đen trong tủ.",
    steps: [
      {
        text: "Hỏi KH Model, ngày mua, khi nào gặp hiện tượng",
      },
      {
        text: "Xin KH Video Hình ảnh (Nếu có thể)",
      },

      {
        text: "Hướng dẫn khách vệ sinh chỗ bị bẩn (dơ)",
      },
      {
        text: "Xin KH video/ hình ảnh (trước và sau khi vệ sinh)",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F34",
    category: "fridge",
    code: "(R034) Màn hình không hiển thị, bảng điều khiển không hiển thị",
    title: "Màn hình không hiển thị, bảng điều khiển không hiển thị",
    description: "Màn hình không hiển thị, bảng điều khiển không hiển thị",
    steps: [
      {
        text: "Sau 30s không hoạt động tủ sẽ tự động tăt màn hình hiển thị",
      },
      {
        text: "Kiểm tra ổ điện phích cắm, Kiểm tra tủ có đang hoạt động bình thường",
      },

      {
        text: "Hướng dẫn KH chạm vào khu vực màn hình hiển thị để điều khiển.",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F35",
    category: "fridge",
    code: "(R035) Cảnh báo E0 : bộ làm đá tự động",
    title: "Cảnh báo E0 : bộ làm đá tự động",
    description: "Cảnh báo E0 : bộ làm đá tự động",
    steps: [
      {
        text: "Kiểm tra trên hộp chứa đá có đá không, Kiểm tra hộp chứa nước có đủ nước",
      },
      {
        text: "Rút điện tủ lạnh ra cắm lại để tủ tự  khởi động lại làm đá nếu tủ vẫn báo E0 liên hệ trạm gửi KTV kiểm tra.",
      },
      {
        text: "Xin thêm hình lỗi từ KH (Nếu có). Ghi chú trên ca lỗi tương ứng",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F36",
    category: "fridge",
    code: "(R036) Cảnh báo E1 : cảm biến ngăn trữ",
    title: "Cảnh báo E1 : cảm biến ngăn trữ",
    description: "Cảnh báo E1 : cảm biến ngăn trữ",
    steps: [
      {
        text: "Lưu lại thông tin, xin thêm hình ảnh mã lỗi của KH (Nếu có)",
      },

      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F37",
    category: "fridge",
    code: "(R037) Cảnh báo  E2 : cảm biến ngăn đá",
    title: "Cảnh báo  E2 : cảm biến ngăn đá",
    description: "Cảnh báo  E2 : cảm biến ngăn đá",
    steps: [
      {
        text: "Lưu lại thông tin, xin thêm hình ảnh mã lỗi của KH (Nếu có)",
      },

      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F38",
    category: "fridge",
    code: "(R038) Cảnh báo E3 : cảm biến ngăn đa năng",
    title: "Cảnh báo E3 : cảm biến ngăn đa năng",
    description: "Cảnh báo E3 : cảm biến ngăn đa năng",
    steps: [
      {
        text: "Lưu lại thông tin, xin thêm hình ảnh mã lỗi của KH (Nếu có)",
      },

      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F39",
    category: "fridge",
    code: "(R039) Cảnh báo E4 : cảm biến xả đá ngăn trữ",
    title: "Cảnh báo E4 : cảm biến xả đá ngăn trữ",
    description: "Cảnh báo E4 : cảm biến xả đá ngăn trữ",
    steps: [
      {
        text: "Lưu lại thông tin, xin thêm hình ảnh mã lỗi của KH (Nếu có)",
      },

      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F40",
    category: "fridge",
    code: "(R040) Cảnh báo E5 : cảm biến xả đá ngăn đá",
    title: "Cảnh báo E5 : cảm biến xả đá ngăn đá",
    description: "Cảnh báo E5 : cảm biến xả đá ngăn đá",
    steps: [
      {
        text: "Lưu lại thông tin, xin thêm hình ảnh mã lỗi của KH (Nếu có)",
      },

      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F41",
    category: "fridge",
    code: "(R041) Cảnh báo E6 : lỗi giao tiếp bo hiển thị và bo mạch chính",
    title: "Cảnh báo E6 : lỗi giao tiếp bo hiển thị và bo mạch chính",
    description: "Cảnh báo E6 : lỗi giao tiếp bo hiển thị và bo mạch chính",
    steps: [
      {
        text: "Lưu lại thông tin, xin thêm hình ảnh mã lỗi của KH (Nếu có)",
      },

      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F42",
    category: "fridge",
    code: "(R042) Cảnh báo E7 : cảm biến môi trường (nhiệt độ)",
    title: "Cảnh báo E7 : cảm biến môi trường (nhiệt độ)",
    description: "Cảnh báo E7 : cảm biến môi trường (nhiệt độ)",
    steps: [
      {
        text: "Lưu lại thông tin, xin thêm hình ảnh mã lỗi của KH (Nếu có)",
      },

      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F43",
    category: "fridge",
    code: "(R043) Cảnh báo EE : cảm biến lật đá làm đá tự động",
    title: "Cảnh báo EE : cảm biến lật đá làm đá tự động",
    description: "Cảnh báo EE : cảm biến lật đá làm đá tự động",
    steps: [
      {
        text: "Lưu lại thông tin, xin thêm hình ảnh mã lỗi của KH (Nếu có)",
      },

      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F44",
    category: "fridge",
    code: "(R044) Cảnh báo EH : cảm biến môi trường (độ ẩm)",
    title: "Cảnh báo EH : cảm biến môi trường (độ ẩm)",
    description: "Cảnh báo EH : cảm biến môi trường (độ ẩm)",
    steps: [
      {
        text: "Lưu lại thông tin, xin thêm hình ảnh mã lỗi của KH (Nếu có)",
      },

      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F45",
    category: "fridge",
    code: "(R045) Cảnh báo EP : bộ làm đá tự động",
    title: "Cảnh báo EP : bộ làm đá tự động",
    description: "Cảnh báo EP : bộ làm đá tự động",
    steps: [
      {
        text: "Lưu lại thông tin, xin thêm hình ảnh mã lỗi của KH (Nếu có)",
      },

      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F46",
    category: "fridge",
    code: "(R046) Cảnh báo P1 : nhiệt độ ngăn trữ bất thường",
    title: "Cảnh báo P1 : nhiệt độ ngăn trữ bất thường",
    description: "Cảnh báo P1 : nhiệt độ ngăn trữ bất thường",
    steps: [
      {
        text: "Lưu lại thông tin, xin thêm hình ảnh mã lỗi của KH (Nếu có)",
      },

      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F47",
    category: "fridge",
    code: "(R047) Cảnh báo P2 : nhiệt độ ngăn đá bất trường",
    title: "Cảnh báo P2 : nhiệt độ ngăn đá bất trường",
    description: "Cảnh báo P2 : nhiệt độ ngăn đá bất trường",
    steps: [
      {
        text: "Lưu lại thông tin, xin thêm hình ảnh mã lỗi của KH (Nếu có)",
      },

      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F48",
    category: "fridge",
    code: "(R048) Cảnh báo CA : giao tiếp bo mạch chính và bo khiển làm đá tự động",
    title: "Cảnh báo CA : giao tiếp bo mạch chính và bo khiển làm đá tự động",
    description:
      "Cảnh báo CA : giao tiếp bo mạch chính và bo khiển làm đá tự động",
    steps: [
      {
        text: "Lưu lại thông tin, xin thêm hình ảnh mã lỗi của KH (Nếu có)",
      },

      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F49",
    category: "fridge",
    code: "(R049) Chảy nước sàn nhà",
    title: "Chảy nước sàn nhà",
    description: "Tủ lạnh bị Chảy nước ra sàn nhà",
    steps: [
      {
        text: "Kiểm tra lại nguồn điện đổi ổ cắm khác, theo dõi.",
      },
      {
        text: "Kiểm tra chảy nước từ đâu",
      },
      {
        text: "Nếu nước chảy từ đằng sau liên hệ trạm gửi KTV kiểm tra",
      },
      {
        text: "Nếu nước chảy từ cánh tủ. Kiểm tra lại thực phẩm hoặc cách sắp xếp thực phẩm có kín hoặc bị đổ nước bên trong tủ",
      },
      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F50",
    category: "fridge",
    code: "(R050) Bảng điều khiển chớp đèn",
    title: "Bảng điều khiển chớp đèn",
    description: "Bảng điều khiển chớp đèn",
    steps: [
      {
        text: "TDV khai khác tình trạng của tủ: Không lạnh/ không làm đá?",
      },
      {
        text: "Nhờ KH quay lại video tủ đang  chớp đèn nào (Ghi chú lên ca).",
      },
      {
        text: "Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F51",
    category: "fridge",
    code: "(R051) 711L Model - Tủ không lạnh hoàn toàn/ Lúc lạnh lúc không",
    title: "711L Model - Tủ không lạnh hoàn toàn/ Lúc lạnh lúc không",
    description:
      "711L Model - Tủ không lạnh hoàn toàn/ Lúc lạnh lúc không. (GR-RF895WIA-PGV(22)-XK GR-RF900WI-PMV(06)-MG)",
    steps: [
      {
        text: "CC nếu nhận các khiếu nại về các hiện tượng nêu trên sẽ tiến hành:",
      },
      {
        text: "Liên hệ trấn an khách hàng + khuyến nghị khách hàng rút phích nguồn của tủ lạnh",
      },
      {
        text: "Tạo WO và ghi chú cho TBH thực hiện: TBH kết nối IOT + kiểm tra kỹ van tiết lưu + xem hướng dẫn xử lý trong app MISA",
      },
      {
        text: "Báo cho ASP kiểm tra cho KH.",
      },
    ],
    images: [],
  },
  {
    id: "F52",
    category: "fridge",
    code: "(R052) Khách hàng phản ánh có tiếng kêu (ọc ọc ọc) sau khi  mở đóng cửa ngăn đông",
    title:
      "Đối với các model khách hàng phản ánh có tiếng kêu (ọc ọc ọc) sau khi  mở đóng cửa ngăn đông",
    description:
      "GR-RT395WE-PMV(06)-MG, GR-RT435WEA-PMV(06)-MG, GR-RT416WE-PMV(58)-MM, GR-RT535WEA-PMV(06)-MG, GR-RT535WE-PMV, GR-RT468WE-PMV(58)-MM, GR-RT559WE-PMV(58)-MMGR, RB405WEA-PMV(06)-MG, GR-RB410WE-PMV(37)-SG, GR-RB405WE-PMV(06)-MG",
    steps: [
      {
        text: "CC tiếp nhận và chia sẻ thời gian gần đây môi trường có ẩm nhiều không (mưa nhiều/ đóng mở cửa thường xuyên)",
      },
      {
        text: "Hỏi thăm tình trạng hộc nước phía sau có bị đầy không? => Đầy => Khuyến nghị KH hút bớt nước trong hộc và kiểm tra lại.",
      },
      {
        text: "TH 1: Giải thích cho khách hàng  đây không phải lỗi sản phẩm và là nguyên lý hoạt động do có nước trong ống chảy nước + máng nước đầy sẽ có tiếng kêu → Đóng ca FCR",
      },
      {
        text: "TH 2: khách hàng chưa hài lòng và yêu cầu được kiểm, TDV ghi rõ đã tư vấn về tiếng kêu + KTV kiểm tra - cân chỉnh lại máng nước + ống xã",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F53",
    category: "fridge",
    code: "(R053) Tủ hoạt động có tiếng ồn ở ngăn đá",
    title: "Tủ hoạt động có tiếng ồn ở ngăn đá",
    description: "Tủ hoạt động có tiếng ồn ở ngăn đá",
    steps: [
      {
        text: "HD KH khi mở tủ có còn tiếng động. Nếu còn => Báo trạm kiểm tra",
      },
      {
        text: "Nếu không tiếp tục HD",
      },
      {
        text: "Sắp xếp lại thực phẩm ngăn mát ngăn đông.",
      },
      {
        text: "Kiểm tra thực phẩm có bao bọc kín tránh bốc hơi nước.",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F54",
    category: "fridge",
    code: "(R054) Có côn trùng bên trong tủ",
    title: "Có côn trùng bên trong tủ",
    description: "Có côn trùng bên trong tủ",
    steps: [
      {
        text: "Kiểm tra xem cửa có đang bị cấn khay kệ làm không đóng kín hay không.",
      },
      {
        text: "Giải thích KH có thể lúc mở cửa ra vào có côn trùng lọt vào là không thể tránh khỏi. Thử Lau dọn sạch sẽ, và hạn chế đóng mở cửa tủ lại, và theo dõi nếu số lượng quá nhiều báo trạm xuống kiểm tra và xử lý",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F55",
    category: "fridge",
    code: "(R055) Không lấy được nước ngoài",
    title: "Không lấy được nước ngoài",
    description: "Không lấy được nước ngoài - Áp dụng Model GR-RS755",
    steps: [
      {
        text: "CC chia sẻ Khách rút hộp chứa nước ra, xong đóng cửa tủ lại để : - đổ bớt nước bên trong ra, dưới mức MAX - nhấn lấy nước (khi không gắn hộp chứa nước) - xem tủ có báo lỗi (EF) không ? có (EF) là bình thường + sau đó, gắn hộp chứa nước lại, đóng cửa lại : - chờ khoảng 5-10p, thử nhấn lấy nước lại ngoài lại, xem đã được chưa ?",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra",
      },
    ],
    images: [],
  },
  {
    id: "F56",
    category: "fridge",
    code: "(RH01) Không làm đá tự động",
    title: "Không làm đá tự động",
    description: "Tủ lạnh không làm đá tự động.",
    steps: [
      {
        text: "TDV tư vấn khách hàng kiểm tra đã bật ON tính năng làm đá tự động",
      },
      {
        text: "Tư vấn khách hàng kiểm tra vị trí lắp đặt hộp nước + đổ đầy bình",
      },
      {
        text: "Nếu đã làm 2 thao tác trên chờ khoảng 1 ngày. Nếu vẫn không có. Báo ASP kiểm tra cho KH.",
      },
    ],
    images: [],
  },
  {
    id: "F57",
    category: "fridge",
    code: "(RH02) Tủ hiển thị cảnh báo EF",
    title: "Tủ hiển thị cảnh báo EF",
    description: "Tủ hiển thị cảnh báo EF. Model: GR-RS755WIA, GR-RF665WIA ",
    steps: [
      {
        text: "Hộp nước đã được lắp đúng vị trí chưa ? ",
      },
      {
        text: "Rút hộp nước và gắn lại",
      },
      {
        text: "Nếu đã làm 2 thao tác trên chờ khoảng 1 ngày. Nếu vẫn không có. Báo ASP kiểm tra cho KH.",
      },
    ],
    images: [],
  },
  {
    id: "F58",
    category: "fridge",
    code: "(RH03) Bàn phím không thể điều khiển",
    title: "Bàn phím không thể điều khiển",
    description: "Bàn phím không thể điều khiển",
    steps: [
      {
        text: "Tư vấn khách hàng, bàn phím của tủ đang ở trạng thái khóa phím không?",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra cho KH.",
      },
    ],
    images: [],
  },
  {
    id: "F59",
    category: "fridge",
    code: "(RH04) Màn hình không hiển thị",
    title: "Màn hình không hiển thị",
    description: "Màn hình không hiển thị",
    steps: [
      {
        text: "Sau 30s không hoạt động tủ sẽ tự động tăt màn hình hiển thị",
      },
      {
        text: "Kiểm tra ổ điện phích cắm, Kiểm tra tủ có đang hoạt động bình thường",
      },
      {
        text: "Hướng dẫn KH chạm vào khu vực màn hình hiển thị để điều khiển.",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra cho KH.",
      },
    ],
    images: [],
  },
  {
    id: "F60",
    category: "fridge",
    code: "(RH04) Màn hình không hiển thị",
    title: "Màn hình không hiển thị",
    description: "Màn hình không hiển thị",
    steps: [
      {
        text: "Sau 30s không hoạt động tủ sẽ tự động tăt màn hình hiển thị",
      },
      {
        text: "Kiểm tra ổ điện phích cắm, Kiểm tra tủ có đang hoạt động bình thường",
      },
      {
        text: "Hướng dẫn KH chạm vào khu vực màn hình hiển thị để điều khiển.",
      },
      {
        text: "Nếu không khắc phục được. Báo ASP kiểm tra cho KH.",
      },
    ],
    images: [],
  },
];
