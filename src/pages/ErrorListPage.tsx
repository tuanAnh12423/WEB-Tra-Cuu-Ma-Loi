import { useState, useMemo, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categories, errors } from "../data/errors";
import { searchIndex } from "../utils/searchIndex";

// Hàm loại bỏ dấu tiếng Việt giúp tìm kiếm chính xác
function removeVietnameseTones(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim();
}

// Debounce hook for search
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

function ErrorListPage() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubtype, setSelectedSubtype] = useState("ALL"); // Lọc theo loại máy
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  // State BẬT/TẮT BẢNG TÌM KIẾM NHANH BẰNG KÍNH LÚP NỔI
  const [showQuickSearch, setShowQuickSearch] = useState(false);

  // Debounce search term (300ms)
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Initialize search index on mount
  useEffect(() => {
    searchIndex.buildIndex(errors);
  }, []);

  // Update searching state when debounced search term changes
  useEffect(() => {
    setIsSearching(searchTerm !== debouncedSearchTerm);
    if (debouncedSearchTerm === searchTerm) {
      setCurrentPage(1); // Reset to page 1 when search completes
    }
  }, [searchTerm, debouncedSearchTerm]);

  // Lắng nghe phím ESC để đóng Popup tìm kiếm nhanh
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowQuickSearch(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const category = categories.find((c) => c.id === categoryId);

  // Tự động trích xuất các subtype và tách riêng từng nút bấm
  const filterOptions = useMemo(() => {
    const categoryErrors = errors.filter(
      (e) =>
        !categoryId ||
        String(e.category).toLowerCase() === String(categoryId).toLowerCase(),
    );

    const uniqueSubtypesMap = new Map<string, string>();

    categoryErrors.forEach((e: any) => {
      let rawList: string[] = [];

      if (Array.isArray(e.subtypes)) {
        rawList = e.subtypes;
      } else if (e.subtype) {
        rawList = String(e.subtype).split(",");
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

  // 2. Hàm lọc mã lỗi (Sử dụng SearchIndex để tối ưu O(1) thay vì O(n))
  const filteredErrors = useMemo(() => {
    // Use search index for fast O(1) search
    const searchResults = debouncedSearchTerm.trim() 
      ? searchIndex.search(debouncedSearchTerm)
      : errors;

    return searchResults.filter((e) => {
      // Lọc theo Category
      const isCategoryMatch =
        !categoryId ||
        String(e.category).toLowerCase() === String(categoryId).toLowerCase();

      // Lọc theo nút Subtype đang chọn
      const selected = selectedSubtype.trim().toLowerCase();
      let isSubtypeMatch = selected === "all";

      if (!isSubtypeMatch) {
        if (Array.isArray(e.subtypes)) {
          isSubtypeMatch = e.subtypes.some(
            (s) => String(s).trim().toLowerCase() === selected,
          );
        } else if (typeof e.subtype === "string") {
          isSubtypeMatch = e.subtype.toLowerCase().includes(selected);
        }

        if (!isSubtypeMatch && e.title) {
          isSubtypeMatch = e.title.toLowerCase().includes(selected);
        }
      }

      return isCategoryMatch && isSubtypeMatch;
    });
  }, [categoryId, debouncedSearchTerm, selectedSubtype]);

  // Pagination settings
  const ITEMS_PER_PAGE = 50;

  // Calculate pagination
  const paginatedErrors = useMemo(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIdx = startIdx + ITEMS_PER_PAGE;
    return filteredErrors.slice(startIdx, endIdx);
  }, [filteredErrors, currentPage]);

  const totalPages = Math.ceil(filteredErrors.length / ITEMS_PER_PAGE);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        padding: "24px 16px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header & Nút Điều Hướng */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                padding: "8px 14px",
                borderRadius: 10,
                cursor: "pointer",
                fontWeight: 600,
                color: "#475569",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
              }}
            >
              ← Quay lại
            </button>

            <button
              onClick={() => navigate("/")}
              style={{
                background: "#0f172a",
                color: "#ffffff",
                border: "none",
                padding: "8px 14px",
                borderRadius: 10,
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 13,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              🏠 Trang chủ
            </button>
          </div>

          <h1
            style={{
              fontSize: 20,
              color: "#0f172a",
              margin: 0,
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            {category?.name ? category.name.toUpperCase() : "DANH SÁCH MÃ LỖI"}
          </h1>
        </div>

        {/* Ô Tìm Kiếm Chính */}
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
            placeholder="Tìm mã lỗi (E1, E10...), Nguyên nhân (rung lac, cap nuoc...)..."
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
        
        {/* Results summary and loading state */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <div style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>
            {isSearching ? (
              <span style={{ animation: "pulse 2s infinite", opacity: 0.6 }}>
                🔄 Tìm kiếm...
              </span>
            ) : filteredErrors.length > 0 ? (
              <span>
                Tìm thấy <strong style={{ color: "#0f172a" }}>{filteredErrors.length}</strong> kết quả
                {filteredErrors.length > ITEMS_PER_PAGE && ` (Trang ${currentPage}/${totalPages})`}
              </span>
            ) : (
              <span>Không tìm thấy kết quả</span>
            )}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 16,
          }}
        >
          {/* Loading skeleton during search */}
          {isSearching && filteredErrors.length === 0 && (
            <>
              {[...Array(6)].map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  style={{
                    background: "#ffffff",
                    borderRadius: 14,
                    padding: "20px",
                    border: "1px solid #e2e8f0",
                    animation: "pulse 2s infinite",
                    opacity: 0.6,
                    height: 240,
                  }}
                />
              ))}
            </>
          )}

          {!isSearching && paginatedErrors.length > 0 ? (
            paginatedErrors.map((error) => (
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                  >
                    <div style={{ display: "flex", gap: 6 }}>
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

                  <h3
                    style={{
                      margin: "0 0 8px 0",
                      fontSize: 15,
                      color: "#0f172a",
                      fontWeight: 700,
                      textAlign: "left",
                      lineHeight: 1.4,
                    }}
                  >
                    {error.title}
                  </h3>

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

                <div
                  style={{
                    marginTop: 14,
                    paddingTop: 10,
                    display: "flex",
                    alignItems: "center",
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
            !isSearching && (
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
            )
          )}
        </div>

        {/* Pagination Controls */}
        {!isSearching && filteredErrors.length > ITEMS_PER_PAGE && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              marginTop: 32,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                background: currentPage === 1 ? "#f1f5f9" : "#ffffff",
                color: currentPage === 1 ? "#94a3b8" : "#0f172a",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                fontWeight: 500,
                fontSize: 13,
                transition: "all 0.2s ease",
              }}
            >
              ← Trước
            </button>

            {/* Page numbers */}
            <div
              style={{
                display: "flex",
                gap: 4,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => {
                  // Show current page and adjacent pages
                  return (
                    p === currentPage ||
                    Math.abs(p - currentPage) === 1 ||
                    p === 1 ||
                    p === totalPages
                  );
                })
                .map((p, idx, arr) => {
                  // Add ellipsis if there's a gap
                  const isGap = idx > 0 && arr[idx - 1] !== p - 1;
                  return (
                    <div key={`page-${p}`}>
                      {isGap && (
                        <span
                          style={{
                            padding: "8px 4px",
                            color: "#94a3b8",
                            fontSize: 13,
                          }}
                        >
                          ...
                        </span>
                      )}
                      <button
                        onClick={() => setCurrentPage(p)}
                        style={{
                          padding: "8px 12px",
                          borderRadius: 6,
                          border:
                            p === currentPage
                              ? "1px solid #0284c7"
                              : "1px solid #cbd5e1",
                          background:
                            p === currentPage ? "#e0f2fe" : "#ffffff",
                          color:
                            p === currentPage ? "#0369a1" : "#0f172a",
                          cursor: "pointer",
                          fontWeight: p === currentPage ? 600 : 500,
                          fontSize: 13,
                          transition: "all 0.2s ease",
                        }}
                      >
                        {p}
                      </button>
                    </div>
                  );
                })}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                background:
                  currentPage === totalPages ? "#f1f5f9" : "#ffffff",
                color: currentPage === totalPages ? "#94a3b8" : "#0f172a",
                cursor:
                  currentPage === totalPages ? "not-allowed" : "pointer",
                fontWeight: 500,
                fontSize: 13,
                transition: "all 0.2s ease",
              }}
            >
              Sau →
            </button>
          </div>
        )}
      </div>

      {/* CSS for pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

      {/* 🔍 NÚT KÍNH LÚP NỔI BẤM TÌM KIẾM CỐ ĐỊNH Ở GÓC DƯỚI PHẢI MÀN HÌNH */}
      <button
        onClick={() => setShowQuickSearch(true)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 54,
          height: 54,
          borderRadius: "50%",
          backgroundColor: "#0284c7",
          color: "#ffffff",
          border: "none",
          fontSize: 22,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 14px rgba(2, 132, 199, 0.4)",
          zIndex: 999,
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        title="Mở ô tìm kiếm nhanh"
      >
        🔍
      </button>

      {/* 🚀 POPUP BẢNG TÌM KIẾM NHANH KHI BẤM KÍNH LÚP */}
      {showQuickSearch && (
        <div
          onClick={() => setShowQuickSearch(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "80px",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 550,
              background: "#ffffff",
              borderRadius: 16,
              padding: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 16, color: "#0f172a" }}>
                🔍 Tìm kiếm nhanh mã lỗi
              </span>
              <button
                onClick={() => setShowQuickSearch(false)}
                style={{
                  background: "#f1f5f9",
                  border: "none",
                  borderRadius: "50%",
                  width: 28,
                  height: 28,
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#64748b",
                }}
              >
                ✕
              </button>
            </div>

            {/* Ô nhập từ khóa ngay tại chỗ */}
            <input
              type="text"
              autoFocus
              placeholder="Gõ mã lỗi hoặc nguyên nhân (VD: E10, cap nuoc...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: 10,
                border: "2px solid #0284c7",
                outline: "none",
                fontSize: 15,
                boxSizing: "border-box",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 4,
              }}
            >
              <span style={{ fontSize: 13, color: "#64748b" }}>
                Tìm thấy: <strong>{filteredErrors.length}</strong> mã lỗi
              </span>
              <button
                onClick={() => setShowQuickSearch(false)}
                style={{
                  background: "#0284c7",
                  color: "#fff",
                  border: "none",
                  padding: "6px 16px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Xem kết quả ({filteredErrors.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ErrorListPage;
