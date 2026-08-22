// 📖 Kiến thức bổ sung cho CHATBOT chắt lọc từ SÁCH HƯỚNG DẪN SỬ DỤNG (HDSD)
// chính thức trên toshiba-lifestyle.com/vn — theo đúng kiểu đã làm cho Máy rửa
// chén (xem các mục 'Chức năng...' phía trên trong chatbotKnowledge.ts).
//
// ĐỢT 1 (Tủ lạnh + Máy giặt/Sấy — 2 ngành hàng ưu tiên): rút ra từ các manual sau:
//  - Tủ lạnh ngăn đá trên: GR-AG58VA / GR-AG66VA
//  - Tủ lạnh side-by-side: GR-RS637WE-PMV
//  - Máy giặt cửa trước: TW-T25BZU115MWV, TW-T21B120UWV
//  - Máy giặt sấy kết hợp: TWD-T25BZP140MWV
//  - Máy sấy quần áo riêng: TD-BK110GHV
//
// GIỚI HẠN: 1 số model khác (tủ lạnh nhiều cửa/inverter thông minh, máy giặt lồng
// đứng, máy giặt lồng đôi bán tự động) có file HDSD trên website là bản SCAN ẢNH
// (không có lớp chữ để đọc được), nên chưa lấy được nội dung — đây là hạn chế kỹ
// thuật khi đọc từ xa, không phải bỏ sót. Có thể bổ sung sau nếu có bản HDSD dạng
// file Word/PDF gốc (không phải bản scan) cho các model đó.
import type { KnowledgeItem } from "../chatbotKnowledge";

