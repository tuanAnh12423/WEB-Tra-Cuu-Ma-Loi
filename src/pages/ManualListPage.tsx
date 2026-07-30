import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/errors";
import { manuals } from "../data/manuals";
import type { ManualItem } from "../data/manuals";

function ManualListPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedPdf, setSelectedPdf] = useState<ManualItem | null>(null);

  // Lắng nghe phím ESC để đóng khung PDF full màn hình
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPdf(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lấy danh sách Hãng có trong Ngành hàng đang chọn
  const availableBrands = Array.from(
    new Set(
      manuals
        .filter(
          (m) => selectedCategory === "all" || m.category === selectedCategory,
        )
        .map((m) => m.brand),
    ),
  );

  // Bộ lọc thông minh 3 cấp: Ngành Hàng -> Hãng -> Model
  const filteredManuals = manuals.filter((m) => {
    const matchesCategory =
      selectedCategory === "all" || m.category === selectedCategory;
    const matchesBrand = selectedBrand === "all" || m.brand === selectedBrand;

    const keyword = searchTerm.trim().toLowerCase();
    const matchesSearch =
      keyword === "" ||
      m.model.toLowerCase().includes(keyword) ||
      m.title.toLowerCase().includes(keyword) ||
      m.brand.toLowerCase().includes(keyword);

    return matchesCategory && matchesBrand && matchesSearch;
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f5f6fa",
        padding: "24px 20px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 20,
          }}
        >
          <button
            onClick={() => navigate(-1)}
            style={{
              background: "#fff",
              border: "1px solid #d1d5db",
              padding: "8px 18px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
              color: "#374151",
            }}
          >
            ← Quay lại
          </button>
          <h1
            style={{
              fontSize: 24,
              color: "#111827",
              margin: 0,
              fontWeight: 700,
            }}
          >
            📚 TRA CỨU SÁCH HDSD CHÍNH XÁC THEO MODEL
          </h1>
        </div>

        {/* Ô TÌM KIẾM NHANH THEO MODEL */}
        <div style={{ position: "relative", marginBottom: 16 }}>
          <span
            style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 18,
            }}
          >
            🔍
          </span>
          <input
            type="text"
            placeholder="Gõ chính xác Model máy (VD: AW-,L805..., GR-RF905,...)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 16px 14px 48px",
              borderRadius: 12,
              border: "2px solid #0284c7",
              outline: "none",
              fontSize: 15,
              color: "#111827",
              background: "#fff",
              boxSizing: "border-box",
              boxShadow: "0 2px 8px rgba(2, 132, 199, 0.1)",
            }}
          />
        </div>

        {/* TẦNG 1: CHỌN NGÀNH HÀNG */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 12,
          }}
        >
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedBrand("all");
            }}
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 13,
              background: selectedCategory === "all" ? "#0284c7" : "#e2e8f0",
              color: selectedCategory === "all" ? "#fff" : "#475569",
            }}
          >
            🌐 Tất cả Ngành ({manuals.length})
          </button>

          {categories.map((cat) => {
            const count = manuals.filter((m) => m.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSelectedBrand("all");
                }}
                style={{
                  padding: "8px 16px",
                  borderRadius: 20,
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: 13,
                  background: selectedCategory === cat.id ? "#0284c7" : "#fff",
                  color: selectedCategory === cat.id ? "#fff" : "#334155",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                {cat.icon} {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* TẦNG 2: CHỌN THƯƠNG HIỆU (HÃNG) */}
        {availableBrands.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: 24,
              background: "#fff",
              padding: "10px 16px",
              borderRadius: 12,
              border: "1px solid #e2e8f0",
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 700, color: "#64748b" }}>
              Thương hiệu:
            </span>
            <button
              onClick={() => setSelectedBrand("all")}
              style={{
                padding: "4px 12px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 600,
                background: selectedBrand === "all" ? "#0f172a" : "#f1f5f9",
                color: selectedBrand === "all" ? "#fff" : "#475569",
              }}
            >
              Tất cả Hãng
            </button>
            {availableBrands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                style={{
                  padding: "4px 12px",
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 600,
                  background: selectedBrand === brand ? "#0f172a" : "#f1f5f9",
                  color: selectedBrand === brand ? "#fff" : "#475569",
                }}
              >
                {brand}
              </button>
            ))}
          </div>
        )}

        {/* TẦNG 3: DANH SÁCH SÁCH HDSD THEO TỪNG MODEL */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 16,
            marginBottom: 24,
          }}
        >
          {filteredManuals.length > 0 ? (
            filteredManuals.map((item) => {
              const cat = categories.find((c) => c.id === item.category);
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedPdf(item)}
                  style={{
                    background: "#fff",
                    borderRadius: 12,
                    padding: "18px 20px",
                    border: "1px solid #e5e7eb",
                    cursor: "pointer",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.03)",
                    textAlign: "left",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.borderColor = "#0284c7")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.borderColor = "#e5e7eb")
                  }
                >
                  {/* Tag Hãng & Ngành hàng */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 10,
                    }}
                  >
                    <span style={{ fontSize: 16 }}>{cat?.icon || "📄"}</span>
                    <span
                      style={{
                        fontSize: 12,
                        background: "#f1f5f9",
                        color: "#334155",
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontWeight: 700,
                      }}
                    >
                      {item.brand}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        background: "#e0f2fe",
                        color: "#0369a1",
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontWeight: 700,
                      }}
                    >
                      {cat?.name}
                    </span>
                  </div>

                  {/* Mã Model nổi bật */}
                  <div style={{ marginBottom: 8 }}>
                    <span
                      style={{
                        fontSize: 11,
                        color: "#64748b",
                        fontWeight: 700,
                        display: "block",
                      }}
                    >
                      MÃ MODEL:
                    </span>
                    <span
                      style={{
                        fontSize: 18,
                        color: "#0284c7",
                        fontWeight: 800,
                      }}
                    >
                      {item.model}
                    </span>
                  </div>

                  {/* Tên Sách HDSD */}
                  <p
                    style={{
                      margin: "0 0 12px",
                      fontSize: 14,
                      color: "#334155",
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.title}
                  </p>

                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      color: "#0284c7",
                      fontWeight: 600,
                    }}
                  >
                    📖 Xem file PDF hướng dẫn →
                  </p>
                </div>
              );
            })
          ) : (
            <div
              style={{
                gridColumn: "1 / -1",
                padding: 40,
                textAlign: "center",
                background: "#fff",
                borderRadius: 12,
                color: "#64748b",
              }}
            >
              ❌ Không tìm thấy sách HDSD cho Model này!
            </div>
          )}
        </div>
      </div>

      {/* 🚀 MODAL XEM KHUNG PDF TRÀN TOÀN MÀN HÌNH (FULLSCREEN POPUP) */}
      {selectedPdf && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            padding: "12px",
            boxSizing: "border-box",
          }}
        >
          {/* Thanh Tiêu đề Header của Modal Fullscreen */}
          <div
            style={{
              background: "#0f172a",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "12px 12px 0 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#38bdf8",
                }}
              >
                📄 Model: {selectedPdf.model} — {selectedPdf.brand}
              </h2>
              <p style={{ margin: "2px 0 0", fontSize: 13, color: "#94a3b8" }}>
                {selectedPdf.title}
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <a
                href={selectedPdf.pdfUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#38bdf8",
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  background: "rgba(56, 189, 248, 0.1)",
                  padding: "6px 14px",
                  borderRadius: 6,
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                }}
              >
                ↗ Tab mới / Tải về
              </a>

              {/* Nút Đóng sách HDSD (✕) */}
              <button
                onClick={() => setSelectedPdf(null)}
                style={{
                  background: "#ef4444",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "6px 16px",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(239, 68, 68, 0.3)",
                }}
              >
                ✕ Đóng (ESC)
              </button>
            </div>
          </div>

          {/* Khung iframe hiển thị nội dung PDF chiếm trọn phần màn hình còn lại */}
          <iframe
            src={selectedPdf.pdfUrl}
            title={selectedPdf.title}
            style={{
              width: "100%",
              flex: 1,
              border: "none",
              borderRadius: "0 0 12px 12px",
              background: "#ffffff",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ManualListPage;
