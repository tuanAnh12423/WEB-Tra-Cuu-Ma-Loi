import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/errors";
import { repairErrors } from "../data/repairErrors";
import {
  TECHNICIAN_PASSWORD,
  isTechnicianAuthed,
  setTechnicianAuthed,
} from "../utils/technicianAuth";

function removeVietnameseTones(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim();
}

// 🔒 CỔNG XÁC THỰC: chặn truy cập thẳng bằng URL /repair-support mà không
// qua màn hình nhập mật khẩu ở Trang chủ. Trước đây route này hoàn toàn
// không kiểm tra gì cả, nên ai gõ thẳng địa chỉ là vào được luôn.
function RepairSupportPage() {
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
            Trang này chỉ dành cho kỹ thuật viên. Nhập mật khẩu để tiếp tục.
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

  return <RepairSupportPageContent />;
}

function RepairSupportPageContent() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Mặc định MỞ RỘNG tất cả các bước
  const [expandedSteps, setExpandedSteps] = useState<{
    [key: string]: boolean;
  }>({});
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [id]: prev[id] === undefined ? false : !prev[id],
    }));
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

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
        padding: "16px 20px",
        boxSizing: "border-box",
        textAlign: "left",
      }}
    >
      <div style={{ maxWidth: "100%", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              background: "#334155",
              color: "#fff",
              border: "none",
              padding: "10px 18px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            ← Trang chủ
          </button>
          <span
            style={{
              background: "#b91c1c",
              color: "#ffffff",
              padding: "6px 14px",
              borderRadius: 20,
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: "0.03em",
            }}
          >
            🛠️ HỆ THỐNG SỬA CHỮA CHUYÊN SÂU - BẢO MẬT KTV
          </span>
        </div>

        {/* Ô Tìm Kiếm rộng 100% */}
        <div style={{ position: "relative", marginBottom: 16 }}>
          <input
            type="text"
            placeholder="Nhập mã lỗi, linh kiện hoặc trị số cần tìm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 10,
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
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 20,
            overflowX: "auto",
            paddingBottom: 4,
          }}
        >
          <button
            onClick={() => setSelectedCategory("ALL")}
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              fontSize: 13,
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
                padding: "8px 16px",
                borderRadius: 20,
                fontSize: 13,
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

        {/* Danh sách các Thẻ Pan Bệnh */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {filteredData.map((item) => {
            const isFav = favorites.includes(item.id);
            const isExpanded = expandedSteps[item.id] !== false;

            return (
              <div
                key={item.id}
                style={{
                  background: "#1e293b",
                  borderRadius: 14,
                  padding: "20px",
                  border: isFav ? "2px solid #eab308" : "1px solid #334155",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                {/* Header Thẻ Pan Bệnh */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    {item.code && (
                      <span
                        style={{
                          background: "#ef4444",
                          color: "#ffffff",
                          padding: "6px 12px",
                          borderRadius: 8,
                          fontWeight: 800,
                          fontSize: 16,
                        }}
                      >
                        {item.code}
                      </span>
                    )}
                    <h2
                      style={{
                        fontSize: 20,
                        margin: 0,
                        color: "#f8fafc",
                        fontWeight: 800,
                      }}
                    >
                      {item.title}
                    </h2>
                  </div>

                  <button
                    onClick={() => toggleFavorite(item.id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      fontSize: 22,
                      cursor: "pointer",
                      padding: 4,
                    }}
                  >
                    {isFav ? "⭐" : "☆"}
                  </button>
                </div>

                <p
                  style={{
                    margin: "0 0 16px 0",
                    color: "#e2e8f0",
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>

                {/* ⚡ KHỐI 1: THÔNG SỐ ĐO ĐẠC LINH KIỆN */}
                {item.checkPoints && item.checkPoints.length > 0 && (
                  <div style={{ marginBottom: 20 }}>
                    <p
                      style={{
                        margin: "0 0 12px 0",
                        color: "#facc15",
                        fontWeight: 800,
                        fontSize: 15,
                        textTransform: "uppercase",
                      }}
                    >
                      ⚡ THÔNG SỐ ĐO ĐẠC LINH KIỆN:
                    </p>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(360px, 1fr))",
                        gap: 16,
                        width: "100%",
                      }}
                    >
                      {item.checkPoints.map((point, pIdx) => {
                        const copyKey = `${item.id}_${pIdx}`;

                        return (
                          <div
                            key={pIdx}
                            style={{
                              background: "#0f172a",
                              borderRadius: 12,
                              padding: "16px",
                              display: "flex",
                              flexDirection: "column",
                              gap: 12,
                              border: "1px solid #334155",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <span
                                style={{
                                  fontWeight: 800,
                                  fontSize: 16,
                                  color: "#38bdf8",
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
                                  fontSize: 12,
                                  padding: "4px 10px",
                                  cursor: "pointer",
                                  fontWeight: 700,
                                }}
                              >
                                {copiedId === copyKey ? "✓ Đã copy" : "📋 Copy"}
                              </button>
                            </div>

                            {/* HÌNH DÁNG LINH KIỆN */}
                            {point.partImages &&
                              point.partImages.length > 0 && (
                                <div
                                  style={{
                                    background: "#1e293b",
                                    borderRadius: 10,
                                    padding: "12px",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: 13,
                                      color: "#94a3b8",
                                      fontWeight: 800,
                                      display: "block",
                                      marginBottom: 8,
                                    }}
                                  >
                                    📷 HÌNH DÁNG LINH KIỆN THỰC TẾ:
                                  </span>
                                  <div
                                    style={{
                                      display: "grid",
                                      gridTemplateColumns:
                                        "repeat(auto-fill, minmax(160px, 1fr))",
                                      gap: 12,
                                    }}
                                  >
                                    {point.partImages.map((imgUrl, imgIdx) => (
                                      <div
                                        key={imgIdx}
                                        onClick={() => setSelectedImg(imgUrl)}
                                        style={{
                                          width: "100%",
                                          height: 180,
                                          borderRadius: 8,
                                          overflow: "hidden",
                                          cursor: "pointer",
                                          border: "2px solid #38bdf8",
                                          boxShadow:
                                            "0 4px 12px rgba(0,0,0,0.4)",
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

                            {/* VỊ TRÍ PCB */}
                            {point.pcbLocation && (
                              <div
                                style={{
                                  background: "#1e293b",
                                  borderRadius: 10,
                                  padding: "12px",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: 13,
                                    color: "#94a3b8",
                                    fontWeight: 700,
                                    marginBottom: 6,
                                  }}
                                >
                                  📍 Vị trí PCB:{" "}
                                  <span
                                    style={{
                                      color: "#38bdf8",
                                      fontWeight: 800,
                                    }}
                                  >
                                    {point.pcbLocation.text}
                                  </span>
                                </div>
                                {point.pcbLocation.images &&
                                  point.pcbLocation.images.length > 0 && (
                                    <div
                                      style={{
                                        display: "grid",
                                        gridTemplateColumns:
                                          "repeat(auto-fill, minmax(160px, 1fr))",
                                        gap: 12,
                                        marginTop: 8,
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
                                              width: "100%",
                                              height: 180,
                                              borderRadius: 8,
                                              overflow: "hidden",
                                              cursor: "pointer",
                                              border: "2px solid #0284c7",
                                              boxShadow:
                                                "0 4px 12px rgba(0,0,0,0.4)",
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

                            {/* ĐIỆN ÁP CẤP */}
                            {point.voltage && (
                              <div
                                style={{
                                  background: "#1e293b",
                                  borderRadius: 10,
                                  padding: "12px",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: 13,
                                    color: "#94a3b8",
                                    fontWeight: 700,
                                    marginBottom: 6,
                                  }}
                                >
                                  ⚡ Điện áp cấp:{" "}
                                  <span
                                    style={{
                                      color: "#facc15",
                                      fontWeight: 800,
                                      background: "rgba(250, 204, 21, 0.2)",
                                      padding: "3px 8px",
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
                                        display: "grid",
                                        gridTemplateColumns:
                                          "repeat(auto-fill, minmax(160px, 1fr))",
                                        gap: 12,
                                        marginTop: 8,
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
                                              width: "100%",
                                              height: 180,
                                              borderRadius: 8,
                                              overflow: "hidden",
                                              cursor: "pointer",
                                              border: "2px solid #facc15",
                                              boxShadow:
                                                "0 4px 12px rgba(0,0,0,0.4)",
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

                            {/* TRỞ KHÁNG */}
                            {point.resistance && (
                              <div
                                style={{
                                  background: "#1e293b",
                                  borderRadius: 10,
                                  padding: "12px",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: 13,
                                    color: "#94a3b8",
                                    fontWeight: 700,
                                    marginBottom: 6,
                                  }}
                                >
                                  📊 Trở kháng:{" "}
                                  <span
                                    style={{
                                      color: "#4ade80",
                                      fontWeight: 800,
                                      background: "rgba(74, 222, 128, 0.2)",
                                      padding: "3px 8px",
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
                                        display: "grid",
                                        gridTemplateColumns:
                                          "repeat(auto-fill, minmax(160px, 1fr))",
                                        gap: 12,
                                        marginTop: 8,
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
                                              width: "100%",
                                              height: 180,
                                              borderRadius: 8,
                                              overflow: "hidden",
                                              cursor: "pointer",
                                              border: "2px solid #4ade80",
                                              boxShadow:
                                                "0 4px 12px rgba(0,0,0,0.4)",
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
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 🔬 KHỐI 2: QUY TRÌNH KIỂM TRA CHI TIẾT - LẤP KÍN HOÀN TOÀN MẢNG ĐEN VỚI THẺ SUBSTEPS GRID */}
                <div
                  style={{
                    background: "#0f172a",
                    borderRadius: 12,
                    padding: "16px",
                    border: "1px solid #334155",
                    width: "100%",
                    boxSizing: "border-box",
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
                        fontWeight: 800,
                        fontSize: 16,
                        textTransform: "uppercase",
                      }}
                    >
                      🔬 QUY TRÌNH KIỂM TRA CHI TIẾT ({item.steps.length} BƯỚC):
                    </span>
                    <span
                      style={{
                        color: "#38bdf8",
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      {isExpanded ? "🔼 Thu gọn" : "🔽 Xem chi tiết"}
                    </span>
                  </div>

                  {/* THIẾT KẾ MỚI: TỰ ĐỘNG CHIA 2-3 CỘT (GRID AUTO-FILL) CHO CÁC BƯỚC */}
                  {isExpanded && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 20,
                        marginTop: 16,
                        width: "100%",
                      }}
                    >
                      {item.steps.map((stepObj, stepIdx) => (
                        <div
                          key={stepIdx}
                          style={{
                            background: "#1e293b",
                            borderRadius: 12,
                            padding: "18px 20px",
                            border: "1px solid #334155",
                            width: "100%",
                            boxSizing: "border-box",
                          }}
                        >
                          <h4
                            style={{
                              margin: "0 0 14px 0",
                              fontSize: 16,
                              color: "#38bdf8",
                              fontWeight: 800,
                              lineHeight: 1.4,
                              borderBottom: "1px dashed #334155",
                              paddingBottom: 8,
                            }}
                          >
                            {stepObj.title}
                          </h4>

                          {/* 🌟 ĐOẠN ĐỔI MỚI QUAN TRỌNG: CHUYỂN SUBSTEPS SANG DẠNG GRID LẤP KÍN NỀN ĐEN */}
                          {stepObj.subSteps && stepObj.subSteps.length > 0 && (
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns:
                                  "repeat(auto-fill, minmax(280px, 1fr))",
                                gap: 16,
                                width: "100%",
                              }}
                            >
                              {stepObj.subSteps.map((sub, subIdx) => (
                                <div
                                  key={subIdx}
                                  style={{
                                    background: "#0f172a",
                                    borderRadius: 10,
                                    padding: "14px",
                                    border: "1px solid #334155",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    gap: 10,
                                  }}
                                >
                                  {/* Chữ mô tả bước to, rõ nét */}
                                  <p
                                    style={{
                                      margin: 0,
                                      color: "#f8fafc",
                                      fontSize: 14,
                                      fontWeight: 700,
                                      lineHeight: 1.5,
                                    }}
                                  >
                                    • {sub.text}
                                  </p>

                                  {/* HÌNH ẢNH TO VÀ RÕ, TỰ ĐỘNG PHÌNH TO RỘNG KHUNG CARD */}
                                  {sub.images && sub.images.length > 0 && (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 10,
                                        marginTop: 4,
                                      }}
                                    >
                                      {sub.images.map((imgUrl, imgIdx) => (
                                        <div
                                          key={imgIdx}
                                          onClick={() => setSelectedImg(imgUrl)}
                                          style={{
                                            width: "100%",
                                            height: 240, // Kích thước ảnh cao 240px rất rõ nét
                                            borderRadius: 8,
                                            overflow: "hidden",
                                            cursor: "pointer",
                                            border: "2px solid #38bdf8",
                                            boxShadow:
                                              "0 4px 12px rgba(0,0,0,0.4)",
                                            transition: "transform 0.2s ease",
                                          }}
                                          onMouseOver={(e) => {
                                            e.currentTarget.style.transform =
                                              "scale(1.02)";
                                          }}
                                          onMouseOut={(e) => {
                                            e.currentTarget.style.transform =
                                              "scale(1)";
                                          }}
                                        >
                                          <img
                                            src={imgUrl}
                                            alt="Ảnh minh họa kỹ thuật"
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

      {/* 🖼️ MODAL PHÓNG TO ẢNH FULL SCREEN */}
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
            backdropFilter: "blur(6px)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            boxSizing: "border-box",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "95vw",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 12,
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
                  padding: "10px 18px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(2, 132, 199, 0.4)",
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
                  padding: "10px 18px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                ✕ Đóng (ESC)
              </button>
            </div>

            <img
              src={selectedImg}
              alt="Ảnh phóng to"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: 10,
                border: "2px solid #38bdf8",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default RepairSupportPage;
