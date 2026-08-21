// Tính khoảng thời gian (tuần/tháng/năm/1 tháng cụ thể) để lọc báo cáo lượt
// xem mã lỗi theo mùa vụ — ví dụ tháng nóng thì Máy lạnh tăng, tháng mưa thì
// Máy giặt/Máy sấy tăng. "Tuần" tính theo Thứ 2 → Chủ nhật.
export type PeriodKey = "ALL" | "WEEK" | "MONTH" | "YEAR" | string; // string dạng "MONTH:YYYY-MM"

export function monthPeriodKey(year: number, monthIndex0: number): string {
  return `MONTH:${year}-${String(monthIndex0 + 1).padStart(2, "0")}`;
}

export function getPeriodRange(
  period: PeriodKey,
): { start: Date; end: Date } | null {
  const now = new Date();

  if (period === "ALL") return null;

  if (period === "WEEK") {
    const day = now.getDay(); // 0 = Chủ nhật ... 6 = Thứ 7
    const diffToMonday = (day + 6) % 7;
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - diffToMonday);
    const end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 7);
    return { start, end };
  }

  if (period === "MONTH") {
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    return { start, end };
  }

  if (period === "YEAR") {
    const start = new Date(now.getFullYear(), 0, 1);
    const end = new Date(now.getFullYear() + 1, 0, 1);
    return { start, end };
  }

  if (period.startsWith("MONTH:")) {
    const ym = period.slice("MONTH:".length);
    const [yStr, mStr] = ym.split("-");
    const y = Number(yStr);
    const m = Number(mStr); // 1-12
    if (!y || !m) return null;
    const start = new Date(y, m - 1, 1);
    const end = new Date(y, m, 1);
    return { start, end };
  }

  return null;
}

export function periodLabel(period: PeriodKey): string {
  if (period === "ALL") return "Mọi thời gian";
  if (period === "WEEK") return "Tuần này";
  if (period === "MONTH") return "Tháng này";
  if (period === "YEAR") return "Năm nay";
  if (period.startsWith("MONTH:")) {
    const ym = period.slice("MONTH:".length);
    const [y, m] = ym.split("-");
    return `Tháng ${Number(m)}/${y}`;
  }
  return period;
}

// Danh sách 12 tháng gần nhất (kể cả tháng này) để làm dropdown "chọn tháng cụ thể",
// giúp so sánh qua lại giữa các tháng xem ngành hàng nào tăng theo mùa.
export function last12MonthOptions(): { value: string; label: string }[] {
  const now = new Date();
  const out: { value: string; label: string }[] = [];
  for (let i = 0; i < 12; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    out.push({
      value: monthPeriodKey(d.getFullYear(), d.getMonth()),
      label: `Tháng ${d.getMonth() + 1}/${d.getFullYear()}`,
    });
  }
  return out;
}
