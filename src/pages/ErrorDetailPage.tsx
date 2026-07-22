import { useNavigate, useParams } from "react-router-dom";
import { errors } from "../data/errors";

function ErrorDetailPage() {
  const navigate = useNavigate();
  const { errorId } = useParams();

  const error = errors.find((e) => e.id === errorId);

  if (!error) return <div style={{ padding: 24 }}>Không tìm thấy mã lỗi!</div>;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <button onClick={() => navigate(-1)} style={{ background: "#e4e6eb", border: "none", padding: "8px 16px", borderRadius: 8, cursor: "pointer", marginBottom: 16 }}>
        ← Quay lại
      </button>

      <div style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)", borderRadius: 16, padding: "24px", color: "#fff", marginBottom: 20 }}>
        <span style={{ background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20, fontWeight: 700 }}>{error.code}</span>
        <h1 style={{ fontSize: 22, margin: "10px 0 0" }}>{error.title}</h1>
      </div>

      <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginBottom: 16 }}>
        <p style={{ color: "#1a6fc4", fontWeight: 700, margin: "0 0 8px" }}>📌 MÔ TẢ LỖI</p>
        <p style={{ margin: 0, color: "#555" }}>{error.description}</p>
      </div>

      <div style={{ background: "#fff", borderRadius: 12, padding: 20 }}>
        <p style={{ color: "#1a6fc4", fontWeight: 700, margin: "0 0 16px" }}>📋 CÁC BƯỚC XỬ LÝ</p>
        {error.steps.map((step: any, idx: number) => {
          const stepText = typeof step === "string" ? step : step.text;
          return (
            <div key={idx} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 24, height: 24, background: "#1a6fc4", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12 }}>
                {idx + 1}
              </div>
              <p style={{ margin: 0, color: "#333", lineHeight: 1.5 }}>{stepText}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ErrorDetailPage;