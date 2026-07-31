import type { RepairErrorItem } from "../repairErrors";

export const dishWasherRepairErrors: RepairErrorItem[] = [
  {
    id: "rep_dish_e1",
    code: "Cảnh báo E10",
    title: "Không có nước trong thời gian quy định (4 phút)",
    category: "dishWasher",
    description:
      "Máy báo E10 sau 4 phút, không có nước cấp hoặc hư hỏng các linh kiện liên quan",
    checkPoints: [
      {
        partName: "Van cấp",
        spec: "",
      },
    ],
    steps: [],
  },
];
