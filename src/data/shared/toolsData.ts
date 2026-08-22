// =================================================================
// 1. DỮ LIỆU CẤU HÌNH SENSOR (NTC)
// =================================================================
export interface SensorOption {
  label: string;
  value: number; // Trị số kOhm ở 25°C
  bConstant?: number; // Hệ số Beta NTC
  isLookupTable?: boolean; // Cờ đánh dấu nếu dùng Bảng tra cứu trực tiếp
  lookupTable?: Record<string | number, number>; // Bảng tra riêng
  minMaxTable?: Record<string | number, { min: number; max: number }>;
}

// 🟢 1. BẢNG DỮ LIỆU TRA CỨU CHUẨN CHO SENSOR 2K TỦ LẠNH (-30°C ĐẾN 44°C)
export const SENSOR_2K_LOOKUP_TABLE: Record<number, number> = {
  "-30": 33.81,
  "-29": 31.85,
  "-28": 30.01,
  "-27": 28.29,
  "-26": 26.68,
  "-25": 25.17,
  "-24": 23.76,
  "-23": 22.43,
  "-22": 21.18,
  "-21": 20.01,
  "-20": 18.9,
  "-19": 17.87,
  "-18": 16.9,
  "-17": 15.98,
  "-16": 15.12,
  "-15": 14.31,
  "-14": 13.55,
  "-13": 12.83,
  "-12": 12.16,
  "-11": 11.52,
  "-10": 10.92,
  "-9": 10.35,
  "-8": 9.82,
  "-7": 9.316,
  "-6": 8.841,
  "-5": 8.392,
  "-4": 7.968,
  "-3": 7.568,
  "-2": 7.19,
  "-1": 6.833,
  "0": 6.495,
  "1": 6.175,
  "2": 5.873,
  "3": 5.587,
  "4": 5.315,
  "5": 5.06,
  "6": 4.818,
  "7": 4.589,
  "8": 4.372,
  "9": 4.167,
  "10": 3.972,
  "11": 3.788,
  "12": 3.613,
  "13": 3.447,
  "14": 3.29,
  "15": 3.141,
  "16": 2.999,
  "17": 2.865,
  "18": 2.737,
  "19": 2.616,
  "20": 2.501,
  "21": 2.391,
  "22": 2.287,
  "23": 2.188,
  "24": 2.094,
  "25": 2.005,
  "26": 1.919,
  "27": 1.838,
  "28": 1.761,
  "29": 1.687,
  "30": 1.617,
  "31": 1.55,
  "32": 1.486,
  "33": 1.426,
  "34": 1.368,
  "35": 1.312,
  "36": 1.259,
  "37": 1.209,
  "38": 1.161,
  "39": 1.115,
  "40": 1.071,
  "41": 1.029,
  "42": 0.989,
  "43": 0.951,
  "44": 0.914,
};

// 🧊 2. BẢNG CẢM BIẾN LÀM ĐÁ TỰ ĐỘNG CHUẨN ĐƯỜNG CONG TỪ ĐỒ THỊ HÃNG
export const SENSOR_ICE_MAKER_LOOKUP_TABLE: Record<number, number> = {
  "-25": 42.0,
  "-24": 39.2,
  "-23": 36.6,
  "-22": 34.2,
  "-21": 32.0,
  "-20": 30.0,
  "-19": 28.2,
  "-18": 26.5,
  "-17": 24.9,
  "-16": 23.4,
  "-15": 22.0,
  "-14": 20.7,
  "-13": 19.5,
  "-12": 18.4,
  "-11": 17.3,
  "-10": 16.3,
  "-9": 15.7,
  "-8": 15.2,
  "-7": 14.7,
  "-6": 14.2,
  "-5": 13.9,
  "-4": 13.85,
  "-3": 13.8,
  "-2": 13.75,
  "-1": 13.72,
  "0": 13.7, // 🎯 Chuẩn mốc 0°C = 13.7 kΩ (Dải 13 ~ 14.5 kΩ)
  "1": 13.1,
  "2": 12.5,
  "3": 11.9,
  "4": 11.3,
  "5": 10.8,
  "6": 10.3,
  "7": 9.8,
  "8": 9.4,
  "9": 9.0,
  "10": 8.6,
  "11": 8.2,
  "12": 7.9,
  "13": 7.6,
  "14": 7.3,
  "15": 7.0,
  "16": 6.7,
  "17": 6.4,
  "18": 6.2, // 🎯 Đã sửa: 18°C = 6.2 kΩ (Nhiệt độ giảm -> Trở kháng tăng)
  "19": 5.9,
  "20": 5.7,
  "21": 5.5,
  "22": 5.3,
  "23": 5.2,
  "24": 5.1,
  "25": 5.0, // 🎯 Chuẩn mốc 25°C = 5.0 kΩ (Dải 4.5 ~ 5.5 kΩ)
  "26": 4.8,
  "27": 4.6,
  "28": 4.4,
  "29": 4.2,
  "30": 4.0,
};

