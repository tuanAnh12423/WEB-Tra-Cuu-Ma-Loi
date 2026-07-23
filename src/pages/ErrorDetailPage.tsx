import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react"; // 1. Thêm useState
import { errors } from "../data/errors";

function ErrorDetailPage() {
  const navigate = useNavigate();
  const { errorId } = useParams();

  // 2. State quản lý ảnh đang được phóng to (null nếu không có)
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

      <div style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)", borderRadius: 16, padding: "24px", color: "#fff", marginBottom: 20 }}>
        <span style={{ background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20, fontWeight: 700 }}>{error.code}</span>
        <h1 style={{ fontSize: 22, margin: "10px 0 0" }}>{error.title}</h1>
      </div>

      <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
        <p style={{ color: "#1a6fc4", fontWeight: 700, margin: "0 0 8px" }}>📌 MÔ TẢ LỖI</p>
        <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>{error.description}</p>
      </div>

      <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
        <p style={{ color: "#1a6fc4", fontWeight: 700, margin: "0 0 16px" }}>📋 CÁC BƯỚC XỬ LÝ</p>
        {error.steps.map((step: any, idx: number) => {
          const stepText = typeof step === "string" ? step : step.text;
          return (
            <div key={idx} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 24, height: 24, background: "#1a6fc4", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, flexShrink: 0, marginTop: 2 }}>
                {idx + 1}
              </div>
              <p style={{ margin: 0, color: "#333", lineHeight: 1.5 }}>{stepText}</p>
            </div>
          );
        })}
      </div>

      {/* 🖼️ KHỐI HIỂN THỊ HÌNH ẢNH (Dạng Thumbnail nhỏ gọn) */}
      {error.images && error.images.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
          <p style={{ color: "#1a6fc4", fontWeight: 700, margin: "0 0 16px" }}>🖼️ HÌNH ẢNH / SƠ ĐỒ (Nhấn để xem to)</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {error.images.map((imgUrl: string, idx: number) => (
              <div
                key={idx}
                onClick={() => setSelectedImg(imgUrl)} // 3. Khi nhấn, set ảnh này làm ảnh phóng to
                style={{
                  width: 100, // Ảnh thumbnail nhỏ (100px)
                  height: 100,
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "2px solid #eee",
                  cursor: 'pointer', // Hiện bàn tay khi rê chuột
                  transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img
                  src={imgUrl}
                  alt={`Thumnail ${error.code}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} // Cắt ảnh vuông đẹp
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🔍 LỚP PHỦ (MODAL) ĐỂ PHÓNG TO ẢNH */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)} // 4. Nhấn ra ngoài ảnh để đóng
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)', // Nền đen mờ
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000, // Luôn nằm trên cùng
            cursor: 'zoom-out', // Hiện icon thu nhỏ
            padding: 20
          }}
        >
          <img
            src={selectedImg}
            alt="Phóng to"
            style={{
              maxWidth: '95%',
              maxHeight: '95%',
              borderRadius: 8,
              boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
              cursor: 'default' // Không hiện icon gì khi rê vào ảnh
            }}
            onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện đóng khi nhấn vào chính tấm ảnh
          />
          {/* Nút đóng góc trên */}
          <button style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', color: '#fff', fontSize: 30, cursor: 'pointer' }}>×</button>
        </div>
      )}
    </div>
  );
}

export default ErrorDetailPage;