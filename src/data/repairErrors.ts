// 1. Cấu trúc cho điểm kiểm tra linh kiện
export interface CheckPoint {
  partName: string;      // Tên linh kiện (VD: "Cảm biến nhiệt độ dàn lạnh")
  spec: string;          // Trị số / Điện áp chuẩn (VD: "5kOhm ở 25°C hoặc 2.5VDC")
  images?: string[];     // Hình ảnh đo đạc riêng cho linh kiện này
}

// 2. 🟢 CẤU TRÚC CHO TỪNG BƯỚC NHỎ (SUB-STEP) KÈM HÌNH ẢNH RIÊNG
export interface SubStep {
  text: string;          // Nội dung bước nhỏ
  images?: string[];     // Hình ảnh minh họa riêng cho bước nhỏ này
}

// 3. Cấu trúc cho từng Bước lớn
export interface RepairStep {
  title: string;          // Tiêu đề bước (VD: "Bước 1: Kiểm tra van cấp nước")
  subSteps?: SubStep[];   // 🟢 ĐÃ CẬP NHẬT: Mảng các bước nhỏ dạng Object
  images?: string[];      // Ảnh tổng quan của cả bước lớn (nếu có)
}

// 4. Cấu trúc đầy đủ của 1 bài sửa chữa
export interface RepairErrorItem {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  checkPoints?: CheckPoint[];
  steps: RepairStep[];
  videoUrls?: { type: string; url: string }[];
}

// Import dữ liệu từ các file ngành hàng
import { washingRepairErrors } from "./repair/washing";

export const repairErrors: RepairErrorItem[] = [
  ...washingRepairErrors,
];