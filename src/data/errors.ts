import { washingErrors } from "./errorWashing";
import { fridgeErrors } from "./errorFridge";
import { dishWasherError } from "./errorDishWasher";
import { waterPurifierError } from "./errorWaterPurifier";
import { airConditionalError } from "./errorAirConditional";

export type Category = {
  id: string;
  name: string;
  icon?: string;
};

export type Step = {
  text: string;
  image?: string; //
  images?: string[]; //
};

export type ErrorItem = {
  id: string;
  category: string;
  code: string;
  title: string;
  description: string;
  subtypes?: string[];
  subtype?: string; // Cập nhật subtype để hỗ trợ cả mảng và chuỗi
  steps: Step[] | string[];
  images?: string[]; //
  videoUrls?: {
    url: string;
    type: "vertical" | "horizontal";
  }[];
};

export const categories: Category[] = [
  { id: "washing", name: "MÁY GIẶT - MÁY SẤY", icon: "🧺" },
  { id: "fridge", name: "TỦ LẠNH", icon: "🧊" },
  {
    id: "dishWasher",
    name: "MÁY RỬA CHÉN",
    icon: "🍽️",
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
  ...waterPurifierError,
  ...airConditionalError,
];
