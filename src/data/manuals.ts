// 1. Import mảng dữ liệu từ các file ngành hàng riêng biệt
import { washingManuals } from "./washingManual";
import { fridgeManuals } from "./fridgeManual";

// 2. Khai báo kiểu dữ liệu
export interface ManualItem {
  id: string;
  category: string;
  brand: string;
  model: string;
  title: string;
  pdfUrl: string;
}

// 3. Gộp tất cả dữ liệu lại giống hệt mảng errors
export const manuals: ManualItem[] = [
  ...washingManuals,
  ...fridgeManuals,
];