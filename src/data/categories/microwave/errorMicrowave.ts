import type { ErrorItem } from "../../errors";

// 21/08/2026: Mã lỗi/xử lý sự cố cho Lò vi sóng COMFEE (MW01-MW02), trích từ mục "Xử lý
// sự cố" trong sách HDSD chính hãng CMW-S20KB (feelcomfee.com/vn).
// 22/08/2026: Bổ sung MW03 trở đi — trích từ mục "XỬ LÝ SỰ CỐ" trong các sách HDSD lò vi
// sóng TOSHIBA đọc được văn bản (MW3-EM26PE, MW3-AC27PE, MW3-EG26PE, MM-EM25PE) trên
// toshiba-lifestyle.com/vn. Các model lò vi sóng cơ (bản scan ảnh, không đọc được văn
// bản) không có nội dung xử lý sự cố để trích.
export const microwaveError: ErrorItem[] = [
  {
    id: "MW01",
    category: "microwave",
    code: "(MW01) Lò không làm nóng / không khởi động được",
    title: "Lò vi sóng Comfee - Lò không làm nóng / không khởi động được",
    description: "Lò không làm nóng hoặc không thể khởi động (Model: CMW-S20KB)",
    steps: [
      { text: "Kiểm tra dây nguồn đã cắm chặt vào ổ điện chưa? → Nếu chưa, cắm lại cho chặt." },
      { text: "Rút phích cắm ra, đợi khoảng 10 giây rồi cắm lại." },
      { text: "Kiểm tra cầu chì/cầu dao (CB) của nhà có bị ngắt không? → Nếu có, bật lại (nếu cầu chì cháy, cần kỹ thuật viên thay)." },
      { text: "Kiểm tra ổ cắm có điện không bằng cách cắm thử 1 thiết bị điện khác." },
      { text: "Kiểm tra cửa lò đã đóng đúng cách, đóng kín chưa? → Đóng lại cho khớp (lò vi sóng có khóa an toàn, không hoạt động nếu cửa chưa đóng kín)." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "MW02",
    category: "microwave",
    code: "(MW02) Nhiễu sóng radio/TV, đèn giảm sáng, hơi nước trên cửa khi nấu",
    title: "Lò vi sóng Comfee - Hiện tượng bình thường khi vận hành (không phải lỗi)",
    description:
      "Khách hàng phản ánh nhiễu sóng radio/TV, đèn lò giảm sáng, có hơi nước trên cửa khi nấu (Model: CMW-S20KB)",
    steps: [
      { text: "Lò vi sóng có thể gây nhiễu sóng radio/TV khi hoạt động → Đây là hiện tượng bình thường, không phải lỗi." },
      { text: "Đèn lò có thể giảm sáng khi nấu ở công suất thấp → Bình thường, không phải lỗi." },
      { text: "Hơi nước tụ trên cửa lò và có khí nóng thoát ra ở lỗ thông hơi khi nấu → Bình thường, không cần xử lý." },
      { text: "Tư vấn khách hàng yên tâm sử dụng, đây không phải dấu hiệu hư hỏng." },
    ],
  },
  {
    id: "MW03",
    category: "microwave",
    code: "(MW03) Thực phẩm chín không đều / rã đông không đúng cách",
    title: "Lò vi sóng Toshiba - Thực phẩm chín không đều hoặc rã đông không đúng",
    description:
      "Model: MW3-EM26PE(BM)VN và các model lò vi sóng Toshiba điện tử tương tự",
    steps: [
      { text: "Chín không đều: hướng dẫn khách xếp thực phẩm dày ở mép ngoài đĩa, mỏng ở giữa; đảo/xoay thực phẩm giữa chừng khi nấu." },
      { text: "Rã đông không đúng cách: kiểm tra khách đã chọn đúng chức năng/thời gian rã đông theo khối lượng thực phẩm chưa." },
      { text: "Hướng dẫn khách dùng đĩa xoay đúng cách (không đặt thực phẩm lệch tâm) để nhiệt phân bố đều." },
      { text: "Nếu đã làm đúng hướng dẫn mà vẫn không cải thiện → Tạo WO chuyển ASP kiểm tra bộ phát sóng." },
    ],
  },
  {
    id: "MW04",
    category: "microwave",
    code: "(MW04) Thực phẩm nấu chưa chín hoặc nấu quá chín",
    title: "Lò vi sóng Toshiba - Thực phẩm nấu chưa chín / quá chín",
    description: "Model: MW3-EM26PE(BM)VN và các model lò vi sóng Toshiba điện tử tương tự",
    steps: [
      { text: "Nấu chưa chín: kiểm tra đã chọn đúng mức công suất và đủ thời gian theo khối lượng/loại thực phẩm chưa → Tăng thời gian hoặc công suất." },
      { text: "Nấu quá chín: kiểm tra thời gian/công suất cài đặt có quá cao so với loại thực phẩm không → Giảm thời gian hoặc công suất." },
      { text: "Hướng dẫn khách tham khảo bảng thời gian nấu theo loại thực phẩm trong sách HDSD đi kèm máy." },
    ],
  },
  {
    id: "MW05",
    category: "microwave",
    code: "(MW05) Xuất hiện hồ quang điện / tia lửa bên trong lò",
    title: "Lò vi sóng Toshiba - Xuất hiện hồ quang điện, tia lửa bên trong lò",
    description: "Model: MW3-EM26PE(BM)VN và các model lò vi sóng Toshiba điện tử tương tự",
    steps: [
      { text: "Ngừng sử dụng ngay lập tức, rút phích cắm." },
      { text: "Kiểm tra có dùng đồ kim loại, giấy bạc hoặc đĩa có viền kim loại trong lò không → Đây là nguyên nhân phổ biến nhất gây tia lửa." },
      { text: "Kiểm tra khoang lò có bị bẩn (dầu mỡ, vụn thức ăn bám) gây phóng điện không → Vệ sinh sạch khoang lò." },
      { text: "Nếu đã loại bỏ nguyên nhân trên mà vẫn còn hồ quang điện khi dùng đồ an toàn → Tạo WO chuyển ASP kiểm tra, không tiếp tục sử dụng." },
    ],
  },
  {
    id: "MW06",
    category: "microwave",
    code: "(MW06) Nước đọng/thoát ra khỏi khay khi nấu, khay kính xoay gây ồn",
    title: "Lò vi sóng Toshiba - Nước đọng trên khay, khay kính xoay phát ra tiếng ồn",
    description: "Model: MM-EM25PE(BM) và các model lò vi sóng Toshiba tương tự",
    steps: [
      { text: "Nước đọng/thoát ra khỏi khay khi nấu thực phẩm nhiều nước (canh, súp...) → Đây là hiện tượng bình thường do hơi nước ngưng tụ." },
      { text: "Khay kính xoay phát tiếng ồn: kiểm tra vòng đỡ (roller ring) bên dưới khay đã đặt đúng vị trí, không bị lệch, không dính vụn thức ăn không → Vệ sinh và lắp lại đúng vị trí." },
      { text: "Nếu tiếng ồn vẫn còn sau khi vệ sinh/lắp lại → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "MW07",
    category: "microwave",
    code: "(MW07) Lò tự khởi động khi không có thức ăn bên trong",
    title: "Lò vi sóng Toshiba - Cảnh báo không vận hành lò khi không có thức ăn",
    description: "Model: MW3-EG26PE(BM)VN và các model lò vi sóng Toshiba tương tự",
    steps: [
      { text: "Cảnh báo khách hàng: KHÔNG được cho lò vi sóng chạy khi không có thực phẩm/nước bên trong — có thể làm hỏng bộ phát sóng (magnetron) của lò." },
      { text: "Nếu khách phản ánh lò tự chạy dù chưa nhấn nút (không phải do vô tình chạm nút) → Tạo WO chuyển ASP kiểm tra bo mạch/nút bấm ngay, ngừng sử dụng để đảm bảo an toàn." },
    ],
  },
];
