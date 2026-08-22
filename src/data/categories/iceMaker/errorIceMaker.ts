import type { ErrorItem } from "../../errors";

// 21/08/2026: Mã lỗi/xử lý sự cố cho Máy làm đá viên COMFEE, trích từ mục "XỬ LÝ SỰ CỐ"
// trong sách HDSD chính hãng RCI12BL1VN(E) (feelcomfee.com/vn). Đây là ngành hàng mới,
// hiện chỉ có 1 model trong danh sách sản phẩm của app.
export const iceMakerError: ErrorItem[] = [
  {
    id: "IM01",
    category: "iceMaker",
    code: "(IM01) Hình dạng hoặc chất lượng đá kém",
    title: "Máy làm đá Comfee - Hình dạng/chất lượng đá kém",
    description: "Đá làm ra không đúng hình dạng hoặc chất lượng kém (Model: RCI12BL1VN(E))",
    steps: [
      { text: "Kiểm tra máy có đủ khoảng cách thông gió xung quanh không (tối thiểu ~7.6cm mỗi bên) → Di chuyển máy để thông thoáng hơn." },
      { text: "Kiểm tra nhiệt độ nước cấp vào máy — nên trong khoảng 8-25°C (46-77°F) → Nếu quá nóng/quá lạnh, đổi nguồn nước." },
      { text: "Kiểm tra nhiệt độ phòng đặt máy — nên trong khoảng 10-32°C (50-90°F) → Di chuyển máy nếu phòng quá nóng/quá lạnh." },
      { text: "Nếu dàn bay hơi bị biến dạng → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "IM02",
    category: "iceMaker",
    code: "(IM02) Máy phát tiếng ồn lớn",
    title: "Máy làm đá Comfee - Máy phát tiếng ồn lớn",
    description: "Máy phát ra tiếng ồn lớn hơn bình thường khi hoạt động",
    steps: [
      { text: "Kiểm tra máy đã lâu chưa được vệ sinh → Vệ sinh định kỳ 1-2 tuần/lần." },
      { text: "Kiểm tra máy có đang thiếu nước không → Thêm nước vào máy." },
      { text: "Nếu đã vệ sinh và đủ nước mà vẫn ồn (nghi ngờ quạt hoặc bơm hỏng) → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "IM03",
    category: "iceMaker",
    code: "(IM03) Đèn báo \"ĐÁ ĐẦY\" sáng",
    title: "Máy làm đá Comfee - Đèn báo Đá Đầy sáng liên tục",
    description: "Đèn báo đầy đá sáng dù khay đá chưa đầy",
    steps: [
      { text: "Kiểm tra đá có đang chặn cảm biến báo đầy không → Làm rỗng khay đựng đá." },
      { text: "Kiểm tra cảm biến có bị bẩn không → Lau sạch cảm biến." },
      { text: "Nếu vẫn báo đầy sau khi làm rỗng khay và lau cảm biến → Tạo WO chuyển ASP kiểm tra cảm biến." },
    ],
  },
  {
    id: "IM04",
    category: "iceMaker",
    code: "(IM04) Các viên đá dính vào nhau",
    title: "Máy làm đá Comfee - Đá dính chùm vào nhau",
    description: "Các viên đá ra khỏi máy bị dính thành khối",
    steps: [
      { text: "Kiểm tra chu kỳ làm đá có bị chạy quá lâu không → Dừng máy, chờ đá tan bớt rồi khởi động lại." },
      { text: "Kiểm tra nhiệt độ nước cấp vào — nếu quá thấp, dễ làm đá dính nhau → Đổi nguồn nước ở nhiệt độ 8-25°C (46-77°F)." },
    ],
  },
  {
    id: "IM05",
    category: "iceMaker",
    code: "(IM05) Máy không làm đá được",
    title: "Máy làm đá Comfee - Máy không làm ra đá",
    description: "Máy chạy nhưng không tạo ra đá",
    steps: [
      { text: "Kiểm tra nhiệt độ phòng/nước có đang quá cao so với khuyến nghị không." },
      { text: "Kiểm tra hệ thống bơm nước có hoạt động không, có bị rò rỉ không." },
      { text: "Nếu đã kiểm tra các bước trên mà vẫn không ra đá → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "IM06",
    category: "iceMaker",
    code: "(IM06) Đèn báo \"THÊM NƯỚC\" sáng",
    title: "Máy làm đá Comfee - Đèn báo Thêm Nước sáng",
    description: "Đèn báo mực nước thấp sáng",
    steps: [
      { text: "Kiểm tra mức nước trong bình chứa → Nếu thấp, thêm nước." },
      { text: "Sau khi thêm nước, nhấn nút khởi động lại (Restart) để máy tiếp tục hoạt động." },
    ],
  },
];
