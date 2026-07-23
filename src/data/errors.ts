import { washingErrors } from "./errorWashing";
import { fridgeErrors } from "./errorFridge";
import { dishWasherError } from "./errorDishWasher";
import { dryerError } from "./errorDryer";
import { waterPurifierError } from "./errorWaterPurifier";
import { airConditionalError } from "./errorAirConditional";

export type Category = {
  id: string;
  name: string;
  icon?: string;
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
  { id: "washing", name: "MÁY GIẶT", icon: "🧺" },
  { id: "fridge", name: "TỦ LẠNH", icon: "🧊" },
  {
    id: "dishWasher",
    name: "MÁY RỬA CHÉN",
    icon: "🍽️",
  },
  {
    id: "dryerError",
    name: "MẤY SẤY",
    icon: "👕",
  },
  {
    id: "waterPurifierError",
    name: "MÁY LỌC NƯỚC",
    icon: "💧",
  },
  {
    id: "airConditional",
    name: "MÁY LẠNH",
    icon: "🌬️",
  },
];

export const errors: ErrorItem[] = [
  ...washingErrors,
  ...fridgeErrors,
  ...dishWasherError,
  ...dryerError,
  ...waterPurifierError,
  ...airConditionalError,
];