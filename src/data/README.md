# Cấu trúc dữ liệu `src/data`

Cập nhật gần nhất 22/08/2026 — sắp xếp lại **theo ngành hàng** để dễ kiểm soát file. Ghi chú này giúp bạn nhớ từng thứ nằm ở đâu và sửa/thêm dữ liệu thì vào file nào.

> File này được cập nhật tự động mỗi khi có file mới/di chuyển/xóa trong dự án — không cần nhắc lại.

## 1. Ba file tổng hợp (nằm ở gốc `src/data/`, không di chuyển)

Đây là 3 file mà phần còn lại của app (ChatBot, ErrorListPage, ManualListPage...) import trực tiếp — không đổi vị trí để khỏi phải sửa code ngoài `src/data`.

- **`errors.ts`** — gộp toàn bộ mã lỗi từ `categories/*/error*.ts`
- **`manuals.ts`** — gộp toàn bộ sách HDSD từ `categories/*/*Manual.ts`
- **`chatbotKnowledge.ts`** — gộp toàn bộ kiến thức chatbot từ `knowledge/*.ts`

Thêm ngành hàng mới thì phải thêm dòng import + spread vào 1 trong 3 file này.

## 2. `categories/` — mỗi ngành hàng 1 thư mục riêng

| Thư mục | File mã lỗi | File sách HDSD | Ghi chú |
|---|---|---|---|
| `washing/` | `errorWashing.ts` | `washingManual.ts` | Máy giặt / Sấy |
| `fridge/` | `errorFridge.ts` | `fridgeManual.ts` | Tủ lạnh |
| `airConditional/` | `errorAirConditional.ts` | `airConditionalManuals.ts` | Máy lạnh — Toshiba + Comfee |
| `dishWasher/` | `errorDishWasher.ts` | `dishWasherManual.ts` | Máy rửa chén — Toshiba + Comfee |
| `waterPurifier/` | `errorWaterPurifier.ts` | `waterPurifierManual.ts` | Máy lọc nước |
| `waterHeater/` | `errorWaterHeater.ts` | `waterHeaterManual.ts` | Máy nước nóng — Toshiba + Comfee |
| `inductionHood/` | `errorInductionHood.ts` | `inductionHoodManual.ts` | Bếp từ + Máy hút mùi — Toshiba + Comfee |
| `riceCooker/` | `errorRiceCooker.ts` | `riceCookerManual.ts` | Nồi cơm điện |
| `airFrier/` | *(chưa có)* | `airFrierManual.ts` | Nồi chiên không dầu |
| `grillOven/` | *(chưa có)* | `grillOven.ts` | Lò nướng |
| `microwave/` | `errorMicrowave.ts` | `microwaveManual.ts` | Lò vi sóng — Comfee + Toshiba (category mới) |
| `dehumidifier/` | `errorDehumidifier.ts` | `dehumidifierManual.ts` | Máy hút ẩm — Comfee (category mới) |
| `iceMaker/` | `errorIceMaker.ts` | `iceMakerManual.ts` | Máy làm đá — Comfee (category mới) |
| `vacuumCleaner/` | `errorVacuumCleaner.ts` | `vacuumCleanerManual.ts` | Máy hút bụi — Comfee (category mới) |
| `kitchenAppliance/` | `errorKitchenAppliance.ts` | `kitchenApplianceManual.ts` | Đồ bếp nhỏ: nồi chiên/máy ép/máy xay — Comfee (category mới) |
| `tableFan/` | *(chưa có)* | `tableFanManual.ts` | Quạt bàn — Comfee (category mới); sách HDSD gốc không có mục xử lý sự cố nên chưa có mã lỗi |
| `others/` | *(chưa có)* | `others.ts` | Thông tin khác |

> 6 category "mới" (microwave, dehumidifier, iceMaker, vacuumCleaner, kitchenAppliance, tableFan) đã có nút lọc riêng trong trang tra cứu Manual từ 21/08/2026 (xem `categories` trong `errors.ts`). 5/6 category này (trừ tableFan) đã có bảng mã lỗi/xử lý sự cố riêng, trích từ mục "Xử lý sự cố" trong sách HDSD chính hãng Comfee. Riêng `airFrier/`, `grillOven/`, `others/` vẫn CHƯA có nút lọc riêng — chỉ hiện trong mục "Tất cả Ngành" (giữ nguyên như thiết kế ban đầu, chưa được yêu cầu bổ sung).

## 3. `knowledge/` — kiến thức chatbot, gom theo từng đợt bổ sung

- `hotkeyKnowledge.ts` — từ file Hot Key nội bộ cũ (Tủ lạnh + Máy giặt)
- `manualKnowledge.ts` — Đợt 1: trích từ sách HDSD Toshiba
- `manualKnowledge2.ts` — Đợt 2: sách HDSD mới bổ sung
- `manualKnowledge3.ts` — Đợt 3: mở rộng tìm kiếm Google cho model không có PDF đọc được
- `manualKnowledge4.ts` — Đợt 4: nốt Toshiba còn thiếu + toàn bộ kiến thức Comfee
- `manualKnowledge5.ts` — Đợt 5: toàn bộ dòng Lò vi sóng TOSHIBA (Cơ, Cơ có nướng, Điện tử, Điện tử có nướng)

## 4. `repair/` — hướng dẫn sửa chữa kỹ thuật

- `repairErrors.ts` — file tổng hợp
- `washing.ts`, `dishWasher.ts` — dữ liệu chi tiết từng ngành

## 5. `shared/` — dữ liệu dùng chung, không thuộc riêng ngành hàng nào

- `diagnosisTree.ts` — cây chẩn đoán của chatbot
- `deviceImages.ts` — hình ảnh thiết bị
- `funDialogues.ts` — hội thoại vui của chatbot
- `searchMapping.ts` — ánh xạ từ khóa tìm kiếm
- `modelComparisons.ts` — so sánh model
- `toolsData.ts` — dữ liệu công cụ kỹ thuật (cảm biến, màu dây điện...)

## Muốn thêm dữ liệu mới thì sửa ở đâu?

1. **Thêm mã lỗi** cho model đã có ngành hàng → sửa `categories/<ngành hàng>/error....ts`
2. **Thêm sách HDSD (PDF)** cho model đã có ngành hàng → sửa `categories/<ngành hàng>/...Manual.ts`
3. **Ngành hàng hoàn toàn mới** (app chưa có) → tạo thư mục mới trong `categories/`, tạo file `.ts` theo đúng mẫu các file cũ, rồi import + spread vào `manuals.ts` (và `errors.ts` nếu có mã lỗi)
4. **Muốn chatbot "biết" thêm kiến thức** (không nhất thiết gắn với PDF) → thêm entry vào 1 file trong `knowledge/`, hoặc tạo file `knowledge/manualKnowledgeN.ts` mới rồi import vào `chatbotKnowledge.ts`

Sau khi sửa xong, luôn chạy `npx tsc --noEmit` rồi `npm run build` để đảm bảo `dist/index.html` build sạch trước khi dán vào Google Apps Script.
