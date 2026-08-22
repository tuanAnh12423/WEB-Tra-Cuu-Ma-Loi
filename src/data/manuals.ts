// 1. Import mảng dữ liệu từ các file ngành hàng riêng biệt
// 21/08/2026: Sắp xếp lại theo ngành hàng — mỗi ngành hàng có 1 thư mục riêng trong
// categories/ chứa cả file mã lỗi + sách HDSD của ngành đó.
import { washingManuals } from "./categories/washing/washingManual";
import { fridgeManuals } from "./categories/fridge/fridgeManual";
import { waterPurifierManuals } from "./categories/waterPurifier/waterPurifierManual";
import { dishWasherManuals } from "./categories/dishWasher/dishWasherManual";
import { ACManuals } from "./categories/airConditional/airConditionalManuals";
import { OtherInformations } from "./categories/others/others";
import { AirFrierManuals } from "./categories/airFrier/airFrierManual";
import { GrilledOvenManuals } from "./categories/grillOven/grillOven";
import { riceCookerManuals } from "./categories/riceCooker/riceCookerManual";
import { inductionHoodManuals } from "./categories/inductionHood/inductionHoodManual";
import { waterHeaterManuals } from "./categories/waterHeater/waterHeaterManual";
import { microwaveManuals } from "./categories/microwave/microwaveManual";
import { dehumidifierManuals } from "./categories/dehumidifier/dehumidifierManual";
import { iceMakerManuals } from "./categories/iceMaker/iceMakerManual";
import { vacuumCleanerManuals } from "./categories/vacuumCleaner/vacuumCleanerManual";
import { kitchenApplianceManuals } from "./categories/kitchenAppliance/kitchenApplianceManual";
import { tableFanManuals } from "./categories/tableFan/tableFanManual";

// 2. Khai báo kiểu dữ liệu
export interface ManualItem {
  id: string;
  category: string;
  brand: string;
  model: string;
  title: string;
  pdfUrl: string;
}

// 3. Gộp tất cả dữ liệu lại giống hệt mảng errors
export const manuals: ManualItem[] = [
  ...washingManuals,
  ...fridgeManuals,
  ...waterPurifierManuals,
  ...dishWasherManuals,
  ...ACManuals,
  ...OtherInformations,
  ...AirFrierManuals,
  ...GrilledOvenManuals,
  ...riceCookerManuals,
  ...inductionHoodManuals,
  ...waterHeaterManuals,
  ...microwaveManuals,
  ...dehumidifierManuals,
  ...iceMakerManuals,
  ...vacuumCleanerManuals,
  ...kitchenApplianceManuals,
  ...tableFanManuals,
];
