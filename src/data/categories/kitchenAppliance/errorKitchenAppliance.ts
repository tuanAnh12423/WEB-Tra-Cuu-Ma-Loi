import type { ErrorItem } from "../../errors";

// 21/08/2026: Mã lỗi/xử lý sự cố cho nhóm Đồ bếp nhỏ COMFEE (nồi chiên không dầu, máy
// ép trái cây, máy làm sữa hạt, máy xay sinh tố), trích từ mục "Xử lý sự cố" trong
// sách HDSD chính hãng của 5 model đang có trong app: CAF-75PGP0A0, CAD-75PG00A0,
// CJC-28SGJ0A0, CBL-50HGBHA0, CBL-60GGKDB0 — nguồn feelcomfee.com/vn.
export const kitchenApplianceError: ErrorItem[] = [
  {
    id: "KA01",
    category: "kitchenAppliance",
    code: "(KA01) Nồi chiên không dầu không hoạt động",
    title: "Nồi chiên không dầu Comfee - Nồi chiên không hoạt động",
    description: "Model: CAF-75PGP0A0, CAD-75PG00A0",
    steps: [
      { text: "Kiểm tra dây nguồn đã cắm vào ổ điện chưa." },
      { text: "Model núm vặn (CAF-75PGP0A0): kiểm tra đã vặn núm hẹn giờ chưa → Xoay núm đến thời gian cần thiết." },
      { text: "Model màn hình cảm ứng (CAD-75PG00A0): kiểm tra đã thiết lập chương trình nấu và nhấn nút Bắt đầu chưa." },
      { text: "Kiểm tra lòng nồi đã được đưa vào đúng vị trí, khớp công tắc an toàn chưa → Đưa lòng nồi vào đúng cách." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "KA02",
    category: "kitchenAppliance",
    code: "(KA02) Thức ăn không chín / chín không đều",
    title: "Nồi chiên không dầu Comfee - Thức ăn không chín hoặc chín không đều",
    description: "Model: CAF-75PGP0A0, CAD-75PG00A0",
    steps: [
      { text: "Thức ăn không chín: kiểm tra lượng thực phẩm có quá nhiều so với dung tích nồi không → Chia nhỏ, chiên nhiều lần." },
      { text: "Thức ăn không chín: kiểm tra nhiệt độ cài đặt có quá thấp không → Tăng nhiệt độ lên phù hợp với món ăn." },
      { text: "Thức ăn chín không đều: hướng dẫn khách lấy lòng nồi ra, lật/đảo thực phẩm giữa chừng khi chiên." },
    ],
  },
  {
    id: "KA03",
    category: "kitchenAppliance",
    code: "(KA03) Xuất hiện khói trắng khi chiên",
    title: "Nồi chiên không dầu Comfee - Xuất hiện khói trắng trong lúc chiên",
    description: "Model: CAF-75PGP0A0, CAD-75PG00A0",
    steps: [
      { text: "Đây thường là khí bốc lên từ dầu mỡ thực phẩm khi nóng lên, không phải lỗi thiết bị." },
      { text: "Hướng dẫn khách vệ sinh sạch lòng nồi sau mỗi lần sử dụng để hạn chế dầu mỡ tồn đọng gây khói ở lần chiên sau." },
    ],
  },
  {
    id: "KA04",
    category: "kitchenAppliance",
    code: "(KA04) Khoai tây/đồ chiên không giòn",
    title: "Nồi chiên không dầu Comfee - Khoai tây hoặc đồ chiên không giòn",
    description: "Model: CAF-75PGP0A0, CAD-75PG00A0",
    steps: [
      { text: "Kiểm tra độ ẩm nguyên liệu — nếu khoai tây còn ướt, hướng dẫn khách làm khô trước khi chiên." },
      { text: "Kiểm tra kích thước miếng cắt — nếu quá to, hướng dẫn cắt nhỏ/mỏng hơn." },
      { text: "Hướng dẫn thêm một lượng dầu ăn phù hợp (theo công thức món) để tăng độ giòn." },
    ],
  },
  {
    id: "KA05",
    category: "kitchenAppliance",
    code: "(KA05) Máy ép trái cây không hoạt động",
    title: "Máy ép trái cây Comfee CJC-28SGJ0A0 - Máy không hoạt động",
    description: "Model: CJC-28SGJ0A0",
    steps: [
      { text: "Kiểm tra nắp máy đã được lắp đúng cách chưa — máy có công tắc bảo vệ, chỉ chạy khi nắp lắp khớp hoàn toàn." },
      { text: "Tháo ra lắp ráp lại đúng thứ tự các bộ phận theo hướng dẫn." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "KA06",
    category: "kitchenAppliance",
    code: "(KA06) Máy ép trái cây rò rỉ nước ép / rung mạnh khi khởi động",
    title: "Máy ép trái cây Comfee CJC-28SGJ0A0 - Rò rỉ nước ép hoặc rung mạnh",
    description: "Model: CJC-28SGJ0A0",
    steps: [
      { text: "Rò rỉ nước ép: kiểm tra nắp đã lắp đúng cách chưa, lưới lọc đã được cố định chặt vào đế hộp động cơ chưa → Lắp lại." },
      { text: "Nguyên liệu ép quá dày/đặc: không thêm nước, cho nguyên liệu vào từ từ, không cho quá nhiều cùng lúc." },
      { text: "Rung mạnh khi khởi động: kiểm tra có quá nhiều bã trái cây dính trên bề mặt nắp không → Dừng máy, làm sạch bã." },
    ],
  },
  {
    id: "KA07",
    category: "kitchenAppliance",
    code: "(KA07) Máy làm sữa hạt báo mã lỗi E2 / C3 / E0",
    title: "Máy làm sữa hạt Comfee CBL-50HGBHA0 - Mã lỗi E2, C3, E0",
    description: "Model: CBL-50HGBHA0",
    steps: [
      { text: "Mã E2 (nước vào hộp động cơ): ngừng sử dụng, lau khô, liên hệ trung tâm bảo hành để thay cối xay hoặc kiểm tra." },
      { text: "Mã C3 (bộ điều khiển nhiệt độ kích hoạt do thực phẩm quá nhiều gây dính đáy): lấy bớt thực phẩm ra, dùng đúng lượng khuyến nghị trong sách HDSD." },
      { text: "Mã E0 (sự cố bo mạch): để nước khô tự nhiên, nếu vẫn báo lỗi → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "KA08",
    category: "kitchenAppliance",
    code: "(KA08) Máy làm sữa hạt: thực phẩm dính đáy / tràn / không nóng / nút không phản hồi",
    title: "Máy làm sữa hạt Comfee CBL-50HGBHA0 - Các sự cố thường gặp khi dùng",
    description: "Model: CBL-50HGBHA0",
    steps: [
      { text: "Thực phẩm dính đáy: kiểm tra lượng thực phẩm và nước đã đúng vạch hướng dẫn chưa → Điều chỉnh lại theo công thức." },
      { text: "Tràn ra ngoài: kiểm tra nắp đã đóng chắc chắn chưa, lượng nguyên liệu có vượt mức khuyến nghị không." },
      { text: "Thức ăn không nóng sau khi chạy xong: kiểm tra đã chọn đúng chức năng làm nóng (không phải chỉ xay) chưa." },
      { text: "Màn hình không sáng: kiểm tra dây nguồn đã cắm đúng cách chưa." },
      { text: "Nút bấm không phản hồi: kiểm tra bảng điều khiển có bị dính nước không → Lau khô bảng điều khiển." },
      { text: "Tiếng ồn lạ bất thường (nghi ngờ động cơ): nếu không rõ nguyên nhân → Tạo WO chuyển ASP/trung tâm bảo hành kiểm tra." },
    ],
  },
  {
    id: "KA09",
    category: "kitchenAppliance",
    code: "(KA09) Máy xay sinh tố không hoạt động",
    title: "Máy xay sinh tố Comfee CBL-60GGKDB0 - Máy không hoạt động",
    description: "Model: CBL-60GGKDB0",
    steps: [
      { text: "Kiểm tra thiết bị đã được cắm điện chưa, ổ cắm có điện không." },
      { text: "Kiểm tra thiết bị đã được bật (núm/nút nguồn) chưa." },
      { text: "Kiểm tra máy có đang bị quá nhiệt không (dùng liên tục lâu) → Xoay núm về vị trí \"0\", để máy nguội rồi dùng lại." },
      { text: "Nếu không khắc phục được → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "KA10",
    category: "kitchenAppliance",
    code: "(KA10) Máy xay sinh tố: lưỡi dao quay chậm / xay không đều / rò rỉ nước",
    title: "Máy xay sinh tố Comfee CBL-60GGKDB0 - Xay không đều hoặc rò rỉ nước",
    description: "Model: CBL-60GGKDB0",
    steps: [
      { text: "Lưỡi dao quay chậm: giảm bớt lượng thực phẩm, thêm chất lỏng, hoặc cắt nguyên liệu thành miếng nhỏ hơn." },
      { text: "Thức ăn không được xay trộn hoàn toàn: kiểm tra các bộ phận đã lắp đặt đúng chưa, ron (gioăng cao su) có bị thiếu/hỏng không → Lắp lại hoặc thay ron." },
      { text: "Rò rỉ nước: kiểm tra ron trên nắp và ron ở cụm lưỡi dao có bị thiếu hoặc hỏng không → Thay ron mới hoặc thay cụm lưỡi dao." },
    ],
  },
];
