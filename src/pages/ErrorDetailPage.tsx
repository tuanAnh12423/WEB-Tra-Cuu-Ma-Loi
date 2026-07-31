import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { errors } from "../data/errors";

// Hàm hỗ trợ tìm kiếm không dấu chuẩn xác
function removeVietnameseTones(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim();
}

function ErrorDetailPage() {
  const navigate = useNavigate();
  const { errorId } = useParams();

  // State quản lý phóng to hình ảnh
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // State quản lý trạng thái Nút Copy
  const [copied, setCopied] = useState(false);

  // 🟢 State BẬT/TẮT VÀ NHẬP TỪ KHÓA CHO KÍNH LÚP TÌM KIẾM NHANH
  const [showQuickSearch, setShowQuickSearch] = useState(false);
  const [quickSearchTerm, setQuickSearchTerm] = useState("");

  // Lắng nghe phím ESC để đóng ảnh hoặc đóng ô tìm kiếm nhanh
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImg(null);
        setShowQuickSearch(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const error = errors.find((e) => e.id === errorId);

  if (!error)
    return (
      <div style={{ padding: 24, textAlign: "left" }}>
        Không tìm thấy mã lỗi!
      </div>
    );

  // 📋 HÀM TẠO NỘI DUNG VÀ COPY CHO KHÁCH HÀNG
  const handleCopyForCustomer = () => {
    let text = `[HỖ TRỢ KỸ THUẬT]\n`;
    text += `📌 Mã lỗi/Sự cố: ${error.code ? error.code + " - " : ""}${error.title}\n`;
    if (error.description) {
      text += `📝 Mô tả: ${error.description}\n`;
    }
    text += `\n📋 CÁC BƯỚC HƯỚNG DẪN XỬ LÝ:\n`;

    error.steps.forEach((step: any, idx: number) => {
      const stepText = typeof step === "string" ? step : step.text;
      text += `Bước ${idx + 1}: ${stepText}\n`;
    });

    text += `\nDạ anh/chị kiểm tra thử giúp bên em nhé. Nếu cần hỗ trợ thêm hãy báo lại cho trung tâm nhé!`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  // 🔍 LỌC MÃ LỖI TRONG POPUP KÍNH LÚP (KHÔNG DẤU & NHIỀU TRƯỜNG)
  const cleanKeyword = removeVietnameseTones(quickSearchTerm);
  const filteredQuickErrors = cleanKeyword
    ? errors.filter((e) => {
        const cleanCode = e.code ? removeVietnameseTones(e.code) : "";
        const cleanTitle = removeVietnameseTones(e.title);
        const cleanDesc = e.description ? removeVietnameseTones(e.description) : "";
        return (
          cleanCode.includes(cleanKeyword) ||
          cleanTitle.includes(cleanKeyword) ||
          cleanDesc.includes(cleanKeyword)
        );
      })
    : [];

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: 24,
        position: "relative",
        textAlign: "left",
      }}
    >
      {/* 🔙 HÀNG NÚT ĐIỀU HƯỚNG NHANH */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              background: "#e4e6eb",
              border: "none",
              padding: "8px 14px",
              borderRadius: 8,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontWeight: 600,
              color: "#333",
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
              borderRadius: 8,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontWeight: 600,
              fontSize: 13,
            }}
            title="Về lại Trang chủ"
          >
            🏠 Trang chủ
          </button>
        </div>

        {/* 📋 NÚT COPY HƯỚNG DẪN CHO KHÁCH HÀNG */}
        <button
          onClick={handleCopyForCustomer}
          style={{
            background: copied ? "#16a34a" : "#0284c7",
            color: "#ffffff",
            border: "none",
            padding: "8px 16px",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 700,
            fontSize: 13,
            display: "flex",
            alignItems: "center",
            gap: 6,
            boxShadow: "0 2px 6px rgba(2, 132, 199, 0.25)",
            transition: "all 0.2s ease",
          }}
        >
          {copied ? "✓ Đã copy nội dung!" : "📋 Copy hướng dẫn cho khách"}
        </button>
      </div>

      {/* 🏷️ Header Mã Lỗi */}
      <div
        style={{
          background: "linear-gradient(135deg, #8b594d 0%, #1b2e42 100%)",
          borderRadius: 16,
          padding: "24px",
          color: "#fff",
          marginBottom: 20,
          textAlign: "left",
        }}
      >
        {error.code && (
          <span
            style={{
              background: "rgba(255,255,255,0.2)",
              padding: "4px 12px",
              borderRadius: 20,
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            {error.code}
          </span>
        )}
        <h1 style={{ fontSize: 22, margin: "10px 0 0", textAlign: "left" }}>
          {error.title}
        </h1>
      </div>

      {/* 📌 Mô Tả Lỗi */}
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: 20,
          marginBottom: 16,
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          textAlign: "left",
        }}
      >
        <p
          style={{
            color: "#1a6fc4",
            fontWeight: 700,
            margin: "0 0 8px",
            textAlign: "left",
          }}
        >
          📌 MÔ TẢ LỖI
        </p>
        <p
          style={{
            margin: 0,
            color: "#555",
            lineHeight: 1.6,
            textAlign: "left",
          }}
        >
          {error.description}
        </p>
      </div>

      {/* 📋 Các Bước Xử Lý */}
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: 20,
          marginBottom: 16,
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          textAlign: "left",
        }}
      >
        <p
          style={{
            color: "#1a6fc4",
            fontWeight: 700,
            margin: "0 0 16px",
            textAlign: "left",
          }}
        >
          📋 CÁC BƯỚC XỬ LÝ
        </p>

        {error.steps.map((step: any, idx: number) => {
          const stepText = typeof step === "string" ? step : step.text;

          let stepImagesList: string[] = [];
          if (typeof step === "object") {
            if (step.image) stepImagesList.push(step.image);
            if (step.images && Array.isArray(step.images))
              stepImagesList.push(...step.images);
          }

          return (
            <div
              key={idx}
              style={{
                marginBottom: 16,
                borderBottom:
                  idx < error.steps.length - 1 ? "1px solid #f0f0f0" : "none",
                paddingBottom: 12,
                textAlign: "left",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    background: "#1a6fc4",
                    color: "#fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 12,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  {idx + 1}
                </div>

                <div style={{ flex: 1, textAlign: "left" }}>
                  <p
                    style={{
                      margin: 0,
                      color: "#333",
                      lineHeight: 1.5,
                      fontWeight: 500,
                      textAlign: "left",
                    }}
                  >
                    {stepText}
                  </p>

                  {stepImagesList.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 10,
                        marginTop: 10,
                        justifyContent: "flex-start",
                      }}
                    >
                      {stepImagesList.map((imgUrl, imgIdx) => (
                        <div key={imgIdx} style={{ textAlign: "left" }}>
                          <div
                            onClick={() => setSelectedImg(imgUrl)}
                            style={{
                              width: 110,
                              height: 110,
                              borderRadius: 8,
                              overflow: "hidden",
                              border: "2px solid #e1e8ed",
                              cursor: "pointer",
                              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                            }}
                          >
                            <img
                              src={imgUrl}
                              alt={`Ảnh bước ${idx + 1}`}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <span
                            style={{
                              fontSize: 11,
                              color: "#888",
                              display: "block",
                              marginTop: 2,
                              textAlign: "left",
                            }}
                          >
                            🔍 Phóng to
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 🖼️ Danh Sách Ảnh Minh Hoạ */}
      {error.images && error.images.length > 0 && (
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: 20,
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            textAlign: "left",
          }}
        >
          <p
            style={{
              color: "#1a6fc4",
              fontWeight: 700,
              margin: "0 0 16px",
              textAlign: "left",
            }}
          >
            🖼️ HÌNH ẢNH MINH HOẠ
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "flex-start",
            }}
          >
            {error.images.map((imgUrl: string, idx: number) => (
              <div
                key={idx}
                onClick={() => setSelectedImg(imgUrl)}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "2px solid #eee",
                  cursor: "pointer",
                }}
              >
                <img
                  src={imgUrl}
                  alt={`Ảnh minh hoạ ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🎬 Video Hướng Dẫn */}
      {error.videoUrls && error.videoUrls.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "flex-start",
            marginTop: 16,
          }}
        >
          {error.videoUrls.map((video, idx) => {
            const isVertical = video.type === "vertical";

            const getYouTubeEmbedUrl = (url: string) => {
              if (!url) return "";
              let videoId = "";

              if (url.includes("youtu.be/")) {
                videoId = url.split("youtu.be/")[1]?.split("?")[0];
              } else if (url.includes("youtube.com/shorts/")) {
                videoId = url.split("youtube.com/shorts/")[1]?.split("?")[0];
              } else if (url.includes("youtube.com/watch?v=")) {
                videoId = url.split("watch?v=")[1]?.split("&")[0];
              } else if (url.includes("youtube.com/embed/")) {
                return url;
              }

              return videoId
                ? `https://www.youtube-nocookie.com/embed/${videoId}`
                : url;
            };

            const embedUrl = getYouTubeEmbedUrl(video.url);

            return (
              <div
                key={idx}
                style={{
                  width: isVertical ? "260px" : "100%",
                  maxWidth: "100%",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  background: "#000",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    paddingTop: isVertical ? "177.78%" : "56.25%",
                    height: 0,
                  }}
                >
                  <iframe
                    src={embedUrl}
                    title={`Video hướng dẫn ${idx + 1}`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 🔍 MODAL PHÓNG TO ẢNH */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            boxSizing: "border-box",
            cursor: "zoom-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "85vh",
              display: "inline-block",
              cursor: "default",
            }}
          >
            <button
              onClick={() => setSelectedImg(null)}
              style={{
                position: "absolute",
                top: -14,
                right: -14,
                width: 34,
                height: 34,
                borderRadius: "50%",
                backgroundColor: "#ef4444",
                color: "#ffffff",
                border: "2px solid #ffffff",
                fontSize: 16,
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                zIndex: 10000,
                transition: "transform 0.15s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              title="Đóng (Bấm ra ngoài hoặc phím ESC để tắt)"
            >
              ✕
            </button>

            <img
              src={selectedImg}
              alt="Ảnh phóng to"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: 12,
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                display: "block",
              }}
            />
          </div>
        </div>
      )}

      {/* 🔍 NÚT KÍNH LÚP NỔI CỐ ĐỊNH Ở GÓC DƯỚI PHẢI MÀN HÌNH */}
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
        title="Tìm kiếm mã lỗi khác"
      >
        🔍
      </button>

      {/* 🚀 POPUP TÌM KIẾM NHANH KHI BẤM KÍNH LÚP */}
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 700, fontSize: 16, color: "#0f172a" }}>
                🔍 Tra cứu nhanh mã lỗi khác
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

            {/* Ô nhập tìm kiếm */}
            <input
              type="text"
              autoFocus
              placeholder="Gõ mã lỗi hoặc tên sự cố (VD: E10, cap nuoc...)"
              value={quickSearchTerm}
              onChange={(e) => setQuickSearchTerm(e.target.value)}
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

            {/* Danh sách kết quả gợi ý */}
            <div style={{ maxHeight: "300px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
              {filteredQuickErrors.length > 0 ? (
                filteredQuickErrors.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setShowQuickSearch(false);
                      setQuickSearchTerm("");
                      // Sử dụng replace: true để đè trang hiện tại, bấm nút Back sẽ quay về danh sách 1 chạm
                      navigate(`/error-detail/${item.id}`, { replace: true });
                    }}
                    style={{
                      padding: "10px 14px",
                      borderRadius: 8,
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.background = "#e0f2fe")}
                    onMouseOut={(e) => (e.currentTarget.style.background = "#f8fafc")}
                  >
                    <div>
                      <span
                        style={{
                          fontWeight: 700,
                          color: "#0284c7",
                          marginRight: 8,
                          fontSize: 13,
                        }}
                      >
                        {item.code || "LỖI"}
                      </span>
                      <span style={{ fontSize: 14, color: "#334155" }}>
                        {item.title}
                      </span>
                    </div>
                    <span style={{ fontSize: 12, color: "#0284c7", fontWeight: 600 }}>Xem →</span>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: "center", color: "#94a3b8", fontSize: 13, margin: "12px 0" }}>
                  {quickSearchTerm ? "Không tìm thấy mã lỗi khớp!" : "Gõ mã lỗi hoặc triệu chứng để tìm nhanh..."}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ErrorDetailPage;