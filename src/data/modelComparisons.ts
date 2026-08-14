export interface ModelSpec {
  model: string;
  category: "washing" | "fridge" | "dishwasher" | "waterPurifier";
  specs: { [key: string]: string };
}

export const modelComparisons: {
  category: "washing" | "fridge" | "dishwasher" | "waterPurifier";
  categoryName: string;
  icon: string;
  attributes: string[]; // Danh sách tiêu chí so sánh
  models: ModelSpec[];
}[] = [
  {
    category: "dishwasher",
    categoryName: "Máy rửa chén",
    icon: "🍽️",
    attributes: ["Sức chứa", "Sấy Khí nóng (Hot Air)", "Tự hé cửa (Auto Open)", "Gõ mở cửa (Knock)", "App TSmartLife", "Độ ồn"],
    models: [
      {
        model: "DW-15F9(B)-VN",
        category: "dishwasher",
        specs: {
          "Sức chứa": "15 Bộ",
          "Sấy Khí nóng (Hot Air)": "✓ Có (3 chế độ)",
          "Tự hé cửa (Auto Open)": "✕ Không",
          "Gõ mở cửa (Knock)": "✕ Không",
          "App TSmartLife": "✓ Có Wifi",
          "Độ ồn": "44 dB",
        },
      },
      {
        model: "DW-15F8(B)-VN",
        category: "dishwasher",
        specs: {
          "Sức chứa": "15 Bộ",
          "Sấy Khí nóng (Hot Air)": "✓ Có (3 chế độ)",
          "Tự hé cửa (Auto Open)": "✕ Không",
          "Gõ mở cửa (Knock)": "✕ Không",
          "App TSmartLife": "✓ Có Wifi",
          "Độ ồn": "44 dB",
        },
      },
      {
        model: "DW-15F7(G)-VN",
        category: "dishwasher",
        specs: {
          "Sức chứa": "15 Bộ",
          "Sấy Khí nóng (Hot Air)": "✓ Có (3 chế độ)",
          "Tự hé cửa (Auto Open)": "✓ Có",
          "Gõ mở cửa (Knock)": "✓ Có (Cảm ứng gõ 2 lần)",
          "App TSmartLife": "✓ Có Wifi",
          "Độ ồn": "42 dB (Yên tĩnh)",
        },
      },
    ],
  },
  {
    category: "fridge",
    categoryName: "Tủ lạnh",
    icon: "🧊",
    attributes: ["Kiểu dáng", "Dung tích", "Ngăn Flexible Zone", "Công nghệ làm lạnh", "Màn hình ngoài"],
    models: [
      {
        model: "GR-RF611WI-PGV",
        category: "fridge",
        specs: {
          "Kiểu dáng": "Multi Door 4 cửa",
          "Dung tích": "511 Lít",
          "Ngăn Flexible Zone": "✓ Có (3 chế độ)",
          "Công nghệ làm lạnh": "Dual Inverter + No Frost",
          "Màn hình ngoài": "✓ Cảm ứng ngoài cửa",
        },
      },
    ],
  },
  {
    category: "washing",
    categoryName: "Máy giặt & Máy sấy",
    icon: "🧺",
    attributes: ["Khối lượng giặt", "Động cơ", "Công nghệ giặt", "Kết nối Wifi"],
    models: [
      {
        model: "TW-BK115",
        category: "washing",
        specs: {
          "Khối lượng giặt": "10.5 Kg",
          "Động cơ": "Origin Inverter (Truyền động gián tiếp)",
          "Công nghệ giặt": "Greatwaves + Ultra Fine Bubble (UFB)",
          "Kết nối Wifi": "✓ TSmartLife",
        },
      },
    ],
  },
];