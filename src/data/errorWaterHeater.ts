import type { ErrorItem } from "./errors";

export const waterHeaterError: ErrorItem[] = [
  {
    id: "WH01",
    category: "waterHeater",
    code: "(WH01) Nước ngõ ra không nóng",
    title: "Máy nước nóng - Nước ngõ ra không nóng",
    description: "Nước ngõ ra không nóng",
    steps: [
      { text: "Kiểm tra màn hình có hiển thị, hoặc có sáng đèn hay không (Tuỳ Model) → Xem Cầu dao (CB) đã bật hay chưa, bật lại và thử lại máy." },
      { text: "Kiểm tra nhiệt độ trên bảng điều khiển đang set mức nào? → Điểu chỉnh lên mức cao" },
      { text: "Kiểm tra nhiệt độ nước đầu vào xem có lạnh quá không (<25 độ) → Tư vấn KH do thời tiết khu vực" },
      { text: "Kiểm tra lưu lượng nước đầu vào có đang quá lớn không? → Nếu có, giảm lưu lượng nước lại." },
      { text: "Kiểm tra điện nguồn cấp cho máy có bình thường không? → Nếu không khắc phục được tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "WH02",
    category: "waterHeater",
    code: "(WH02) Bơm không hoạt động",
    title: "Máy nước nóng - Bơm không hoạt động",
    description: "Bơm không hoạt động",
    steps: [
      { text: "Kiểm tra model máy: Nếu model là 45MCPVN, 45EMC1PVN là có model có bơm." },
      { text: "Kiểm tra đã bật chức năng \"Pump\" chưa? [bên hông máy] →Nếu chưa → Bật lên" },
      { text: "Kiểm tra áp lực nước cấp vào máy → Có bị khóa van không? → Mở ra → Có bị yếu quá không? → Nếu nước vào yếu sẽ ảnh hưởng đến nước ra" },
      { text: "Kiểm tra lưới lọc nước đầu vào có bị bẩn không? → Nếu bị bẩn → Vệ sinh và lắp lại. → Nếu không khắc phục được tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "WH03",
    category: "waterHeater",
    code: "(WH03) Nước ra quá nóng/nhiệt độ không ổn định",
    title: "Máy nước nóng - Nước ra quá nóng/nhiệt độ không ổn định",
    description: "Nước ra quá nóng/nhiệt độ không ổn định",
    steps: [
      { text: "Kiểm tra nhiệt độ nước trên bảng điều khiển. → Nếu đang set cao, hướng dẫn KH giảm nhiệt độ xuống mức phù hợp" },
      { text: "Nếu nước vẫn còn quá nóng → Kiểm tra lưu lượng nước vào có đang bị thấp, có bị nước yếu không? → Nếu có, mở van hoặc xử lý để nước vào ổn định → Nếu không khắc phục được tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "WH04",
    category: "waterHeater",
    code: "(WH04) Máy bị rò rỉ điện",
    title: "Máy nước nóng - Máy bị rò rỉ điện",
    description: "Máy bị rò rỉ điện",
    steps: [
      { text: "Tắt máy, Ngắt nguồn, ngưng sử dụng Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "WH05",
    category: "waterHeater",
    code: "(WH05) Máy bị rò rỉ nước",
    title: "Máy nước nóng - Máy bị rò rỉ nước",
    description: "Máy bị rò rỉ nước",
    steps: [
      { text: "Xem thời gian lắp đặt, nếu máy mới lắp liên hệ lại đơn vị lắp đặt kiểm tra. Nếu máy đã sử dụng 1 thời gian kiểm tra các bước sau" },
      { text: "Vị trí bị rò rỉ là ở đâu?" },
      { text: "Kiểm tra lại các khớp nối đã khớp chưa?" },
      { text: "Kiểm tra vặn nước đã chặt chưa?" },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "WH06",
    category: "waterHeater",
    code: "(WH06) Máy tắm nóng không nguồn",
    title: "Máy nước nóng - Máy tắm nóng không nguồn",
    description: "Máy tắm nóng không nguồn",
    steps: [
      { text: "Kiểm tra CB đã được bật hay chưa? → Nếu chưa → Bật lên" },
      { text: "Máy có nước hay không? → Kiểm tra nguồn nước vào có đủ như yêu cầu" },
      { text: "Nếu CB đã bật mà máy không hiển thị hoặc có tín hiệu nào → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
];