// Danh sách các loại Sensor phổ biến trên thị trường
export const SENSOR_OPTIONS: SensorOption[] = [
  {
    label: "Sensor Làm đá tự động (AG/RT/RB/RF)",
    value: 5,
    isLookupTable: true,
    lookupTable: SENSOR_ICE_MAKER_LOOKUP_TABLE,
  },
  {
    label: "Sensor tủ RT/RB/RS/RF",
    value: 2,
    isLookupTable: true,
    lookupTable: SENSOR_2K_LOOKUP_TABLE,
  },
];

// =================================================================
// 2. DỮ LIỆU MÃ MÀU ĐIỆN TRỞ
// =================================================================
export interface ColorInfo {
  name: string;
  hex: string;
  val: number;
  mult: number;
  tol?: string;
}

export const COLOR_MAP: Record<string, ColorInfo> = {
  black: { name: "Đen", hex: "#000000", val: 0, mult: 1 },
  brown: { name: "Nâu", hex: "#8B4513", val: 1, mult: 10, tol: "±1%" },
  red: { name: "Đỏ", hex: "#EF4444", val: 2, mult: 100, tol: "±2%" },
  orange: { name: "Cam", hex: "#F97316", val: 3, mult: 1000 },
  yellow: { name: "Vàng", hex: "#EAB308", val: 4, mult: 10000 },
  green: { name: "Lục", hex: "#22C55E", val: 5, mult: 100000, tol: "±0.5%" },
  blue: { name: "Lam", hex: "#3B82F6", val: 6, mult: 1000000, tol: "±0.25%" },
  violet: { name: "Tím", hex: "#A855F7", val: 7, mult: 10000000, tol: "±0.1%" },
  grey: { name: "Xám", hex: "#6B7280", val: 8, mult: 100000000 },
  white: { name: "Trắng", hex: "#FFFFFF", val: 9, mult: 1000000000 },
  gold: { name: "Nhũ Vàng", hex: "#D4AF37", val: -1, mult: 0.1, tol: "±5%" },
  silver: { name: "Nhũ Bạc", hex: "#C0C0C0", val: -1, mult: 0.01, tol: "±10%" },
};

// =================================================================
// 3. DỮ LIỆU TRA CỨU CÔNG SUẤT - DÂY ĐIỆN & APTOMAT (CB)
// =================================================================
export interface PowerElectricalInfo {
  id: string;
  hp: string;
  kw: string;
  current: string;
  cb: string;
  wire: string;
  note?: string;
}

export const POWER_ELECTRICAL_DATA: PowerElectricalInfo[] = [
  {
    id: "1.0hp",
    hp: "1.0 HP (9.000 BTU)",
    kw: "0.75 kW",
    current: "3.5 - 4.5 A",
    cb: "10A - 16A",
    wire: "1.5 mm²",
    note: "Khuyến nghị dùng dây đồng ruột mềm (VCm/CVV).",
  },
  {
    id: "1.5hp",
    hp: "1.5 HP (12.000 BTU)",
    kw: "1.12 kW",
    current: "5.0 - 6.5 A",
    cb: "16A",
    wire: "1.5 mm² - 2.5 mm²",
  },
  {
    id: "2.0hp",
    hp: "2.0 HP (18.000 BTU)",
    kw: "1.50 kW",
    current: "7.5 - 9.5 A",
    cb: "20A",
    wire: "2.5 mm²",
  },
  {
    id: "2.5hp",
    hp: "2.5 HP (24.000 BTU)",
    kw: "1.86 kW",
    current: "10.0 - 12.5 A",
    cb: "25A - 32A",
    wire: "2.5 mm² - 4.0 mm²",
  },
  {
    id: "3.0hp",
    hp: "3.0 HP (28.000 BTU)",
    kw: "2.25 kW",
    current: "12.0 - 15.0 A",
    cb: "32A",
    wire: "4.0 mm²",
  },
  {
    id: "5.0hp",
    hp: "5.0 HP (45.000 BTU)",
    kw: "3.75 kW",
    current: "18.0 - 22.0 A",
    cb: "40A - 50A",
    wire: "6.0 mm²",
  },
];
