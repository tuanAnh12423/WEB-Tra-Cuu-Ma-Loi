import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/errors";
import { repairErrors } from "../data/repairErrors";

function removeVietnameseTones(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim();
}

function RepairSupportPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredData = useMemo(() => {
    return repairErrors.filter((item) => {
      const matchCategory =
        selectedCategory === "ALL" || item.category === selectedCategory;

      const cleanKeyword = removeVietnameseTones(searchTerm);
      const cleanCode = item.code ? removeVietnameseTones(item.code) : "";
      const cleanTitle = removeVietnameseTones(item.title);
      const cleanDesc = item.description ? removeVietnameseTones(item.description) : "";

      const matchSearch =
        cleanKeyword === "" ||
        cleanCode.includes(cleanKeyword) ||
        cleanTitle.includes(cleanKeyword) ||
        cleanDesc.includes(cleanKeyword);

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        padding: "24px 16px",
        boxSizing: "border-box",
        textAlign: "left",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "#334155",
              color: "#fff",
              border: "none",
              padding: "8px 16px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            ← Trang chủ
          </button>
          <span style={{ background: "#b91c1c", color: "#ffffff", padding: "4px 12px", borderRadius: 20, fontWeight: 700, fontSize: 12 }}>
            🛠️ KHU VỰC KỸ THUẬT VIÊN
          </span>
        </div>

        {/* Ô Tìm Kiếm */}
        <div style={{ position: "relative", marginBottom: 16 }}>
          <input
            type="text"
            placeholder="Nhập mã lỗi, linh kiện hoặc trị số cần tìm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 12,
              border: "1px solid #334155",
              outline: "none",
              fontSize: 15,
              color: "#f8fafc",
              background: "#1e293b",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Bộ Lọc Ngành Hàng */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24, overflowX: "auto", paddingBottom: 4 }}>
          <button
            onClick={() => setSelectedCategory("ALL")}
            style={{
              padding: "6px 14px",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: selectedCategory === "ALL" ? 700 : 500,
              border: selectedCategory === "ALL" ? "1px solid #38bdf8" : "1px solid #334155",
              backgroundColor: selectedCategory === "ALL" ? "#0284c7" : "#1e293b",
              color: "#ffffff",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Tất cả ngành hàng
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: selectedCategory === cat.id ? 700 : 500,
                border: selectedCategory === cat.id ? "1px solid #38bdf8" : "1px solid #334155",
                backgroundColor: selectedCategory === cat.id ? "#0284c7" : "#1e293b",
                color: "#ffffff",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Danh sách thẻ pan bệnh */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {filteredData.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#1e293b",
                borderRadius: 16,
                padding: "20px",
                border: "1px solid #334155",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
              }}
            >
              {/* Header Thẻ */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                {item.code && (
                  <span style={{ background: "#ef4444", color: "#ffffff", padding: "4px 10px", borderRadius: 6, fontWeight: 800, fontSize: 13 }}>
                    {item.code}
                  </span>
                )}
                <h2 style={{ fontSize: 18, margin: 0, color: "#f8fafc", fontWeight: 700 }}>
                  {item.title}
                </h2>
              </div>

              <p style={{ margin: "0 0 16px 0", color: "#cbd5e1", fontSize: 14 }}>
                {item.description}
              </p>

              {/* ⚡ DANH SÁCH ĐIỂM ĐO LINH KIỆN & THÔNG SỐ */}
              {item.checkPoints && item.checkPoints.length > 0 && (
  <div style={{ marginBottom: 20 }}>
    <p style={{ margin: "0 0 10px 0", color: "#eab308", fontWeight: 700, fontSize: 13 }}>
      ⚡ THÔNG SỐ ĐO ĐẠC & LINH KIỆN LIÊN QUAN:
    </p>

    {/* 🟢 CHUYỂN SANG DẠNG GRID LAYOUT 2 - 3 CỘT */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 12,
      }}
    >
      {item.checkPoints.map((point, pIdx) => (
        <div
          key={pIdx}
          style={{
            background: "#0f172a",
            borderRadius: 10,
            padding: "14px",
            borderLeft: "4px solid #eab308",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#f8fafc", marginBottom: 6 }}>
              🔧 {point.partName}
            </div>
            <div style={{ fontSize: 13, color: "#38bdf8", lineHeight: 1.5, marginBottom: point.images?.length ? 10 : 0 }}>
              {point.spec}
            </div>
          </div>

          {/* Hình ảnh linh kiện */}
          {point.images && point.images.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
              {point.images.map((imgUrl, imgIdx) => (
                <div
                  key={imgIdx}
                  onClick={() => setSelectedImg(imgUrl)}
                  style={{
                    width: 100,
                    height: 75,
                    borderRadius: 6,
                    overflow: "hidden",
                    border: "1px solid #334155",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={imgUrl}
                    alt="Ảnh linh kiện"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)}

              {/* 🔬 KHỐI QUY TRÌNH SỬA CHỮA HỖ TRỢ BƯỚC NHỎ KÈM ẢNH */}
              <div style={{ background: "#0f172a", borderRadius: 12, padding: "18px", borderLeft: "4px solid #38bdf8" }}>
                <p style={{ margin: "0 0 16px 0", color: "#38bdf8", fontWeight: 800, fontSize: 14 }}>
                  🔬 QUY TRÌNH KÍCH HOẠT & ĐO ĐẠC CHI TIẾT:
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {item.steps.map((stepObj, stepIdx) => (
                    <div
                      key={stepIdx}
                      style={{
                        background: "#1e293b",
                        borderRadius: 10,
                        padding: "14px",
                        border: "1px solid #334155",
                      }}
                    >
                      {/* Tiêu đề Bước Lớn */}
                      <h4 style={{ margin: "0 0 12px 0", fontSize: 15, color: "#38bdf8", fontWeight: 700 }}>
                        {stepObj.title}
                      </h4>

                      {/* 🟢 HIỂN THỊ DANH SÁCH BƯỚC NHỎ (SUB-STEPS) KÈM HÌNH ẢNH CỦA TỪNG BƯỚC NHỎ */}
                      {stepObj.subSteps && stepObj.subSteps.length > 0 && (
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                          {stepObj.subSteps.map((sub, subIdx) => (
                            <div key={subIdx} style={{ paddingLeft: 12, borderLeft: "2px solid #475569" }}>
                              <p style={{ margin: "0 0 6px 0", color: "#e2e8f0", fontSize: 13, lineHeight: 1.5 }}>
                                • {sub.text}
                              </p>

                              {/* Hình ảnh minh họa riêng cho bước nhỏ này */}
                              {sub.images && sub.images.length > 0 && (
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6, marginBottom: 6 }}>
                                  {sub.images.map((imgUrl, imgIdx) => (
                                    <div
                                      key={imgIdx}
                                      onClick={() => setSelectedImg(imgUrl)}
                                      style={{
                                        width: 110,
                                        height: 80,
                                        borderRadius: 6,
                                        overflow: "hidden",
                                        border: "1px solid #334155",
                                        cursor: "pointer",
                                      }}
                                    >
                                      <img src={imgUrl} alt="Ảnh bước nhỏ" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Hình ảnh chung của cả bước lớn (nếu có) */}
                      {stepObj.images && stepObj.images.length > 0 && (
                        <div style={{ marginTop: 12 }}>
                          <p style={{ margin: "8px 0 6px 0", fontSize: 11, color: "#94a3b8", fontWeight: 600 }}>
                            📸 HÌNH ẢNH TỔNG QUAN BƯỚC {stepIdx + 1}:
                          </p>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                            {stepObj.images.map((imgUrl, imgIdx) => (
                              <div
                                key={imgIdx}
                                onClick={() => setSelectedImg(imgUrl)}
                                style={{
                                  width: 120,
                                  height: 90,
                                  borderRadius: 8,
                                  overflow: "hidden",
                                  border: "2px solid #334155",
                                  cursor: "pointer",
                                }}
                              >
                                <img src={imgUrl} alt="Minh họa tổng quan" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 🖼️ MODAL PHÓNG TO ẢNH FULL MÀN HÌNH */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            cursor: "zoom-out",
          }}
        >
          <img
            src={selectedImg}
            alt="Ảnh phóng to"
            style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: 8 }}
          />
        </div>
      )}
    </div>
  );
}

export default RepairSupportPage;