export const manualKnowledge: KnowledgeItem[] = [
  {
    id: "man-f01",
    title: "Chế độ Làm lạnh nhanh (Quick Freeze) trên tủ lạnh",
    categoryName: "Tủ lạnh",
    keywords: ["làm lạnh nhanh", "lam lanh nhanh", "quick freeze", "đông nhanh", "dong nhanh", "GR-AG58VA", "GR-AG66VA", "tủ lạnh ngăn đá trên"],
    answer: "### ❄️ CHẾ ĐỘ LÀM LẠNH NHANH (QUICK FREEZE)\n---\nDùng khi cần làm lạnh nhanh thực phẩm/đồ uống mới mua về.\n\n* **Cách dùng:** Nhấn nút Quick Freeze trên bảng điều khiển.\n* **Hoạt động:** Ngăn đông chạy ở nhiệt độ thấp liên tục khoảng **150 phút**.\n* **Lưu ý:** Nên bật trước khi cho thực phẩm mới vào khoảng vài giờ để đạt hiệu quả tốt nhất.",
  },
  {
    id: "man-f02",
    title: "Chế độ Tiết kiệm năng lượng trên tủ lạnh",
    categoryName: "Tủ lạnh",
    keywords: ["tiết kiệm năng lượng", "tiet kiem nang luong", "eco", "tiết kiệm điện", "GR-AG58VA", "GR-AG66VA", "tủ lạnh ngăn đá trên"],
    answer: "### 🌱 CHẾ ĐỘ TIẾT KIỆM NĂNG LƯỢNG\n---\nGiảm điện năng tiêu thụ bằng cách nâng nhiệt độ ngăn đông lên khoảng **1-2°C** so với mức tiêu chuẩn.\n\n* **Cách dùng:** Nhấn nút chế độ tiết kiệm năng lượng để bật.\n* **Phù hợp khi:** Đi vắng dài ngày hoặc ít mở tủ.",
  },
  {
    id: "man-f03",
    title: "Máy làm đá tự động của tủ lạnh — cách dùng và cách tắt",
    categoryName: "Tủ lạnh",
    keywords: ["máy làm đá", "may lam da", "tự động làm đá", "ice maker", "tắt máy làm đá", "GR-AG58VA", "GR-AG66VA", "tủ lạnh ngăn đá trên"],
    answer: "### 🧊 MÁY LÀM ĐÁ TỰ ĐỘNG (AUTOMATIC ICE MAKER)\n---\n* **Năng suất:** Khoảng **10 viên đá / 2 giờ** ở điều kiện tiêu chuẩn (môi trường 30°C, cửa đóng kín).\n* **Bình chứa nước:** Dung tích 1.4L, có vạch báo mức nước tối đa — không đổ nước quá vạch.\n* **Cách TẮT máy làm đá** (khi không dùng lâu ngày hoặc vận chuyển tủ): giữ nút kiểm tra (check button) bên trong ngăn mát **trên 2 giây**.",
  },
  {
    id: "man-f04",
    title: "Ngăn rau củ — cách chỉnh độ ẩm tránh đóng sương/thối rau",
    categoryName: "Tủ lạnh",
    keywords: ["ngăn rau củ", "ngan rau cu", "độ ẩm", "do am", "rau bị đóng sương", "rau bị thối", "GR-AG58VA", "GR-AG66VA", "tủ lạnh ngăn đá trên"],
    answer: "### 🥦 NGĂN RAU CỦ — ĐIỀU CHỈNH ĐỘ ẨM (AIRFLOW DAMPER)\n---\nNgăn rau củ có 1 thanh gạt điều chỉnh luồng khí lạnh đi vào.\n\n* Gạt về vị trí **ĐÓNG (CLOSE)**: nhiệt độ ngăn tăng khoảng **1°C**, giúp tránh đóng sương/kết đá trên rau củ.\n* Dùng khi thấy rau củ bị sương/lạnh quá mức trong ngăn này.",
  },
  {
    id: "man-f05",
    title: "Tủ lạnh tự động xả tuyết (Auto-Defrost) hoạt động như thế nào",
    categoryName: "Tủ lạnh",
    keywords: ["xả tuyết", "xa tuyet", "auto defrost", "tự xả đá", "tủ bị đóng tuyết", "GR-AG58VA", "GR-AG66VA", "tủ lạnh ngăn đá trên"],
    answer: "### ❄️ HỆ THỐNG TỰ ĐỘNG XẢ TUYẾT (AUTO-DEFROST)\n---\nDòng tủ lạnh này **tự động xả tuyết** — dùng bộ phận gia nhiệt (heater) + timer để làm tan lớp đá bám trên dàn lạnh bên trong, không cần rã đông thủ công.\n\n💡 Nếu khách hàng thấy có tuyết/đá bám nhiều bất thường bên trong, có thể do hệ thống xả tuyết gặp sự cố (cảm biến/heater) — cần kỹ thuật kiểm tra, không phải hiện tượng bình thường.",
  },
  {
    id: "man-f06",
    title: "Đèn khử mùi diệt khuẩn Hybrid LED trong tủ lạnh",
    categoryName: "Tủ lạnh",
    keywords: ["khử mùi", "khu mui", "diệt khuẩn", "diet khuan", "hybrid led", "đèn khử mùi", "GR-AG58VA", "GR-AG66VA", "tủ lạnh ngăn đá trên"],
    answer: "### 💡 ĐÈN KHỬ MÙI DIỆT KHUẨN HYBRID LED\n---\nGắn bên trong ngăn mát, dùng công nghệ **quang xúc tác (photocatalytic)** — khi đèn LED bật sẽ giải phóng gốc hydroxyl, giúp trung hòa vi khuẩn, khí ethylene (làm rau củ mau hư) và mùi hôi trong tủ.",
  },
  {
    id: "man-f07",
    title: "Núm chỉnh nhiệt độ ngăn mát MIN/MID/MAX — lưu ý mùa đông",
    categoryName: "Tủ lạnh",
    keywords: ["chỉnh nhiệt độ", "chinh nhiet do", "núm vặn nhiệt độ", "nhiệt độ ngăn mát", "min mid max", "GR-AG58VA", "GR-AG66VA", "tủ lạnh ngăn đá trên"],
    answer: "### 🌡️ NÚM CHỈNH NHIỆT ĐỘ NGĂN MÁT (MIN / MID / MAX)\n---\n* Vặn núm giữa **MIN – MID – MAX**, khuyến nghị để ở mức **MID (trung bình)** khi dùng bình thường.\n* **Lưu ý mùa đông:** khi nhiệt độ môi trường xuống dưới **5°C**, cần tăng núm gần mức MAX hơn — nếu không thực phẩm trong ngăn mát có thể bị đông đá ngoài ý muốn (do cảm biến theo nhiệt độ phòng).",
  },
  {
    id: "man-f08",
    title: "Cách lắp đặt và mẹo tiết kiệm điện cho tủ lạnh",
    categoryName: "Tủ lạnh",
    keywords: ["lắp đặt tủ lạnh", "lap dat tu lanh", "tiết kiệm điện tủ lạnh", "khoảng cách tường", "GR-AG58VA", "GR-AG66VA", "tủ lạnh ngăn đá trên"],
    answer: "### 🔌 LẮP ĐẶT ĐÚNG CÁCH & MẸO TIẾT KIỆM ĐIỆN\n---\n1. Chừa khoảng cách thông gió: tối thiểu **10cm phía trên/sau**, **4cm hai bên hông**.\n2. Để nguội thức ăn trước khi cho vào tủ.\n3. Hạn chế mở cửa tủ lâu/nhiều lần.\n4. Không để đồ chắn luồng gió lạnh bên trong.\n5. Xếp thực phẩm đều, không dồn 1 chỗ.\n6. Không để vật cản phía ngoài tủ (ảnh hưởng tản nhiệt).",
  },
  {
    id: "man-f09",
    title: "Máy nén (block) tủ lạnh chạy liên tục có phải bị hư không",
    categoryName: "Tủ lạnh",
    keywords: ["máy nén chạy liên tục", "block chạy hoài", "tủ lạnh chạy liên tục", "máy nén kêu to lâu", "GR-RS637WE-PMV", "tủ lạnh side by side", "GR-AG58VA", "GR-AG66VA", "tủ lạnh ngăn đá trên"],
    answer: "### ⚙️ MÁY NÉN (COMPRESSOR) CHẠY LIÊN TỤC — CÓ BÌNH THƯỜNG KHÔNG?\n---\nTheo HDSD: tủ lạnh **chạy liên tục sau khi khởi động là bình thường**, không nên ngắt điện giữa chừng vì ảnh hưởng tuổi thọ máy nén.\n\n* Máy nén hoạt động **trong thời gian dài hơn** là bình thường khi:\n  - Nhiệt độ môi trường tăng cao (mùa nóng)\n  - Vừa mới cắm điện / vừa cho nhiều thực phẩm mới vào\n  - Mở cửa tủ nhiều/lâu\n\n💡 Chỉ đáng lo nếu máy nén chạy liên tục KÈM tủ không lạnh — lúc đó mới cần kỹ thuật kiểm tra gas/block.",
  },
  {
    id: "man-w01",
    title: "Công nghệ bọt khí siêu mịn UFB (Ultra Fine Bubble) trên máy giặt",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["ufb", "bọt khí siêu mịn", "bot khi sieu min", "ultra fine bubble", "bọt khí nano", "TW-T25BZU115MWV", "TW-T21B120UWV", "máy giặt cửa trước"],
    answer: "### 🫧 CÔNG NGHỆ UFB (ULTRA FINE BUBBLE)\n---\nTạo ra hàng triệu bọt khí kích thước **nano** trong nước giặt, giúp chất tẩy rửa **thấm sâu vào sợi vải** hơn, tăng hiệu quả làm sạch mà không cần tăng nhiệt độ nước hay lượng bột giặt.",
  },
  {
    id: "man-w02",
    title: "Chức năng Aroma+ giữ mùi nước xả lâu hơn trên máy giặt",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["aroma+", "aroma plus", "giữ mùi nước xả", "thơm lâu", "thom hon", "TW-T25BZU115MWV", "TW-T21B120UWV", "máy giặt cửa trước"],
    answer: "### 🌸 CHỨC NĂNG AROMA+ (THƠM HƠN)\n---\nThay đổi chế độ và thời gian dòng nước ở bước xả, giúp sợi vải **hấp thụ nước xả vải hiệu quả hơn**, mùi hương lưu lại lâu hơn sau khi giặt xong.",
  },
  {
    id: "man-w03",
    title: "Tự động phân bổ nước giặt/nước xả — Sense Dose",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["sense dose", "tự phân bổ nước giặt", "tu dong bo nuoc giat", "tự động châm nước giặt", "TW-T25BZU115MWV", "TW-T21B120UWV", "máy giặt cửa trước", "TWD-T25BZP140MWV", "máy giặt sấy"],
    answer: "### 🧴 TỰ ĐỘNG PHÂN BỔ NƯỚC GIẶT & NƯỚC XẢ (SENSE DOSE)\n---\nMáy tự động định lượng và bơm nước giặt + nước xả vải theo khối lượng đồ giặt thực tế, có **4 mức điều chỉnh: Thấp – Trung bình – Cao – Tối đa (H-1 đến H-4)** cho nước giặt, tương tự cho nước xả (S-1 đến S-4).\n\n💡 Cần đổ đầy khoang chứa nước giặt/nước xả chuyên dụng để tính năng này hoạt động đúng.",
  },
  {
    id: "man-w04",
    title: "Chế độ Giặt hơi nước (Steam Wash) trên máy giặt",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["giặt hơi nước", "giat hoi nuoc", "steam wash", "chế độ hơi nước", "khử khuẩn bằng hơi nước", "TW-T25BZU115MWV", "TW-T21B120UWV", "máy giặt cửa trước", "TWD-T25BZP140MWV", "máy giặt sấy"],
    answer: "### 💨 CHẾ ĐỘ GIẶT HƠI NƯỚC (STEAM WASH)\n---\nHơi nước xâm nhập sâu vào sợi vải, giúp loại bỏ vết bẩn bám sâu và đạt hiệu quả **kháng khuẩn/khử mùi hôi**.\n\n* Có thể kết hợp với nhiều chương trình: Cotton, Đồ trẻ em, Đồ tổng hợp, Jean, Bảo vệ màu, Dị ứng (Allergy)...",
  },
  {
    id: "man-w05",
    title: "Chương trình Vệ sinh lồng giặt (Drum Clean)",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["vệ sinh lồng giặt", "ve sinh long giat", "drum clean", "lồng giặt bị hôi", "lồng giặt có nhớt", "TW-T25BZU115MWV", "TW-T21B120UWV", "máy giặt cửa trước", "TWD-T25BZP140MWV", "máy giặt sấy"],
    answer: "### 🧽 CHƯƠNG TRÌNH VỆ SINH LỒNG GIẶT (DRUM CLEAN)\n---\nChương trình chuyên biệt để vệ sinh lồng giặt (và lồng chứa nước với máy giặt sấy), dùng nước nóng lên đến **90°C** để loại bỏ cặn bẩn, nấm mốc, mùi hôi tích tụ.\n\n💡 Khuyến nghị chạy định kỳ **1 lần/tháng**, không cho quần áo vào khi chạy chương trình này.",
  },
  {
    id: "man-w06",
    title: "Kết nối WiFi và điều khiển máy giặt từ xa qua app TSmartLife",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["tsmartlife", "wifi máy giặt", "điều khiển từ xa", "app điều khiển máy giặt", "tải chương trình giặt", "TW-T25BZU115MWV", "TW-T21B120UWV", "máy giặt cửa trước", "TWD-T25BZP140MWV", "máy giặt sấy"],
    answer: "### 📶 KẾT NỐI WIFI & ĐIỀU KHIỂN TỪ XA (APP TSMARTLIFE)\n---\n* Máy hỗ trợ kết nối WiFi băng tần **2.4GHz** (không hỗ trợ 5GHz).\n* Qua app **TSmartLife** có thể: điều khiển từ xa (chỉ hoạt động khi cửa máy đang đóng), theo dõi trạng thái, và **tải thêm các chương trình giặt mở rộng** (Jean, Đồ trẻ em, Đồ tổng hợp, Dị ứng...) không có sẵn trên bảng điều khiển vật lý.",
  },
  {
    id: "man-w07",
    title: "Khóa trẻ em trên máy giặt — cách bật/tắt",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["khóa trẻ em", "khoa tre em", "child lock", "khóa nút máy giặt", "trẻ em nghịch máy giặt", "TW-T25BZU115MWV", "TW-T21B120UWV", "máy giặt cửa trước", "TWD-T25BZP140MWV", "máy giặt sấy"],
    answer: "### 🔒 KHÓA TRẺ EM (CHILD LOCK)\n---\nDùng để tránh trẻ em vô tình vận hành/thay đổi chương trình đang chạy — khi bật, toàn bộ nút bấm bị vô hiệu hóa **trừ nút nguồn**.\n\n* Màn hình thường hiển thị ký hiệu **\"CL\"** xen kẽ thời gian còn lại khi khóa đang bật.",
  },
  {
    id: "man-w08",
    title: "Cách thêm đồ giặt sau khi máy đã bắt đầu chạy",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["thêm đồ giặt", "them do giat giua chung", "quên đồ chưa cho vào máy giặt", "cho thêm quần áo", "TW-T25BZU115MWV", "TW-T21B120UWV", "máy giặt cửa trước", "TWD-T25BZP140MWV", "máy giặt sấy"],
    answer: "### ➕ THÊM ĐỒ GIẶT GIỮA CHỪNG\n---\nCó thể tạm dừng để thêm đồ vừa giặt bỏ sót:\n\n1. Nhấn giữ nút **Start/Pause khoảng 3 giây** để tạm dừng.\n2. Đợi đến khi lồng giặt **dừng hẳn** (có khóa an toàn cửa, không mở được khi lồng còn quay).\n3. Mở cửa, thêm đồ, đóng cửa lại rồi nhấn Start/Pause để tiếp tục.",
  },
  {
    id: "man-w09",
    title: "Hẹn giờ hoàn tất (Delay Start) trên máy giặt",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["hẹn giờ hoàn tất", "hen gio", "delay start", "hẹn giờ giặt", "giặt hẹn giờ", "TW-T25BZU115MWV", "TW-T21B120UWV", "máy giặt cửa trước", "TWD-T25BZP140MWV", "máy giặt sấy"],
    answer: "### ⏰ HẸN GIỜ HOÀN TẤT (DELAY START)\n---\nCho phép đặt thời điểm máy **hoàn tất** chu trình giặt, trong khoảng **0 đến 24 giờ** kể từ lúc cài đặt (không phải giờ bắt đầu, mà là giờ giặt XONG) — tiện để lấy đồ giặt xong đúng lúc cần dùng.",
  },
  {
    id: "man-w10",
    title: "Danh sách các chương trình giặt phổ biến trên máy giặt cửa trước",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["chương trình giặt", "chuong trinh giat", "các chế độ giặt", "cotton", "giặt nhanh", "len", "đồ mỏng", "TW-T25BZU115MWV", "TW-T21B120UWV", "máy giặt cửa trước"],
    answer: "### 📋 CÁC CHƯƠNG TRÌNH GIẶT PHỔ BIẾN\n---\n* **Cotton** — đồ cotton/vải lanh chịu nhiệt tốt\n* **Giặt nhanh 12-15 phút** — đồ ít, không bẩn nhiều\n* **Giặt 30 phút / Hỗn hợp 45 phút** — lượng đồ nhỏ/vải pha\n* **Khăn trải giường** — chuyên cho ga/khăn trải giường\n* **Đồ len (Wool)** — giặt nhẹ, nước lạnh, có Woolmark\n* **Đồ mỏng (Delicate)** — lụa, vải mỏng dễ hỏng\n* **Bảo vệ màu / Đồ trắng** — giữ màu / tránh lem màu đồ trắng\n* **Đồ jean, Đồ thể thao, Đồ trẻ em** — chuyên biệt theo loại đồ\n* **Giặt tiết kiệm (Eco)** — tiết kiệm điện\n* **Vệ sinh lồng giặt (Drum Clean)** — không giặt đồ, chỉ vệ sinh máy\n\n💡 Xem thêm chi tiết từng chức năng đặc biệt (UFB, Steam, Aroma+, Sense Dose...) bằng cách hỏi riêng tên chức năng đó.",
  },
  {
    id: "man-w11",
    title: "Các mức sấy d-1/d-2/d-3 trên máy giặt sấy kết hợp",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["d-1", "d-2", "d-3", "mức sấy", "chế độ sấy máy giặt sấy", "sấy nhẹ", "sấy mạnh", "TWD-T25BZP140MWV", "máy giặt sấy"],
    answer: "### 🌬️ CÁC MỨC SẤY TRÊN MÁY GIẶT SẤY (D-1 / D-2 / D-3)\n---\n* **d-1 (Nhiệt độ thấp):** sấy nhẹ nhàng ~60°C, phù hợp đồ mỏng/dễ hỏng — khuyến nghị tối đa **2kg**/lần.\n* **d-2 (Tiêu chuẩn):** sấy thông thường cho nhu cầu hàng ngày.\n* **d-3 (Nhiệt cao):** sấy mạnh, rút ngắn thời gian, lấy hết ẩm nhanh hơn.\n* Ngoài ra có thể chọn **sấy theo thời gian cố định**: 30/60/90/120/180 phút, hoặc **sấy riêng không giặt** (máy tự ước lượng thời gian theo khối lượng đồ).",
  },
  {
    id: "man-w12",
    title: "Công nghệ Origin Color (nước điện phân) trên máy giặt sấy Toshiba",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["origin color", "nước điện phân", "nuoc dien phan", "ion oh", "tẩy vết bẩn cứng đầu", "TWD-T25BZP140MWV", "máy giặt sấy"],
    answer: "### 💧 CÔNG NGHỆ ORIGIN COLOR (NƯỚC ĐIỆN PHÂN)\n---\nNước được điện phân thành **ion -OH**, giúp hòa tan các vết bẩn cứng đầu và làm sáng đồ trắng hiệu quả hơn so với giặt thông thường — không cần dùng thêm hóa chất tẩy mạnh.",
  },
  {
    id: "man-w13",
    title: "Máy giặt sấy tự động điều chỉnh nước/thời gian theo khối lượng đồ",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["tự động cảm biến khối lượng", "auto load sensing", "cảm biến khối lượng đồ giặt", "tự điều chỉnh nước", "TWD-T25BZP140MWV", "máy giặt sấy"],
    answer: "### ⚖️ CẢM BIẾN TỰ ĐỘNG THEO KHỐI LƯỢNG ĐỒ (AUTO LOAD SENSING)\n---\nMáy tự động cân đo khối lượng đồ giặt/sấy để điều chỉnh **lượng nước giặt, nước xả, và thời lượng chu trình** cho phù hợp — không cần người dùng tự ước lượng, giúp tiết kiệm nước/điện.",
  },
  {
    id: "man-w14",
    title: "Vệ sinh bộ lọc xơ vải (bẫy cặn) trên máy giặt sấy — 3 tháng/lần",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["vệ sinh bộ lọc", "ve sinh bo loc", "bẫy xơ vải", "lọc bơm xả", "filter maintenance", "TWD-T25BZP140MWV", "máy giặt sấy"],
    answer: "### 🧹 VỆ SINH BỘ LỌC XƠ VẢI (FILTER MAINTENANCE)\n---\nMáy có bộ lọc xơ vải/cặn bẩn tháo rời ở khu vực bơm xả — cần vệ sinh định kỳ **3 tháng/lần** để tránh nghẹt bơm, máy xả nước chậm hoặc báo lỗi liên quan đến bơm xả.",
  },
  {
    id: "man-w15",
    title: "Van xả khẩn cấp trên máy giặt sấy dùng khi nào",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["xả khẩn cấp", "xa khan cap", "emergency drain", "xả nước khẩn cấp", "máy giặt còn đọng nước", "TWD-T25BZP140MWV", "máy giặt sấy"],
    answer: "### 🚨 VAN XẢ KHẨN CẤP (EMERGENCY DRAIN)\n---\nCửa xả nhanh dùng để **xả hết nước còn đọng trong máy** trong tình huống khẩn cấp (mất điện giữa chừng, máy báo lỗi không tự xả được...), giúp lấy đồ ra ngoài mà không phải đợi máy tự xả bình thường.",
  },
  {
    id: "man-d01",
    title: "Chế độ Làm mới (Refresh) trên máy sấy quần áo",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["chế độ làm mới", "refresh", "khử mùi đồ cất tủ lâu", "làm mới quần áo", "TD-BK110GHV", "máy sấy quần áo"],
    answer: "### ✨ CHẾ ĐỘ LÀM MỚI (REFRESH)\n---\nDùng để làm mới/khử mùi cho quần áo **đã cất trong tủ lâu ngày** hoặc vừa lấy ra chưa giặt lại — không sấy khô đồ ướt. Thời gian điều chỉnh được từ **20-150 phút**.",
  },
  {
    id: "man-d02",
    title: "Chế độ Vệ sinh/Diệt khuẩn (Hygiene) khi sấy quần áo",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["chế độ vệ sinh sấy", "hygiene", "sanitize", "diệt khuẩn khi sấy", "khử trùng quần áo", "TD-BK110GHV", "máy sấy quần áo"],
    answer: "### 🦠 CHẾ ĐỘ VỆ SINH / DIỆT KHUẨN (HYGIENE)\n---\nDùng nhiệt độ cao trong lúc sấy để **diệt khuẩn cho quần áo**.\n\n⚠️ **Không áp dụng được** cho các chương trình: Len (Wool), Đồ tổng hợp (Synthetic), và Làm mới (Refresh) — vì nhiệt độ cao có thể làm hỏng các loại vải này.",
  },
  {
    id: "man-d03",
    title: "Chống nhăn tự động sau khi sấy xong (Anti-Wrinkle)",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["chống nhăn", "chong nhan", "anti wrinkle", "đồ sấy xong bị nhăn", "quên lấy đồ ra khỏi máy sấy", "TD-BK110GHV", "máy sấy quần áo"],
    answer: "### 👕 CHỐNG NHĂN SAU KHI SẤY (ANTI-WRINKLE)\n---\nNếu khách không lấy đồ ra ngay sau khi sấy xong, máy sẽ tự **đảo lồng khoảng 10 phút mỗi giờ, trong vòng 120 phút** sau khi kết thúc chu trình — giúp hạn chế đồ bị nhăn do để lâu trong lồng sấy.",
  },
  {
    id: "man-d04",
    title: "Các chương trình sấy theo loại vải trên máy sấy quần áo",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["chương trình sấy", "chuong trinh say", "sấy cotton", "sấy len", "sấy jean", "khối lượng sấy tối đa", "TD-BK110GHV", "máy sấy quần áo"],
    answer: "### 📋 CÁC CHƯƠNG TRÌNH SẤY THEO LOẠI VẢI\n---\n* **Cotton** — vải cotton 1 hoặc nhiều lớp, tối đa **10kg**\n* **Đồ tổng hợp (Synthetic)** — vải mỏng, ít nhăn, tối đa **3.5kg**\n* **Hỗn hợp (Mixed)** — vải pha cotton/tổng hợp, tối đa **3.5kg**\n* **Len (Wool)** — tối đa **1kg**\n* **Jean** — tối đa **4kg**\n* **Chăn ga (Bedding)** — tối đa **4kg**\n* **Đồ thể thao (Sportswear)** — vải polyester, tối đa **3kg**\n* **Áo sơ mi (Shirts)** — chống nhăn, tối đa **1kg**\n\n⚠️ Sấy quá khối lượng khuyến nghị dễ khiến đồ khô không đều hoặc gây lỗi/quá tải máy.",
  },
  {
    id: "man-d05",
    title: "Vệ sinh lưới lọc xơ vải máy sấy sau mỗi lần dùng",
    categoryName: "Máy giặt / Máy sấy",
    keywords: ["vệ sinh lưới lọc máy sấy", "lint filter", "lưới lọc xơ vải", "máy sấy lâu khô", "máy sấy không nóng", "TD-BK110GHV", "máy sấy quần áo"],
    answer: "### 🧹 VỆ SINH LƯỚI LỌC XƠ VẢI (LINT FILTER)\n---\nMáy sấy có lưới lọc xơ vải ở **cửa máy và đáy máy**, cần vệ sinh **sau mỗi lần sử dụng**.\n\n💡 Nếu khách phản ánh **máy sấy lâu khô/không đủ nóng**, việc đầu tiên cần hỏi là đã vệ sinh lưới lọc gần đây chưa — lưới bị bít xơ vải là nguyên nhân phổ biến nhất.",
  },
];
