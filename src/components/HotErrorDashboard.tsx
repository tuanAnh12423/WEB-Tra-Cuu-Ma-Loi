// 📊 Widget "Mã lỗi đang HOT" hiển thị ngay Trang chủ — cho TẤT CẢ mọi người
// xem (không cần đăng nhập), nhưng chỉ hiện TOP 3 mỗi mục để gọn, tránh rối
// Trang chủ. Ai muốn xem đầy đủ (toàn bộ danh sách, xuất báo cáo CSV...) thì
// bấm "Xem đầy đủ →" — lúc đó trang /analytics mới hỏi mật khẩu kỹ thuật viên.
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useErrorViewStats } from "../hooks/useErrorViewStats";
import { useErrorViewEventStats } from "../hooks/useErrorViewEventStats";
import { categories } from "../data/errors";
import { periodLabel, type PeriodKey } from "../utils/dateRanges";

const HOT_LIMIT = 3;
const FOCUS_LIMIT = 3;
const QUICK_PERIODS: PeriodKey[] = ["ALL", "WEEK", "MONTH", "YEAR"];

export default function HotErrorDashboard() {
  const navigate = useNavigate();
  const [period, setPeriod] = useState<PeriodKey>("ALL");

  // Luôn lắng nghe số liệu "mọi thời gian" — dùng để quyết định có nên hiện
  // hẳn widget này ở Trang chủ hay không (ẩn đi nếu app chưa từng có ai xem
  // mã lỗi nào). Số liệu hiển thị thật sự thì theo khoảng thời gian đang chọn.
  const allTime = useErrorViewStats(true);
  const periodStats = useErrorViewEventStats(period);

  // Chưa có số liệu gì / đang tải / lỗi mạng → im lặng ẩn đi, không làm rối Trang chủ
  if (allTime.loading || allTime.loadError || allTime.rows.length === 0) return null;

  const { rows, loading } = period === "ALL" ? allTime : periodStats;

  const categoryName = (id: string) =>
    categories.find((c) => c.id === id)?.name || id || "—";

  const hotRows = rows.slice(0, HOT_LIMIT);
  const focusRows = rows.filter((r) => !r.hasImage).slice(0, FOCUS_LIMIT);

  return (
    <div
      className="home-fade-in"
      style={{
        marginBottom: 24,
        background: "#ffffff",
        borderRadius: 14,
        border: "1px solid #e2e8f0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 18px",
          borderBottom: "1px solid #e2e8f0",
          background: "#f8fafc",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 16 }}>📊</span>
          <h2
            style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 800,
              color: "#0f172a",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
            }}
          >
            Bảng theo dõi tra cứu mã lỗi
          </h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
          {QUICK_PERIODS.map((p) => (
            <button
              key={p}
              type="button"
              className="btn-press"
              onClick={() => setPeriod(p)}
              style={{
                padding: "5px 10px",
                borderRadius: 16,
                border: period === p ? "none" : "1px solid #cbd5e1",
                background: period === p ? "#0284c7" : "#ffffff",
                color: period === p ? "#ffffff" : "#475569",
                fontWeight: 700,
                fontSize: 11,
                cursor: "pointer",
              }}
            >
              {periodLabel(p)}
            </button>
          ))}
          <button
            type="button"
            className="btn-press"
            onClick={() => navigate("/analytics")}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: "1px solid #cbd5e1",
              background: "#ffffff",
              color: "#0284c7",
              fontWeight: 700,
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            Xem đầy đủ →
          </button>
        </div>
      </div>

      {loading ? (
        <div style={{ padding: "18px", textAlign: "center", fontSize: 12, color: "#94a3b8" }}>
          Đang tải số liệu cho {periodLabel(period).toLowerCase()}...
        </div>
      ) : rows.length === 0 ? (
        <div style={{ padding: "18px", textAlign: "center", fontSize: 12, color: "#94a3b8" }}>
          Chưa có lượt xem nào trong {periodLabel(period).toLowerCase()}.
        </div>
      ) : (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 0,
        }}
      >
        {/* 🔥 Mã lỗi đang HOT */}
        <div
          style={{
            padding: "16px 18px",
            borderRight: "1px solid #f1f5f9",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#c2410c",
              marginBottom: 10,
            }}
          >
            🔥 Top 3 mã lỗi đang HOT (xem nhiều nhất)
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {hotRows.map((r, idx) => (
              <div
                key={r.id}
                onClick={() => r.exists && navigate(`/error-detail/${r.id}`)}
                className="btn-press"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "7px 8px",
                  borderRadius: 8,
                  cursor: r.exists ? "pointer" : "default",
                  background: idx === 0 ? "#fff7ed" : "transparent",
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: idx === 0 ? "#c2410c" : "#94a3b8",
                    width: 16,
                    flexShrink: 0,
                  }}
                >
                  #{idx + 1}
                </span>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#0f172a",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {r.code || r.id}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#64748b",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {categoryName(r.category)}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#0284c7",
                    flexShrink: 0,
                  }}
                >
                  {r.count} lượt
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 🎯 Cần tập trung: HOT mà chưa có ảnh */}
        <div style={{ padding: "16px 18px" }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#b91c1c",
              marginBottom: 10,
            }}
          >
            🎯 Top 3 cần tập trung (xem nhiều, chưa có ảnh)
          </div>
          {focusRows.length === 0 ? (
            <p style={{ margin: 0, fontSize: 12, color: "#64748b" }}>
              ✅ Các mã lỗi đang được xem nhiều đều đã có hình ảnh minh hoạ rồi.
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {focusRows.map((r) => (
                <div
                  key={r.id}
                  onClick={() => r.exists && navigate(`/error-detail/${r.id}`)}
                  className="btn-press"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "7px 8px",
                    borderRadius: 8,
                    cursor: r.exists ? "pointer" : "default",
                    background: "#fef2f2",
                  }}
                >
                  <span style={{ fontSize: 13, flexShrink: 0 }}>❌</span>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#0f172a",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {r.code || r.id}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#64748b",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {categoryName(r.category)}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      color: "#b91c1c",
                      flexShrink: 0,
                    }}
                  >
                    {r.count} lượt
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      )}
    </div>
  );
}
