import { washingErrors } from "./errorWashing";
import { fridgeErrors } from "./errorFridge";

export type Category = {
  id: string;
  name: string;
  icon: string;
  bgColor?: string;
};

// 🟢 Cập nhật type Step để hỗ trợ cả `image` (1 link) và `images` (mảng link)
export type Step = {
  text: string;
  image?: string;     // 👈 Thêm cái này để hỗ trợ 1 link ảnh đơn lẻ
  images?: string[];  // 👈 Giữ cái này nếu muốn truyền nhiều ảnh trong 1 bước
};

export type ErrorItem = {
  id: string;
  category: string;
  code: string;
  title: string;
  description: string;
  steps: Step[] | string[];
  images?: string[]; // 👈 Sửa thành `images?:` (thêm dấu ?) để nếu mã lỗi nào không có mảng ảnh chung thì không bị bắt buộc điền
  videoUrls?: {
    url: string;
    type: "vertical" | "horizontal";
  }[];
};

export const categories: Category[] = [
  { id: "washing", name: "MÁY GIẶT", icon: "🫧", bgColor: "#e6fffa" },
  { id: "fridge", name: "TỦ LẠNH", icon: "❄️", bgColor: "#e8f0fe" },
];

export const errors: ErrorItem[] = [
  ...washingErrors,
  ...fridgeErrors,
];