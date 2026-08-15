// src/data/searchMapping.ts

export const SEARCH_MAPPING: { [key: string]: string[] } = {
  // Lỗi lồng giặt
  longngang: ["cua truoc", "cua ngang", "long ngang", "may giat ngang"],
  longdung: ["cua tren", "cua dung", "long dung", "may giat dung"],

  // Lỗi thường gặp - Tiếng lóng/Vùng miền
  matnguon: [
    "khong len dien",
    "bi mat dien",
    "may chet ngum",
    "may khong vao dien",
  ],
  khongxanuoc: [
    "nghet nuoc",
    "nuoc khong ra",
    "may khong xa",
    "nuoc ton trong long",
  ],
  runglac: [
    "may rung",
    "may nhay",
    "may di chuyen",
    "keu to",
    "may keu nhu truc truc",
  ],

  // Model viết tắt (Ví dụ thực tế của bạn)
  grrf611wipgv: ["rf611", "611", "gr-rf611"],
  dw15f9bvn: ["15f9", "15f9b", "may rua 15f9"],
  twbk115: ["bk115", "115", "may giat 115"],
};
