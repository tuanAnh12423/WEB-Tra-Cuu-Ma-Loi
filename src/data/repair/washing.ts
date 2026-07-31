import type { RepairErrorItem } from "../repairErrors";

export const washingRepairErrors: RepairErrorItem[] = [
  {
    id: "rep_wash_e10",
    code: "E10",
    title: "Lỗi Cấp Nước - Hỏng Triac / Mạch Báo Mức Nước",
    category: "washing",
    description: "Máy báo E10 sau 5 phút, van cấp nước không đóng/mở hoặc vi xử lý không nhận tín hiệu phao.",
    
    checkPoints: [
      {
        partName: "Van cấp nước (Water Inlet Valve)",
        spec: "Điện áp cấp: 220VAC | Trị số cuộn dây: 3.5kΩ - 4.5kΩ",
        images: ["https://via.placeholder.com/300x180?text=Do+Cuon+Day+Van"]
        },
        {
        partName: "Cảm biến mực nước (Water Level Sensor)",
        spec: "Điện áp cấp: 220VAC | Trị số cuộn dây: 3.5kΩ - 4.5kΩ",
        images: ["https://via.placeholder.com/300x180?text=Do+Cuon+Day+Van"]
        },
        {
        partName: "Cảm biến nhiệ độ",
        spec: "Điện áp cấp: 5VDC | Trị số cuộn dây: 3.5kΩ - 4.5kΩ",
        images: ["https://via.placeholder.com/300x180?text=Do+Cuon+Day+Van"]
        },
        {
        partName: "Cảm biến nhiệ độ",
        spec: "Điện áp cấp: 5VDC | Trị số cuộn dây: 3.5kΩ - 4.5kΩ",
        images: ["https://via.placeholder.com/300x180?text=Do+Cuon+Day+Van"]
        },
        {
        partName: "Cảm biến nhiệ độ",
        spec: "Điện áp cấp: 5VDC | Trị số cuộn dây: 3.5kΩ - 4.5kΩ",
        images: ["https://via.placeholder.com/300x180?text=Do+Cuon+Day+Van"]
        },
        {
        partName: "Cảm biến nhiệ độ",
        spec: "Điện áp cấp: 5VDC | Trị số cuộn dây: 3.5kΩ - 4.5kΩ",
        images: ["https://via.placeholder.com/300x180?text=Do+Cuon+Day+Van"]
      },
    ],

    steps: [
      {
        title: "Bước 1: Kiểm tra cuộn dây van cấp nước",
        // 🟢 SubSteps bao gồm văn bản và danh sách hình ảnh riêng
        subSteps: [
          {
            text: "Rút phích cắm điện để đảm bảo an toàn.",
          },
          {
            text: "Dùng đồng hồ VOM chuyển sang thang đo Ohm (Ω) và đo 2 chân cuộn dây van cấp.",
            images: [
              "https://via.placeholder.com/300x200?text=Thu+Thao+Tac+Do+VOM",
              "https://via.placeholder.com/300x200?text=Ket+Qua+Do+Om"
            ]
          },
          {
            text: "Nếu kim không lên (vô cực) -> Cuộn dây van cấp bị đứt, cần thay van mới.",
            images: [
              "https://via.placeholder.com/300x200?text=Van+Cap+Moi"
            ]
          }
        ]
        },
        {
        title: "Bước 2: Kiểm tra cuộn dây van cấp nước",
        // 🟢 SubSteps bao gồm văn bản và danh sách hình ảnh riêng
        subSteps: [
          {
            text: "Rút phích cắm điện để đảm bảo an toàn.",
          },
          {
            text: "Dùng đồng hồ VOM chuyển sang thang đo Ohm (Ω) và đo 2 chân cuộn dây van cấp.",
            images: [
              "https://via.placeholder.com/300x200?text=Thu+Thao+Tac+Do+VOM",
              "https://via.placeholder.com/300x200?text=Ket+Qua+Do+Om"
            ]
          },
          {
            text: "Nếu kim không lên (vô cực) -> Cuộn dây van cấp bị đứt, cần thay van mới.",
            images: [
              "https://via.placeholder.com/300x200?text=Van+Cap+Moi"
            ]
          }
        ]
      }
    ]
  }
];