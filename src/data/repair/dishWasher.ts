import type { RepairErrorItem } from "../repairErrors";

export const dishWasherRepairErrors: RepairErrorItem[] = [
  {
    id: "rep_dish_e1",
    code: "Các linh kiện trên máy rửa chén DW-15F7, DW-15F8, DW-15F9",
    title: "Thông số linh kiện của máy rửa chén TOSHIBA",
    category: "dishWasher",
    description:
      "Thông tin bao gồm vị trí chân, hình ảnh, trở kháng, điện áp của máy rửa chén TOSHIBA",
    checkPoints: [
      {
        partName: "Công tắc áp suất",
        partImages: [
          "https://lh3.googleusercontent.com/d/15mQ60k3OgAtquucVwg_9GrudoReT6A7E",
          "https://lh3.googleusercontent.com/d/1OcXXeTy5TtQipYHYbmQBmOUwi857IkSe",
        ],
        pcbLocation: {
          text: "CON1: Vàng (EV1-L), CON1: Đỏ (PS), CON3: Nâu (ACL)",
          images: [
            "https://lh3.googleusercontent.com/d/1jsazBTO27ZJGYWJQvwOb5eHs-nJhW4iH",
          ],
        },
        resistance: {
          text: "NC vs COM: Thông mạch, NO vs COM: Hở mạch (0L) ",
          images: [],
        },
        voltage: {
          text: "Điện áp: NC = 220VAC, NO: 0L",
          images: [
            "https://lh3.googleusercontent.com/d/192Thfy0EOO0oEhl4stI4DlF_8mSv0rbc",
            "https://lh3.googleusercontent.com/d/1oq-TDHIIZNWbR_14KcmmSMPEKjYNdvxx",
          ],
        },
      },
      {
        partName: "Van cấp",
        partImages: [
          "https://lh3.googleusercontent.com/d/1NEI4vt7wXi0oTOlniJBgWX8mjQL8NTxj",
        ],
        pcbLocation: {
          text: "CON3: Xanh biển (EV1), CON3: Xanh biển (ACN)",
        },
        resistance: {
          text: "Trị số cuộn dây: 3 - 5kΩ",
          images: [
            "https://lh3.googleusercontent.com/d/1JlRYB2UML6E_StO-K6ZhLUN1QdgJv5_s",
          ],
        },
        voltage: {
          text: "Điện áp: 220VAC",
          images: [
            "https://lh3.googleusercontent.com/d/1GD5WQAe0BxddBw1jdRkulcMgxC5VRdns",
          ],
        },
      },
    ],
    steps: [],
  },
];
