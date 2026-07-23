import type { ErrorItem } from "./errors";

export const washingErrors: ErrorItem[] = [
  {
    id: "W01",
    category: "washing",
    code: "Cảnh báo E1",
    title: "Máy giặt không cấp nước trong thời gian quy định",
    description: "Bấm phím Power nhưng màn hình/đèn LED không sáng.",
    steps: [
      { text: "Kiểm tra ống và vòi khoá nước cấp của máy giặt." },
      { text: "Kiểm tra phích cắm và dây nguồn xem có bị chuột cắn/gãy đứt ngầm." },
      { text: "Kiểm tra cầu dao tổng gia đình.", images: ["https://lh3.googleusercontent.com/d/17RWtS1AsR0Qfxtd3B_Te09xQX3AagB9v"] },
    ],
    images: ["https://lh3.googleusercontent.com/d/17RWtS1AsR0Qfxtd3B_Te09xQX3AagB9v"],
  },
  {
    id: "W02",
    category: "washing",
    code: "E2",
    title: "Máy giặt không thoát nước",
    description: "Đến chu trình vắt/xả, nước đọng trong lồng giặt không chảy ra.",
    steps: [
      { text: "Kiểm tra ống xả nước phía sau xem có bị gập nghẽn không." },
      { text: "Vệ sinh bẫy cặn / lưới lọc bơm xả góc dưới bên phải máy." },
      { text: "Kiểm tra bẫy cặn có bị kẹt rác cơ khí không." }
    ],
    images: [],
  },
  {
    id: "W03",
    category: "washing",
    code: "E2",
    title: "Máy giặt không thoát nước",
    description: "Đến chu trình vắt/xả, nước đọng trong lồng giặt không chảy ra.",
    steps: [
      { text: "Kiểm tra ống xả nước phía sau xem có bị gập nghẽn không." },
      { text: "Vệ sinh bẫy cặn / lưới lọc bơm xả góc dưới bên phải máy." },
      { text: "Kiểm tra bẫy cặn có bị kẹt rác cơ khí không." }
    ],
    images: [],
  },
  {
    id: "W04",
    category: "washing",
    code: "E2",
    title: "Máy giặt không thoát nước",
    description: "Đến chu trình vắt/xả, nước đọng trong lồng giặt không chảy ra.",
    steps: [
      { text: "Kiểm tra ống xả nước phía sau xem có bị gập nghẽn không." },
      { text: "Vệ sinh bẫy cặn / lưới lọc bơm xả góc dưới bên phải máy." },
      { text: "Kiểm tra bẫy cặn có bị kẹt rác cơ khí không." }
    ],
    images: [],
  },
  {
    id: "W05",
    category: "washing",
    code: "E2",
    title: "Máy giặt không thoát nước",
    description: "Đến chu trình vắt/xả, nước đọng trong lồng giặt không chảy ra.",
    steps: [
      { text: "Kiểm tra ống xả nước phía sau xem có bị gập nghẽn không." },
      { text: "Vệ sinh bẫy cặn / lưới lọc bơm xả góc dưới bên phải máy." },
      { text: "Kiểm tra bẫy cặn có bị kẹt rác cơ khí không." }
    ],
    images: [],
  },
  {
    id: "W06",
    category: "washing",
    code: "E2",
    title: "Máy giặt không thoát nước",
    description: "Đến chu trình vắt/xả, nước đọng trong lồng giặt không chảy ra.",
    steps: [
      { text: "Kiểm tra ống xả nước phía sau xem có bị gập nghẽn không." },
      { text: "Vệ sinh bẫy cặn / lưới lọc bơm xả góc dưới bên phải máy." },
      { text: "Kiểm tra bẫy cặn có bị kẹt rác cơ khí không." }
    ],
    images: [],
  }

];