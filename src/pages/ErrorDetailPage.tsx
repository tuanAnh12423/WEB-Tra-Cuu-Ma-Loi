import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { errors } from "../data/errors";

function ErrorDetailPage() {
  const navigate = useNavigate();
  const { errorId } = useParams();

  // State quản lý phóng to hình ảnh khi nhấp vào
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const error = errors.find((e) => e.id === errorId);

  if (!error) return <div style={{ padding: 24, textAlign: 'left' }}>Không tìm thấy mã lỗi!</div>;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24, position: 'relative', textAlign: 'left' }}>
      {/* 🔙 Nút quay lại */}
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "#e4e6eb",
          border: "none",
          padding: "8px 16px",
          borderRadius: 8,
          cursor: "pointer",
          marginBottom: 16,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          fontWeight: 600,
          color: "#333"
        }}
      >
        ← Quay lại
      </button>

      {/* 🏷️ Header Mã Lỗi */}
      <div style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)", borderRadius: 16, padding: "24px", color: "#fff", marginBottom: 20, textAlign: 'left' }}>
        <span style={{ background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20, fontWeight: 700, display: 'inline-block' }}>
          {error.code}
        </span>
        <h1 style={{ fontSize: 22, margin: "10px 0 0", textAlign: 'left' }}>{error.title}</h1>
      </div>

      {/* 📌 Mô Tả Lỗi */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: "0 2px 4px rgba(0,0,0,0.05)", textAlign: 'left' }}>
        <p style={{ color: "#1a6fc4", fontWeight: 700, margin: "0 0 8px", textAlign: 'left' }}>📌 MÔ TẢ LỖI</p>
        <p style={{ margin: 0, color: "#555", lineHeight: 1.6, textAlign: 'left' }}>{error.description}</p>
      </div>

      {/* 📋 Các Bước Xử Lý (Kèm ảnh theo từng bước) */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: "0 2px 4px rgba(0,0,0,0.05)", textAlign: 'left' }}>
        <p style={{ color: "#1a6fc4", fontWeight: 700, margin: "0 0 16px", textAlign: 'left' }}>📋 CÁC BƯỚC XỬ LÝ</p>

        {error.steps.map((step: any, idx: number) => {
          const stepText = typeof step === "string" ? step : step.text;

          let stepImagesList: string[] = [];
          if (typeof step === "object") {
            if (step.image) stepImagesList.push(step.image);
            if (step.images && Array.isArray(step.images)) stepImagesList.push(...step.images);
          }

          return (
            <div key={idx} style={{ marginBottom: 16, borderBottom: idx < error.steps.length - 1 ? "1px solid #f0f0f0" : "none", paddingBottom: 12, textAlign: 'left' }}>
              <div style={{ display: "flex", gap: 12, alignItems: 'flex-start', justifyContent: 'flex-start', textAlign: 'left' }}>
                <div style={{ width: 24, height: 24, background: "#1a6fc4", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, flexShrink: 0, marginTop: 2 }}>
                  {idx + 1}
                </div>

                <div style={{ flex: 1, textAlign: 'left' }}>
                  <p style={{ margin: 0, color: "#333", lineHeight: 1.5, fontWeight: 500, textAlign: 'left' }}>{stepText}</p>

                  {stepImagesList.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10, justifyContent: 'flex-start' }}>
                      {stepImagesList.map((imgUrl, imgIdx) => (
                        <div key={imgIdx} style={{ textAlign: 'left' }}>
                          <div
                            onClick={() => setSelectedImg(imgUrl)}
                            style={{
                              width: 110,
                              height: 110,
                              borderRadius: 8,
                              overflow: "hidden",
                              border: "2px solid #e1e8ed",
                              cursor: 'pointer',
                              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                            }}
                          >
                            <img
                              src={imgUrl}
                              alt={`Ảnh bước ${idx + 1}`}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          </div>
                          <span style={{ fontSize: 11, color: "#888", display: "block", marginTop: 2, textAlign: 'left' }}>🔍 Phóng to</span>
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

      {/* 🎬 KHỐI VIDEO HƯỚNG DẪN MỚI BỔ SUNG */}
      {error.videoUrls && error.videoUrls.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: "0 2px 4px rgba(0,0,0,0.05)", textAlign: 'left' }}>
          <p style={{ color: "#1a6fc4", fontWeight: 700, margin: "0 0 16px", textAlign: 'left' }}>🎬 VIDEO HƯỚNG DẪN SỬA CHỮA</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: 'flex-start' }}>
            {error.videoUrls.map((video, idx) => {
              // Tự động tối ưu tỉ lệ khung hình (Khung dọc 9:16 cho Shorts/TikTok, Khung ngang 16:9 cho YouTube thường)
              const isVertical = video.type === "vertical";

              // Xử lý link nhúng (embed)
              let embedUrl = video.url;
              if (video.url.includes("youtube.com/watch?v=")) {
                embedUrl = video.url.replace("watch?v=", "embed/");
              } else if (video.url.includes("youtu.be/")) {
                embedUrl = video.url.replace("youtu.be/", "youtube.com/embed/");
              } else if (video.url.includes("youtube.com/shorts/")) {
                embedUrl = video.url.replace("shorts/", "embed/");
              }

              return (
                <div
                  key={idx}
                  style={{
                    width: isVertical ? "260px" : "100%",
                    maxWidth: "100%",
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    background: "#000"
                  }}
                >
                  <div style={{
                    position: "relative",
                    paddingTop: isVertical ? "177.78%" : "56.25%", // Tỉ lệ 9:16 (dọc) hoặc 16:9 (ngang)
                    height: 0
                  }}>
                    <iframe
                      src={embedUrl}
                      title={`Video hướng dẫn ${idx + 1}`}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none"
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 🖼️ Danh Sách Ảnh Chung / Sơ Đồ Mạch */}
      {error.images && error.images.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 2px 4px rgba(0,0,0,0.05)", textAlign: 'left' }}>
          <p style={{ color: "#1a6fc4", fontWeight: 700, margin: "0 0 16px", textAlign: 'left' }}>🖼️ HÌNH ẢNH CHUNG & SƠ ĐỒ MẠCH</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: 'flex-start' }}>
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
                  cursor: 'pointer'
                }}
              >
                <img
                  src={imgUrl}
                  alt={`Sơ đồ ${idx + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🔍 Modal Phóng To Ảnh */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'zoom-out',
            padding: 20
          }}
        >
          <img
            src={selectedImg}
            alt="Ảnh phóng to"
            style={{
              maxWidth: '95%',
              maxHeight: '95%',
              borderRadius: 8,
              boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setSelectedImg(null)}
            style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', color: '#fff', fontSize: 32, cursor: 'pointer' }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default ErrorDetailPage;