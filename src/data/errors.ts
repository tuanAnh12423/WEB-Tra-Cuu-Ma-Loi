// 21/08/2026: Sắp xếp lại theo ngành hàng — mỗi ngành hàng có 1 thư mục riêng trong
// categories/ chứa cả file mã lỗi + sách HDSD của ngành đó, xem chi tiết cấu trúc mới
// trong categories/<tên ngành hàng>/.
import { washingErrors } from "./categories/washing/errorWashing";
import { fridgeErrors } from "./categories/fridge/errorFridge";
import { dishWasherError } from "./categories/dishWasher/errorDishWasher";
import { waterPurifierError } from "./categories/waterPurifier/errorWaterPurifier";
import { airConditionalError } from "./categories/airConditional/errorAirConditional";
import { inductionHoodError } from "./categories/inductionHood/errorInductionHood";
import { riceCookerError } from "./categories/riceCooker/errorRiceCooker";
import { waterHeaterError } from "./categories/waterHeater/errorWaterHeater";
// 21/08/2026: Bổ sung mã lỗi cho 5 ngành hàng Comfee hoàn toàn mới (trước đây chỉ có
// sách HDSD + kiến thức chatbot, chưa có bảng mã lỗi). Quạt bàn (tableFan) KHÔNG có
// vì sách HDSD chính hãng không có mục xử lý sự cố nào.
import { microwaveError } from "./categories/microwave/errorMicrowave";
import { dehumidifierError } from "./categories/dehumidifier/errorDehumidifier";
import { iceMakerError } from "./categories/iceMaker/errorIceMaker";
import { vacuumCleanerError } from "./categories/vacuumCleaner/errorVacuumCleaner";
import { kitchenApplianceError } from "./categories/kitchenAppliance/errorKitchenAppliance";

export type Category = {
  id: string;
  name: string;
  icon?: string;
};

export type Step = {
  text: string;
  image?: string; //
  images?: string[]; //
};

export type ErrorItem = {
  id: string;
  category: string;
  code: string;
  title: string;
  description: string;
  subtypes?: string[];
  subtype?: string; // Cập nhật subtype để hỗ trợ cả mảng và chuỗi
  steps: Step[] | string[];
  images?: string[]; //
  videoUrls?: {
    url: string;
    type: "vertical" | "horizontal";
  }[];
};

export const categories: Category[] = [
  { id: "washing", name: "MÁY GIẶT - MÁY SẤY", icon: "🧺" },
  { id: "fridge", name: "TỦ LẠNH", icon: "🧊" },
  {
    id: "dishWasher",
    name: "MÁY RỬA CHÉN",
    icon: "🍽️",
  },
  {
    id: "waterPurifierError",
    name: "MÁY LỌC NƯỚC",
    icon: "💧",
  },
  {
    id: "airConditional",
    name: "MÁY LẠNH",
    icon: "🌬️",
  },
  {
    id: "inductionHood",
    name: "BẾP TỪ - HÚT MÙI",
    icon: "🍳",
  },
  {
    id: "riceCooker",
    name: "NỒI CƠM ĐIỆN",
    icon: "🍚",
  },
  {
    id: "waterHeater",
    name: "MÁY NƯỚC NÓNG",
    icon: "🚿",
  },
  // 21/08/2026: Bổ sung nút lọc cho 5 ngành hàng Comfee mới (chỉ có sách HDSD,
  // chưa có mã lỗi riêng) — trước đây các ngành này chỉ hiện được ở mục
  // "Tất cả Ngành" trong trang tra cứu Manual vì chưa có trong danh sách categories.
  {
    id: "microwave",
    name: "LÒ VI SÓNG",
    icon: "🍱",
  },
  {
    id: "dehumidifier",
    name: "MÁY HÚT ẨM",
    icon: "🌫️",
  },
  {
    id: "iceMaker",
    name: "MÁY LÀM ĐÁ",
    icon: "❄️",
  },
  {
    id: "vacuumCleaner",
    name: "MÁY HÚT BỤI",
    icon: "🧹",
  },
  {
    id: "kitchenAppliance",
    name: "ĐỒ BẾP NHỎ",
    icon: "🥤",
  },
  {
    id: "tableFan",
    name: "QUẠT BÀN",
    icon: "🌀",
  },
];

export const errors: ErrorItem[] = [
  ...washingErrors,
  ...fridgeErrors,
  ...dishWasherError,
  ...waterPurifierError,
  ...airConditionalError,
  ...inductionHoodError,
  ...riceCookerError,
  ...waterHeaterError,
  ...microwaveError,
  ...dehumidifierError,
  ...iceMakerError,
  ...vacuumCleanerError,
  ...kitchenApplianceError,
];
