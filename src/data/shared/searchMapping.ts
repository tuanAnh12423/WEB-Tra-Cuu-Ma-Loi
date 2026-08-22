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
    "khong hoat dong",
  ],
  khongxanuoc: [
    "nghet nuoc",
    "nuoc khong ra",
    "may khong xa",
    "nuoc ton trong long giat",
    "con nuoc trong long giat",
  ],
  runglac: [
    "may rung",
    "may nhay",
    "may di chuyen",
    "keu to",
    "may keu nhu truc truc",
    "may on",
  ],

  // Model viết tắt & Từ đồng nghĩa (Key bên trái phải là từ chuẩn không dấu, các từ lóng/tiếng miền nằm ở mảng bên phải)
  grrf611wipgv: ["rf611", "611", "gr-rf611"],
  dw15f9bvn: ["15f9", "15f9b", "may rua 15f9"],
  twbk115: ["bk115", "115", "may giat 115"],

  // 👉 Sửa lại đoạn này: Gộp hết các từ lóng trỏ về từ khóa chuẩn "ruakhongsach" hoặc tiêu đề có sẵn trong kho
  ruakhongsach: [
    "do",
    "ban",
    "concan",
    "nhonmo",
    "khongsach",
    "ruakhongsach",
    "khong sach",
  ],
  giatkhongsach: ["giatdo", "giatkhongsach", "khongsach"],
  tulanhhuhong: ["tulanhhu", "tulanhhong", "tuhu", "tuhong"],
  maygiathuhong: [
    "maygiathu",
    "maygiathong",
    "maygiathuhong",
    "giatchan",
    "giatkhongduoc",
  ],
  ruado: ["ruado", "do", "ban", "khongsach", "doqua"],

  // --- Dùng chung nhiều ngành hàng ---
  khonglanh: ["khong lanh", "khong mat", "het lanh", "yeu lanh"],
  khonglamlanh: ["khong lam lanh", "tu khong mat", "tu het lanh du co nguon"],
  chaynuoc: ["chay nuoc", "nuoc chay ra ngoai", "nho nuoc", "uot san nha"],
  rorinuoc: ["ro ri nuoc", "ri nuoc", "nho giot", "ri ri nuoc"],
  keuto: ["keu to", "on qua", "tieng on lon", "keu lon"],
  baoloi: ["bao loi", "hien ma loi", "nhay so loi", "may bao lien tuc"],
  denbao: ["den bao loi", "den nhap nhay", "den chop tat lien tuc"],
  khongnguon: ["khong nguon", "khong len nguon", "cam dien khong len"],
  comuihoi: ["co mui hoi", "mui la", "co mui khet"],
  khongsang: [
    "khong sang den",
    "man hinh khong hien",
    "khong len den",
    "toi thui khong hien gi",
  ],
  rodien: ["ro dien", "bi giat", "te tay", "giat tay khi so vao"],

  // --- Máy giặt / Sấy ---
  khongvat: ["khong quay", "khong vat", "long khong quay", "khong vat kho"],
  khongcanbang: ["mat can bang", "lech tam", "rung khi vat", "nhay o cho vat"],
  saykhongkho: ["say khong kho", "do con uot", "say hoai khong kho"],

  // --- Nồi cơm điện / Lò vi sóng ---
  khongchin: ["khong chin", "com song", "chua chin", "nau khong chin"],

  // --- Máy hút bụi / Máy hút mùi ---
  hutyeu: ["hut yeu", "luc hut yeu", "hut khong manh", "khong hut mui"],

  // --- Máy hút ẩm ---
  khonglamkho: ["khong lam kho", "khong hut am", "do am khong giam"],

  // --- Máy làm đá ---
  khonglamda: ["khong lam da", "khong ra da", "da khong dong"],

  // --- Máy nước nóng ---
  khongnong: ["khong nong", "nuoc lanh du da bat", "khong len nong"],

  // --- Máy lạnh / Remote ---
  remotekhongnhan: [
    "remote khong nhan",
    "dieu khien khong an",
    "bam remote khong len",
  ],
  khongthedieukhien: [
    "khong the dieu khien",
    "bam nut khong an",
    "bang dieu khien liet",
  ],

  // --- Tủ lạnh ---
  dongtuyet: ["dong tuyet", "dong da nhieu", "dong bang"],
};
