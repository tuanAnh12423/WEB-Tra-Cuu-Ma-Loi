import { washingErrors } from "./errorWashing";
import { fridgeErrors } from "./errorFridge";

export type Category = {
  id: string;
  name: string;
  icon: string;
  bgColor?: string;
};

export type Step = {
  text: string;
  images?: string[];
};

export type ErrorItem = {
  id: string;
  category: string;
  code: string;
  title: string;
  description: string;
  steps: Step[] | string[];
  images: string[];
  videoUrls?: {
    url: string;
    type: "vertical" | "horizontal";
  }[];
};

export const categories: Category[] = [
  { id: "washing", name: "Máy giặt", icon: "🫧", bgColor: "#e6fffa" },
  { id: "fridge", name: "Tủ lạnh", icon: "❄️", bgColor: "#e8f0fe" },
];

export const errors: ErrorItem[] = [
  ...washingErrors,
  ...fridgeErrors,
];