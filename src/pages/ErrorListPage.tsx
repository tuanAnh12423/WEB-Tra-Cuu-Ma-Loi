import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categories, errors } from "../data/errors";

function ErrorListPage() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const category = categories.find((c) => c.id === categoryId);

  // Lọc thông minh & không lo lỗi hoa/thường
  const filteredErrors = errors.filter((e) => {
    const isCategoryMatch =
      !categoryId ||
      String(e.category).toLowerCase() === String(categoryId).toLowerCase();

    const keyword = searchTerm.trim().toLowerCase();
    const isSearchMatch =
      keyword === "" ||
      e.code.toLowerCase().includes(keyword) ||
      e.title.toLowerCase().includes(keyword) ||
      (e.description && e.description.toLowerCase().includes(keyword));

    return isCategoryMatch && isSearchMatch;
  });

  return (
    // Khung bao phủ toàn bộ màn hình (Phủ màu sáng kín 100% chiều rộng)
    <div style={{
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#f5f6fa",
      padding: "24px 20px",
      boxSizing: "border-box"
    }}>
      {/* Khung nội dung trung tâm rộng rãi hơn cho PC */}
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header & Nút quay lại */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              background: "#ffffff",
              border: "1px solid #d1d5db",
              padding: "8px 18px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
              color: "#374151",
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
            }}
          >
            ← Quay lại
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 26 }}>{category?.icon || "🛠️"}</span>
            <h1 style={{ fontSize: 24, color: "#111827", margin: 0, fontWeight: 700 }}>
              {category?.name ? category.name.toUpperCase() : "DANH SÁCH MÃ LỖI"}
            </h1>
          </div>
        </div>

        {/* Ô Tìm Kiếm (Đã fix màu chữ đen rõ nét) */}
        <div style={{ position: "relative", marginBottom: 24 }}>
          <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", fontSize: 16, color: "#6b7280" }}>
            🔍
          </span>
          <input
            type="text"
            placeholder="Tìm mã lỗi hoặc nguyên nhân (E1, E2, không thoát nước...)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px 12px 46px",
              borderRadius: 12,
              border: "1px solid #d1d5db",
              outline: "none",
              fontSize: 15,
              color: "#111827",
              boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              boxSizing: "border-box",
              background: "#ffffff"
            }}
          />
        </div>

        {/* ⚡ CẤU TRÚC LƯỚI 2 CỘT CHO MÁY TÍNH (Grid min 320px) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 16
        }}>
          {filteredErrors.length > 0 ? (
            filteredErrors.map((error) => (
              <div
                key={error.id}
                onClick={() => navigate(`/error-detail/${error.id}`)}
                style={{
                  background: "#ffffff",
                  borderRadius: 12,
                  padding: "18px 20px",
                  border: "1px solid #e5e7eb",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.03)",
                  transition: "all 0.2s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.08)";
                  e.currentTarget.style.borderColor = "#93c5fd";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 5px rgba(0,0,0,0.03)";
                  e.currentTarget.style.borderColor = "#e5e7eb";
                }}
              >
                <div style={{ textAlign: "left", paddingRight: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{
                      background: "#e0f2fe",
                      color: "#0284c7",
                      padding: "4px 10px",
                      borderRadius: 6,
                      fontWeight: 700,
                      fontSize: 13
                    }}>
                      {error.code}
                    </span>
                    <span style={{ fontSize: 13, color: "#6b7280" }}>
                      • {error.steps ? error.steps.length : 0} bước xử lý
                    </span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: 15, color: "#1f2937", fontWeight: 600, lineHeight: 1.4 }}>
                    {error.title}
                  </h3>
                </div>

                <div style={{ color: "#9ca3af", fontSize: 18, fontWeight: "bold", flexShrink: 0 }}>
                  →
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: "1 / -1", padding: 40, textAlign: "center", color: "#6b7280", background: "#fff", borderRadius: 12 }}>
              ❌ Không tìm thấy mã lỗi nào phù hợp!
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default ErrorListPage;