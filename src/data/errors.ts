import { washingErrors } from "./errorWashing";
import { fridgeErrors } from "./errorFridge";
import { dishWasherError } from "./errorDishWasher";
import { dryerError } from "./errorDryer";
import { waterPurifierError } from "./errorWaterPurifier";

export type Category = {
  id: string;
  name: string;
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
  { id: "washing", name: "MÁY GIẶT", },
  { id: "fridge", name: "TỦ LẠNH", },
  {
    id: "dishWasher",
    name: "MÁY RỬA CHÉN",
  },
  {
    id: "dryerError",
    name: "MẤY SẤY",
  },
  {
    id: "waterPurifierError",
    name: "MÁY LỌC NƯỚC",
  },
];

export const errors: ErrorItem[] = [
  ...washingErrors,
  ...fridgeErrors,
  ...dishWasherError,
  ...dryerError,
  ...waterPurifierError,
];