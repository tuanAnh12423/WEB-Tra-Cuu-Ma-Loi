import type { ManualItem } from "../../manuals";

// 21/08/2026: Ngành hàng Quạt bàn — sản phẩm mang thương hiệu COMFEE (TOSHIBA VN
// cũng phân phối), lấy link PDF TRỰC TIẾP từ feelcomfee.com/vn. Category "tableFan"
// là category MỚI, app hiện chưa có mã lỗi riêng cho ngành hàng này nên chỉ hiện dưới
// mục "Tất cả Ngành" trong phần tra cứu Manual (đã có nút lọc riêng từ 21/08/2026).
export const tableFanManuals: ManualItem[] = [
  {
    id: "tf-cf1",
    category: "tableFan",
    brand: "COMFEE",
    model: "CFT-12PWM0A3",
    title: "Sách HDSD Quạt Bàn Comfee CFT-12PWM0A3",
    pdfUrl:
      "https://www.feelcomfee.com/content/dam/comfee-aem/vn/san-pham/quat-ban/cft-12pwm0a3/6-Sach-huong-dan-CFT-12PWM0A3.pdf",
  },
];
