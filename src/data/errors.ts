import { washingErrors } from "./errorWashing";
import { fridgeErrors } from "./errorFridge";
import { dishWasherError } from "./errorDishWasher";
import { dryerError } from "./errorDryer";
import { waterPurifierError } from "./errorWaterPurifier";

export type Category = {
  id: string;
  name: string;
  icon: string;
  bgColor?: string;
};

// 🟢 Cập nhật type Step để hỗ trợ cả `image` (1 link) và `images` (mảng link)
export type Step = {
  text: string;
  image?: string;     // 
  images?: string[];  // 
};

export type ErrorItem = {
  id: string;
  category: string;
  code: string;
  title: string;
  description: string;
  steps: Step[] | string[];
  images?: string[]; // 
  videoUrls?: {
    url: string;
    type: "vertical" | "horizontal";
  }[];
};

export const categories: Category[] = [
  { id: "washing", name: "MÁY GIẶT", icon: "🫧", bgColor: "#e6fffa" },
  { id: "fridge", name: "TỦ LẠNH", icon: "❄️", bgColor: "#e8f0fe" },
  {
    id: "dishWasher",
    name: "MÁY RỬA CHÉN",
    icon: "🍽️",
    bgColor: "#fef3c7", // Vàng cam pastel nhạt
  },
  {
    id: "dryerError",
    name: "MẤY SẤY",
    icon: "🍽️",
    bgColor: "#fef3c7",
  },
  {
    id: "waterPurifierError",
    name: "MÁY LỌC NƯỚC",
    icon: "🍽️",
    bgColor: "#fef3c7",
  },
];

export const errors: ErrorItem[] = [
  ...washingErrors,
  ...fridgeErrors,
  ...dishWasherError,
  ...dryerError,
  ...waterPurifierError,
];