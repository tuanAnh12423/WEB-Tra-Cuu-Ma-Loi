import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { errors } from "../data/errors";

function ErrorDetailPage() {
  const navigate = useNavigate();
  const { errorId } = useParams();

  // State phóng to ảnh
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const error = errors.find((e) => e.id === errorId);

  if (!error) return <div style={{ padding: 24, textAlign: 'center' }}>Không tìm thấy mã lỗi!</div>;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24, position: 'relative' }}>
      <button
        onClick={() => navigate(-1)}
        style={{ background: "#e4e6eb", border: "none", padding: "8px 16px", borderRadius: 8, cursor: "pointer", marginBottom: 16, display: 'flex', alignItems: 'center', gap: 4 }}
      >
        ← Quay lại
      </button>

      {/* Header mã lỗi */}
      <div style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)", borderRadius: 16, padding: "24px", color: "#fff", marginBottom: 20 }}>
        <span style={{ background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20, fontWeight: 700 }}>{error.code}</span>
        <h1 style={{ fontSize: 22, margin: "10px 0 0" }}>{error.title}</h1>
      </div>

      {/* Mô tả lỗi */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
        <p style={{ color: "#1a6fc4", fontWeight: 700, margin: "0 0 8px" }}>📌 MÔ TẢ LỖI</p>
        <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>{error.description}</p>
      </div>

      {/* 📋 PHẦN 1: CÁC BƯỚC XỬ LÝ (HIỂN THỊ ẢNH THEO TỪNG BƯỚC) */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: "0 2px 4px rgba(0,0,0,0.05),", textAlign: 'left' }}>
        <p style={{ color: "#1a6fc4", fontWeight: 700, margin: "0 0 16px" }}>📋 CÁC BƯỚC XỬ LÝ</p>

        {error.steps.map((step: any, idx: number) => {
          const stepText = typeof step === "string" ? step : step.text;

          // Lấy danh sách ảnh của bước (hỗ trợ cả 1 ảnh hoặc mảng ảnh)
          let stepImagesList: string[] = [];
          if (typeof step === "object") {
            if (step.image) stepImagesList.push(step.image);
            if (step.images && Array.isArray(step.images)) stepImagesList.push(...step.images);
          }

          return (
            <div key={idx} style={{ marginBottom: 16, borderBottom: idx < error.steps.length - 1 ? "1px solid #f0f0f0" : "none", paddingBottom: 12 }}>
              <div style={{ display: "flex", gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 24, height: 24, background: "#1a6fc4", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, flexShrink: 0, marginTop: 2 }}>
                  {idx + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, color: "#333", lineHeight: 1.5, fontWeight: 500 }}>{stepText}</p>

                  {/* 🖼️ Ảnh của bước này */}
                  {stepImagesList.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 }}>
                      {stepImagesList.map((imgUrl, imgIdx) => (
                        <div key={imgIdx}>
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
                          <span style={{ fontSize: 11, color: "#888", display: "block", marginTop: 2 }}>🔍 Phóng to</span>
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

      {/* 🖼️ PHẦN 2: BẢNG HÌNH ẢNH CHUNG / SƠ ĐỒ MẠCH */}
      {error.images && error.images.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
          <p style={{ color: "#1a6fc4", fontWeight: 700, margin: "0 0 16px" }}>🖼️ HÌNH ẢNH CHUNG & SƠ ĐỒ MẠCH</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
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

      {/* 🔍 MODAL BẬT LÊN ĐỂ PHÓNG TO ẢNH */}
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