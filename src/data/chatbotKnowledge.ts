export interface KnowledgeItem {
  id: string;
  title?: string;
  categoryName?: string;
  keywords: string[]; // Các từ khóa/câu hỏi người dùng có thể gõ
  answer: string; // Câu trả lời cố định
  link?: string; // Link đính kèm nếu có (ví dụ link web/PDF)
}

export const chatbotKnowledge: KnowledgeItem[] = [
  {
    id: "k1",
    keywords: ["bao hanh", "tong dai", "so dien thoại", "hotline", "lien he"],
    answer:
      "📞 **Số tổng đài hỗ trợ bảo hành:** 1800.XXXX (Miễn phí).\n⏰ **Thời gian làm việc:** 8h00 - 17h30 (Từ Thứ 2 đến Thứ 7).",
  },
  {
    id: "k2",
    title: "Chức năng khí nóng máy rửa chén",
    keywords: [
      "khi nóng",
      "khí nóng",
      "khí nong",
      "hot air",
      "khi nong",
      "dw-15f7",
      "dw-15f8",
    ],
    answer:
      "### 📌 [CHƯƠNG TRÌNH KHÍ NÓNG (HOT AIR) CỦA MÁY RỬA CHÉN]\n---\nLàm khô chén đĩa của bạn với 3 tùy chọn. Đáp ứng các nhu cầu khác nhau, các chế độ này có thể được sử dụng sau khi chén đĩa đã được rửa sạch.\n\n* **Làm mới & Sấy khô 60 phút**\n* **Làm ấm & Sấy khô 120 phút**\n* **Rửa tráng & Sấy khô 100 phút**",
  },
  {
    id: "k3",
    title: "Chức năng bảo quản máy rửa chén",
    keywords: [
      "bảo quản",
      "bao quan",
      "storage",
      "dw-15f7",
      "dw-15f8",
      "dw-15f9",
    ],
    answer:
      "### CHỨC NĂNG BẢO QUẢN MÁY RỬA CHÉN\nDưới tác động của tuabin quạt, chức năng bảo quản có thể mang lại hiệu quả sấy tốt hơn và giữ không khí trong máy rửa chén luôn tươi mới.\n\n* **Thời gian hoạt động:** Tối đa 168 giờ sau khi hoàn thành chương trình rửa.\n* **Lưu ý:** Không thể sử dụng cùng lúc với chức năng *Auto Open* (Mở cửa tự động).\n* **Chế độ hỗ trợ:** Tự động AI, Chuyên sâu, Tiết kiệm, 90 phút, Vệ sinh, Đồ thủy tinh, Khử trùng, Yên tĩnh...",
  },
  {
    id: "k4",
    title: "Chức năng tăng tốc máy rửa chén",
    keywords: [
      "tăng tốc",
      "tang toc",
      "tăng tôc",
      "tang tôc",
      "tăng toc",
      "dw-15f7",
      "dw-15f8",
      "dw-15f9",
    ],
    answer:
      "### 📌 TÍNH NĂNG TĂNG TỐC TRÊN MÁY RỬA CHÉN\n---\nGiảm thời gian chương trình. \n\n* **Chỉ sử dụng với các chế độ:** Chuyên sâu, Tiết kiệm, 90 phút, Đồ thủy tinh, Khử trùng, Yên tĩnh",
  },
  {
    id: "k5",
    title: "Chức năng sấy tăng cường ",
    keywords: [
      "sấy tăng cường",
      "tăng cường",
      "sây tang cuong",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 📌 SẤY TĂNG CƯỜNG MÁY RỬA CHÉN DW-15F9(B)-VN\n---\nĐể có kết quả sấy khô tốt hơn\n\n* **Chương trình sử dụng:** Chức năng này chỉ có thể sử dụng với các chương trình Chuyên sâu, tiết kiệm, 90 phút, Đồ thủy tinh, Khử trùng.",
  },
  {
    id: "k6",
    title: "Chức năng khoá trẻ em",
    keywords: [
      "khoá trẻ em",
      "khoa tre em",
      "DW-15F9(B)-VN",
      "child lock",
      "lock",
    ],
    answer:
      "### 📌 KHOÁ TRẺ EM DW-15F9(B)-VN\n---\nChức năng này cho phép bạn khóa các nút trên bảng điều khiển, ngăn trẻ em vô tình khởi động máy rửa chén bằng cách nhấn các nút trên bảng điều khiển\n\n- Chỉ nút Nguồn vẫn hoạt động. Để khóa hoặc mở khóa các nút trên bảng điều khiển, nhấn giữ nút này trong 3 giây.\n",
  },
  {
    id: "k7",
    title: "Màn hình hiển thị & Đèn báo biểu tượng",
    keywords: [
      "man hinh hien thi DW-15F9(B)-VN",
      "den bao DW-15F9(B)-VN",
      "bieu tuong DW-15F9(B)-VN",
      "den bao nuoc DW-15F9(B)-VN",
      "den bao tro xa DW-15F9(B)-VN",
      "den bao muoi DW-15F9(B)-VN",
      "den h DW-15F9(B)-VN",
    ],
    answer:
      "### 🖥️ MÀN HÌNH HIỂN THỊ & ĐÈN BÁO DW-15F9(B)-VN\n---\nÝ nghĩa các biểu tượng và đèn báo hiển thị trên bảng điều khiển:\n\n* **[ 8:88 ] - Thời gian & Mã lỗi:** Khi chọn chương trình, màn hình hiển thị thời gian còn lại, thời gian hẹn giờ và mã lỗi (nếu có).\n* **[ 🚰 ] - Đèn báo thiếu nước:** Cảnh báo nguồn nước cấp vào máy rửa chén đang bị thiếu hoặc chưa mở van nước.\n* **[ ☀️ ] - Đèn báo nước trợ xả:** Đèn sáng báo hiệu máy rửa chén sắp hết nước trợ xả (Rinse Aid) và cần thêm vào.\n* **[ 🔀 / S ] - Đèn báo muối:** Đèn sáng báo hiệu máy rửa chén sắp hết muối làm mềm nước (Salt) và cần thêm vào.\n* **[ H ] - Đèn báo Bảo quản:** Đèn sáng hiển thị số giờ khi chức năng Bảo quản (Fresh) được chọn.",
  },
  {
    id: "k8",
    title: "Chương trình Tải xuống & Chế độ rửa qua ứng dụng",
    keywords: [
      "tai xuong",
      "chuong trinh tai xuong",
      "do thuy tinh",
      "rua nhanh",
      "ngam",
      "khu trung",
      "rua hai san",
      "rua trai cay",
      "ung dung",
      "app",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 📲 CHƯƠNG TRÌNH TẢI XUỐNG & CHẾ ĐỘ RỬA QUA ỨNG DỤNG\n---\nChương trình này bao gồm nhiều chế độ rửa có thể được chọn trong ứng dụng. Nếu chương trình rửa chưa được kích hoạt trong ứng dụng, chế độ **'Đồ thủy tinh'** sẽ được kích hoạt mặc định.\n\n* **[ 🍷✨ ] - Đồ thủy tinh:** Dành cho chén đĩa và đồ thủy tinh bị bẩn nhẹ.\n* **[ 🍷⏩ ] - Rửa nhanh:** Dành cho chén đĩa bẩn nhẹ, thời gian làm sạch tương đối ngắn.\n* **[ 🚿 ] - Ngâm:** Để rửa chén đĩa mà bạn dự định rửa vào cuối ngày.\n* **[ ♨️ / 72°C ] - Khử trùng:** Sử dụng để khử trùng chén đĩa và đồ thủy tinh của bạn. Nhiệt độ nước cao nhất là **72°C**.\n* **[ 🦞 ] - Rửa hải sản:** Dùng để làm sạch hải sản, tôm hùm,...\n* **[ 🍎 ] - Rửa trái cây:** Dùng để làm sạch trái cây, rau củ, vỏ,...",
  },
  {
    id: "k9",
    title: "Các đèn báo chương trình rửa chính DW-15F9(B)-VN",
    keywords: [
      "chuong trinh rua",
      "den bao chuong trinh",
      "tu dong ai",
      "chuyen sau",
      "tiet kiem",
      "eco",
      "90 phut",
      "ve sinh",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 🍽️ CÁC ĐÈN BÁO CHƯƠNG TRÌNH RỬA CHÍNH\n---\nÝ nghĩa các biểu tượng chương trình rửa chính trên bảng điều khiển:\n\n* **[ Ⓐ ] - Tự động AI:** Dành cho các đồ dùng hàng ngày từ ít đến nhiều vết bẩn, với khả năng tự động phát hiện lượng bẩn.\n* **[ 🍳 ] - Chuyên sâu:** Dành cho chén đĩa có vết dầu mỡ và dụng cụ nấu ăn bẩn nhiều.\n* **[ eco ] - Tiết kiệm:** Đây là chương trình tiêu chuẩn. Dành cho chén đĩa và dụng cụ bếp bẩn thông thường (như nồi, đĩa, ly, chảo).\n* **[ 🕒90' ] - 90 phút:** Đối với vật dụng bẩn thông thường cần rửa nhanh.\n* **[ ✨ ] - Vệ sinh:** Chương trình này giúp làm sạch bên trong máy rửa chén một cách hiệu quả.",
  },
  {
    id: "k10",
    title: "Chức năng Rửa nửa tải (½) DW-15F9(B)-VN",
    keywords: [
      "rua nua tai",
      "nua tai",
      "half load",
      "1/2",
      "tiet kiem dien nuoc",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 🍽️ CHỨC NĂNG RỬA NỬA TẢI (½)\n---\nKhi bạn có khoảng hoặc ít hơn một nửa số chén đĩa để rửa, bạn có thể chọn chức năng này để tiết kiệm điện và nước.\n\n* **Biểu tượng hiển thị:** **[ ½ ]**\n* **Lưu ý chương trình áp dụng:** Chức năng này chỉ có thể sử dụng với các chương trình *Chuyên sâu*, *Tiết kiệm*, *90 phút*, *Đồ thủy tinh*, *Khử trùng*.",
  },
  {
    id: "k11",
    title: "Hướng dẫn Kết nối mạng Wi-Fi & Ứng dụng DW-15F9(B)-VN",
    keywords: [
      "ket noi wifi",
      "wifi",
      "ket noi mang",
      "internet",
      "khong day",
      "ket noi app",
      "ung dung",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 📶 KẾT NỐI MẠNG INTERNET KHÔNG DÂY (WI-FI)\n---\nHướng dẫn thao tác kết nối máy rửa chén với ứng dụng điều khiển qua Wi-Fi:\n\n* **Thao tác kích hoạt:** Nhấn giữ nút Wi-Fi **[ 📶 ]** trong **hơn 3 giây**.\n* **Trạng thái kết nối:** Sau một tiếng “bíp” ngắn, đèn báo Wi-Fi tương ứng sẽ bắt đầu **nhấp nháy chậm**, thể hiện máy đang trong trạng thái kết nối mạng với ứng dụng.\n* **Kết nối thành công:** Khi kết nối mạng thành công, đèn báo Wi-Fi **[ 📶 ]** sẽ **sáng liên tục**.",
  },
  {
    id: "k12",
    title: "Bảng thông số chi tiết các chương trình rửa DW-15F9(B)-VN",
    keywords: [
      "bang thong so",
      "thoi gian rua",
      "tieu thu dien",
      "tieu thu nuoc",
      "nhiet do nuoc",
      "vien rua",
      "dung dich rua",
      "nuoc tro xa",
      "rua hai san",
      "rua trai cay",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 📊 BẢNG THÔNG SỐ CÁC CHƯƠNG TRÌNH RỬA\n---\nChi tiết thời gian, nhiệt độ và mức tiêu thụ điện nước cho từng chương trình:\n\n* **[ eco ] Tiết kiệm:** 50°C | 215 phút | 1,2 kWh | 15,0 L | 5/28,8g (1-2 viên)\n* **[ Ⓐ ] Tự động AI:** 45~55°C | 140-195 phút | 1,15-1,45 kWh | 11-14,8 L | 5/28,8g (1-2 viên)\n* **[ 🍳 ] Chuyên sâu:** 65°C | 195 phút | 1,44 kWh | 14,9 L | 30g (1-2 viên)\n* **[ 🕒90' ] 90 phút:** 60°C | 90 phút | 0,89 kWh | 12,1 L | 30g (1-2 viên)\n* **[ ✨ ] Vệ sinh:** 60°C | 175 phút | 1,4 kWh | 15,2 L | 30g (1-2 viên)\n* **[ 📲🍷 ] Đồ thủy tinh:** 50°C | 140 phút | 1,0 kWh | 14,5 L | 5/28,8g (1-2 viên)\n* **[ 📲⏩ ] Rửa nhanh:** 40°C | 30 phút | 0,75 kWh | 11,4 L | 20g (Không cần trợ xả)\n* **[ 📲🚿 ] Ngâm:** Không gia nhiệt | 15 phút | 0,015 kWh | 4,1 L (Không hóa chất)\n* **[ 📲♨️ ] Khử trùng:** 72°C | 208 phút | 1,65 kWh | 14,9 L | 30g (1-2 viên)\n* **[ 📲🦞 ] Rửa hải sản:** 36°C / 0°C | 25/15 phút | 0,025 kWh | 11,3 L (Không hóa chất/không cần trợ xả)\n* **[ 📲🍎 ] Rửa trái cây:** 36°C / 0°C | 15/10 phút | 0,025 kWh | 7,6 L (Không hóa chất/không cần trợ xả)",
  },
  {
    id: "k13",
    title: "Quy trình Khởi động & Vận hành máy rửa chén DW-15F9(B)-VN",
    keywords: [
      "khoi dong",
      "van hanh",
      "cach dung",
      "huong dan su dung",
      "bat may",
      "nguon dien",
      "nguon nuoc",
      "bat dau",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 🚀 QUY TRÌNH KHỞI ĐỘNG & VẬN HÀNH MÁY RỬA CHÉN\n---\nHướng dẫn thao tác các bước khởi động và vận hành máy:\n\n* **Bước 1 (Nguồn điện):** Cắm phích cắm vào ổ điện. Yêu cầu nguồn điện **220-240V AC 50Hz**, ổ điện chịu tải **10A**.\n* **Bước 2 (Nguồn nước):** Đảm bảo nguồn cung cấp nước đã được mở/bật ở áp suất tối đa.\n* **Bước 3 (Bật nguồn):** Nhấn nút **Nguồn [ ⑼ ]** để bật máy rửa chén.\n* **Bước 4 (Chọn chương trình):** Nhấn các nút **[ < ]** và **[ > ]** để chọn chương trình rửa; đèn báo tương ứng sẽ sáng lên (Tự động AI, Chuyên sâu, Tiết kiệm...).\n* **Bước 5 (Bắt đầu):** Nhấn nút **Bắt đầu/Tạm dừng [ ▷❚❚ ]** để máy bắt đầu vận hành.",
  },
  {
    id: "k14",
    title: "Hướng dẫn Thay đổi chương trình giữa chu trình DW-15F9(B)-VN",
    keywords: [
      "thay doi chuong trinh",
      "doi chuong trinh",
      "huy chuong trinh",
      "reset chuong trinh",
      "tam dung",
      "giu 3s",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 🔄 THAY ĐỔI CHƯƠNG TRÌNH GIỮA CHU TRÌNH\n---\n**Lưu ý quan trọng:** Một chương trình chỉ có thể được thay đổi nếu chương trình chỉ vừa chạy trong thời gian ngắn. Nếu đã chạy lâu, dung dịch/viên rửa chén có thể đã được giải phóng hoặc nước rửa đã bị xả. Khi đó, cần đặt lại máy và cho thêm viên rửa vào ngăn đựng.\n\n* **Bước 1 (Tạm dừng):** Nhấn nút **Bắt đầu/Tạm dừng [ ▷❚❚ ]** để tạm dừng chu trình rửa hiện tại.\n* **Bước 2 (Hủy chương trình):** Nhấn giữ nút **Bắt đầu/Tạm dừng [ ▷❚❚ ]** trong **hơn 3 giây**, máy rửa chén sẽ hủy chương trình cũ và chuyển vào chế độ chờ.\n* **Bước 3 (Chọn lại):** Nhấn các nút **[ < ]** và **[ > ]** để chọn chương trình rửa mới mong muốn.\n* **Bước 4 (Khởi động lại):** Nhấn nút **Bắt đầu/Tạm dừng [ ▷❚❚ ]** để máy chạy chương trình mới.",
  },
  {
    id: "k15",
    title: "Hướng dẫn Thêm chén đĩa trong quá trình rửa DW-15F9(B)-VN",
    keywords: [
      "them chen dia",
      "them do",
      "bo sung chen dia",
      "bo them do",
      "cho them do",
      "mo cua giua chung",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 🍽️ HƯỚNG DẪN THÊM CHÉN ĐĨA TRONG QUÁ TRÌNH RỬA\n---\nChén đĩa bổ sung có thể được đặt thêm vào bất kỳ lúc nào trước khi chương trình rửa bắt đầu. Nếu muốn thêm chén đĩa trong quá trình máy đang rửa, hãy thao tác theo các bước sau:\n\n* **Bước 1 (Tạm dừng):** Nhấn nút **Bắt đầu/Tạm dừng [ ▷❚❚ ]** để tạm dừng chương trình rửa.\n* **Bước 2 (Mở cửa):** Chờ **5 giây** rồi mới tiến hành mở cửa máy rửa chén.\n* **Bước 3 (Thêm đồ):** Đặt thêm chén đĩa cần rửa vào các giá cống.\n* **Bước 4 (Đóng cửa):** Đóng chặt cửa máy rửa chén lại.\n* **Bước 5 (Tiếp tục):** Nhấn nút **Bắt đầu/Tạm dừng [ ▷❚❚ ]**, sau **10 giây** máy rửa chén sẽ tự động bắt đầu chạy tiếp.",
  },
  {
    id: "k16",
    title: "Hướng dẫn Kết thúc chương trình rửa & Lưu ý an toàn DW-15F9(B)-VN",
    keywords: [
      "ket thuc chuong trinh",
      "rua xong",
      "hien thi end",
      "tat may",
      "mo cua",
      "lay chen dia",
      "canh bao an toan",
      "nuoc nong",
      "bong nuoc",
      "DW-15F9(B)-VN",
    ],
    answer:
      '### 🔔 KẾT THÚC CHƯƠNG TRÌNH RỬA & LƯU Ý AN TOÀN\n---\nSau khi chương trình kết thúc, máy sẽ hiển thị **"End"** trên màn hình và phát ra âm báo trong **8 giây**.\n\n* **1. Tắt máy:** Nhấn nút **Nguồn [ ⑼ ]** để tắt máy rửa chén.\n* **2. Mở cửa cẩn thận:** Chén đĩa khi vừa rửa xong còn rất nóng và dễ bị hỏng hơn. Cần để nguội khoảng **15 phút** trước khi lấy ra khỏi máy.\n* **3. Trạng thái sau rửa:** Việc bên trong lòng máy rửa chén vẫn còn ướt là hoàn toàn bình thường.\n\n⚠️ **CẢNH BÁO AN TOÀN:**\n*Việc mở cửa trong quá trình máy đang rửa là cực kỳ nguy hiểm vì có thể gây bỏng nghiêm trọng do nước nóng.*',
  },
  {
    id: "k17",
    title: "Hướng dẫn Bộ làm mềm nước máy rửa chén DW-15F9(B)-VN",
    keywords: [
      "bo lam mem nuoc",
      "lam mem nuoc",
      "do cung cua nuoc",
      "nuoc cung",
      "chinh do cung",
      "num xoay",
      "khoang chat",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 💧 SỬ DỤNG MÁY RỬA CHÉN - BỘ LÀM MỀM NƯỚC\n---\nThông tin chi tiết về nguyên lý và cách cài đặt bộ làm mềm nước:\n\n* **Cách cài đặt:** Bộ làm mềm nước phải được cài đặt bằng tay, bằng cách sử dụng núm xoay để điều chỉnh.\n* **Chức năng chính:** Bộ làm mềm nước được thiết kế để loại bỏ các khoáng chất và muối khỏi nước, tránh những tác động có hại hoặc bất lợi đến hoạt động của thiết bị.\n* **Độ cứng của nước:** Càng có nhiều khoáng chất, nước của bạn càng cứng.\n* **Khuyên dùng:** Bộ làm mềm nước nên được điều chỉnh theo độ cứng của nước tại khu vực của bạn. Cơ quan Cấp nước địa phương có thể tư vấn cho bạn về độ cứng của nước trong khu vực.",
  },
  {
    id: "k18",
    title: "Hướng dẫn Điều chỉnh mức tiêu thụ muối DW-15F9(B)-VN",
    keywords: [
      "dieu chinh muc tieu thu muoi",
      "chinh muoi",
      "cai dat muoi",
      "muc muoi",
      "chinh do cung nuoc",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 🧂 ĐIỀU CHỈNH MỨC TIÊU THỤ MUỐI\n---\nMáy rửa chén cho phép điều chỉnh lượng muối tiêu thụ dựa trên độ cứng của nước được sử dụng nhằm tối ưu hóa hiệu quả rửa.\n\n* **Bước 1 (Bật máy):** Đóng cửa máy rửa chén và nhấn bật thiết bị.\n* **Bước 2 (Vào cài đặt):** Trong vòng **60 giây** sau khi bật máy, nhấn giữ nút **[ > ]** trong **hơn 5 giây** để vào chế độ cài đặt bộ làm mềm nước.\n* **Bước 3 (Chọn mức H):** Nhấn nút **[ > ]** từng lần một để chọn cài đặt phù hợp với độ cứng nước tại địa phương. Trình tự thay đổi mức như sau:\n  `H3 ➔ H4 ➔ H5 ➔ H6 ➔ H1 ➔ H2 ➔ H3`\n* **Bước 4 (Lưu & Thoát):** Không thao tác trong **5 giây** hoặc nhấn nút **Nguồn [ ⑼ ]** để hoàn tất thiết lập và thoát khỏi chế độ cài đặt.",
  },
  {
    id: "k19",
    title: "Bảng tra cứu Độ cứng của nước & Cấp độ H1-H6 DW-15F9(B)-VN",
    keywords: [
      "bang do cung nuoc",
      "tra cuu do cung nuoc",
      "cap do lam mem nuoc",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "dh",
      "fh",
      "clarke",
      "mmol/l",
      "luong muoi tiêu thu",
      "chu trinh tai tao",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 🧪 BẢNG TRA CỨU ĐỘ CỨNG NƯỚC & CẤP ĐỘ H1 - H6\n---\nChi tiết tra cứu độ cứng của nước, cấp độ thiết lập tương ứng và lượng muối tiêu thụ:\n\n* **[ H1 ] (0-5 °dH | 0-0,94 Mmol/l):** Không tái sinh | **0g** muối/chu kỳ\n* **[ H2 ] (6-11 °dH | 1,0-2,0 Mmol/l):** Tái tạo sau mỗi 10 chương trình | **9g** muối/chu kỳ\n* **[ H3 ] (12-17 °dH | 2,1-3,0 Mmol/l):** Tái tạo sau mỗi 5 chương trình | **12g** muối/chu kỳ *(Cài đặt mặc định)*\n* **[ H4 ] (18-22 °dH | 3,1-4,0 Mmol/l):** Tái tạo sau mỗi 3 chương trình | **20g** muối/chu kỳ\n* **[ H5 ] (23-34 °dH | 4,1-6,0 Mmol/l):** Tái tạo sau mỗi 2 chương trình | **30g** muối/chu kỳ\n* **[ H6 ] (35-55 °dH | 6,1-9,8 Mmol/l):** Tái tạo sau mỗi 1 chương trình | **60g** muối/chu kỳ\n\n📌 **QUY ĐỔI & LƯU Ý KỸ THUẬT:**\n* **Công thức quy đổi:** 1°dH = 1,25 °Clarke = 1,78 °fH = 0,178 mmol/l\n* **Cài đặt mặc định của nhà máy:** **H3**\n* **Tác động chu trình tái tạo:** Mỗi chu trình tái tạo tiêu thụ thêm **2,0 lít nước**, điện năng tăng thêm **0,02 kWh** và thời gian kéo dài thêm **4 phút**.",
  },
  {
    id: "k20",
    title: "Hướng dẫn Thêm muối vào bộ làm mềm nước DW-15F9(B)-VN",
    keywords: [
      "them muoi",
      "cho muoi",
      "do muoi",
      "cach cho muoi",
      "bo lam mem nuoc",
      "pheu do muoi",
      "nap khoang muoi",
      "den bao muoi",
      "muoi do ra ngoai",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 🧂 HƯỚNG DẪN THÊM MUỐI VÀO BỘ LÀM MỀM NƯỚC\n---\n⚠️ **CẢNH BÁO QUAN TRỌNG:**\n* **Loại muối:** Chỉ sử dụng muối chuyên dụng cho máy rửa chén. *Không dùng muối ăn* vì sẽ làm hỏng hóc khoáng/bộ làm mềm nước (trường hợp này sẽ không được bảo hành).\n* **Thời điểm đổ:** Chỉ đổ đầy muối ngay *trước khi bắt đầu một chu trình rửa* để tránh nước mặn bị đọng lại gây ăn mòn lòng máy.\n\n📝 **CÁC BƯỚC THỰC HIỆN:**\n* **Bước 1:** Tháo giỏ dưới và vặn mở nắp khoang chứa muối.\n* **Bước 2:** Đặt phần cuối của phễu vào lỗ và đổ vào khoảng **1,5 kg** muối rửa chén chuyên dụng.\n* **Bước 3:** Đổ thêm nước đến giới hạn tối đa vào khoang chứa muối (một lượng nhỏ nước trào ra ngoài là hoàn toàn bình thường).\n* **Bước 4:** Sau khi đổ đầy, hãy vặn chặt nắp lại.\n* **Bước 5:** Đèn cảnh báo muối sẽ tự động tắt sau khi khoang chứa được đổ đầy.\n* **Bước 6 (Bắt buộc):** Ngay sau khi đổ muối xong, cần chạy ngay một chương trình rửa (nên chọn chương trình ngắn). Nếu không, nước mặn trào ra có thể làm hỏng hệ thống lọc, bơm hoặc linh kiện khác (không thuộc phạm vi bảo hành).\n\n📌 **CHÚ Ý BỔ SUNG:**\n* Chỉ bổ sung muối khi **đèn cảnh báo muối [ 🔀 / S ]** trên bảng điều khiển sáng. Tùy thuộc vào mức độ hòa tan của muối, đèn báo có thể *vẫn sáng dù khoang chứa đã được đổ đầy*.\n* Nếu model máy không có đèn báo muối, bạn có thể ước lượng thời điểm bổ sung dựa trên số chu trình rửa máy đã chạy.\n* Nếu muối bị đổ/vương vãi ra ngoài lòng máy, hãy chạy chương trình **Ngâm** hoặc **Rửa nhanh** ngay lập tức để loại bỏ sạch muối.",
  },
  {
    id: "k21",
    title: "Chức năng của Nước trợ xả & Viên/Dung dịch rửa chén DW-15F9(B)-VN",
    keywords: [
      "nuoc tro xa",
      "chat tro xa",
      "dung dich rua",
      "vien rua",
      "chat tay rua",
      "bong chen dia",
      "sot nuoc",
      "den bao tro xa",
      "canh bao vien rua",
      "an mon",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 💧 CHỨC NĂNG NƯỚC TRỢ XẢ & VIÊN / DUNG DỊCH RỬA CHÉN\n---\n📌 **1. CHỨC NĂNG CỦA NƯỚC TRỢ XẢ (RINSE AID):**\n* **Nguyên lý:** Nước trợ xả được xả vào máy trong lần rửa cuối cùng để ngăn nước hình thành các giọt nhỏ trên bát đĩa (tránh để lại vết đốm, vệt mờ).\n* **Hiệu quả sấy:** Cải thiện đáng kể quá trình sấy khô nhờ làm nước không bám lại trên bề mặt chén đĩa.\n* **Dạng sử dụng:** Máy được thiết kế để sử dụng loại nước trợ xả dạng lỏng.\n\n⚠️ **CẢNH BÁO NƯỚC TRỢ XẢ:** Tuyệt đối không đổ bất kỳ chất nào khác (như nước rửa chén thông thường, chất tẩy rửa dạng lỏng khác) vào ngăn chứa nước trợ xả vì sẽ làm hỏng thiết bị.\n\n⏰ **THỜI ĐIỂM BỔ SUNG NƯỚC TRỢ XẢ:**\n* **Dấu hiệu:** Đèn báo nước trợ xả còn ít **[ ☀️ ]** sẽ xuất hiện trên màn hình hiển thị.\n* **Lưu ý:** Không đổ quá đầy vượt mức giới hạn vào ngăn chứa.\n\n🧪 **2. CHỨC NĂNG CỦA DUNG DỊCH / VIÊN RỬA CHÉN:**\n* Các thành phần hóa học trong dung dịch/viên rửa chén chuyên dụng là bắt buộc để loại bỏ, phá vỡ và tẩy trôi hoàn toàn các vết bẩn, dầu mỡ.\n* Hầu hết các loại dung dịch/viên rửa chén thương mại chất lượng cao đều phù hợp sử dụng.\n\n⚠️ **CẢNH BÁO SỬ DỤNG VIÊN/DUNG DỊCH RỬA CHÉN:**\n* **Sử dụng đúng cách:** Chỉ sử dụng loại được sản xuất riêng cho máy rửa chén. Bảo quản dung dịch/viên rửa sạch và khô ráo. *Không đổ vào ngăn chứa cho đến khi bạn sẵn sàng sử dụng máy rửa chén*.\n* **An toàn trẻ em:** Dung dịch/viên rửa chén dùng cho máy rửa chén **có tính ăn mòn**! Tuyệt đối để xa tầm tay trẻ em.",
  },
  {
    id: "k22",
    title: "Hướng dẫn Điều chỉnh mức tiêu thụ nước trợ xả DW-15F9(B)-VN",
    keywords: [
      "dieu chinh nuoc tro xa",
      "chinh tro xa",
      "cai dat tro xa",
      "d1",
      "d2",
      "d3",
      "d4",
      "d5",
      "muc tro xa",
      "tang tro xa",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 💧 ĐIỀU CHỈNH NGĂN CHỨA NƯỚC TRỢ XẢ\n---\nĐiều chỉnh lượng nước trợ xả vừa phải giúp tối ưu hóa hiệu quả sấy khô bát đĩa:\n\n* **Bước 1 (Bật máy):** Đóng cửa và nhấn bật nguồn máy rửa chén.\n* **Bước 2 (Vào cài đặt):** Trong vòng **60 giây** sau bước 1, nhấn giữ nút **[ > ]** trong **hơn 5 giây**, sau đó nhấn nút **Hẹn Giờ** để vào chế độ cài đặt. Đèn báo nước trợ xả sẽ nhấp nháy với tần số 1 Hz.\n* **Bước 3 (Chọn mức d):** Nhấn nút **[ > ]** để chọn mức cài đặt phù hợp. Các cài đặt sẽ thay đổi theo trình tự:\n  `d3 ➔ d4 ➔ d5 ➔ d1 ➔ d2 ➔ d3`\n  *(Lưu ý: Số càng cao, máy rửa chén càng sử dụng nhiều nước trợ xả. Cài đặt mặc định của nhà máy là **d3**).* \n* **Bước 4 (Lưu & Thoát):** Nếu không thao tác trong vòng **5 giây** hoặc nhấn nút **Nguồn [ ⑼ ]**, chế độ cài đặt sẽ tự động thoát và được lưu thành công.",
  },
  {
    id: "k23",
    title: "Hướng dẫn Xếp chén đĩa & Vật dụng phù hợp DW-15F9(B)-VN",
    keywords: [
      "xep chen dia",
      "vat dung phu hop",
      "khong phu hop",
      "han che su dung",
      "do go",
      "do nhua",
      "do thuy tinh",
      "dao keo",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 🍽️ XẾP CHÉN ĐĨA VÀO GIỎ & PHÂN LOẠI VẬT DỤNG\n---\n💡 **GỢI Ý TỔNG QUAN:**\n* Nên chọn mua loại chén đĩa được chứng nhận dùng được cho máy rửa chén.\n* Sử dụng loại viên rửa chén nhẹ phù hợp (tham khảo thêm thông tin nhà sản xuất).\n* Đối với các thiết bị/đồ dùng đặc biệt, hãy ưu tiên chọn chương trình rửa với nhiệt độ thấp hơn.\n* Không lấy ngay các vật dụng bằng thủy tinh ra ngoài khi chu trình vừa kết thúc để tránh hư hỏng do sốc nhiệt.\n\n⚠️ **SỬ DỤNG MÁY RỬA CHÉN MỘT CÁCH HỢP LÝ:**\n\n❌ **1. Không phù hợp cho máy rửa chén (Tránh rửa):**\n* Dụng cụ bằng gỗ, sừng, sứ hoặc cán ngọc trai.\n* Sản phẩm nhựa không chịu nhiệt.\n* Dao cắt không chịu nhiệt hoặc có các bộ phận dính bằng keo không chịu nhiệt.\n* Dao hoặc chén đĩa bị gắn với nhau theo khối.\n* Dụng cụ bằng thiếc hoặc đồng.\n* Thủy tinh pha lê.\n* Sản phẩm thép dễ bị rỉ sét.\n* Dụng cụ bằng gỗ và các sản phẩm làm từ sợi tổng hợp.\n\n⚠️ **2. Hạn chế sử dụng (Cần lưu ý):**\n* **Đồ thủy tinh:** Sau vài lần rửa, một số đồ thủy tinh có thể trở nên mờ đục.\n* **Đồ bạc / Nhôm:** Sản phẩm bằng bạc hoặc nhôm thường bị đổi màu trong quá trình rửa.\n* **Hoa văn trang trí:** Màu sắc hoa văn của chén đĩa có thể bị phai đi nếu rửa thường xuyên.",
  },
  {
    id: "k24",
    title: "Lưu ý trước và sau khi xếp chén đĩa vào giỏ DW-15F9(B)-VN",
    keywords: [
      "luu y xep chen dia",
      "truoc va sau khi xep",
      "can thuc an",
      "trang chen dia",
      "dat up",
      "dat nghieng",
      "canh phun nuoc",
      "dao dai",
      "dao sac",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 🍽️ LƯU Ý TRƯỚC VÀ SAU KHI XẾP CHÉN ĐĨA VÀO GIỎ\n---\n💡 **1. SƠ CHẾ TRƯỚC KHI XẾP ĐỒ:**\n* **Loại bỏ cặn thức ăn lớn:** Gạt bỏ cặn bẩn, thức ăn thừa kích thước lớn vào thùng rác.\n* **Xử lý đồ cháy khát:** Làm mềm các cặn thức ăn cháy còn bám chặt trên chảo/nồi.\n* **Không cần tráng nước:** *Không cần phải tráng chén đĩa bằng nước trước* khi xếp vào máy.\n\n📝 **2. QUY TẮC XẾP ĐỒ VÀO MÁY:**\n* **Đặt úp:** Cốc, ly, nồi,... có phần rỗng cần được đặt úp xuống để nước không bị đọng lại trong lòng vật dụng hoặc các khe.\n* **Đặt nghiêng:** Đối với các dụng cụ có hình cong, lõm hoặc lồi, hãy đặt nghiêng để nước có thể tự chảy thoát ra ngoài.\n* **Cố định an toàn:** Tất cả các dụng cụ phải được đặt cố định an toàn, không được để lỏng lẻo dễ đổ.\n* **Tránh cản tay phun:** Đặt vật dụng sao cho các cánh tay phun nước có thể xoay tự do không bị vướng/cản trở.\n* **Không chồng lấp:** Chén đĩa và dao không được đặt lồng vào trong các dụng cụ khác và không được xếp chồng lên nhau.\n* **Khoảng cách đồ thủy tinh:** Không đặt các đồ thủy tinh nằm sát chạm vào nhau để tránh va đập hư hỏng.\n* **An toàn với dao kéo:** *Đặt đứng dao dài là rất nguy hiểm!* Các loại dao dài hoặc dao sắc (như dao chặt thịt) nên được đặt **nằm ngang** trong giỏ.\n* **Không xếp quá tải:** Không làm quá tải máy rửa chén để đảm bảo đạt hiệu quả làm sạch tốt nhất.\n\n⚠️ **CHÚ Ý:** Các vật dụng nhỏ dễ rơi rớt ra khỏi khe giỏ thì **không nên** đặt trong máy rửa chén.",
  },
  {
    id: "k25",
    title: "Hướng dẫn Vệ sinh & Bảo dưỡng bộ lọc DW-15F9(B)-VN",
    keywords: [
      "ve sinh bo loc",
      "bao duong bo loc",
      "he thong loc",
      "rua bo loc",
      "tac nghen",
      "rac tho",
      "ve sinh may rua chen",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 🧽 VỆ SINH VÀ BẢO DƯỠNG - VỆ SINH BỘ LỌC\n---\n📌 **VAI TRÒ CỦA HỆ THỐNG BỘ LỌC:**\n* **Vị trí:** Hệ thống lọc nằm ở phần đáy của khoang rửa.\n* **Chức năng:** Giữ lại các mảnh vụn thô từ chu trình rửa (như tăm, mảnh vỡ, cặn thức ăn lớn) để tránh làm tắc nghẽn đường xả.\n* **Khuyên dùng:** Thường xuyên kiểm tra tình trạng bộ lọc, cẩn thận loại bỏ các vật thể lạ và rửa sạch các phần của hệ thống lọc bằng nước chảy.\n\n⚠️ **CẢNH BÁO KHI LẮP RÁP BỘ LỌC:**\n* **Lực siết:** Không siết quá chặt các bộ lọc. Cần đặt các bộ lọc trở lại theo đúng trình tự an toàn, tránh để mảnh vụn to xâm nhập gây tắc nghẽn hệ thống bơm.\n* **Lắp đặt bắt buộc:** *Tuyệt đối không sử dụng máy rửa chén khi chưa lắp bộ lọc*. Việc lắp bộ lọc sai cách hoặc không đúng vị trí có thể làm giảm hiệu suất rửa và gây hư hỏng chén đĩa, dụng cụ.",
  },
  {
    id: "k26",
    title:
      "Hướng dẫn Bảo dưỡng & Bảo trì cửa, ron cửa và bảng điều khiển DW-15F9(B)-VN",
    keywords: [
      "bao duong",
      "bao tri",
      "ve sinh cua",
      "ron cua",
      "gioang cua",
      "bang dieu khien",
      "den chieu sang",
      "chat tay rua",
      "trai xuoc",
      "DW-15F9(B)-VN",
    ],
    answer:
      "### 🛠️ BẢO DƯỠNG VÀ BẢO TRÌ MÁY RỬA CHÉN\n---\n📌 **1. CỬA VÀ RON CỬA:**\n* Vệ sinh ron cửa thường xuyên bằng vải mềm ẩm để loại bỏ cặn thức ăn.\n* Cặn thức ăn/đồ uống rơi xuống hai bên cửa nằm ngoài khoang rửa nên cánh phun nước không thể làm sạch tới. Cần lau sạch mọi cặn bẩn trước khi đóng cửa.\n\n📌 **2. BẢNG ĐIỀU KHIỂN:**\n* Lau bằng khăn hơi ẩm và đảm bảo bảng điều khiển khô hoàn toàn sau khi vệ sinh.\n* Không dùng dụng cụ sắc nhọn, miếng chùi xước hoặc chất tẩy rửa mạnh ở bất kỳ đâu trong máy.\n\n⚠️ **CẢNH BÁO BẢO TRÌ BỀ MẶT:**\n* **Cửa máy:** Không dùng chất tẩy rửa dạng phun để làm sạch cửa vì có thể làm hỏng khóa cửa và các linh kiện điện.\n* **Bề mặt inox:** Không dùng chất mài mòn hoặc khăn giấy thô vì dễ để lại vết xước trên bề mặt thép không gỉ.\n\n💡 **3. ĐÈN CHIẾU SÁNG:**\n* Đèn chiếu sáng không cần vệ sinh thêm.\n* Nếu đèn bị vỡ trong quá trình sử dụng, hãy **ngắt nguồn điện** ngay lập tức và liên hệ kỹ thuật viên có chuyên môn để làm sạch và thay thế.",
  },
  {
    id: "mã_định_danh_duy_nhất",
    keywords: ["từ khóa 1", "từ khóa 2", "câu hỏi mẫu"],
    answer:
      "### 📌 [TÊN NỘI DUNG / TIÊU ĐỀ IN HOA]\n---\n[Đoạn mô tả ngắn gọn nội dung tổng quan...]\n\n* **[Thông số / Ý 1]:** Nội dung chi tiết ý 1.\n* **[Thông số / Ý 2]:** Nội dung chi tiết ý 2.\n* **Lưu ý:** [Các ghi chú quan trọng nếu có].",
  },
  {
    id: "mã_định_danh_duy_nhất",
    keywords: ["từ khóa 1", "từ khóa 2", "câu hỏi mẫu"],
    answer:
      "### 📌 [TÊN NỘI DUNG / TIÊU ĐỀ IN HOA]\n---\n[Đoạn mô tả ngắn gọn nội dung tổng quan...]\n\n* **[Thông số / Ý 1]:** Nội dung chi tiết ý 1.\n* **[Thông số / Ý 2]:** Nội dung chi tiết ý 2.\n* **Lưu ý:** [Các ghi chú quan trọng nếu có].",
  },

  // ➕ Bạn chỉ cần copy thêm các khối tương tự ở đây để "huấn luyện" thêm cho Bot
];
