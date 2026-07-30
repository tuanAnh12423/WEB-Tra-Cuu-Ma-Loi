import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { errors } from "../data/errors";

function ErrorDetailPage() {
  const navigate = useNavigate();
  const { errorId } = useParams();

  // State quản lý phóng to hình ảnh
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // State quản lý trạng thái Nút Copy (Hiện thông báo "Đã copy!")
  const [copied, setCopied] = useState(false);

  // Lắng nghe phím ESC để đóng ảnh
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImg(null);
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

    // Sao chép vào bộ nhớ tạm (Clipboard)
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500); // Ẩn thông báo sau 2.5 giây
    });
  };

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
      {/* 🔙 HÀNG NÚT QUAY LẠI & NÚT COPY NHANH */}
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
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "#e4e6eb",
            border: "none",
            padding: "8px 16px",
            borderRadius: 8,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            fontWeight: 600,
            color: "#333",
          }}
        >
          ← Quay lại
        </button>

        {/* 📋 NÚT COPY HƯỚNG DẪN CHO KHÁCH HÀNG */}
        <button
          onClick={handleCopyForCustomer}
          style={{
            background: copied ? "#16a34a" : "#0284c7", // Đổi sang màu xanh lá khi đã Copy
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

      {/* 📋 Các Bước Xử Lý (Kèm ảnh theo từng bước) */}
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

      {/* 🖼️ Danh Sách Ảnh Chung / Sơ Đồ Mạch */}
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

      {/* 🎬 KHỐI VIDEO HƯỚNG DẪN */}
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
    </div>
  );
}

export default ErrorDetailPage;
