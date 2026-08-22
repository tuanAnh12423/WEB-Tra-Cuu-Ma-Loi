import type { ErrorItem } from "../../errors";

// 21/08/2026: Mã lỗi/xử lý sự cố cho Máy hút ẩm COMFEE, trích từ mục "Xử lý sự cố" /
// "Mã lỗi" trong sách HDSD chính hãng của 3 model đang có trong app: CFDF7-20L,
// CFDP-50L, CFDA-30L (feelcomfee.com/vn). Mã lỗi hiển thị hơi khác nhau giữa các
// model (ví dụ ES vs EH61 cùng ý nghĩa) — đã ghi chú rõ áp dụng cho model nào.
export const dehumidifierError: ErrorItem[] = [
  {
    id: "DH01",
    category: "dehumidifier",
    code: "(DH01/P2) Xô chứa nước báo đầy hoặc không nhận xô chứa",
    title: "Máy hút ẩm Comfee - Mã lỗi P2 (Xô chứa đầy / sai vị trí)",
    description:
      "Màn hình hiển thị mã P2 (Model: CFDF7-20L, CFDP-50L, CFDA-30L)",
    steps: [
      { text: "Kiểm tra xô chứa nước đã đầy chưa → Nếu đầy, đổ hết nước ra." },
      { text: "Kiểm tra xô chứa đã được đặt đúng vị trí, khớp cảm biến chưa → Đặt lại cho khớp." },
      { text: "Với model có chức năng bơm (CFDP-50L, CFDA-30L): nếu vẫn báo lỗi dù xô đã đổ hết nước, kiểm tra lại cách lắp xô." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "DH02",
    category: "dehumidifier",
    code: "(DH02/AS-EH60) Lỗi cảm biến nhiệt độ phòng / độ ẩm",
    title: "Máy hút ẩm Comfee - Mã lỗi AS / EH60 (Lỗi cảm biến nhiệt độ phòng, độ ẩm)",
    description:
      "Màn hình hiển thị mã AS (CFDF7-20L, CFDP-50L) hoặc EH60 (CFDA-30L)",
    steps: [
      { text: "Rút phích cắm thiết bị ra, đợi khoảng 10-30 giây rồi cắm lại." },
      { text: "Bật máy lại và theo dõi mã lỗi có còn hiển thị không." },
      { text: "Nếu lỗi vẫn tái diễn → Tạo WO chuyển ASP kiểm tra cảm biến nhiệt độ/độ ẩm." },
    ],
  },
  {
    id: "DH03",
    category: "dehumidifier",
    code: "(DH03/ES-EH61) Lỗi cảm biến nhiệt độ dàn bay hơi",
    title: "Máy hút ẩm Comfee - Mã lỗi ES / EH61 (Lỗi cảm biến dàn bay hơi)",
    description:
      "Màn hình hiển thị mã ES (CFDF7-20L, CFDP-50L) hoặc EH61 (CFDF7-20L, CFDA-30L)",
    steps: [
      { text: "Rút phích cắm thiết bị ra, đợi khoảng 10-30 giây rồi cắm lại." },
      { text: "Bật máy lại và theo dõi mã lỗi có còn hiển thị không." },
      { text: "Nếu lỗi vẫn tái diễn → Tạo WO chuyển ASP kiểm tra cảm biến dàn bay hơi." },
    ],
  },
  {
    id: "DH04",
    category: "dehumidifier",
    code: "(DH04/EH00) Lỗi bộ nhớ EEPROM",
    title: "Máy hút ẩm Comfee - Mã lỗi EH00 (Lỗi EEPROM)",
    description: "Màn hình hiển thị mã EH00 (Model: CFDF7-20L, CFDA-30L)",
    steps: [
      { text: "Rút phích cắm thiết bị ra, đợi khoảng 10-30 giây rồi cắm lại." },
      { text: "Nếu lỗi vẫn tái diễn → Tạo WO chuyển ASP kiểm tra bo mạch." },
    ],
  },
  {
    id: "DH05",
    category: "dehumidifier",
    code: "(DH05/E4-EH0b) Lỗi giao tiếp bo mạch - màn hình hiển thị",
    title: "Máy hút ẩm Comfee - Mã lỗi E4 / EH0b (Lỗi giao tiếp màn hình)",
    description: "Màn hình hiển thị mã E4 hoặc EH0b (Model: CFDF7-20L)",
    steps: [
      { text: "Rút phích cắm thiết bị ra, đợi khoảng 10-30 giây rồi cắm lại." },
      { text: "Nếu lỗi vẫn tái diễn → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "DH06",
    category: "dehumidifier",
    code: "(DH06/Eb) Xô chứa bị tháo hoặc lắp sai vị trí (model có bơm)",
    title: "Máy hút ẩm Comfee - Mã lỗi Eb (Xô chứa bị tháo/sai vị trí)",
    description:
      "Màn hình hiển thị mã Eb — chỉ áp dụng model có chức năng bơm (Model: CFDP-50L, CFDA-30L)",
    steps: [
      { text: "Kiểm tra xô chứa đã được lắp đúng vị trí và cố định chắc chắn chưa → Lắp lại." },
      { text: "Nếu vẫn báo lỗi sau khi lắp lại đúng cách → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "DH07",
    category: "dehumidifier",
    code: "(DH07) Máy không khởi động được",
    title: "Máy hút ẩm Comfee - Máy không khởi động được",
    description: "Máy không khởi động (Model: CFDF7-20L, CFDP-50L, CFDA-30L)",
    steps: [
      { text: "Kiểm tra phích cắm đã cắm chặt vào ổ điện chưa." },
      { text: "Kiểm tra cầu chì/hộp cầu chì (CB) của nhà có bị ngắt không." },
      { text: "Kiểm tra độ ẩm cài đặt đã đạt hay chưa — nếu độ ẩm phòng đã thấp hơn mức cài đặt, máy sẽ tự dừng (bình thường, không phải lỗi)." },
      { text: "Kiểm tra xô chứa đã đầy hoặc đặt sai vị trí chưa → Đổ nước, lắp lại đúng vị trí." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "DH08",
    category: "dehumidifier",
    code: "(DH08) Máy chạy nhưng không làm khô không khí hiệu quả",
    title: "Máy hút ẩm Comfee - Không làm khô không khí hiệu quả",
    description: "Máy vận hành nhưng độ ẩm phòng không giảm rõ rệt",
    steps: [
      { text: "Kiểm tra thời gian hoạt động đã đủ lâu chưa — máy hút ẩm cần thời gian để giảm độ ẩm phòng." },
      { text: "Kiểm tra cửa ra vào, cửa sổ trong phòng đã đóng kín chưa." },
      { text: "Kiểm tra mức độ ẩm đang cài đặt có quá cao so với nhu cầu không → Giảm mức cài đặt." },
      { text: "Kiểm tra nhiệt độ phòng — nếu dưới 5°C, hiệu suất hút ẩm sẽ giảm (bình thường theo nguyên lý hoạt động)." },
      { text: "Kiểm tra phòng có đang có nguồn phát hơi nước liên tục không (nấu ăn, phơi đồ...) → Cách ly nguồn hơi nước nếu có thể." },
      { text: "Nếu vẫn không cải thiện → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "DH09",
    category: "dehumidifier",
    code: "(DH09) Máy phát ra tiếng ồn lớn khi hoạt động",
    title: "Máy hút ẩm Comfee - Tiếng ồn lớn khi hoạt động",
    description: "Máy phát tiếng ồn lớn hơn bình thường",
    steps: [
      { text: "Kiểm tra bộ lọc bụi có bị tắc, bám bụi nhiều không → Vệ sinh bộ lọc." },
      { text: "Kiểm tra thiết bị có được đặt thẳng, cân bằng không." },
      { text: "Kiểm tra sàn đặt máy có bằng phẳng không → Di chuyển đến vị trí bằng phẳng hơn." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "DH10",
    category: "dehumidifier",
    code: "(DH10) Rò rỉ nước ra sàn nhà",
    title: "Máy hút ẩm Comfee - Rò rỉ nước ra sàn nhà",
    description: "Có nước chảy ra sàn quanh khu vực đặt máy",
    steps: [
      { text: "Kiểm tra ống dẫn nước (nếu đang dùng chế độ xả liên tục) có bị lỏng hoặc mối nối hở không → Siết chặt lại." },
      { text: "Kiểm tra nút thoát nước phía sau máy — nếu đang dùng xô chứa (không xả ống), nút thoát phải được đậy kín." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "DH11",
    category: "dehumidifier",
    code: "(DH11) Sương giá bám trên dàn ống / đèn báo rã đông (P1) sáng",
    title: "Máy hút ẩm Comfee - Sương giá trên dàn ống, đèn P1 (hiện tượng bình thường)",
    description: "Khách hàng thấy sương giá/đá bám trên dàn ống, hoặc đèn P1 sáng",
    steps: [
      { text: "Đây là hiện tượng BÌNH THƯỜNG — máy có tính năng tự động rã đông (Auto Defrost)." },
      { text: "Mã P1 trên một số model (CFDF7-20L) nghĩa là máy đang tự rã đông → Chờ máy tự hoàn tất, không cần can thiệp." },
      { text: "Tư vấn khách hàng yên tâm, không phải lỗi. Nếu sương giá không tự tan sau thời gian dài bất thường → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
];
