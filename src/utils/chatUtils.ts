// Hàm chuẩn hóa chuỗi tiếng Việt để tìm kiếm
export function cleanString(str: string): string {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .trim();
}

// Giong cleanString (bo dau, viet thuong) nhung GIU LAI khoang trang giua
// cac tu -- dung khi can so khop theo TU NGUYEN VEN (co ranh gioi ro rang)
// thay vi so khop tren 1 chuoi dinh lien khong dau cach, de tranh nhan nham
// 1 tu long ngan (VD "do") khop trung vao GIUA 1 tu khac khong lien quan
// (VD "random") chi vi tinh co trung vai ky tu lien nhau.
export function cleanKeepSpaces(str: string): string {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Co phai `phrase` xuat hien trong `text` duoi dang (cac) TU NGUYEN VEN,
// khong bi dinh vao giua 1 tu khac? (so khop co ranh gioi tu, dung
// cleanKeepSpaces o tren roi boc them khoang trang o 2 dau).
export function containsWholePhrase(text: string, phrase: string): boolean {
  const cleanText = ` ${cleanKeepSpaces(text)} `;
  const cleanPhrase = cleanKeepSpaces(phrase);
  if (!cleanPhrase) return false;
  return cleanText.includes(` ${cleanPhrase} `);
}

// Hàm format text markdown đơn giản thành HTML
export function renderFormattedText(text: string, highlight?: string): string {
  let formatted = text
    .replace(
      /###\s*(.*)/g,
      '<div style="color: #0369a1; font-size: 13px; font-weight: 800; background: #f0f9ff; padding: 6px 10px; border-radius: 6px; border-left: 4px solid #0284c7; margin-bottom: 8px;">$1</div>',
    )
    .replace(
      /---/g,
      '<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 8px 0;" />',
    )
    .replace(
      /\*\*(.*?)\*\*/g,
      '<strong style="color: #0f172a; font-weight: 700;">$1</strong>',
    )
    .replace(/\*(.*?)\*/g, '<em style="color: #0284c7;">$1</em>')
    .replace(/\n/g, "<br />");

  if (highlight && highlight.trim().length >= 2) {
    try {
      const reg = new RegExp(`(${highlight.trim()})`, "gi");
      formatted = formatted.replace(
        reg,
        '<mark style="background: #fef08a; padding: 0 2px; border-radius: 2px; color: #854d0e;">$1</mark>',
      );
    } catch (e) {
      /* ignore */
    }
  }

  return formatted;
}

// Hàm tính độ cứng nước
export function calculateWaterHardness(valStr: string): string {
  const val = parseFloat(valStr);
  if (isNaN(val)) return "Nhập số đàng hoàng giùm con cái mấy má ơi (°dH)";
  if (val <= 5)  return "Mức H1 (0 - 5 °dH): Không cần tái sinh muối (0g/chu kỳ)";
  if (val <= 11) return "Mức H2 (6 - 11 °dH): Tái tạo sau mỗi 10 chu trình (9g muối)";
  if (val <= 17) return "Mức H3 ⭐ (12 - 17 °dH): Mặc định nhà máy. Tái tạo sau 5 chu trình (12g muối)";
  if (val <= 22) return "Mức H4 (18 - 22 °dH): Tái tạo sau mỗi 3 chu trình (20g muối)";
  if (val <= 34) return "Mức H5 (23 - 34 °dH): Tái tạo sau mỗi 2 chu trình (30g muối)";
  return "Mức H6 (35 - 55 °dH): Nước siêu cứng nha mấy má! Tái tạo sau mỗi 1 chu trình (60g muối)";
}

// Hàm copy text sạch (xóa markdown)
export function cleanTextForCopy(text: string): string {
  return text
    .replace(/<[^>]*>/g, "")
    .replace(/###\s*/g, "")
    .replace(/---/g, "")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "");
}