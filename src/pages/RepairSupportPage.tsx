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

  // State quản lý Bật/Tắt ẩn hiện Quy trình chi tiết cho từng thẻ pan bệnh
  const [expandedSteps, setExpandedSteps] = useState<{
    [key: string]: boolean;
  }>({});
  // State quản lý danh sách yêu thích/ghim
  const [favorites, setFavorites] = useState<string[]>([]);
  // State quản lý copy
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedSteps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  {
    /* const handleCopySpec = (partName: string, spec: string, id: string) => {
    const text = `[THÔNG SỐ ĐO ĐẠC] - ${partName}:\n${spec}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };*/
  }

  const handleDownloadImage = async (
    imgUrl: string,
    fileName = "so-do-ky-thuat.jpg",
  ) => {
    try {
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      window.open(imgUrl, "_blank");
    }
  };

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
      const cleanDesc = item.description
        ? removeVietnameseTones(item.description)
        : "";

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
        padding: "12px 10px",
        boxSizing: "border-box",
        textAlign: "left",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              background: "#334155",
              color: "#fff",
              border: "none",
              padding: "6px 12px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 12,
            }}
          >
            ← Trang chủ
          </button>
          <span
            style={{
              background: "#b91c1c",
              color: "#ffffff",
              padding: "4px 10px",
              borderRadius: 20,
              fontWeight: 700,
              fontSize: 11,
            }}
          >
            🛠️ KHU VỰC KỸ THUẬT VIÊN
          </span>
        </div>

        {/* Ô Tìm Kiếm */}
        <div style={{ position: "relative", marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Nhập mã lỗi, linh kiện hoặc trị số cần tìm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid #334155",
              outline: "none",
              fontSize: 14,
              color: "#f8fafc",
              background: "#1e293b",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Bộ Lọc Ngành Hàng */}
        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 16,
            overflowX: "auto",
            paddingBottom: 4,
          }}
        >
          <button
            onClick={() => setSelectedCategory("ALL")}
            style={{
              padding: "6px 12px",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: selectedCategory === "ALL" ? 700 : 500,
              border: "none",
              backgroundColor:
                selectedCategory === "ALL" ? "#0284c7" : "#1e293b",
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
                padding: "6px 12px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: selectedCategory === cat.id ? 700 : 500,
                border: "none",
                backgroundColor:
                  selectedCategory === cat.id ? "#0284c7" : "#1e293b",
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
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {filteredData.map((item) => {
            const isFav = favorites.includes(item.id);
            const isExpanded = expandedSteps[item.id] || false;

            return (
              <div
                key={item.id}
                style={{
                  background: "#1e293b",
                  borderRadius: 12,
                  padding: "14px",
                  border: isFav ? "1px solid #eab308" : "1px solid #334155",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  position: "relative",
                }}
              >
                {/* Header Thẻ + Nút Ghim Yêu Thích */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    {item.code && (
                      <span
                        style={{
                          background: "#ef4444",
                          color: "#ffffff",
                          padding: "4px 8px",
                          borderRadius: 6,
                          fontWeight: 800,
                          fontSize: 13,
                        }}
                      >
                        {item.code}
                      </span>
                    )}
                    <h2
                      style={{
                        fontSize: 16,
                        margin: 0,
                        color: "#f8fafc",
                        fontWeight: 700,
                      }}
                    >
                      {item.title}
                    </h2>
                  </div>

                  {/* Nút Ghim Yêu Thích */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      fontSize: 18,
                      cursor: "pointer",
                      padding: 4,
                    }}
                    title={isFav ? "Bỏ lưu pan bệnh" : "Lưu pan bệnh hay gặp"}
                  >
                    {isFav ? "⭐" : "☆"}
                  </button>
                </div>

                <p
                  style={{
                    margin: "0 0 14px 0",
                    color: "#cbd5e1",
                    fontSize: 13,
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </p>

                {/* ⚡ THÔNG SỐ ĐO ĐẠC & LINH KIỆN LIÊN QUAN (LƯỚI CÂN ĐỐI) */}
                {item.checkPoints && item.checkPoints.length > 0 && (
                  <div style={{ marginBottom: 16 }}>
                    <p
                      style={{
                        margin: "0 0 10px 0",
                        color: "#eab308",
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      ⚡ THÔNG SỐ ĐO ĐẠC LINH KIỆN:
                    </p>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: 12,
                      }}
                    >
                      {item.checkPoints.map((point, pIdx) => {
                        const copyKey = `${item.id}_${pIdx}`;

                        return (
                          <div
                            key={pIdx}
                            style={{
                              background: "#0f172a",
                              borderRadius: 10,
                              padding: "14px",
                              display: "flex",
                              flexDirection: "column",
                              gap: 10,
                            }}
                          >
                            {/* 1. Header Tên Linh Kiện + Nút Copy */}
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <span
                                style={{
                                  fontWeight: 700,
                                  fontSize: 14,
                                  color: "#f8fafc",
                                }}
                              >
                                🔧 {point.partName}
                              </span>
                              <button
                                onClick={() => {
                                  const infoText = `[${point.partName}]\n📍 PCB: ${point.pcbLocation?.text || "N/A"}\n⚡ Điện áp: ${point.voltage?.text || "N/A"}\n📊 Trở kháng: ${point.resistance?.text || "N/A"}${point.capacitance ? `\n🔋 Điện dung: ${point.capacitance.text}` : ""}`;
                                  navigator.clipboard.writeText(infoText);
                                  setCopiedId(copyKey);
                                  setTimeout(() => setCopiedId(null), 2000);
                                }}
                                style={{
                                  background: "#1e293b",
                                  color: "#38bdf8",
                                  border: "1px solid #334155",
                                  borderRadius: 6,
                                  fontSize: 11,
                                  padding: "3px 8px",
                                  cursor: "pointer",
                                  fontWeight: 600,
                                }}
                              >
                                {copiedId === copyKey ? "✓ Đã copy" : "📋 Copy"}
                              </button>
                            </div>

                            {/* 🟢 2. KHỐI HÌNH DÁNG LINH KIỆN THỰC TẾ (ĐẶT LÊN ĐẦU TIÊN) */}
                            {point.partImages &&
                              point.partImages.length > 0 && (
                                <div
                                  style={{
                                    background: "#1e293b",
                                    borderRadius: 8,
                                    padding: "8px 10px",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: 11,
                                      color: "#94a3b8",
                                      fontWeight: 700,
                                      display: "block",
                                      marginBottom: 6,
                                    }}
                                  >
                                    📷 HÌNH DÁNG LINH KIỆN THỰC TẾ:
                                  </span>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexWrap: "wrap",
                                      gap: 6,
                                    }}
                                  >
                                    {point.partImages.map((imgUrl, imgIdx) => (
                                      <div
                                        key={imgIdx}
                                        onClick={() => setSelectedImg(imgUrl)}
                                        style={{
                                          width: 80,
                                          height: 80,
                                          borderRadius: 6,
                                          overflow: "hidden",
                                          cursor: "pointer",
                                          border: "1px solid #38bdf8", // Viền xanh nổi bật phân biệt với ảnh đo VOM
                                        }}
                                      >
                                        <img
                                          src={imgUrl}
                                          alt={`Ngoại hình ${point.partName}`}
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                          }}
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                            {/* 📍 3. VỊ TRÍ PCB + ẢNH GIẮC CẮM */}
                            {point.pcbLocation && (
                              <div
                                style={{
                                  background: "#1e293b",
                                  borderRadius: 8,
                                  padding: "8px 10px",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: 12,
                                    color: "#94a3b8",
                                    fontWeight: 600,
                                    marginBottom: 4,
                                  }}
                                >
                                  📍 Vị trí PCB:{" "}
                                  <span
                                    style={{
                                      color: "#38bdf8",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {point.pcbLocation.text}
                                  </span>
                                </div>
                                {point.pcbLocation.images &&
                                  point.pcbLocation.images.length > 0 && (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 6,
                                        marginTop: 6,
                                      }}
                                    >
                                      {point.pcbLocation.images.map(
                                        (imgUrl, imgIdx) => (
                                          <div
                                            key={imgIdx}
                                            onClick={() =>
                                              setSelectedImg(imgUrl)
                                            }
                                            style={{
                                              width: 70,
                                              height: 70,
                                              borderRadius: 6,
                                              overflow: "hidden",
                                              cursor: "pointer",
                                              border: "1px solid #334155",
                                            }}
                                          >
                                            <img
                                              src={imgUrl}
                                              alt="Ảnh PCB"
                                              style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                              }}
                                            />
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  )}
                              </div>
                            )}

                            {/* ⚡ 4. ĐIỆN ÁP CẤP + ẢNH ĐO VOLT */}
                            {point.voltage && (
                              <div
                                style={{
                                  background: "#1e293b",
                                  borderRadius: 8,
                                  padding: "8px 10px",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: 12,
                                    color: "#94a3b8",
                                    fontWeight: 600,
                                    marginBottom: 4,
                                  }}
                                >
                                  ⚡ Điện áp cấp:{" "}
                                  <span
                                    style={{
                                      color: "#facc15",
                                      fontWeight: 700,
                                      background: "rgba(250, 204, 21, 0.15)",
                                      padding: "2px 6px",
                                      borderRadius: 4,
                                    }}
                                  >
                                    {point.voltage.text}
                                  </span>
                                </div>
                                {point.voltage.images &&
                                  point.voltage.images.length > 0 && (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 6,
                                        marginTop: 6,
                                      }}
                                    >
                                      {point.voltage.images.map(
                                        (imgUrl, imgIdx) => (
                                          <div
                                            key={imgIdx}
                                            onClick={() =>
                                              setSelectedImg(imgUrl)
                                            }
                                            style={{
                                              width: 70,
                                              height: 70,
                                              borderRadius: 6,
                                              overflow: "hidden",
                                              cursor: "pointer",
                                              border: "1px solid #334155",
                                            }}
                                          >
                                            <img
                                              src={imgUrl}
                                              alt="Ảnh Volt"
                                              style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                              }}
                                            />
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  )}
                              </div>
                            )}

                            {/* 📊 5. TRỞ KHÁNG + ẢNH ĐO OHM */}
                            {point.resistance && (
                              <div
                                style={{
                                  background: "#1e293b",
                                  borderRadius: 8,
                                  padding: "8px 10px",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: 12,
                                    color: "#94a3b8",
                                    fontWeight: 600,
                                    marginBottom: 4,
                                  }}
                                >
                                  📊 Trở kháng:{" "}
                                  <span
                                    style={{
                                      color: "#4ade80",
                                      fontWeight: 700,
                                      background: "rgba(74, 222, 128, 0.15)",
                                      padding: "2px 6px",
                                      borderRadius: 4,
                                    }}
                                  >
                                    {point.resistance.text}
                                  </span>
                                </div>
                                {point.resistance.images &&
                                  point.resistance.images.length > 0 && (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 6,
                                        marginTop: 6,
                                      }}
                                    >
                                      {point.resistance.images.map(
                                        (imgUrl, imgIdx) => (
                                          <div
                                            key={imgIdx}
                                            onClick={() =>
                                              setSelectedImg(imgUrl)
                                            }
                                            style={{
                                              width: 70,
                                              height: 70,
                                              borderRadius: 6,
                                              overflow: "hidden",
                                              cursor: "pointer",
                                              border: "1px solid #334155",
                                            }}
                                          >
                                            <img
                                              src={imgUrl}
                                              alt="Ảnh Ohm"
                                              style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                              }}
                                            />
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  )}
                              </div>
                            )}

                            {/* 🔋 6. ĐIỆN DUNG + ẢNH ĐO TỤ */}
                            {point.capacitance && (
                              <div
                                style={{
                                  background: "#1e293b",
                                  borderRadius: 8,
                                  padding: "8px 10px",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: 12,
                                    color: "#94a3b8",
                                    fontWeight: 600,
                                    marginBottom: 4,
                                  }}
                                >
                                  🔋 Điện dung:{" "}
                                  <span
                                    style={{
                                      color: "#c084fc",
                                      fontWeight: 700,
                                      background: "rgba(192, 132, 252, 0.15)",
                                      padding: "2px 6px",
                                      borderRadius: 4,
                                    }}
                                  >
                                    {point.capacitance.text}
                                  </span>
                                </div>
                                {point.capacitance.images &&
                                  point.capacitance.images.length > 0 && (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 6,
                                        marginTop: 6,
                                      }}
                                    >
                                      {point.capacitance.images.map(
                                        (imgUrl, imgIdx) => (
                                          <div
                                            key={imgIdx}
                                            onClick={() =>
                                              setSelectedImg(imgUrl)
                                            }
                                            style={{
                                              width: 70,
                                              height: 70,
                                              borderRadius: 6,
                                              overflow: "hidden",
                                              cursor: "pointer",
                                              border: "1px solid #334155",
                                            }}
                                          >
                                            <img
                                              src={imgUrl}
                                              alt="Ảnh Tụ"
                                              style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                              }}
                                            />
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {/* 🔬 QUY TRÌNH SỬA CHỮA CHI TIẾT (CÓ THỂ NÚT THU GỌN / MỞ RỘNG ACCORDION) */}
                <div
                  style={{
                    background: "#0f172a",
                    borderRadius: 8,
                    padding: "10px 12px",
                  }}
                >
                  <div
                    onClick={() => toggleExpand(item.id)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        color: "#38bdf8",
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      🔬 QUY TRÌNH KÍCH HOẠT & ĐO ĐẠC CHI TIẾT (
                      {item.steps.length} bước)
                    </span>
                    <span
                      style={{
                        color: "#38bdf8",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {isExpanded ? "🔼 Thu gọn" : "🔽 Xem chi tiết"}
                    </span>
                  </div>

                  {/* Nội dung các bước (Chỉ hiện khi Bấm Mở Rộng) */}
                  {isExpanded && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        marginTop: 12,
                      }}
                    >
                      {item.steps.map((stepObj, stepIdx) => (
                        <div
                          key={stepIdx}
                          style={{
                            background: "#1e293b",
                            borderRadius: 6,
                            padding: "10px",
                          }}
                        >
                          <h4
                            style={{
                              margin: "0 0 6px 0",
                              fontSize: 13,
                              color: "#38bdf8",
                              fontWeight: 700,
                            }}
                          >
                            {stepObj.title}
                          </h4>

                          {stepObj.subSteps && stepObj.subSteps.length > 0 && (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 8,
                              }}
                            >
                              {stepObj.subSteps.map((sub, subIdx) => (
                                <div key={subIdx}>
                                  <p
                                    style={{
                                      margin: "0 0 4px 0",
                                      color: "#e2e8f0",
                                      fontSize: 12,
                                      lineHeight: 1.5,
                                    }}
                                  >
                                    • {sub.text}
                                  </p>

                                  {sub.images && sub.images.length > 0 && (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 6,
                                        marginTop: 4,
                                      }}
                                    >
                                      {sub.images.map((imgUrl, imgIdx) => (
                                        <div
                                          key={imgIdx}
                                          onClick={() => setSelectedImg(imgUrl)}
                                          style={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: 6,
                                            overflow: "hidden",
                                            cursor: "pointer",
                                            border: "1px solid #334155",
                                          }}
                                        >
                                          <img
                                            src={imgUrl}
                                            alt="Ảnh bước nhỏ"
                                            style={{
                                              width: "100%",
                                              height: "100%",
                                              objectFit: "cover",
                                            }}
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
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
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 12,
            boxSizing: "border-box",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "100vw",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 10,
                marginBottom: 10,
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <button
                onClick={() => handleDownloadImage(selectedImg)}
                style={{
                  background: "#0284c7",
                  color: "#ffffff",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                💾 Tải ảnh về
              </button>
              <button
                onClick={() => setSelectedImg(null)}
                style={{
                  background: "#ef4444",
                  color: "#ffffff",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                ✕ Đóng
              </button>
            </div>

            <img
              src={selectedImg}
              alt="Ảnh phóng to"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: 8,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default RepairSupportPage;
