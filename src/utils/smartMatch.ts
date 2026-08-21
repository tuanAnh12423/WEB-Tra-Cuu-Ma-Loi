// 🧠 Bộ so khớp "thông minh" cho chatbot — KHÔNG PHẢI AI thật (không gọi ra
// ngoài, không tốn phí, chạy gọn trong 1 file như hiện tại), chỉ là luật +
// chấm điểm để bot hiểu câu hỏi linh hoạt hơn kiểu dò-từ-khóa-y-hệt cũ:
//
// 1. Tách câu hỏi + dữ liệu ra thành từng "từ" (token), bỏ dấu, viết thường —
//    nên không còn phụ thuộc thứ tự từ trong câu (VD: "cửa bị kẹt" và
//    "kẹt cửa" giờ được coi là giống nhau).
// 2. Chấp nhận gõ sai chính tả nhẹ (1-2 ký tự) cho từ đủ dài, để lỗi gõ nhỏ
//    không làm bot "không hiểu" luôn.
// 3. Từ càng dài/đặc trưng thì càng "nặng ký" khi tính điểm, để các từ chung
//    chung như "máy", "bị", "cái" không làm loãng kết quả.
// 4. Xếp hạng toàn bộ dữ liệu theo điểm liên quan, dùng làm gợi ý khi cách dò
//    từ khóa cũ (so khớp y hệt) không tìm ra gì — thay vì báo "không tìm
//    thấy" cụt ngủn, bot đoán vài phương án gần đúng nhất cho người dùng chọn.
const STOPWORDS = new Set([
  "va", "la", "bi", "bj", "may", "cua", "cho", "nay", "do", "the", "khi",
  "duoc", "voi", "toi", "minh", "oi", "nha", "ne", "sao", "vay", "gi", "co",
  "khong", "hong", "da", "dang", "lam", "ma", "tu", "nhu", "the", "nao",
  "sao", "roi", "luon", "qua", "ra", "vo", "ve", "tren", "duoi", "trong",
]);

function normalizeToken(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

export function tokenize(text: string): string[] {
  if (!text) return [];
  return normalizeToken(text)
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t.length >= 2 && !STOPWORDS.has(t));
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp: number[] = new Array(n + 1);
  for (let j = 0; j <= n; j++) dp[j] = j;
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(
        dp[j] + 1,
        dp[j - 1] + 1,
        prev + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      prev = tmp;
    }
  }
  return dp[n];
}

// Từ càng dài thì cho phép gõ sai càng nhiều ký tự — từ ngắn (≤3 ký tự) phải
// khớp gần chính xác, kẻo nhận nhầm 2 từ khác nghĩa nhau (VD "do" ≠ "dò").
function typoTolerance(len: number): number {
  if (len <= 3) return 0;
  if (len <= 6) return 1;
  return 2;
}

// Điểm khớp giữa 2 từ đơn: 1 = khớp y hệt, 0.85 = 1 từ là 1 phần của từ kia
// (VD "kẹt" trong "kẹttcứng"), 0.7 = gần giống (gõ sai nhẹ), 0 = không liên quan.
function tokenScore(a: string, b: string): number {
  if (a === b) return 1;
  if (a.length >= 3 && b.length >= 3 && (a.includes(b) || b.includes(a))) {
    return 0.85;
  }
  const dist = levenshtein(a, b);
  const tol = typoTolerance(Math.max(a.length, b.length));
  if (dist > 0 && dist <= tol) return 0.7;
  return 0;
}

// So điểm 1 câu hỏi (đã tokenize) với 1 đoạn văn bản mục tiêu (title + từ
// khóa + mô tả gộp lại). Trả về điểm 0..1 = tỉ lệ "sức nặng" của câu hỏi đã
// tìm được từ khớp bên mục tiêu.
function scoreQueryAgainstText(
  queryTokens: string[],
  targetText: string,
): { score: number; matchedCount: number } {
  if (queryTokens.length === 0) return { score: 0, matchedCount: 0 };
  const targetTokens = tokenize(targetText);
  if (targetTokens.length === 0) return { score: 0, matchedCount: 0 };

  let totalWeight = 0;
  let matchedWeight = 0;
  let matchedCount = 0;

  queryTokens.forEach((qt) => {
    const weight = Math.min(3, qt.length / 3); // từ dài "nặng ký" hơn (tối đa x3)
    totalWeight += weight;
    let best = 0;
    for (const tt of targetTokens) {
      const s = tokenScore(qt, tt);
      if (s > best) best = s;
      if (best === 1) break;
    }
    if (best > 0) {
      matchedWeight += weight * best;
      matchedCount += 1;
    }
  });

  return {
    score: totalWeight > 0 ? matchedWeight / totalWeight : 0,
    matchedCount,
  };
}

export interface RankedMatch<T> {
  item: T;
  score: number;
  matchedCount: number;
}

// Xếp hạng 1 danh sách mục dữ liệu theo mức liên quan tới câu hỏi của người
// dùng. `getText` trả về đoạn văn bản đại diện cho mục đó (title + từ khóa +
// mô tả/câu trả lời gộp lại). Chỉ giữ lại mục đạt điểm tối thiểu `minScore`
// VÀ khớp được ít nhất 1 từ có nghĩa trong câu hỏi.
export function rankByRelevance<T>(
  queryText: string,
  items: T[],
  getText: (item: T) => string,
  minScore = 0.45,
): RankedMatch<T>[] {
  const queryTokens = tokenize(queryText);
  if (queryTokens.length === 0) return [];

  const results: RankedMatch<T>[] = items.map((item) => {
    const { score, matchedCount } = scoreQueryAgainstText(
      queryTokens,
      getText(item),
    );
    return { item, score, matchedCount };
  });

  return results
    .filter((r) => r.score >= minScore && r.matchedCount > 0)
    .sort((a, b) => b.score - a.score || b.matchedCount - a.matchedCount);
}
