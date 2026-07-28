import type { ErrorItem } from "./errors";

export const fridgeErrors: ErrorItem[] = [
  {
    id: "F01",
    category: "fridge",
    code: "Cả tủ không lạnh",
    title: "Tủ lạnh không làm lạnh",
    description: "Tủ không hoạt động không có hơi lạnh",
    steps: [
      {
        text: "Kiểm tra tủ có nguồn không? Vui lòng kiểm tra đèn led có sáng và máy nén có hoạt động không, xem lại ổ cắm điện",
      },
      { text: "KH cách cài đặt theo từng model đã đúng cách chưa?" },
      {
        text: "Nếu Led sáng + Máy nén hoạt động +  cài đặt đúng",
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/17RWtS1AsR0Qfxtd3B_Te09xQX3AagB9v",
    ],
  },
];
