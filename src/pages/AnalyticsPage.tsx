import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/errors";
import { useErrorViewStats } from "../hooks/useErrorViewStats";
import { useErrorViewEventStats } from "../hooks/useErrorViewEventStats";
import {
  TECHNICIAN_PASSWORD,
  isTechnicianAuthed,
  setTechnicianAuthed,
} from "../utils/technicianAuth";
import { periodLabel, last12MonthOptions, type PeriodKey } from "../utils/dateRanges";

const QUICK_PERIODS: PeriodKey[] = ["ALL", "WEEK", "MONTH", "YEAR"];

// 🔒 CỔNG XÁC THỰC: giống hệt RepairSupportPage — chặn truy cập thẳng bằng URL
// /analytics mà không qua màn hình nhập mật khẩu ở Trang chủ.
function AnalyticsPage() {
  const navigate = useNavigate();
  const [isAuthed, setIsAuthed] = useState(() => isTechnicianAuthed());
  const [gatePass, setGatePass] = useState("");
  const [gateError, setGateError] = useState("");

  const handleGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gatePass === TECHNICIAN_PASSWORD) {
      setTechnicianAuthed();
      setIsAuthed(true);
    } else {
      setGateError("❌ Mật khẩu không đúng! Vui lòng thử lại.");
    }
  };

  if (!isAuthed) {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#f1f5f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          boxSizing: "border-box",
        }}
      >
        <div
          className="chat-scale-in"
          style={{
            width: "100%",
            maxWidth: 380,
            background: "#ffffff",
            borderRadius: 14,
            padding: "24px",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 8 }}>🔒</div>
          <h3
            style={{
              margin: "0 0 6px 0",
              fontSize: 17,
              fontWeight: 800,
              color: "#0f172a",
            }}
          >
            XÁC NHẬN KỸ THUẬT VIÊN
          </h3>
          <p style={{ margin: "0 0 16px 0", fontSize: 12, color: "#64748b" }}>
            Trang thống kê chỉ dành cho quản lý/kỹ thuật viên. Nhập mật khẩu
            để tiếp tục.
          </p>

          <form onSubmit={handleGateSubmit}>
            <input
              type="password"
              autoFocus
              className="chat-input-focus"
              placeholder="Nhập mật khẩu"
              value={gatePass}
              onChange={(e) => setGatePass(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: 8,
                border: gateError
                  ? "2px solid #ef4444"
                  : "1.5px solid #cbd5e1",
                outline: "none",
                fontSize: 14,
                color: "#0f172a",
                textAlign: "center",
                boxSizing: "border-box",
                marginBottom: 10,
                transition: "border-color 0.15s ease, box-shadow 0.15s ease",
              }}
            />

            {gateError && (
              <p
                style={{
                  margin: "0 0 12px 0",
                  fontSize: 12,
                  color: "#ef4444",
                  fontWeight: 600,
                }}
              >
                {gateError}
              </p>
            )}

            <div style={{ display: "flex", gap: 10 }}>
              <button
                type="button"
                className="btn-press"
                onClick={() => navigate("/")}
                style={{
                  flex: 1,
                  padding: "9px",
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  background: "#f1f5f9",
                  color: "#475569",
                  fontWeight: 600,
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                Về trang chủ
              </button>
              <button
                type="submit"
                className="btn-press"
                style={{
                  flex: 1,
                  padding: "9px",
                  borderRadius: 8,
                  border: "none",
                  background: "#0284c7",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                Truy cập →
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return <AnalyticsPageContent />;
}

function AnalyticsPageContent() {
  const navigate = useNavigate();
  const [period, setPeriod] = useState<PeriodKey>("ALL");

  // "Mọi thời gian" → đọc từ error_view_counts (rẻ, có sẵn tổng cộng dồn).
  // Chọn tuần/tháng/năm/1 tháng cụ thể → đọc từ error_view_events (lọc theo
  // viewedAt). Luôn gọi cả 2 hook để không phá vỡ thứ tự hook giữa các lần
  // render — chỉ hook đang KHÔNG dùng mới tắt kết nối (tham số enabled).
  const allTimeStats = useErrorViewStats(period === "ALL");
  const periodStats = useErrorViewEventStats(period);
  const { rows: enrichedRows, loading, loadError } =
    period === "ALL" ? allTimeStats : periodStats;

  const [onlyMissingImages, setOnlyMissingImages] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("ALL");

  const filteredRows = useMemo(() => {
    return enrichedRows.filter((r) => {
      if (onlyMissingImages && r.hasImage) return false;
      if (categoryFilter !== "ALL" && r.category !== categoryFilter) return false;
      return true;
    });
  }, [enrichedRows, onlyMissingImages, categoryFilter]);

  const totalViews = enrichedRows.reduce((sum, r) => sum + r.count, 0);
  const missingImageCount = enrichedRows.filter((r) => !r.hasImage).length;
  const top5MissingImages = enrichedRows.filter((r) => !r.hasImage).slice(0, 5);

  const categoryName = (id: string) =>
    categories.find((c) => c.id === id)?.name || id || "—";
  const categoryIcon = (id: string) =>
    categories.find((c) => c.id === id)?.icon || "📦";

  // Lượt xem gộp theo NGÀNH HÀNG trong khoảng thời gian đang chọn — trả lời
  // trực tiếp câu hỏi "tháng nào máy lạnh cao, tháng nào máy giặt/sấy cao":
  // đổi bộ lọc thời gian ở trên rồi nhìn bảng này để so sánh qua các tháng.
  const categoryBreakdown = useMemo(() => {
    const map = new Map<string, number>();
    enrichedRows.forEach((r) => {
      map.set(r.category, (map.get(r.category) || 0) + r.count);
    });
    const maxCount = Math.max(1, ...Array.from(map.values()));
    return Array.from(map.entries())
      .map(([id, count]) => ({ id, count, pct: (count / maxCount) * 100 }))
      .sort((a, b) => b.count - a.count);
  }, [enrichedRows]);

  const handleExportCsv = () => {
    const header = [
      "Hạng",
      "Mã lỗi",
      "Tiêu đề",
      "Danh mục",
      "Số lượt xem",
      "Đã có hình ảnh?",
      "Xem gần nhất",
    ];
    const lines = filteredRows.map((r, idx) => [
      String(idx + 1),
      r.code || r.id,
      r.title,
      categoryName(r.category),
      String(r.count),
      r.hasImage ? "Có" : "Chưa có",
      r.lastViewedAt ? r.lastViewedAt.toLocaleString("vi-VN") : "",
    ]);
    const csvContent = [header, ...lines]
      .map((row) =>
        row
          .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
          .join(","),
      )
      .join("\n");
    // Thêm BOM để Excel đọc đúng tiếng Việt có dấu
    const blob = new Blob(["﻿" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const dateStr = new Date().toLocaleDateString("vi-VN").replace(/\//g, "-");
    const periodSlug = periodLabel(period)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    link.href = url;
    link.download = `bao-cao-luot-xem-ma-loi_${periodSlug}_${dateStr}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f1f5f9",
        padding: "24px 20px 90px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: 22,
                fontWeight: 800,
                color: "#0f172a",
              }}
            >
              📊 Thống kê tra cứu mã lỗi
            </h1>
            <p style={{ margin: "4px 0 0 0", fontSize: 13, color: "#64748b" }}>
              Mã lỗi nào được xem nhiều nhất, ưu tiên bổ sung hình ảnh cho mã
              đó trước. Đang xem: <strong>{periodLabel(period)}</strong>.
            </p>
          </div>
          <button
            type="button"
            className="btn-press"
            onClick={() => navigate("/")}
            style={{
              padding: "9px 16px",
              borderRadius: 8,
              border: "1px solid #cbd5e1",
              background: "#ffffff",
              color: "#475569",
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            ← Về trang chủ
          </button>
        </div>

        {/* Chọn khoảng thời gian — vì có mùa vụ: tháng nóng Máy lạnh tăng,
            tháng mưa Máy giặt/Máy sấy tăng, đổi ở đây để so sánh qua các mốc */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: 18,
          }}
        >
          {QUICK_PERIODS.map((p) => (
            <button
              key={p}
              type="button"
              className="btn-press"
              onClick={() => setPeriod(p)}
              style={{
                padding: "7px 14px",
                borderRadius: 20,
                border: period === p ? "none" : "1px solid #cbd5e1",
                background: period === p ? "#0284c7" : "#ffffff",
                color: period === p ? "#ffffff" : "#334155",
                fontWeight: 700,
                fontSize: 12.5,
                cursor: "pointer",
              }}
            >
              {periodLabel(p)}
            </button>
          ))}

          <select
            value={period.startsWith("MONTH:") ? period : ""}
            onChange={(e) => {
              if (e.target.value) setPeriod(e.target.value);
            }}
            style={{
              padding: "7px 10px",
              borderRadius: 20,
              border: "1px solid #cbd5e1",
              fontSize: 12.5,
              color: "#0f172a",
              backgroundColor: "#ffffff",
              colorScheme: "light",
            }}
          >
            <option value="" style={{ color: "#64748b", backgroundColor: "#ffffff" }}>
              📅 So sánh 1 tháng cụ thể...
            </option>
            {last12MonthOptions().map((o) => (
              <option
                key={o.value}
                value={o.value}
                style={{ color: "#0f172a", backgroundColor: "#ffffff" }}
              >
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {loading && (
          <div style={{ padding: 24, textAlign: "center", color: "#64748b" }}>
            Đang tải dữ liệu...
          </div>
        )}

        {loadError && (
          <div
            style={{
              padding: 16,
              borderRadius: 10,
              background: "#fef2f2",
              border: "1px solid #fecaca",
              color: "#b91c1c",
              fontSize: 13,
              marginBottom: 16,
            }}
          >
            ⚠️ Không tải được dữ liệu thống kê (có thể do mất mạng, hoặc quyền
            truy cập Firestore chưa cho phép đọc collection
            "error_view_counts"). Hãy kiểm tra lại Firestore Rules trên Firebase
            Console.
          </div>
        )}

        {!loading && !loadError && enrichedRows.length === 0 && (
          <div
            style={{
              padding: 24,
              textAlign: "center",
              color: "#64748b",
              background: "#ffffff",
              borderRadius: 12,
            }}
          >
            Chưa có dữ liệu lượt xem nào. Số liệu sẽ xuất hiện sau khi có
            người mở xem trang chi tiết mã lỗi.
          </div>
        )}

        {!loading && !loadError && enrichedRows.length > 0 && (
          <>
            {/* Tổng quan */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: 12,
                marginBottom: 16,
              }}
            >
              {[
                { label: "Tổng lượt xem", value: totalViews, color: "#0284c7" },
                {
                  label: "Số mã lỗi đã được xem",
                  value: enrichedRows.length,
                  color: "#0f172a",
                },
                {
                  label: "Mã lỗi chưa có hình ảnh",
                  value: missingImageCount,
                  color: "#b91c1c",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="chat-scale-in"
                  style={{
                    background: "#ffffff",
                    borderRadius: 12,
                    padding: "14px 16px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600 }}>
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 800,
                      color: stat.color,
                      marginTop: 2,
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Ưu tiên tìm ảnh */}
            {top5MissingImages.length > 0 && (
              <div
                style={{
                  background: "#fff7ed",
                  border: "1px solid #fed7aa",
                  borderRadius: 12,
                  padding: "14px 16px",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 13,
                    color: "#9a3412",
                    marginBottom: 6,
                  }}
                >
                  🎯 Ưu tiên tìm hình ảnh trước cho (xem nhiều nhất mà chưa có
                  ảnh):
                </div>
                <ol style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "#7c2d12" }}>
                  {top5MissingImages.map((r) => (
                    <li key={r.id} style={{ marginBottom: 2 }}>
                      <strong>{r.code || r.id}</strong> — {r.title} (
                      {r.count} lượt xem)
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Lượt xem theo ngành hàng — so sánh mùa vụ: đổi bộ lọc thời gian
                ở trên rồi xem bảng này để biết ngành nào đang "nóng" theo mùa
                (vd. tháng nóng Máy lạnh cao, tháng mưa Máy giặt/Máy sấy cao) */}
            {categoryBreakdown.length > 0 && (
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 12,
                  padding: "16px 18px",
                  marginBottom: 16,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 13,
                    color: "#0f172a",
                    marginBottom: 12,
                  }}
                >
                  📈 Lượt xem theo ngành hàng — {periodLabel(period)}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {categoryBreakdown.map((c) => (
                    <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div
                        style={{
                          width: 170,
                          flexShrink: 0,
                          fontSize: 12.5,
                          fontWeight: 600,
                          color: "#334155",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {categoryIcon(c.id)} {categoryName(c.id)}
                      </div>
                      <div
                        style={{
                          flex: 1,
                          background: "#f1f5f9",
                          borderRadius: 6,
                          height: 14,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${c.pct}%`,
                            height: "100%",
                            background: "#0284c7",
                            borderRadius: 6,
                          }}
                        />
                      </div>
                      <div
                        style={{
                          width: 60,
                          flexShrink: 0,
                          textAlign: "right",
                          fontSize: 12.5,
                          fontWeight: 800,
                          color: "#0f172a",
                        }}
                      >
                        {c.count} lượt
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bộ lọc + xuất báo cáo */}
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  color: "#334155",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={onlyMissingImages}
                  onChange={(e) => setOnlyMissingImages(e.target.checked)}
                />
                Chỉ hiện mã CHƯA có hình ảnh
              </label>

              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                style={{
                  padding: "7px 10px",
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  fontSize: 13,
                  color: "#0f172a",
                  backgroundColor: "#ffffff",
                  // Ép luôn giao diện sáng cho ô này — nếu không, máy nào đang bật
                  // chế độ tối (dark mode) của Windows/trình duyệt thì danh sách xổ
                  // xuống sẽ tự chuyển nền đen + chữ tối màu, gần như không đọc được.
                  colorScheme: "light",
                }}
              >
                <option value="ALL" style={{ color: "#0f172a", backgroundColor: "#ffffff" }}>
                  Tất cả danh mục
                </option>
                {categories.map((c) => (
                  <option
                    key={c.id}
                    value={c.id}
                    style={{ color: "#0f172a", backgroundColor: "#ffffff" }}
                  >
                    {c.icon} {c.name}
                  </option>
                ))}
              </select>

              <button
                type="button"
                className="btn-press"
                onClick={handleExportCsv}
                style={{
                  marginLeft: "auto",
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: "none",
                  background: "#0f172a",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                ⬇️ Xuất báo cáo CSV (Excel)
              </button>
            </div>

            {/* Bảng dữ liệu */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: 12,
                overflow: "auto",
                boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: "#f1f5f9", textAlign: "left" }}>
                    <th style={{ padding: "10px 12px" }}>#</th>
                    <th style={{ padding: "10px 12px" }}>Mã lỗi</th>
                    <th style={{ padding: "10px 12px" }}>Tiêu đề</th>
                    <th style={{ padding: "10px 12px" }}>Danh mục</th>
                    <th style={{ padding: "10px 12px", textAlign: "right" }}>
                      Lượt xem
                    </th>
                    <th style={{ padding: "10px 12px" }}>Hình ảnh</th>
                    <th style={{ padding: "10px 12px" }}>Xem gần nhất</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((r, idx) => (
                    <tr
                      key={r.id}
                      onClick={() => r.exists && navigate(`/error-detail/${r.id}`)}
                      style={{
                        borderTop: "1px solid #e2e8f0",
                        cursor: r.exists ? "pointer" : "default",
                      }}
                      className={r.exists ? "btn-press" : ""}
                    >
                      <td style={{ padding: "9px 12px", color: "#94a3b8" }}>
                        {idx + 1}
                      </td>
                      <td style={{ padding: "9px 12px", fontWeight: 700, color: "#0284c7" }}>
                        {r.code || r.id}
                        {!r.exists && (
                          <span style={{ color: "#94a3b8", fontWeight: 400 }}>
                            {" "}
                            (đã xoá khỏi app)
                          </span>
                        )}
                      </td>
                      <td style={{ padding: "9px 12px", color: "#0f172a" }}>
                        {r.title}
                      </td>
                      <td style={{ padding: "9px 12px", color: "#475569" }}>
                        {categoryName(r.category)}
                      </td>
                      <td
                        style={{
                          padding: "9px 12px",
                          textAlign: "right",
                          fontWeight: 800,
                          color: "#0f172a",
                        }}
                      >
                        {r.count}
                      </td>
                      <td style={{ padding: "9px 12px" }}>
                        {r.hasImage ? (
                          <span style={{ color: "#16a34a", fontWeight: 700 }}>
                            ✅ Có
                          </span>
                        ) : (
                          <span style={{ color: "#b91c1c", fontWeight: 700 }}>
                            ❌ Chưa có
                          </span>
                        )}
                      </td>
                      <td style={{ padding: "9px 12px", color: "#64748b" }}>
                        {r.lastViewedAt
                          ? r.lastViewedAt.toLocaleString("vi-VN")
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AnalyticsPage;
