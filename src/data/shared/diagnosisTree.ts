export interface DiagnosisNode {
  id: string;
  label: string; // Tên hiển thị trên nút bấm
  title?: string; // Tiêu đề hiển thị khi chọn
  guide?: string; // Hướng dẫn chẩn đoán / Câu hỏi tiếp theo
  result?: string; // Kết quả khắc phục cuối cùng (nếu là bước cuối)
  children?: DiagnosisNode[]; // Các nhánh con tiếp theo
}

export const diagnosisTree: DiagnosisNode[] = [
  {
    id: "washing",
    label: "🧺 Máy giặt & Máy sấy",
    title: "CHẨN ĐOÁN MÁY GIẶT - MÁY SẤY",
    guide: "Khách hàng phản ánh hiện tượng nào sau đây trên máy giặt?",
    children: [
      {
        id: "w_spin",
        label: "1. Máy không vắt (Nước không thoát ra được)",
        title: "Khắc phục Máy giặt không vắt do không thoát nước",
        result:
          "👉 **Hướng dẫn khách kiểm tra:**\n1. Kiểm tra ống thoát nước có bị gập khúc hoặc nâng quá cao (>1m) không.\n2. Vặn nắp bộ lọc bơm xả (ở góc dưới bên phải máy) để làm sạch xơ vải, tiền xu kẹt.\n3. Nếu bơm không kêu và không xả nước ➔ Tạo ticket KTV kiểm tra Motor bơm xả.",
      },
      {
        id: "w_vibration",
        label: "2. Máy rung lắc mạnh & đập thùng khi vắt",
        title: "Khắc phục Máy giặt rung lắc mạnh",
        result:
          "👉 **Hướng dẫn khách kiểm tra:**\n1. Kiểm tra 4 chân máy giặt có kê cân bằng trên mặt sàn phẳng không.\n2. Đồ giặt bên trong có bị xoắn cục dồn về một phía không (tạm dừng, tơi đồ ra).\n3. Đối với máy mới lắp: Đã tháo 4 bu-lông vận chuyển phía sau lưng máy chưa.",
      },
      {
        id: "w_overflow",
        label: "3. Máy cấp nước liên tục không ngắt (Tràn nước)",
        title: "Khắc phục Lỗi cấp nước liên tục",
        result:
          "👉 **Hướng dẫn khách kiểm tra:**\n1. Rút phích cắm điện nếu nước vẫn chảy vào ➔ Hỏng van cấp nước (kẹt cơ).\n2. Nếu rút điện nước ngắt ngay ➔ Lỗi cảm biến phao áp lực hoặc bo mạch điều khiển ➔ Báo KTV hỗ trợ.",
      },
      {
        id: "w_door_lock",
        label: "4. Máy giặt xong không mở được cửa (Máy cửa ngang)",
        title: "Xử lý kẹt cửa máy giặt cửa trước",
        result:
          "👉 **Hướng dẫn xử lý:**\n1. Chờ 2-3 phút sau khi kết thúc chu trình để công tắc nhiệt nhả chốt an toàn.\n2. Kiểm tra bên trong lồng còn nước không (máy sẽ khóa cửa nếu mực nước còn cao).\n3. Dùng dây kéo mở cửa khẩn cấp ở góc nắp bơm xả dưới đáy máy.",
      },
    ],
  },
  {
    id: "dishwasher",
    label: "🍽️ Máy rửa chén",
    title: "CHẨN ĐOÁN MÁY RỬA CHÉN",
    guide: "Khách hàng gặp sự cố nào dưới đây trên máy rửa chén?",
    children: [
      {
        id: "d_e4",
        label: "1. Máy báo lỗi E4 (Trào nước ra khay đáy)",
        title: "Xử lý lỗi E4 trào nước máy rửa chén",
        result:
          "👉 **Nguyên nhân & Hướng dẫn:**\n1. Do dùng sai chất tẩy rửa thông thường tạo quá nhiều bọt trào xuống đáy.\n2. Khóa van nước chính, ngắt nguồn điện, nghiêng máy 45 độ về phía sau để xả bớt nước khay đáy rồi thử lại.\n3. Nếu vẫn báo E4 ➔ Báo KTV kiểm tra công tắc phao chống tràn.",
      },
      {
        id: "d_white_spot",
        label: "2. Rửa xong chén đĩa có vệt mờ trắng / Đốm cặn",
        title: "Xử lý vệt trắng trên bát đĩa máy rửa chén",
        result:
          "👉 **Nguyên nhân & Hướng dẫn:**\n1. Hết muối làm mềm nước hoặc chưa cài đặt đúng mức độ cứng nước (Xem bảng `H1-H6`).\n2. Nắp khoang chứa muối bị vặn lỏng làm nước muối rò ra ngoài.\n3. Thiếu nước trợ xả (Rinse Aid) ➔ Bổ sung nước trợ xả và chỉnh lên mức `d4 - d5`.",
      },
      {
        id: "d_water_remain",
        label: "3. Đọng nước ở đáy lòng máy sau khi kết thúc",
        title: "Xử lý đọng nước đáy máy rửa chén",
        result:
          "👉 **Hướng dẫn:**\n1. Tháo cụm lưới lọc đáy ra rửa sạch cặn rác, thức ăn thừa dưới vòi nước chảy.\n2. Kiểm tra đầu ống xả gắn vào xiphong chậu rửa có bị bịt tắc nút cao su không.",
      },
      {
        id: "d_not_dry",
        label: "4. Chén đĩa rửa xong không khô",
        title: "Xử lý chén đĩa không khô sau khi rửa",
        result:
          "👉 **Hướng dẫn:**\n1. Bật chức năng Khí nóng (Hot Air) hoặc Tự hé cửa (Auto Open).\n2. Không lấy chén đĩa ra ngay, nên chờ 15 phút sau khi kết thúc chu trình.\n3. Đảm bảo đã đổ đầy nước trợ xả (Rinse Aid) để làm bóng và róc nước.",
      },
    ],
  },
  {
    id: "fridge",
    label: "🧊 Tủ lạnh Toshiba",
    title: "CHẨN ĐOÁN TỦ LẠNH",
    guide: "Hiện tượng thực tế tại nhà khách đối với tủ lạnh:",
    children: [
      {
        id: "f_hot_side",
        label: "1. Tủ lạnh hai bên hông rất nóng",
        title: "Hiện tượng hai bên hông tủ lạnh nóng",
        result:
          "👉 **Giải thích cho khách:**\n* Đây là hiện tượng **HOÀN TOÀN BÌNH THƯỜNG** do dàn nóng tản nhiệt được tích hợp ở 2 bên thành tủ.\n* Cần kê tủ cách tường tối thiểu 10cm mỗi bên để thông thoáng tản nhiệt tốt hơn.",
      },
      {
        id: "f_weak_cool",
        label: "2. Ngăn mát không lạnh / Làm lạnh yếu",
        title: "Xử lý Ngăn mát tủ lạnh kém lạnh",
        result:
          "👉 **Hướng dẫn khách kiểm tra:**\n1. Kiểm tra nhiệt độ cài đặt (Nên đặt 3°C - 4°C).\n2. Không nhồi nhét đồ ăn che kín họng gió thổi hơi lạnh ở vách sau.\n3. Kiểm tra gioăng cao su cửa có bị hở không (thử kẹp tờ tiền vào mép cửa xem có bị tuột không).",
      },
      {
        id: "f_smell",
        label: "3. Tủ có mùi hôi khó chịu",
        title: "Khử mùi hôi tủ lạnh",
        result:
          "👉 **Hướng dẫn:**\n1. Bọc kín thực phẩm tươi sống hoặc nặng mùi bằng hộp có nắp đậy kín.\n2. Rút điện, vệ sinh lòng tủ bằng nước ấm pha bột Baking Soda.\n3. Kích hoạt tính năng kháng khuẩn/khử mùi PureBIO trên bảng điều khiển.",
      },
    ],
  },
];
