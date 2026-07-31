import type { RepairErrorItem } from "../repairErrors";

export const washingRepairErrors: RepairErrorItem[] = [
  {
    id: "rep_wash_e10",
    code: "Cảnh báo E10",
    title: "Lỗi Cấp Nước",
    category: "washing",
    description:
      "Máy báo E10 sau 5 phút, van cấp nước không đóng/mở hoặc vi xử lý không nhận tín hiệu phao.",

    checkPoints: [
      {
        partName: "Van cấp nước",
        spec: "Vị trí van trên PCB (CN9: Trắng, Cam) | Điện áp cấp: 220VAC | Trị số cuộn dây: 10kΩ - 15kΩ",
        images: [
          "https://lh3.googleusercontent.com/d/17SPX_muDKTmUrFQ7RF4wYFMRw-l5PV5m",
          "https://lh3.googleusercontent.com/d/1oO2MGj3tdxqXw8qEbngClFM2yfQeTEyr",
          "https://lh3.googleusercontent.com/d/1U62Ky-fkx8dYPofWwy4Y-33VNK7gKTvd",
        ],
      },
      {
        partName: "Cảm biến mực nước",
        spec: "Vị trí van trên PCB (CN2: Cam, Xanh biển, Vàng) | Điện áp cấp: 5VDC | Trị số cuộn dây: 24kΩ - 28kΩ | Điện dung: C= 40 - 50nF",
        images: [
          "https://lh3.googleusercontent.com/d/13j2umxBtR7LngMY7rmKadXVpg6Goo5vW",
          "https://lh3.googleusercontent.com/d/1l1nx74ea1E7kHoJ1Ak6gmBoLmq_YQZgo",
          "https://lh3.googleusercontent.com/d/1u_6o4RIh2SL4hNUXaunwmN4hHJGiY_Ri",
          "https://lh3.googleusercontent.com/d/176GG9D-zfuWO-kkmw7jayGyYvalbnXux",
        ],
      },
    ],

    steps: [
      {
        title:
          "Bước 1: Kiểm tra áp lực nước và ống cấp nước (Áp lực nước tiêu chuẩn: 0.1 - 0.4MPa)",
        subSteps: [
          {
            text: "1.1. Kiểm tra áp lực nước của khách hàng",
            images: [
              "https://lh3.googleusercontent.com/d/17RWtS1AsR0Qfxtd3B_Te09xQX3AagB9v",
            ],
          },
          {
            text: "1.2. Kiểm tra ống cấp nước có bị gấp khúc, gập.",
            images: [
              "https://lh3.googleusercontent.com/d/1XP6ifwy0_hRHL3hj71Hi7UwUu4-fNCEe",
            ],
          },
        ],
      },
      {
        title: "Bước 2: Kiểm tra van cấp",
        subSteps: [
          {
            text: "2.1. Kiểm tra dây kết nối của van tại CN9: Trắng, Cam",
            images: [
              "https://lh3.googleusercontent.com/d/1oO2MGj3tdxqXw8qEbngClFM2yfQeTEyr",
            ],
          },
          {
            text: "2.2. Kiểm tra trở kháng của van. R = 10kΩ - 15kΩ",
            images: [
              "https://lh3.googleusercontent.com/d/17SPX_muDKTmUrFQ7RF4wYFMRw-l5PV5m",
            ],
          },
          {
            text: "2.3. Kiểm tra điện áp cấp cho van. V= 220VAC",
            images: [
              "https://lh3.googleusercontent.com/d/1U62Ky-fkx8dYPofWwy4Y-33VNK7gKTvd",
            ],
          },
        ],
      },
      {
        title: "Bước 3: Kiểm tra cảm biến mực nước",
        subSteps: [
          {
            text: "3.1. Kiểm tra dây kết nối của cảm biến tại CN2: Cam, Xanh biển, Vàng",
          },
          {
            text: "3.2. Kiểm tra trở kháng của cảm biến mực nước",
            images: [
              "https://lh3.googleusercontent.com/d/13j2umxBtR7LngMY7rmKadXVpg6Goo5vW",
            ],
          },
          {
            text: "3.3. Kiểm tra điện dung của cảm biến",
            images: [
              "https://lh3.googleusercontent.com/d/1l1nx74ea1E7kHoJ1Ak6gmBoLmq_YQZgo",
            ],
          },
          {
            text: "3.4. Kiểm tra điện áp của cảm biến",
            images: [
              "https://lh3.googleusercontent.com/d/1u_6o4RIh2SL4hNUXaunwmN4hHJGiY_Ri",
              "https://lh3.googleusercontent.com/d/176GG9D-zfuWO-kkmw7jayGyYvalbnXux",
            ],
          },
        ],
      },
      {
        title:
          "Bước 4: Nếu kiểm tra tất cả linh kiện tốt => Tiến hành thay thế PCB.",
      },
    ],
  },
];
