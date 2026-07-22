import type { ErrorItem } from "./errors";

export const fridgeErrors: ErrorItem[] = [
  {
    id: "F01",
    category: "fridge",
    code: "F1",
    title: "Tủ lạnh không làm lạnh",
    description: "Máy nén vẫn chạy nhưng ngăn mát không có hơi lạnh.",
    steps: [
      { text: "Kiểm tra nhiệt độ cài đặt (Nên để ngăn mát 3-5°C, ngăn đá -18°C)." },
      { text: "Kiểm tra gioăng cao su cửa tủ xem có bị hở không." },
      { text: "Kiểm tra lỗ thông gió ngăn đá xuống ngăn mát có bị cản trở không." }
    ],
    images: [],
  }
];