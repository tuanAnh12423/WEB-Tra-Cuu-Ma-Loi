import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categories, errors } from "../data/errors";

function ErrorListPage() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubtype, setSelectedSubtype] = useState("ALL"); // Lọc theo loại máy

  const category = categories.find((c) => c.id === categoryId);

  // 1. Tự động trích xuất các subtype và tách riêng từng nút bấm
  const filterOptions = useMemo(() => {
    const categoryErrors = errors.filter(
      (e) =>
        !categoryId ||
        String(e.category).toLowerCase() === String(categoryId).toLowerCase(),
    );

    const uniqueSubtypesMap = new Map<string, string>();

    categoryErrors.forEach((e: any) => {
      // 👈 Thêm : any ở đây hoặc ép kiểu bên dưới
      let rawList: string[] = [];

      // Kiểm tra nếu là mảng
      if (Array.isArray(e.subtypes)) {
        rawList = e.subtypes;
      }
      // Nếu có giá trị subtype, ép kiểu về String an toàn 100% trước khi split
      else if (e.subtype) {
        rawList = String(e.subtype).split(","); // 👈 Đã fix lỗi 'split' ở đây
      }

      rawList.forEach((sub) => {
        const cleanSub = String(sub).trim();
        if (cleanSub) {
          const lowerKey = cleanSub.toLowerCase();
          if (!uniqueSubtypesMap.has(lowerKey)) {
            uniqueSubtypesMap.set(lowerKey, cleanSub);
          }
        }
      });
    });

    return [
      { label: "Tất cả", value: "ALL" },
      ...Array.from(uniqueSubtypesMap.values()).map((sub) => ({
        label: sub,
        value: sub,
      })),
    ];
  }, [categoryId]);

  // 2. Hàm lọc mã lỗi khi bấm vào từng nút
  const filteredErrors = useMemo(() => {
    return errors.filter((e) => {
      // Lọc theo Category
      const isCategoryMatch =
        !categoryId ||
        String(e.category).toLowerCase() === String(categoryId).toLowerCase();

      // Lọc theo từ khóa ô Tìm kiếm
      const keyword = searchTerm.trim().toLowerCase();
      const isSearchMatch =
        keyword === "" ||
        e.code.toLowerCase().includes(keyword) ||
        e.title.toLowerCase().includes(keyword) ||
        (e.description && e.description.toLowerCase().includes(keyword));

      // Lọc theo nút Subtype đang chọn
      const selected = selectedSubtype.trim().toLowerCase();

      let isSubtypeMatch = selected === "all";

      if (!isSubtypeMatch) {
        // Kiểm tra trong mảng subtypes
        if (Array.isArray(e.subtypes)) {
          isSubtypeMatch = e.subtypes.some(
            (s) => String(s).trim().toLowerCase() === selected,
          );
        }
        // Kiểm tra trong chuỗi subtype (nếu dùng dạng "Lồng đứng, Lồng ngang")
        else if (typeof e.subtype === "string") {
          isSubtypeMatch = e.subtype.toLowerCase().includes(selected);
        }

        // Backup: Soi trực tiếp vào tiêu đề (title) nếu data chưa ghi subtype
        if (!isSubtypeMatch && e.title) {
          isSubtypeMatch = e.title.toLowerCase().includes(selected);
        }
      }

      return isCategoryMatch && isSearchMatch && isSubtypeMatch;
    });
  }, [categoryId, searchTerm, selectedSubtype]);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f8fafc", // Màu nền slate xám siêu sạch
        padding: "24px 16px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header & Nút Quay lại */}
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
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              padding: "8px 16px",
              borderRadius: 10,
              cursor: "pointer",
              fontWeight: 600,
              color: "#475569",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "all 0.2s",
            }}
          >
            ← Quay lại
          </button>
          <h1
            style={{
              fontSize: 22,
              color: "#0f172a",
              margin: 0,
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            {category?.name ? category.name.toUpperCase() : "DANH SÁCH MÃ LỖI"}
          </h1>
        </div>

        {/* Ô Tìm Kiếm + Nút xóa nhanh */}
        <div style={{ position: "relative", marginBottom: 14 }}>
          <span
            style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 16,
              color: "#94a3b8",
            }}
          >
            🔍
          </span>
          <input
            type="text"
            placeholder="Tìm mã lỗi (E1, E10...), Nguyên nhân (Rung lắc,...)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 40px 14px 46px",
              borderRadius: 12,
              border: "1px solid #cbd5e1",
              outline: "none",
              fontSize: 15,
              color: "#0f172a",
              boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              boxSizing: "border-box",
              background: "#ffffff",
            }}
          />
          {/* Nút ✕ xóa nhanh khi có text */}
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              style={{
                position: "absolute",
                right: 14,
                top: "50%",
                transform: "translateY(-50%)",
                border: "none",
                background: "#e2e8f0",
                color: "#64748b",
                borderRadius: "50%",
                width: 22,
                height: 22,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
              }}
            >
              ✕
            </button>
          )}
        </div>

        {/* 🏷️ Bộ lọc chọn nhanh (Filter Badges) */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 24,
            overflowX: "auto",
            paddingBottom: 4,
          }}
        >
          {filterOptions.map((option) => {
            const isActive = selectedSubtype === option.value;
            return (
              <button
                key={option.value}
                onClick={() => setSelectedSubtype(option.value ?? "ALL")}
                style={{
                  padding: "6px 14px",
                  borderRadius: 20,
                  fontSize: 13,
                  fontWeight: isActive ? 700 : 500,
                  border: isActive ? "1px solid #0284c7" : "1px solid #e2e8f0",
                  backgroundColor: isActive ? "#e0f2fe" : "#ffffff",
                  color: isActive ? "#0369a1" : "#64748b",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.15s ease",
                }}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {/* ⚡ Danh sách thẻ mã lỗi (Grid layout) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 16,
          }}
        >
          {filteredErrors.length > 0 ? (
            filteredErrors.map((error) => (
              <div
                key={error.id}
                onClick={() => navigate(`/error-detail/${error.id}`)}
                style={{
                  background: "#ffffff",
                  borderRadius: 14,
                  padding: "20px",
                  border: "1px solid #e2e8f0",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                  transition: "all 0.2s ease-in-out",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.08)";
                  e.currentTarget.style.borderColor = "#38bdf8";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 4px rgba(0,0,0,0.02)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                {/* Dải màu trang trí ở mép trái thẻ */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    backgroundColor: "#0284c7",
                  }}
                />

                <div>
                  {/* Hàng 1: Badge mã lỗi hoặc loại máy (Nhỏ gọn, tinh tế) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                  >
                    <div style={{ display: "flex", gap: 6 }}>
                      {/* Badge Mã lỗi (Ví dụ: E1, E10 hoặc Vấn đề) */}
                      {error.code && (
                        <span
                          style={{
                            background: "#e0f2fe",
                            color: "#0369a1",
                            padding: "3px 8px",
                            borderRadius: 6,
                            fontWeight: 700,
                            fontSize: 12,
                          }}
                        >
                          {error.code}
                        </span>
                      )}

                      {/* Badge Phân loại lồng máy (nếu có) */}
                      {error.subtype && (
                        <span
                          style={{
                            background: "#f1f5f9",
                            color: "#475569",
                            padding: "3px 8px",
                            borderRadius: 6,
                            fontWeight: 500,
                            fontSize: 12,
                          }}
                        >
                          {error.subtype}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hàng 2: TIÊU ĐỀ CHÍNH (Chữ thường đậm, dễ đọc, không dùng khối xanh nữa) */}
                  <h3
                    style={{
                      margin: "0 0 8px 0",
                      fontSize: 15,
                      color: "#0f172a",
                      fontWeight: 700,
                      textAlign: "left",
                      textTransform: "capitalize", // Tự động viết hoa chữ cái đầu, các chữ sau viết thường
                      lineHeight: 1.4,
                    }}
                  >
                    {/* Tự động viết hoa chữ cái đầu, các chữ sau viết thường cho thanh lịch */}
                    {error.title}
                  </h3>

                  {/* Hàng 3: Mô tả ngắn gọn */}
                  {error.description && (
                    <p
                      style={{
                        margin: 0,
                        fontSize: 13,
                        color: "#64748b",
                        lineHeight: 1.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {error.description}
                    </p>
                  )}
                </div>

                {/* Hàng 4: Nút xem chi tiết ở góc dưới */}
                <div
                  style={{
                    marginTop: 14,
                    paddingTop: 10,
                    borderTop: "1px stroke #f1f5f9",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    color: "#0284c7",
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  Xem cách xử lý →
                </div>
              </div>
            ))
          ) : (
            /* Khi không có kết quả */
            <div
              style={{
                gridColumn: "1 / -1",
                padding: "48px 20px",
                textAlign: "center",
                color: "#64748b",
                background: "#ffffff",
                borderRadius: 12,
                border: "1px dashed #cbd5e1",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 8 }}>🔍</div>
              <div style={{ fontWeight: 600, fontSize: 16, color: "#334155" }}>
                Không tìm thấy mã lỗi phù hợp!
              </div>
              <div style={{ fontSize: 13, marginTop: 4, color: "#94a3b8" }}>
                Thử xóa từ khóa hoặc chọn bộ lọc "Tất cả" xem sao.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ErrorListPage;
