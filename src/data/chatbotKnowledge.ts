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
      "📞 **Số tổng đài hỗ trợ bảo hành:** 1800 1529 (Miễn phí).\n⏰ **Thời gian làm việc:** 8h00 - 20h00 (Từ Thứ 2 đến Chủ Nhật).",
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
    answer: `### 📊 BẢNG THÔNG SỐ CHƯƠNG TRÌNH RỬA
---
<table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-top: 6px; background: #fff; text-align: center;">
  <thead>
    <tr style="background: #e0f2fe; color: #0369a1; font-weight: bold;">
      <th style="border: 1px solid #bae6fd; padding: 5px 3px; text-align: left;">Chương trình</th>
      <th style="border: 1px solid #bae6fd; padding: 5px 3px;">Nhiệt độ</th>
      <th style="border: 1px solid #bae6fd; padding: 5px 3px;">Thời gian</th>
      <th style="border: 1px solid #bae6fd; padding: 5px 3px;">Điện (kWh)</th>
      <th style="border: 1px solid #bae6fd; padding: 5px 3px;">Nước (L)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 4px; text-align: left; font-weight: bold;">[ eco ] Tiết kiệm</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">50°C</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">215 phút</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">1.225</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">15.0</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 4px; text-align: left; font-weight: bold; color: #0284c7;">[ Ⓐ ] Tự động AI</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">45-55°C</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">140-195 phút</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">1.15-1.45</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">11-14.8</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 4px; text-align: left; font-weight: bold;">[ 🍳 ] Chuyên sâu</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">65°C</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">195 phút</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">1.460</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">14.9</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 4px; text-align: left; font-weight: bold;">[ 🕒90' ] 90 phút</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">60°C</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">90 phút</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">1.015</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">12.1</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 4px; text-align: left; font-weight: bold;">[ ✨ ] Vệ sinh</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">60°C</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">175 phút</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">1.400</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">15.2</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 4px; text-align: left; font-weight: bold;">[ 📲🍷 ] Đồ thủy tinh</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">50°C</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">140 phút</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">1.000</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">14.5</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 4px; text-align: left; font-weight: bold;">[ 📲⏩ ] Rửa nhanh</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">40°C</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">30 phút</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">0.750</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">11.4</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 4px; text-align: left; font-weight: bold;">[ 📲♨️ ] Khử trùng</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">72°C</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">208 phút</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">1.650</td>
      <td style="border: 1px solid #e2e8f0; padding: 4px;">14.9</td>
    </tr>
  </tbody>
</table>`,
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
      "luong muoi tieu thu",
      "chu trinh tai tao",
      "DW-15F9(B)-VN",
    ],
    answer: `### 🧪 BẢNG TRA CỨU ĐỘ CỨNG NƯỚC & MỨC MUỐI (H1 - H6)
---
<table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-top: 6px; background: #fff; text-align: center;">
  <thead>
    <tr style="background: #e0f2fe; color: #0369a1; font-weight: bold;">
      <th style="border: 1px solid #bae6fd; padding: 6px 4px;">Mức H</th>
      <th style="border: 1px solid #bae6fd; padding: 6px 4px;">Độ cứng (°dH)</th>
      <th style="border: 1px solid #bae6fd; padding: 6px 4px;">Mmol/l</th>
      <th style="border: 1px solid #bae6fd; padding: 6px 4px;">Chu kỳ tái tạo</th>
      <th style="border: 1px solid #bae6fd; padding: 6px 4px;">Tiêu thụ/Lần</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 5px; font-weight: bold; color: #0284c7;">H1</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">0 - 5</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">0 - 0.94</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">Không tái sinh</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">0g</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 5px; font-weight: bold; color: #0284c7;">H2</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">6 - 11</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">1.0 - 2.0</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">Sau 10 lần rửa</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">9g</td>
    </tr>
    <tr style="background: #f0f9ff;">
      <td style="border: 1px solid #bae6fd; padding: 5px; font-weight: bold; color: #0369a1;">H3 ⭐</td>
      <td style="border: 1px solid #bae6fd; padding: 5px; font-weight: bold;">12 - 17</td>
      <td style="border: 1px solid #bae6fd; padding: 5px; font-weight: bold;">2.1 - 3.0</td>
      <td style="border: 1px solid #bae6fd; padding: 5px; font-weight: bold;">Sau 5 lần rửa</td>
      <td style="border: 1px solid #bae6fd; padding: 5px; font-weight: bold; color: #0284c7;">12g (Mặc định)</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 5px; font-weight: bold; color: #0284c7;">H4</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">18 - 22</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">3.1 - 4.0</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">Sau 3 lần rửa</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">20g</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 5px; font-weight: bold; color: #0284c7;">H5</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">23 - 34</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">4.1 - 6.0</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">Sau 2 lần rửa</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">30g</td>
    </tr>
    <tr>
      <td style="border: 1px solid #e2e8f0; padding: 5px; font-weight: bold; color: #0284c7;">H6</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">35 - 55</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">6.1 - 9.8</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">Sau mỗi 1 lần rửa</td>
      <td style="border: 1px solid #e2e8f0; padding: 5px;">60g</td>
    </tr>
  </tbody>
</table>

📌 **QUY ĐỔI & LƯU Ý KĨ THUẬT:**
* **Công thức:** 1°dH = 1,25 °Clarke = 1,78 °fH = 0,178 mmol/l
* **Tác động chu trình:** Tái tạo tiêu thụ thêm **2.0L nước**, **0.02 kWh điện** và tăng thêm **4 phút**.`,
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
      "### 🍽️ XẾP CHÉN ĐĨA VÀO GIỎ & PHÂN LOẠI VẬT DỤNG\n---\n💡 **GỢI Ý TỔNG QUAN:**\n* Nên chọn mua loại chén đĩa được chứng nhận dùng được cho máy rửa chén.\n* Sử dụng loại viên rửa chén nhẹ phù hợp (tham khảo thêm thông tin nhà sản xuất).\n* Đối với các thiết bị/đồ dùng đặc biệt, hãy ưu tiên chọn chương trình rửa với nhiệt độ thấp hơn.\n* Không lấy ngay các vật dụng bằng thủy tinh ra ngoài khi chu trình vừa kết thúc để tránh hư hỏng do sốc nhiệt.\n\n⚠️ **SỬ DỤNG MÁY RỬA CHÉN MỘT CÁCH HỢP LÝ:**\n\n❌ **1. Không phù hợp cho máy rửa chén (Tránh rửa):**\n* Dụng cụ bằng gỗ, sừng, sứ hoặc cán ngọc trai.\n* Sản phẩm nhựa không chịu nhiệt.\n* Dao cắt không chịu nhiệt hoặc có các bộ phận dính bằng keo không chịu được nhiệt.\n* Dao hoặc chén đĩa bị gắn với nhau theo khối.\n* Dụng cụ bằng thiếc hoặc đồng.\n* Thủy tinh pha lê.\n* Sản phẩm thép dễ bị rỉ sét.\n* Dụng cụ bằng gỗ và các sản phẩm làm từ sợi tổng hợp.\n\n⚠️ **2. Hạn chế sử dụng (Cần lưu ý):**\n* **Đồ thủy tinh:** Sau vài lần rửa, một số đồ thủy tinh có thể trở nên mờ đục.\n* **Đồ bạc / Nhôm:** Sản phẩm bằng bạc hoặc nhôm thường bị đổi màu trong quá trình rửa.\n* **Hoa văn trang trí:** Màu sắc hoa văn của chén đĩa có thể bị phai đi nếu rửa thường xuyên.",
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
    id: "k27",
    title: "Cảnh báo An toàn về Điện & Trẻ em DW-15F7(G)-VN",
    keywords: [
      "an toan",
      "dien giat",
      "tre em",
      "rut phich cam",
      "phich cam",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### ⚠️ AN TOÀN ĐIỆN & TRẺ EM\n---\n* **Trẻ em:** Không để trẻ chơi đùa với máy. Vật liệu đóng gói có thể gây nguy hiểm cho trẻ.\n* **Nguồn điện:** Dùng đúng công suất ghi trên nhãn. Rút phích cắm trước khi vệ sinh/bảo dưỡng.\n* **Chống giật:** Không chạm phích cắm bằng tay ướt. Không dùng dây nguồn/ổ cắm bị hỏng.",
  },
  {
    id: "k28",
    title: "Cảnh báo An toàn về Nhiệt & Bỏng DW-15F7(G)-VN",
    keywords: [
      "nguy co bong",
      "nuoc nong",
      "khi nong",
      "nhiet do",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### ⚠️ CẢNH BÁO NGUY CƠ BỎNG\n---\n* **Bên trong khoang:** Không chạm vào khoang máy hoặc cánh phun trong và sau 30 phút vận hành.\n* **Mở cửa:** Mở cửa khi máy đang chạy rất nguy hiểm vì nước nóng có thể gây bỏng nghiêm trọng.\n* **Khí nóng:** Không lại gần khu vực ống xả vì hơi nước/không khí nóng thoát ra có thể gây bỏng.",
  },
  {
    id: "k29",
    title: "Lưu ý Lắp đặt & Nối đất an toàn DW-15F7(G)-VN",
    keywords: [
      "lap dat",
      "noi dat",
      "vi tri đặt máy",
      "nguon nhiet",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 🛠️ LƯU Ý LẮP ĐẶT & NỐI ĐẤT\n---\n* **Nối đất:** Bắt buộc nối đất đúng cách. Nếu gặp lỗi **E3**, rút phích cắm và gọi thợ điện/KTV.\n* **Vị trí:** Đặt máy trên bề mặt chắc chắn, bằng phẳng, dễ thoát nước và cách bếp gas/nguồn nhiệt ít nhất 15cm.\n* **Không chất đồ:** Không đặt vật nặng, vật nóng hay đồ điện lên trên máy.",
  },
  {
    id: "k30",
    title: "Danh sách Phụ kiện & Chất liệu Bao bì DW-15F7(G)-VN",
    keywords: ["bo phan", "phu kien", "bao bi", "tai che", "DW-15F7(G)-VN"],
    answer:
      "### 📦 CÁC BỘ PHẬN & BAO BÌ\n---\n* **Cấu tạo:** Đèn UV, giỏ trên, giỏ dưới, giỏ dao kéo, giỏ trái cây, 3 cánh phun (trên/giữa/dưới), bộ lọc, ngăn muối, ngăn rửa.\n* **Bao bì tái chế:** PE (túi), PS (xốp), POM (kẹp), ABS (bảng điều khiển), PP (khoang trong). Hãy gửi đến trung tâm tái chế.",
  },
  {
    id: "k31",
    title:
      "Bảng điều khiển: Nút Nguồn, Chọn chương trình & Hẹn giờ DW-15F7(G)-VN",
    keywords: [
      "nut nguon",
      "chon chuong trinh",
      "hen gio",
      "bat may",
      "tat may",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 🎛️ NÚT NGUỒN, CHƯƠNG TRÌNH & HẸN GIỜ\n---\n* **[ Nguồn ]:** Nhấn để bật hoặc tắt máy.\n* **[ Chương trình (< / >) ]:** Nhấn `<` hoặc `>` để chọn chương trình rửa.\n* **[ Hẹn giờ ]:** Đặt thời gian lùi khởi động lên đến 24 giờ (mỗi lần nhấn tăng 1 giờ).",
  },
  {
    id: "k32",
    title: "Bảng điều khiển: Bắt đầu/Hủy & Chọn giàn rửa DW-15F7(G)-VN",
    keywords: [
      "bat dau",
      "huy chuong trinh",
      "chon gian rua",
      "gio tren",
      "gio duoi",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 🎛️ NÚT BẮT ĐẦU, HỦY & CHỌN GIÀN RỬA\n---\n* **[ Bắt đầu/Hủy ]:** Nhấn để bắt đầu. Nhấn giữ **3 giây** để hủy chương trình đang chọn.\n* **[ Chọn giàn rửa ]:** Tùy chọn chỉ rửa giỏ trên hoặc chỉ rửa giỏ dưới để tiết kiệm điện nước khi rửa ít đồ.",
  },
  {
    id: "k33",
    title: "Tính năng Sấy Khí nóng & Bảo quản 168h DW-15F7(G)-VN",
    keywords: [
      "khi nong",
      "say khi nong",
      "bao quan",
      "168h",
      "khong khi trong lanh",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### ♨️ TÍNH NĂNG KHÍ NÓNG & BẢO QUẢN\n---\n* **Khí nóng:** 3 tùy chọn sấy khô sau rửa (Làm mới 60p, Làm ấm 120p, Rửa tráng & Sấy 100p).\n* **Bảo quản:** Quạt chạy giữ không khí tươi mới tối đa 168 giờ (màn hình hiện `--H`). Giữ 3s để bật độc lập. Không dùng chung với Tự hé cửa.",
  },
  {
    id: "k34",
    title: "Tính năng Tăng tốc & Tự động Mở cửa (Auto Open) DW-15F7(G)-VN",
    keywords: [
      "tang toc",
      "tu he cua",
      "auto open",
      "mo cua tu dong",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### ⚡ TÍNH NĂNG TĂNG TỐC & TỰ HÉ CỬA\n---\n* **Tăng tốc:** Nhấn để rút ngắn thời gian rửa (áp dụng cho Chuyên sâu, Eco, 90 phút, Đồ thủy tinh, Khử trùng, Yên tĩnh).\n* **Tự hé cửa:** Nhấn giữ **3 giây** để kích hoạt; cửa tự hé sau khi rửa xong giúp tăng hiệu quả sấy khô. Tránh vật cản trước cửa.",
  },
  {
    id: "k35",
    title: "Tính năng Gõ mở cửa (Knock to Open) DW-15F7(G)-VN",
    keywords: [
      "go mo cua",
      "knock to open",
      "go 2 lan",
      "mo cua tu dong",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 🚪 TÍNH NĂNG GÕ MỞ CỬA\n---\n* **Cách dùng:** Gõ 2 lần liên tiếp vào phần trên cửa để mở máy.\n* **Khi đang chạy:** Gõ 2 lần máy sẽ tạm dừng. Gõ tiếp 2 lần nữa trong 10s máy sẽ mở cửa.\n* **Nhịp gõ:** Khoảng cách giữa 2 lần gõ từ 0.1s đến 0.8s (gõ quá nhanh hoặc quá chậm máy sẽ không nhận).",
  },
  {
    id: "k36",
    title: "Cài đặt Độ nhạy Gõ mở cửa DW-15F7(G)-VN",
    keywords: [
      "do nhay go mo cua",
      "cai dat do nhay",
      "muc 01 den 09",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### ⚙️ CÀI ĐẶT ĐỘ NHẠY GÕ MỞ CỬA\n---\n* **Bước 1:** Bật nguồn, trong 5 - 60s sau đó, giữ nút **Chọn giàn rửa** trong **5 giây**.\n* **Bước 2:** Nhấn `<` và `>` để chỉnh độ nhạy từ mức **01** (Thấp) đến **09** (Cao). Mặc định là **05**.\n* **Bước 3:** Không thao tác trong 5s để lưu. Rút và cắm lại phích cắm điện để hoàn tất.",
  },
  {
    id: "k37",
    title: "Các Chương trình rửa Tiêu chuẩn DW-15F7(G)-VN",
    keywords: [
      "eco",
      "tiet kiem",
      "tu dong ai",
      "chuyen sau",
      "90 phut",
      "ve sinh",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 🧼 CHƯƠNG TRÌNH RỬA TIÊU CHUẨN\n---\n* **Tiết kiệm (Eco):** 50°C | 215 phút | 1.225 kWh | 15.0L (Chương trình chuẩn).\n* **Tự động AI:** 45~55°C | 140-195 phút | Tự nhận diện độ bẩn.\n* **Chuyên sâu:** 65°C | 195 phút | Dành cho nồi chảo, vết dầu mỡ nặng.\n* **90 phút:** 60°C | 90 phút | Dành cho bát đĩa bẩn thông thường.\n* **Vệ sinh:** 60°C | 175 phút | Dùng để làm sạch lòng máy rửa chén.",
  },
  {
    id: "k38",
    title: "Các Chương trình Rửa tải xuống & Chuyên biệt DW-15F7(G)-VN",
    keywords: [
      "thuy tinh",
      "rua nhanh",
      "ngam",
      "khu trung",
      "yen tinh",
      "hai san",
      "trai cay",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 📱 CHƯƠNG TRÌNH TẢI XUỐNG & CHUYÊN BIỆT\n---\n* **Đồ thủy tinh (50°C - 140p) / Rửa nhanh (40°C - 30p) / Ngâm (15p)**.\n* **Khử trùng (72°C - 208p):** Nhiệt độ cao tiêu diệt vi khuẩn.\n* **Yên tĩnh (55°C - 245p):** Giảm tiếng ồn thích hợp rửa ban đêm.\n* **Rửa hải sản (25/15p) & Rửa trái cây (15/10p):** Làm sạch rau củ, hải sản tươi.",
  },
  {
    id: "k39",
    title: "Thay đổi chương trình & Thêm chén đĩa giữa chu trình DW-15F7(G)-VN",
    keywords: [
      "thay doi chuong trinh",
      "them do",
      "mo cua giua chung",
      "huy chuong trinh",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 🔄 ĐỔI CHƯƠNG TRÌNH & THÊM CHÉN ĐĨA\n---\n* **Đổi chương trình:** Mở hé cửa cho tay phun dừng hẳn ➔ Mở hoàn toàn ➔ Giữ **Bắt đầu/Hủy** hơn 3s để về chế độ chờ ➔ Chọn lại chương trình ➔ Đóng cửa nhấn Bắt đầu.\n* **Thêm chén đĩa:** Mở hé cửa chờ tay phun dừng ➔ Mở cửa bỏ đồ vào ➔ Đóng cửa lại, máy tự chạy tiếp sau 10 giây.",
  },
  {
    id: "k40",
    title: "Màn hình Hiển thị Biểu tượng & Mã thông báo DW-15F7(G)-VN",
    keywords: [
      "den bao nuoc",
      "den bao muoi",
      "bieu tuong h",
      "man hinh",
      "DW-15F7(G)-VN",
    ],
    answer:
      '### 🖥️ CÁC ĐÈN BÁO TRÊN MÀN HÌNH\n---\n* **Đèn [ ☀️ ]:** Báo sắp hết nước trợ xả, cần bổ sung thêm.\n* **Đèn [ 🔀 / S ]:** Báo sắp hết muối làm mềm nước, cần đổ thêm.\n* **Màn hình hiện "--H":** Báo chức năng Bảo quản đang được kích hoạt.\n* **Màn hình hiện "End":** Báo chu trình rửa đã hoàn tất.',
  },
  {
    id: "k41",
    title: "Mẹo Điều chỉnh Giỏ trên & Giỏ dao kéo DW-15F7(G)-VN",
    keywords: [
      "dieu chinh gio tren",
      "nang gio",
      "ha gio",
      "gio dao keo",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 🧺 MẸO ĐIỀU CHỈNH GIỎ ĐỰNG\n---\n* **Nâng giỏ trên:** Nâng nhẹ hai bên giỏ lên cho đến khi nghe tiếng khớp khóa.\n* **Hạ giỏ trên:** Nâng tay cầm điều chỉnh ở hai bên để nhả khóa và hạ giỏ xuống.\n* **Giỏ dao kéo:** Thiết kế thanh trượt giúp lấy dao nĩa dễ dàng, có thể tháo rời/chồng gọn.",
  },
  {
    id: "k42",
    title: "Vệ sinh Cánh phun nước phía Trên & Dưới DW-15F7(G)-VN",
    keywords: [
      "ve sinh tay phun",
      "canh phun nuoc",
      "tac lo phun",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 🧽 VỆ SINH CÁNH PHUN NƯỚC\n---\n* **Cánh phun trên:** Giữ chặt đai ốc ở giữa và xoay ngược chiều kim đồng hồ để tháo ra.\n* **Cánh phun dưới:** Kéo thẳng cánh phun lên trên để tháo.\n* **Làm sạch:** Rửa bằng nước ấm pha xà phòng, dùng bàn chải mềm thông các lỗ phun bị cặn bám.",
  },
  {
    id: "k43",
    title: "Cửa, Ron cửa & Đèn chiếu sáng UV DW-15F7(G)-VN",
    keywords: [
      "ron cua",
      "ve sinh cua",
      "den uv",
      "khi vo den",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 🧽 BẢO TRÌ CỬA & ĐÈN UV\n---\n* **Ron cửa:** Lau thường xuyên bằng vải mềm ẩm. Cần lau sạch cặn bẩn rơi vãi ở 2 bên mép cửa ngoài tầm phun của nước.\n* **Đèn UV:** Không cần vệ sinh. Nếu bóng đèn bị vỡ, ngắt điện máy ngay lập tức và gọi kỹ thuật viên thay thế.",
  },
  {
    id: "k44",
    title: "Hướng dẫn Kết nối Yêu cầu Nguồn nước & Ống xả DW-15F7(G)-VN",
    keywords: [
      "ap luc nuoc",
      "ong cap nuoc",
      "ong thoat nuoc",
      "chieu cao ong xa",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 🚰 YÊU CẦU NƯỚC CẤP & THOÁT\n---\n* **Áp lực nước:** Tối thiểu 0,04 MPa - Tối đa 1,0 MPa. Dùng ống cấp nước mới đi kèm.\n* **Ống thoát nước:** Đường kính tối thiểu 4cm, chiều cao đường xả phải **thấp hơn 1000mm (1m)**. Không ngập đầu ống xả trong nước. Độ dài nối thêm tối đa **4 mét**.",
  },
  {
    id: "k45",
    title: "Sự cố: Máy không khởi động hoặc Không bơm thoát nước DW-15F7(G)-VN",
    keywords: [
      "may khong chay",
      "khong khoi dong",
      "khong xam nuoc",
      "khong bom nuoc",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 🔴 SỰ CỐ: KHÔNG KHỞI ĐỘNG / KHÔNG BƠM\n---\n* **Máy không khởi động:** Kiểm tra phích cắm, cầu dao/cầu chì; đảm bảo đã đóng chặt cửa máy.\n* **Máy không bơm thoát nước:** Kiểm tra xem ống thoát nước có bị gấp khúc/tắc nghẽn không; kiểm tra bộ lọc thô ở đáy máy hoặc kiểm tra đường thoát nước bồn rửa.",
  },
  {
    id: "k46",
    title:
      "Sự cố: Bọt trào trong khoang & Vết rỉ sét trên dao kéo DW-15F7(G)-VN",
    keywords: ["trao bot", "nhieu bot", "ri set", "vet trang", "DW-15F7(G)-VN"],
    answer:
      "### 🔴 SỰ CỐ: TRÀO BỌT / RỈ SÉT\n---\n* **Bọt trào trong máy:** Do dùng sai loại nước rửa chén hoặc trào nước trợ xả. Mở cửa cho bọt tan bớt, lau sạch nước trợ xả tràn, sau đó bật 1 chương trình rửa bất kỳ để xả sạch.\n* **Rỉ sét dao kéo:** Do vật dụng không có khả năng chống ăn mòn. Tránh rửa đồ dễ ăn mòn.",
  },
  {
    id: "k47",
    title: "Sự cố: Chén đĩa rửa xong vẫn bị bẩn hoặc Chưa khô DW-15F7(G)-VN",
    keywords: [
      "chen dia van ban",
      "con dính ban",
      "khong kho",
      "dieu chinh tro xa",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 🔴 SỰ CỐ: CHÉN ĐĨA BẨN / CHƯA KHÔ\n---\n* **Chén đĩa vẫn bẩn:** Xếp đồ cản tay phun xoay; bộ lọc bẩn; dùng thiếu viên rửa hoặc chọn chương trình rửa quá nhẹ.\n* **Chén đĩa chưa khô:** Do lấy ra quá sớm (nên chờ 15 phút); chọn chương trình rửa ngắn nhiệt độ thấp; hoặc xếp đồ bị đọng nước.",
  },
  {
    id: "k48",
    title: "Cách kết nối Wifi App TSmartLife cơ bản DW-15F7(G)-VN",
    keywords: [
      "ket noi tsmartlife",
      "wifi 2.4ghz",
      "app tsmartlife",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 📱 KẾT NỐI APP TSMARTLIFE\n---\n* **Đăng ký:** Tải app TSmartLife ➔ Đăng ký bằng Email ➔ Bật Bluetooth & Wifi 2.4GHz trên điện thoại.\n* **Thao tác trên máy:** Giữ nút **Điều khiển từ xa** trên máy **3 giây** đến khi đèn Wifi nhấp nháy.\n* **Thao tác trên App:** Chọn *Thêm thiết bị > Máy rửa chén* ➔ Nhập mật khẩu Wifi nhà ➔ Hoàn tất.",
  },
  {
    id: "k49",
    title: "Xử lý lỗi Không kết nối được Wifi App TSmartLife DW-15F7(G)-VN",
    keywords: [
      "loi wifi tsmartlife",
      "khong thay ssid",
      "sai mat khau wifi",
      "DW-15F7(G)-VN",
    ],
    answer:
      "### 🛠️ KHẮC PHỤC LỖI KẾT NỐI APP\n---\n* **Tín hiệu yếu:** Đặt bộ định tuyến gần máy hoặc dùng bộ kích sóng.\n* **Mạng cấm:** Không dùng Wifi công cộng/khách sạn (yêu cầu đăng nhập web).\n* **Tên/Mật khẩu:** Tên Wifi chỉ dùng chữ/số (không đặt ký tự đặc biệt). Mật khẩu tối đa 32 ký tự. Tắt tính năng *Trợ lý WLAN / WLAN+* trên điện thoại rồi thử lại.",
  },
  {
    id: "k51",
    title: "An toàn Điện & Trẻ em DW-15F8(B)-VN",
    keywords: [
      "an toan",
      "dien giat",
      "tre em",
      "rut phich cam",
      "phich cam",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### ⚠️ AN TOÀN ĐIỆN & TRẺ EM\n---\n* **Trẻ em:** Không để trẻ chơi đùa với máy rửa chén. Bao bì có thể gây nguy hiểm cho trẻ.\n* **Nguồn điện:** Dùng đúng nguồn điện theo nhãn máy. Rút phích cắm trước khi vệ sinh/bảo dưỡng.\n* **Chống giật:** Không chạm phích cắm bằng tay ướt. Không dùng dây nguồn/ổ cắm bị hỏng.",
  },
  {
    id: "k52",
    title: "An toàn về Nhiệt & Nguy cơ bỏng DW-15F8(B)-VN",
    keywords: [
      "nguy co bong",
      "nuoc nong",
      "khi nong",
      "nhiet do",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### ⚠️ CẢNH BÁO NGUY CƠ BỎNG\n---\n* **Bên trong khoang:** Không chạm vào khoang máy hoặc cánh phun trong và sau 30 phút vận hành.\n* **Mở cửa:** Mở cửa khi máy đang chạy cực kỳ nguy hiểm do nước nóng xả ra gây bỏng.\n* **Khí nóng:** Tránh xa khu vực ống xả vì hơi nước và không khí nóng có thể gây bỏng.",
  },
  {
    id: "k53",
    title: "Lưu ý Lắp đặt & Nối đất an toàn DW-15F8(B)-VN",
    keywords: [
      "lap dat",
      "noi dat",
      "vi tri dat may",
      "nguon nhiet",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### 🛠️ LƯU Ý LẮP ĐẶT & NỐI ĐẤT\n---\n* **Nối đất:** Bắt buộc nối đất đúng cách. Nếu gặp lỗi **E3**, rút phích cắm và gọi thợ điện/KTV.\n* **Vị trí:** Đặt máy trên bề mặt chắc chắn, bằng phẳng, dễ thoát nước và cách nguồn nhiệt ít nhất 15cm.\n* **Không chất đồ:** Không đặt vật nặng, vật nóng hay thiết bị điện lên trên máy.",
  },
  {
    id: "k54",
    title: "Cấu tạo Bộ phận & Chất liệu Bao bì DW-15F8(B)-VN",
    keywords: ["bo phan", "phu kien", "bao bi", "tai che", "DW-15F8(B)-VN"],
    answer:
      "### 📦 CÁC BỘ PHẬN & BAO BÌ\n---\n* **Cấu tạo:** Đèn chiếu sáng, giỏ trên, giỏ dưới, giỏ dao kéo, giỏ trái cây, 3 cánh phun (trên/giữa/dưới), bộ lọc, ngăn muối, ngăn rửa.\n* **Bao bì tái chế:** PE (túi), PS (xốp), POM (kẹp), ABS (bảng điều khiển), PP (khoang trong). Hãy gửi đến trung tâm tái chế.",
  },
  {
    id: "k55",
    title: "Bảng điều khiển: Nút Nguồn, Chương trình & Hẹn giờ DW-15F8(B)-VN",
    keywords: [
      "nut nguon",
      "chon chuong trinh",
      "hen gio",
      "bat may",
      "tat may",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### 🎛️ NÚT NGUỒN, CHƯƠNG TRÌNH & HẸN GIỜ\n---\n* **[ Nguồn ]:** Nhấn để bật hoặc tắt máy.\n* **[ Chương trình (< / >) ]:** Nhấn `<` hoặc `>` để chọn chương trình rửa.\n* **[ Hẹn giờ ]:** Đặt thời gian lùi khởi động lên đến 24 giờ (mỗi lần nhấn tăng 1 giờ).",
  },
  {
    id: "k56",
    title: "Bảng điều khiển: Bắt đầu/Hủy & Chọn giàn rửa DW-15F8(B)-VN",
    keywords: [
      "bat dau",
      "huy chuong trinh",
      "chon gian rua",
      "gio tren",
      "gio duoi",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### 🎛️ NÚT BẮT ĐẦU, HỦY & CHỌN GIÀN RỬA\n---\n* **[ Bắt đầu/Hủy ]:** Nhấn để bắt đầu. Nhấn giữ **3 giây** để hủy chương trình đang chọn.\n* **[ Chọn giàn rửa ]:** Tùy chọn chỉ rửa giỏ trên hoặc chỉ rửa giỏ dưới giúp tiết kiệm điện nước khi rửa ít chén đĩa.",
  },
  {
    id: "k57",
    title: "Tính năng Sấy Khí nóng & Bảo quản 168h DW-15F8(B)-VN",
    keywords: [
      "khi nong",
      "say khi nong",
      "bao quan",
      "168h",
      "khong khi trong lanh",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### ♨️ TÍNH NĂNG KHÍ NÓNG & BẢO QUẢN\n---\n* **Khí nóng:** 3 tùy chọn sấy khô sau rửa (Làm mới 60p, Làm ấm 120p, Rửa tráng & Sấy 100p).\n* **Bảo quản:** Quạt chạy giữ không khí tươi mới tối đa 168 giờ (màn hình hiện `--H`). Giữ 3s để bật chọn chế độ Bảo quản.",
  },
  {
    id: "k58",
    title: "Tính năng Tăng tốc & Điều khiển từ xa qua App DW-15F8(B)-VN",
    keywords: [
      "tang toc",
      "dieu khien tu xa",
      "wifi",
      "app tsmartlife",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### ⚡ TÍNH NĂNG TĂNG TỐC & ĐIỀU KHIỂN TỪ XA\n---\n* **Tăng tốc:** Rút ngắn thời gian rửa (áp dụng cho Chuyên sâu, Eco, 90 phút, Đồ thủy tinh, Khử trùng).\n* **Điều khiển từ xa:** Nhấn giữ **3 giây** để kết nối mạng. Nhấn nút này và **đóng cửa trong vòng 3 giây** để cho phép điều khiển qua app TSmartLife.",
  },
  {
    id: "k59",
    title: "Các Chương trình rửa Tiêu chuẩn DW-15F8(B)-VN",
    keywords: [
      "eco",
      "tiet kiem",
      "tu dong ai",
      "chuyen sau",
      "90 phut",
      "ve sinh",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### 🧼 CHƯƠNG TRÌNH RỬA TIÊU CHUẨN\n---\n* **Tiết kiệm (Eco):** 50°C | 215 phút | 1.225 kWh | 15.0L (Chương trình tiêu chuẩn).\n* **Tự động AI:** 45~55°C | 140-195 phút | Tự động phát hiện độ bẩn.\n* **Chuyên sâu:** 65°C | 195 phút | Dành cho nồi chảo, vết dầu mỡ nặng.\n* **90 phút:** 60°C | 90 phút | Rửa nhanh đồ bẩn thông thường.\n* **Vệ sinh:** 60°C | 175 phút | Làm sạch bên trong khoang máy.",
  },
  {
    id: "k60",
    title: "Các Chương trình Rửa tải xuống & Chuyên biệt DW-15F8(B)-VN",
    keywords: [
      "thuy tinh",
      "rua nhanh",
      "ngam",
      "khu trung",
      "hai san",
      "trai cay",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### 📱 CHƯƠNG TRÌNH TẢI XUỐNG & CHUYÊN BIỆT\n---\n* **Đồ thủy tinh (50°C - 140p) / Rửa nhanh (40°C - 30p) / Ngâm (15p)**.\n* **Khử trùng (72°C - 208p):** Nhiệt độ cao giúp khử trùng chén đĩa.\n* **Rửa hải sản (25/15p) & Rửa trái cây (15/10p):** Dùng làm sạch hải sản, rau củ quả.",
  },
  {
    id: "k61",
    title: "Thay đổi chương trình & Thêm chén đĩa giữa chu trình DW-15F8(B)-VN",
    keywords: [
      "thay doi chuong trinh",
      "them do",
      "mo cua giua chung",
      "huy chuong trinh",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### 🔄 ĐỔI CHƯƠNG TRÌNH & THÊM CHÉN ĐĨA\n---\n* **Đổi chương trình:** Mở hé cửa cho tay phun dừng hẳn ➔ Mở hoàn toàn ➔ Giữ **Bắt đầu/Hủy** hơn 3s để về chế độ chờ ➔ Chọn lại chu trình ➔ Đóng cửa nhấn Bắt đầu.\n* **Thêm chén đĩa:** Mở hé cửa chờ tay phun dừng ➔ Mở cửa cho thêm đồ ➔ Đóng cửa lại, máy tự chạy tiếp sau 10 giây.",
  },
  {
    id: "k62",
    title: "Màn hình Hiển thị Biểu tượng & Mã thông báo DW-15F8(B)-VN",
    keywords: [
      "den bao nuoc",
      "den bao muoi",
      "bieu tuong h",
      "man hinh",
      "DW-15F8(B)-VN",
    ],
    answer:
      '### 🖥️ CÁC ĐÈN BÁO TRÊN MÀN HÌNH\n---\n* **Đèn [ ☀️ ]:** Báo sắp hết nước trợ xả, cần thêm vào.\n* **Đèn [ 🔀 / S ]:** Báo sắp hết muối làm mềm nước, cần thêm vào.\n* **Màn hình hiện "--H":** Báo chức năng Bảo quản đang được chọn.\n* **Màn hình hiện "End":** Báo chương trình rửa đã kết thúc.',
  },
  {
    id: "k63",
    title: "Cách Điều chỉnh Giỏ trên & Gấp giá đỡ DW-15F8(B)-VN",
    keywords: [
      "dieu chinh gio tren",
      "nang gio",
      "ha gio",
      "gap gia do",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### 🧺 NÂNG HẠ GIỎ TREN & GẤP GIÁ ĐỠ\n---\n* **Nâng giỏ trên:** Nâng nhẹ giữa hai bên giỏ lên cho đến khi giỏ khóa vào vị trí trên.\n* **Hạ giỏ trên:** Nâng tay cầm điều chỉnh hai bên để thả giỏ xuống vị trí thấp hơn.\n* **Gấp gai giỏ dưới:** Hạ các gai giữ đĩa xuống để tạo khoảng trống cho nồi chảo lớn.",
  },
  {
    id: "k64",
    title: "Vệ sinh Cánh phun nước phía Trên & Dưới DW-15F8(B)-VN",
    keywords: [
      "ve sinh tay phun",
      "canh phun nuoc",
      "tac lo phun",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### 🧽 VỆ SINH CÁNH PHUN NƯỚC\n---\n* **Cánh phun trên:** Giữ chặt đai ốc ở giữa, xoay ngược chiều kim đồng hồ để tháo.\n* **Cánh phun dưới:** Kéo thẳng cánh phun lên trên để tháo.\n* **Làm sạch:** Rửa bằng nước ấm pha xà phòng, dùng bàn chải mềm làm sạch các lỗ phun bị tắc.",
  },
  {
    id: "k65",
    title: "Vệ sinh Cửa, Ron cửa & Đèn chiếu sáng DW-15F8(B)-VN",
    keywords: [
      "ron cua",
      "ve sinh cua",
      "den chieu sang",
      "khi vo den",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### 🧽 BẢO TRÌ CỬA & ĐÈN CHIẾU SÁNG\n---\n* **Ron cửa:** Lau sạch cặn thức ăn bằng vải mềm ẩm. Cần lau cả hai bên mép cửa ngoài khoang rửa.\n* **Đèn chiếu sáng:** Không cần vệ sinh thêm. Nếu bóng bị vỡ, ngắt điện ngay và yêu cầu kỹ thuật viên thay thế.",
  },
  {
    id: "k66",
    title: "Yêu cầu Nguồn nước cấp & Đường thoát nước DW-15F8(B)-VN",
    keywords: [
      "ap luc nuoc",
      "ong cap nuoc",
      "ong thoat nuoc",
      "chieu cao ong xa",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### 🚰 YÊU CẦU NƯỚC CẤP & THOÁT\n---\n* **Áp lực nước:** Tối thiểu 0,04 MPa - Tối đa 1,0 MPa. Sử dụng ống cấp nước mới đi kèm.\n* **Ống thoát nước:** Đường kính tối thiểu 4cm, chiều cao đường xả **thấp hơn 1000mm (1m)**. Không ngâm đầu xả trong nước. Độ dài nối thêm tối đa **4 mét**.",
  },
  {
    id: "k67",
    title: "Sự cố: Máy không khởi động hoặc Không bơm thoát nước DW-15F8(B)-VN",
    keywords: [
      "may khong chay",
      "khong khoi dong",
      "khong xam nuoc",
      "khong bom nuoc",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### 🔴 SỰ CỐ: KHÔNG KHỞI ĐỘNG / KHÔNG BƠM\n---\n* **Máy không khởi động:** Kiểm tra phích cắm, cầu dao/cầu chì; đảm bảo đã đóng chặt cửa máy.\n* **Máy không bơm thoát nước:** Kiểm tra ống thoát nước có bị gấp khúc/tắc không; kiểm tra bộ lọc thô hoặc đường thoát bồn rửa.",
  },
  {
    id: "k68",
    title: "Sự cố: Trào bọt trong khoang & Rỉ sét trên dao kéo DW-15F8(B)-VN",
    keywords: ["trao bot", "nhieu bot", "ri set", "vet trang", "DW-15F8(B)-VN"],
    answer:
      "### 🔴 SỰ CỐ: TRÀO BỌT / RỈ SÉT\n---\n* **Bọt trào trong máy:** Do dùng sai loại chất tẩy rửa hoặc tràn nước trợ xả. Mở cửa cho bọt tan, lau nước trợ xả bị tràn, bật 1 chương trình rửa để xả sạch.\n* **Rỉ sét dao kéo:** Do đồ dùng không có khả năng chống ăn mòn. Tránh rửa đồ dễ bị ăn mòn.",
  },
  {
    id: "k69",
    title: "Sự cố: Chén đĩa rửa xong vẫn bẩn hoặc Chưa khô DW-15F8(B)-VN",
    keywords: [
      "chen dia van ban",
      "con dinh ban",
      "khong kho",
      "dieu chinh tro xa",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### 🔴 SỰ CỐ: CHÉN ĐĨA BẨN / CHƯA KHÔ\n---\n* **Chén đĩa vẫn bẩn:** Do xếp đồ cản cánh phun; bộ lọc bẩn; dùng không đủ viên rửa hoặc chọn chương trình quá nhẹ.\n* **Chén đĩa chưa khô:** Do lấy đồ ra quá sớm (nên chờ 15 phút); chọn chu trình rửa ngắn; hoặc do chất liệu chén đĩa thoát nước kém.",
  },
  {
    id: "k70",
    title: "Bảng Tra cứu Mã lỗi xử lý sự cố DW-15F8(B)-VN",
    keywords: ["ma loi", "E1", "E3", "E4", "E8", "EC", "Ed", "DW-15F8(B)-VN"],
    answer:
      "### 🛠️ BẢNG MÃ LỖI THƯỜNG GẶP\n---\n* **[ E1 ] Cấp nước lâu:** Lỗi lưu lượng kế, van xả hoặc bơm (Gọi KTV).\n* **[ E3 ] Nhiệt độ không đạt:** Lỗi thanh nhiệt/cảm biến. Rút phích cắm ngay (Gọi KTV).\n* **[ E4 ] Tràn nước:** Lỗi phao hoặc tràn khoang chứa. Khóa van nước chính và đổ nước khay đáy trước khi thử lại (Gọi KTV).\n* **[ E8 ] Lỗi van phân phối nước** / **[ EC ] Lỗi hệ thống điều khiển** / **[ Ed ] Lỗi truyền thông** (Gọi KTV sửa chữa).",
  },
  {
    id: "k71",
    title: "Thông số Kỹ thuật & Kích thước DW-15F8(B)-VN",
    keywords: [
      "thong so",
      "kich thuoc",
      "cong suat",
      "muc tieu thu",
      "dien nang",
      "suc chua",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### 📏 THÔNG SỐ KỸ THUẬT & KÍCH THƯỚC\n---\n📌 **1. KÍCH THƯỚC SẢN PHẨM:**\n* **Rộng x Cao x Sâu:** 598 mm x 845 mm x 600 mm (Chiều sâu mở cửa 90° là 1175 mm).\n* **Khối lượng:** Tịnh 48.4 kg / Tổng 52.7 kg.\n\n⚡ **2. THÔNG SỐ HOẠT ĐỘNG:**\n* **Nguồn điện:** 220-240V AC / 50Hz | Công suất: 1760-2100 W.\n* **Tiêu thụ (Eco):** 1.225 kWh / 15 L.\n* **Sức chứa:** 15 bộ chén đĩa (94 món vật dụng).\n* **Áp lực nước:** 0.04 MPa – 1 MPa. Cấp chống nước: IPX1.",
  },
  {
    id: "k72",
    title: "Kết nối App TSmartLife & Khắc phục lỗi Wifi DW-15F8(B)-VN",
    keywords: [
      "app tsmartlife",
      "ket noi wifi",
      "khac phuc loi wifi",
      "18001529",
      "DW-15F8(B)-VN",
    ],
    answer:
      "### 📱 APP TSMARTLIFE & BẢO HÀNH\n---\n* **Kết nối:** Tải app TSmartLife ➔ Bật Bluetooth & Wifi 2.4GHz ➔ Giữ **Điều khiển từ xa** trên máy 3s ➔ Thêm thiết bị trên App.\n* **Lỗi Wifi:** Kiểm tra Wifi 2.4GHz (không dùng 5GHz), tên Wifi không dùng ký tự đặc biệt, tắt *Trợ lý WLAN* trên điện thoại.\n* **Bảo hành:** 36 tháng kể từ ngày mua. Hotline Toshiba: **1800 1529**.",
  },
  {
    id: "k73",
    title: "Cảnh báo An toàn về Điện & Dây nguồn Tủ lạnh GR-RF611WI-PGV",
    keywords: [
      "an toan dien",
      "dien giat",
      "day nguon",
      "o cam",
      "phich cam",
      "rut phich cam",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### ⚠️ CẢNH BÁO AN TOÀN VỀ ĐIỆN\n---\n* **Phích cắm & Ổ cắm:** Sử dụng ổ cắm chuyên dụng, cắm chặt phích cắm, không dùng chung ổ cắm với thiết bị khác để tránh quá nhiệt gây hỏa hoạn.\n* **Thao tác rút cắm:** Khi rút phích cắm, nắm chặt thân phích rút trực tiếp, tuyệt đối không kéo lê dây điện.\n* **Nối đất an toàn:** Yêu cầu ổ cắm phải có dây nối đất đáng tin cậy. Rút điện trước khi vệ sinh, bảo dưỡng hoặc ngắt kết nối thiết bị.\n* **Dây điện hỏng:** Tuyệt đối không tự ý thay dây nguồn hỏng, phải do nhà sản xuất hoặc KTV chuyên môn thay thế.",
  },
  {
    id: "k74",
    title: "Cảnh báo An toàn về Chống cháy nổ & Gas lạnh GR-RF611WI-PGV",
    keywords: [
      "chong chay no",
      "gas lanh",
      "cyclopentane",
      "vat lieu de chay",
      "ro ri gas",
      "r290",
      "r600a",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### 🔥 CẢNH BÁO CHỐNG CHÁY NỔ & GAS LẠNH\n---\n* **Môi chất lạnh:** Tủ sử dụng Gas lạnh và chất cách nhiệt Cyclopentane dễ cháy. Khi hủy bỏ phải đưa đến điểm thu gom chuyên dụng, không thải bỏ chung với rác thải sinh hoạt hay nguồn lửa.\n* **Vật liệu cấm để trong tủ:** Cấm đặt chai lọ chứa cồn, xăng, dầu hỏa, dung môi, cồn ethyl hoặc thực phẩm chứa chất này vào tủ (nguy cơ nổ).\n* **Vật liệu cấm để gần tủ:** Không đặt nến, thuốc lá đang cháy hay chất dễ cháy gần tủ lạnh.\n* **Xử lý khi rò rỉ Gas:** Khóa van gas ngay, mở tất cả cửa sổ/cửa chính cho thông thoáng. **Tuyệt đối không** rút/cắm phích điện hay bật tắt thiết bị điện vì tia lửa điện sẽ gây cháy nổ.",
  },
  {
    id: "k75",
    title: "Cảnh báo An toàn Trẻ em & Môi trường sử dụng GR-RF611WI-PGV",
    keywords: [
      "an toan tre em",
      "tre em chui vao tu",
      "nguy co ngat tho",
      "moi truong su dung",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### 🚸 AN TOÀN TRẺ EM & MÔI TRƯỜNG SỬ DỤNG\n---\n* **An toàn trẻ em:** Trẻ em không được trèo, chui hay chơi đùa bên trong/bên ngoài tủ. Giữ vỏ bao bì, nilon xa tầm tay trẻ để tránh nguy cơ ngạt thở.\n* **Khi thải bỏ tủ cũ:** Tháo rời toàn bộ cửa tủ và gioăng cửa, để kệ ở vị trí cố định để trẻ không thể chui vào bên trong bị kẹt.\n* **Môi trường sử dụng:** Chỉ dùng trong gia đình (trong nhà). Không sử dụng trên các phương tiện giao thông (như tàu thủy, xe lưu động). Không cắm điện tủ lạnh ở nơi ẩm ướt, dột nước hay ngoài trời.",
  },
  {
    id: "k76",
    title: "Mô tả Các bộ phận & Khay kệ bên trong Tủ lạnh GR-RF611WI-PGV",
    keywords: [
      "cau tao tu lanh",
      "cac bo phan",
      "ngan mat",
      "ngan dong",
      "ngan linh hoat",
      "den led",
      "khay kinh",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### 🧊 CẤU TẠO BỘ PHẬN TỦ LẠNH Multi Door\n---\n* **Ngăn mát (Phía trên):** Đèn LED chiếu sáng, các khay kính chịu lực (chỉnh nâng hạ), khay đựng cửa tủ, ngăn kéo lưu trữ.\n* **Ngăn chứa linh hoạt (Flexible Zone):** Ngăn kéo riêng biệt tùy chỉnh đa dạng nhu cầu (Rau củ, Đồ uống, Ướp lạnh).\n* **Ngăn đông (Phía dưới):** Hệ thống khay kéo gồm ngăn kéo trên, ngăn kéo giữa và ngăn kéo dưới giúp phân loại thịt cá dễ dàng.",
  },
  {
    id: "k77",
    title: "Lưu ý Lắp đặt & Kích thước khoảng cách kê tủ GR-RF611WI-PGV",
    keywords: [
      "lap dat tu lanh",
      "khoang cach ke tu",
      "toa nhiệt",
      "can bang chan tu",
      "chieu cao",
      "chieu rong",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### 📐 LẮP ĐẶT & KHOẢNG CÁCH THÔNG THOÁNG\n---\n* **Khoảng cách tản nhiệt:** Phía trên đỉnh tủ phải cách trần **> 30cm**; Mặt sau cách tường **> 10cm**; Hai bên hông tủ cách tường **> 10cm** để đảm bảo máy tản nhiệt tốt, tiết kiệm điện.\n* **Vị trí đặt tủ:** Đặt trên sàn nhà bằng phẳng, chắc chắn. Tránh ánh nắng mặt trời chiếu trực tiếp và xa các nguồn nhiệt (bếp gas, lò sưởi).\n* **Cân bằng chân tủ:** Xoay chân điều chỉnh phía trước theo chiều kim đồng hồ để nâng cao tủ, xoay ngược chiều kim đồng hồ để hạ thấp tủ.",
  },
  {
    id: "k78",
    title: "Bảng điều khiển & Màn hình hiển thị Tủ lạnh GR-RF611WI-PGV",
    keywords: [
      "bang dieu khien",
      "man hinh hien thi",
      "khoa va mo khoa",
      "khoa phim",
      "mo khoa phim",
      "GR-RF611WI-PGV",
    ],
    answer:
      '### 🎛️ BẢNG ĐIỀU KHIỂN & KHÓA AN TOÀN\n---\n* **Trạng thái màn hình:** Khi đóng cửa và không thao tác trong 30 giây, màn hình sẽ tự động khóa và tắt đèn để tiết kiệm điện. Đèn sáng lại khi mở cửa hoặc bấm phím bất kỳ.\n* **Mở khóa bảng điều khiển (Lock/Unlock):** Ở trạng thái khóa, nhấn giữ nút **[ Khóa/Mở khóa 🔒 ]** trong **3 giây** cho đến khi phát ra tiếng "bíp" để mở khóa.\n* **Khóa bảng điều khiển:** Ở trạng thái mở khóa, nhấn giữ nút **[ Khóa/Mở khóa 🔒 ]** trong **3 giây** để khóa màn hình.',
  },
  {
    id: "k79",
    title: "Cài đặt Nhiệt độ Ngăn mát (Fridge) GR-RF611WI-PGV",
    keywords: [
      "cai dat nhiet do ngan mat",
      "chinh nhiet do ngan mat",
      "do c ngan mat",
      "nhiet do ngan mat",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### 🌡️ CÀI ĐẶT NHIỆT ĐỘ NGĂN MÁT\n---\n* **Thao tác:** Ở trạng thái mở khóa màn hình, nhấn nút **[ Ngăn mát ]** để thay đổi nhiệt độ.\n* **Phạm vi nhiệt độ:** Cho phép cài đặt từ **2°C đến 8°C**.\n* **Quy trình nhảy số:** Mỗi lần nhấn nút, nhiệt độ sẽ giảm **1°C**. Khi giảm xuống `2°C`, nhấn tiếp một lần nữa nhiệt độ sẽ quay trở lại **8°C**.\n* **Xác nhận:** Sau khi chọn mức mong muốn, không thao tác trong vài giây đến khi màn hình bị khóa, nhiệt độ mới sẽ có hiệu lực.",
  },
  {
    id: "k80",
    title: "Cài đặt Nhiệt độ Ngăn đông (Freezer) GR-RF611WI-PGV",
    keywords: [
      "cai dat nhiet do ngan dong",
      "chinh nhiet do ngan dong",
      "do c ngan dong",
      "nhiet do ngan am",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### ❄️ CÀI ĐẶT NHIỆT ĐỘ NGĂN ĐÔNG\n---\n* **Thao tác:** Ở trạng thái mở khóa màn hình, nhấn nút **[ Ngăn đông ]** để chỉnh nhiệt độ.\n* **Phạm vi nhiệt độ:** Cho phép cài đặt từ **-16°C đến -24°C**.\n* **Quy trình nhảy số:** Mỗi lần nhấn nút, nhiệt độ sẽ giảm **1°C**. Khi giảm xuống `-24°C`, nhấn tiếp một lần nữa nhiệt độ sẽ quay trở lại **-16°C**.\n* **Xác nhận:** Sau khi chọn mức mong muốn, chờ màn hình tự khóa để lưu thiết lập.",
  },
  {
    id: "k81",
    title: "Cài đặt Ngăn chứa linh hoạt (Flexible Zone) GR-RF611WI-PGV",
    keywords: [
      "ngan linh hoat",
      "flexible zone",
      "chinh ngan linh hoat",
      "trai cay va rau cu",
      "do uong lanh",
      "uop lanh",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### 🔄 CÀI ĐẶT NGĂN CHỨA LINH HOẠT\n---\n* **Thao tác:** Nhấn nút **[ Ngăn chứa linh hoạt ]** để chuyển đổi giữa 3 chế độ bảo quản đặc biệt:\n* **1. Trái cây & Rau củ (Fruit & Veg):** Đèn biểu tượng tương ứng sáng lên, tối ưu độ ẩm bảo quản rau củ tươi ngon.\n* **2. Đồ uống lạnh (Drink):** Đèn biểu tượng sáng, làm lạnh nhanh các loại nước giải khát, lon bia, nước ngọt.\n* **3. Ướp lạnh (Soft Freeze / Chill):** Đèn biểu tượng sáng, thích hợp lưu trữ thịt cá dùng trong ngày không cần rã đông.",
  },
  {
    id: "k82",
    title: "Chế độ Làm lạnh sâu & Làm đông sâu GR-RF611WI-PGV",
    keywords: [
      "lam lanh sau",
      "lam dong sau",
      "super cooling",
      "super freezing",
      "cap dong nhanh",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### ⚡ CHẾ ĐỘ LÀM LẠNH SÂU & LÀM ĐÔNG SÂU\n---\n* **Chế độ Làm lạnh sâu (Super Cooling):** Tự động cài đặt ngăn mát về **2°C**. Thích hợp khi cần làm lạnh nhanh khối lượng lớn thực phẩm mới cho vào. Đèn biểu tượng sáng khi kích hoạt.\n* **Chế độ Làm đông sâu (Super Freezing):** Tự động cài đặt ngăn đông về **-24°C**. Thích hợp cấp đông nhanh thịt cá tươi sống để giữ trọn dưỡng chất. Đèn biểu tượng sáng khi kích hoạt.\n* **Thoát chế độ:** Khi hết chu kỳ tự động hoặc khi chọn lại nhiệt độ thủ công, tủ sẽ tự thoát chế độ và trở về nhiệt độ cài đặt trước đó.",
  },
  {
    id: "k83",
    title: "Chế độ Kỳ nghỉ (Vacation Mode) GR-RF611WI-PGV",
    keywords: [
      "che do ky nghi",
      "vacation mode",
      "di du lich",
      "vang nha",
      "tiet kiem dien ky nghi",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### ✈️ CHẾ ĐỘ KỲ NGHĨA (VACATION MODE)\n---\n* **Công dụng:** Dùng khi gia đình đi du lịch hoặc vắng nhà trong thời gian dài không sử dụng ngăn mát.\n* **Trạng thái tủ:** Chức năng làm lạnh ngăn mát sẽ tắt, biểu tượng **[ Vacation ✈️ ]** sáng lên. Ngăn đông vẫn hoạt động bình thường để bảo quản thực phẩm đông lạnh.\n* **Lưu ý quan trọng:** *Phải lấy hết toàn bộ thực phẩm ra khỏi ngăn mát* trước khi bật chế độ Kỳ nghỉ để tránh hư hỏng bốc mùi.",
  },
  {
    id: "k84",
    title: "Mẹo Bảo quản Thực phẩm đúng cách GR-RF611WI-PGV",
    keywords: [
      "bao quan thuc pham",
      "meo de do trong tu lanh",
      "boc thuc pham",
      "ngan mat",
      "ngan dong",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### 🥗 MẸO BẢO QUẢN THỰC PHẨM ĐÚNG CÁCH\n---\n* **Sơ chế & Đóng gói:** Nên bọc kín hoặc cho thực phẩm vào hộp đậy nắp trước khi cất vào tủ để tránh mất nước và lẫn mùi.\n* **Thức ăn nóng:** Phải để thức ăn nóng nguội hoàn toàn về nhiệt độ phòng mới được cho vào tủ lạnh.\n* **Ngăn mát:** Phù hợp lưu trữ rau củ, trái cây, thức ăn chín, đồ uống (thời hạn dùng ngắn 1-3 ngày).\n* **Ngăn đông:** Phù hợp bảo quản thịt, cá, hải sản tươi sống đông lạnh dài hạn và làm đá viên.\n* **Lưu ý không gian:** Không xếp thực phẩm quá chật che kín các khe hở thổi gió lạnh.",
  },
  {
    id: "k85",
    title: "Sử dụng Khay đá xoay & Hộp trữ đá GR-RF611WI-PGV",
    keywords: [
      "khay lam da",
      "khay da xoay",
      "hop tru da",
      "lay da vien",
      "cach lam da",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### 🧊 HƯỚNG DẪN SỬ DỤNG KHAY LÀM ĐÁ\n---\n* **Cách làm đá:** Đổ nước sạch vào các ô của khay làm đá, không đổ quá đầy tràn vách ngăn. Đặt khay vào vị trí ngăn đông.\n* **Cách lấy đá:** Khi đá đã đông cứng, xoay núm vặn trên khay đá theo chiều kim đồng hồ, đá viên sẽ tự động rớt xuống hộp trữ đá bên dưới.\n* **Rút hộp đá:** Rút nhẹ hộp trữ đá ra để lấy đá viên sử dụng.",
  },
  {
    id: "k86",
    title: "Hướng dẫn Vệ sinh & Bảo dưỡng Tủ lạnh GR-RF611WI-PGV",
    keywords: [
      "ve sinh tu lanh",
      "bao duong tu lanh",
      "lau tu lanh",
      "baking soda",
      "ve sinh gioang cua",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### 🧽 HƯỚNG DẪN VỆ SINH TỦ LẠNH\n---\n* **Chuẩn bị:** Rút phích cắm điện và lấy toàn bộ thực phẩm ra ngoài trước khi vệ sinh.\n* **Dung dịch lau chùi:** Dùng khăn mềm thấm nước ấm pha với ít bột baking soda (khoảng 2 thìa baking soda với 1 lít nước ấm) để lau lòng tủ. Sau đó lau lại bằng khăn sạch khô.\n* **Vệ sinh gioăng cửa:** Lau gioăng cao su cửa thường xuyên bằng nước xà phòng pha loãng để tránh bám bẩn gây hở cửa.\n* **Cấm sử dụng:** Không dùng bàn chải cứng, búi sắt, chất tẩy rửa ăn mòn, xăng, benzene, dung môi hay nước sôi để vệ sinh tủ. Không xịt nước trực tiếp lên tủ.",
  },
  {
    id: "k87",
    title: "Chức năng Xả đông tự động (Defrost) GR-RF611WI-PGV",
    keywords: [
      "xa dong tu dong",
      "xa tuyet",
      "dong tuyet tu lanh",
      "no frost",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### ❄️ CHỨC NĂNG XẢ ĐÔNG TỰ ĐỘNG\n---\n* **Nguyên lý:** Tủ lạnh được thiết kế theo cơ chế làm mát bằng quạt gió (No Frost) nên có chức năng tự động xả đông/xả tuyết định kỳ.\n* **Thao tác thủ công:** Người dùng không cần phải cạo tuyết thủ công.\n* **Lưu ý:** Nếu thấy sương/tuyết bám do độ ẩm thời tiết giao mùa hoặc mở cửa nhiều, bạn chỉ cần ngắt điện tủ và dùng khăn khô lau sạch. Tuyệt đối không dùng vật sắc nhọn để cạy tuyết.",
  },
  {
    id: "k88",
    title:
      "Hướng dẫn xử lý Khi Tủ lạnh không hoạt động/ Mất điện GR-RF611WI-PGV",
    keywords: [
      "mat dien",
      "khi mat dien",
      "khong hoat dong trong thoi gian dai",
      "di chuyen tu lanh",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### 🔌 XỬ LÝ KHI MẤT ĐIỆN & NGHỈ SỬ DỤNG DÀI NGHÀY\n---\n* **Khi mất điện đột ngột:** Hạn chế tối đa số lần mở cửa tủ để giữ hơi lạnh. Không cho thêm thực phẩm tươi mới vào tủ trong lúc mất điện. Thực phẩm có thể giữ lạnh an toàn trong vài giờ.\n* **Khi không dùng thời gian dài:** Rút phích cắm điện, lấy hết thực phẩm, vệ sinh sạch sẽ bên trong và **để hở cửa tủ** để tránh phát sinh nấm mốc, mùi hôi.\n* **Khi di chuyển tủ:** Rút điện, lấy hết đồ, dùng băng dính cố định các khay kệ kính, vặn cao chân đế, đóng chặt cửa. Góc nghiêng khi di chuyển **không vượt quá 45°**, không lật ngược tủ. Sau khi di chuyển đến vị trí mới, nên để tủ đứng yên **2-4 tiếng** rồi mới cắm điện lại.",
  },
  {
    id: "k89",
    title: "Xử lý Sự cố: Tủ không hoạt động hoặc Có mùi hôi GR-RF611WI-PGV",
    keywords: [
      "tu khong chay",
      "tu khong len dien",
      "co mui hoi",
      "tu bi mui",
      "khac phuc loi tu lanh",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### 🛠️ XỬ LÝ SỰ CỐ: TỦ KHÔNG CHẠY / CÓ MÙI HÔI\n---\n* **Tủ không hoạt động:** Kiểm tra phích cắm đã cắm chặt chưa; kiểm tra nguồn điện nhà hoặc cầu dao có bị nhảy không; điện áp có quá thấp không.\n* **Tủ có mùi hôi:** Kiểm tra thực phẩm bọc kín chưa, có đồ nào bị hỏng không. Tiến hành vệ sinh lòng tủ bằng nước ấm pha baking soda.\n* **Máy nén chạy liên tục:** Bình thường vào mùa hè nhiệt độ môi trường cao, hoặc do bỏ quá nhiều thực phẩm cùng lúc, hoặc do mở cửa quá thường xuyên.",
  },
  {
    id: "k90",
    title: "Xử lý Sự cố: Cửa không đóng kín & Gioăng cửa bị hở GR-RF611WI-PGV",
    keywords: [
      "cua khong dong duoc",
      "gioang cua bi ho",
      "ron cua bi hơ",
      "phuc hoi gioang cua",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### 🛠️ XỬ LÝ SỰ CỐ: CỬA TỦ & GIOĂNG CỬA HỞ\n---\n* **Cửa tủ không đóng kín:** Kiểm tra xem túi thực phẩm hay khay đồ có bị cản trở hành trình đóng cửa không; kiểm tra tủ có bị đặt nghiêng lệch không (chỉnh lại chân đế cân bằng).\n* **Gioăng (ron) cửa bị hở/bẩn:** Lau sạch vết bẩn bám trên gioăng cao su.\n* **Phục hồi gioăng bị biến dạng:** Dùng máy sấy tóc sấy nóng nhẹ vùng gioăng bị méo hoặc dùng khăn nóng ủ lên gioăng để cao su mềm ra và khôi phục lại độ bám dính.",
  },
  {
    id: "k91",
    title: "Xử lý Hiện tượng Thường gặp (Không phải lỗi) GR-RF611WI-PGV",
    keywords: [
      "tu lanh bi nong",
      "nong 2 ben hong",
      "tieng keu keu",
      "dong nuoc ngoai tu",
      "tieng gas chay",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### 🔊 BÌNH THƯỜNG HAY LỖI KỸ THUẬT?\n---\n* **Vỏ tủ bị nóng (Hai bên hông tủ nóng):** Đây là hiện tượng **HOÀN TOÀN BÌNH THƯỜNG** do dàn nóng tản nhiệt tích hợp hai bên hông tủ.\n* **Đọng sương bên ngoài tủ:** Khi độ ẩm không khí môi trường quá cao (ngày nồm, mưa ẩm), sương có thể đọng bề mặt ngoài hoặc gioăng cửa. Chỉ cần dùng khăn sạch lau khô.\n* **Tiếng ồn róc rách/róc rách:** Do môi chất lạnh (Gas) luân chuyển bên trong đường ống tạo ra (Bình thường).\n* **Tiếng kêu rung khi bắt đầu/dừng:** Do máy nén (Block) khởi động hoặc ngắt nhịp (Bình thường).",
  },
  {
    id: "k92",
    title: "Thông số Kỹ thuật chi tiết Tủ lạnh GR-RF611WI-PGV",
    keywords: [
      "thong so ky thuat tu lanh",
      "kich thuoc tu lanh",
      "dung tich tu lanh",
      "khoi luong tu lanh",
      "cong suat tu lanh",
      "GR-RF611WI-PGV",
    ],
    answer:
      "### 📏 THÔNG SỐ KỸ THUẬT TỦ LẠNH GR-RF611WI-PGV\n---\n📌 **1. KÍCH THƯỚC & TRỌNG LƯỢNG:**\n* **Kiểu dáng:** Multi Door (4 cửa).\n* **Chiều Rộng x Chiều Sâu x Chiều Cao:** 833 mm x 648 mm x 1898 mm.\n\n⚡ **2. THÔNG SỐ VẬN HÀNH:**\n* **Điện áp định mức:** 220V - 240V / 50Hz.\n* **Môi chất lạnh (Gas):** R600a / Cyclopentane.\n* **Công nghệ:** Inverter tiết kiệm điện, Xả đông tự động (No Frost).\n* **Hệ thống điều khiển:** Màn hình cảm ứng bên ngoài tủ.",
  },
  {
    id: "k93",
    title: "Hướng dẫn & Trợ giúp chung cho Tổng đài viên",
    keywords: [
      "giup toi",
      "toi can giup",
      "giup",
      "help",
      "ho tro",
      "tro giup",
      "can ho tro",
      "huong dan su dung bot",
      "menu",
      "bat dau",
    ],
    answer:
      "### 🤖 TRỢ LÝ TRA CỨU HỖ TRỢ TỔNG ĐÀI\n---\nBạn có thể tra cứu nhanh thông tin bằng các cú pháp sau:\n\n* **1. Tra cứu Mã lỗi:** Gõ trực tiếp mã lỗi (VD: `E1`, `E3`, `E4`, `E10`, `E21`, `E95`...).\n* **2. Tra cứu theo Model máy:** Gõ model (VD: `DW-15F9`, `DW-15F8`, `DW-15F7`, `RF611`...).\n* **3. Tra cứu theo Tính năng:** Gõ tên chức năng (VD: `khi nong`, `bao quan`, `tu he cua`, `go mo cua`, `ve sinh bo loc`, `khoa tre em`...).\n* **4. Tra cứu Sách HDSD & Sơ đồ:** Gõ `HDSD` hoặc chọn ngành hàng để lọc tài liệu PDF.",
  },
  {
    id: "k94",
    title: "Hướng dẫn Quy trình Xử lý khi Khách báo Mã lỗi",
    keywords: [
      "khach bao loi",
      "quy trinh bao loi",
      "huong dan khach xu ly loi",
      "khach bao ma loi",
      "cach xu ly khi gap ma loi",
    ],
    answer:
      "### 🎧 QUY TRÌNH HỖ TRỢ KHÁCH BÁO MÃ LỖI\n---\n📌 **3 BƯỚC XỬ LÝ NHANH:**\n* **Bước 1 (Xác nhận):** Hỏi khách hàng Model máy chính xác và Mã lỗi đang nhấp nháy trên màn hình (hoặc số lần chớp đèn LED).\n* **Bước 2 (Tra cứu & Hướng dẫn sơ bộ):** Gõ mã lỗi vào Chatbot để hướng dẫn khách kiểm tra các lỗi cơ bản (như chưa mở van nước, ống xả tắc, phích cắm lỏng, kẹt cửa).\n* **Bước 3 (Tiếp nhận Kỹ thuật):** Nếu là lỗi phần cứng bo mạch/cảm biến/bơm, tạo phiếu yêu cầu Kỹ thuật viên đến kiểm tra tận nhà.",
  },
  {
    id: "k95",
    title: "Hướng dẫn Tra cứu Thông tin & Chính sách Bảo hành",
    keywords: [
      "chinh sach bao hanh",
      "dieu kien bao hanh",
      "kiem tra bao hanh",
      "thoi han bao hanh",
      "bao hanh mien phi",
    ],
    answer:
      "### 📋 CHÍNH SÁCH BẢO HÀNH CHÍNH HÃNG TOSHIBA\n---\n* **Thời hạn tiêu chuẩn:** **36 tháng** tính từ ngày mua (không quá 42 tháng từ ngày xuất kho).\n* **Đăng ký bảo hành:** Khách hàng cần đăng ký trong vòng **14 ngày** sau khi mua máy qua website hoặc Zalo Official *Toshiba Lifestyle VN*.\n* **Điều kiện miễn phí:** Sản phẩm còn hạn bảo hành, lỗi do linh kiện/nhà sản xuất, tem niêm phong còn nguyên vẹn.\n* **Tổng đài tiếp nhận:** **1800 1529** (Miễn phí cước, 8:00 - 20:00 hàng ngày).",
  },
  {
    id: "k96",
    title: "Xử lý khi Không tìm thấy Mã lỗi hoặc Không có kết quả",
    keywords: [
      "khong tim thay",
      "khong co ket qua",
      "ma loi la",
      "khong co trong he thong",
      "khong ra ket qua",
    ],
    answer:
      "### 🔍 MẸO TÌM KIẾM KHI KHÔNG RA KẾT QUẢ\n---\n* **Rút gọn từ khóa:** Chỉ gõ ký tự cốt lõi (VD: thay vì gõ `máy rửa bát bị tràn nước` hãy gõ `E4` hoặc `tran nuoc`).\n* **Kiểm tra bộ lọc Model:** Bấm nút **[ 🌐 Tất cả ]** trên thanh lọc Model để mở rộng phạm vi tìm kiếm toàn bộ hệ thống.\n* **Tìm theo danh mục:** Gõ `tro giup tung buoc` để duyệt thủ công theo Ngành hàng ➔ Loại thiết bị ➔ Danh sách tài liệu.",
  },
  {
    id: "k97",
    title: "Hướng dẫn Reset / Khởi động lại thiết bị cơ bản",
    keywords: [
      "reset",
      "khoi dong lai may",
      "xoa loi tam thoi",
      "reset may",
      "cach reset",
    ],
    answer:
      "### 🔄 HƯỚNG DẪN RESET / XÓA LỖI TẠM THỜI\n---\nKhi thiết bị bị đơ bảng điều khiển hoặc hiển thị lỗi ảo do xung điện nguồn:\n\n* **Bước 1:** Nhấn nút Nguồn tắt máy.\n* **Bước 2:** Rút phích cắm điện nguồn ra khỏi ổ cắm hoàn toàn.\n* **Bước 3:** Đợi khoảng **5 - 10 phút** để tụ điện trên bo mạch xả hết điện tích.\n* **Bước 4:** Cắm chặt lại phích cắm, bật nguồn và chọn lại chương trình chạy thử.",
  },
  {
    id: "k98",
    title: "Kênh Đăng ký Bảo hành & Tra cứu Trực tuyến Toshiba",
    keywords: [
      "zalo toshiba",
      "website toshiba",
      "kenh bao hanh",
      "dang ky bao hanh online",
      "link bao hanh",
    ],
    answer:
      "### 🌐 CÁC KÊNH LIÊN HỆ & BẢO HÀNH CHÍNH THỨC\n---\n* **Tổng đài Hotline:** **1800 1529** (Miễn cước cuộc gọi).\n* **Zalo Official Account:** Tìm kiếm *Toshiba Lifestyle VN* (Có dấu tích xác thực).\n* **Website chính thức:** `https://www.toshiba-lifestyle.com/vn`\n* **Giờ làm việc tổng đài:** 8h00 đến 20h00 (Từ Thứ Hai đến Chủ Nhật).",
  },
  {
    id: "k99",
    title: "Hướng dẫn Tra cứu Sách Hướng Dẫn Sử Dụng (PDF)",
    keywords: [
      "sach hdsd",
      "huong dan su dung pdf",
      "tai sach hdsd",
      "file pdf",
      "xem sach hdsd",
    ],
    answer:
      "### 📚 TRA CỨU SÁCH HDSD (TÀI LIỆU PDF)\n---\nĐể xem hoặc tải file PDF tài liệu hướng dẫn sử dụng gốc của hãng:\n\n* **Cách 1:** Gõ mã model máy vào ô chat (VD: `TW-BK115`, `DW-15F9`, `GR-RF611`...) và bấm vào nút **[ 📖 SÁCH HDSD ]** xuất hiện bên dưới câu trả lời.\n* **Cách 2:** Bấm vào mục **TRA CỨU SÁCH HDSD (PDF)** màu xanh ở đầu trang chủ để duyệt danh mục theo từng model.",
  },
  {
    id: "k100",
    title: "Hướng dẫn Đóng góp & Báo cáo Pan bệnh mới",
    keywords: [
      "dong gop pan benh",
      "them ma loi moi",
      "bao cao pan benh",
      "kinh nghiem sua chua",
    ],
    answer:
      "### ➕ ĐÓNG GÓP PAN BỆNH & MÃ LỖI MỚI\n---\nNếu bạn phát hiện mã lỗi mới hoặc có kinh nghiệm xử lý thực tế từ kỹ thuật viên:\n\n* **Thao tác:** Bấm vào ô **[ + ĐÓNG GÓP PAN BỆNH MỚI ]** trên trang chủ hệ thống.\n* **Thông tin cần nhập:** Ngành hàng, Model máy, Hiện tượng, Nguyên nhân thực tế và Cách xử lý chi tiết.\n* **Duyệt bài:** Bộ phận kỹ thuật chuyên môn sẽ thẩm định và cập nhật vào kho dữ liệu Chatbot nội bộ.",
  },
  {
    id: "fun_learn_prompt",
    title: "Yêu cầu dạy học cho Bot",
    keywords: [
      "học cái này cho tôi",
      "hoc cai nay cho toi",
      "học cái này",
      "hoc cai nay",
      "học đi",
      "hoc di",
      "dạy học",
      "day hoc",
      "học thêm",
      "hoc them",
    ],
    answer:
      "### 🥺 DẠ EM SẼ HỌC MÀ ĐỪNG MẮNG EM!!!\n---\nEm đang sẵn sàng tiếp thu kiến thức mới đây ạ! 📝✨\n\nHÃY BẤM VÀO **☁️ DẠY BOT (LƯU CLOUD)** ở thanh công cụ phía trên NHA MẤY BÀ DÀ. hoặc gõ theo cú pháp:\n👉 `học: [từ khóa] = [câu trả lời]`",
  },
];
