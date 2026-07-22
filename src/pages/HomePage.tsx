import { useNavigate } from "react-router-dom";
import { categories, errors } from "../data/errors";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <div style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)", borderRadius: 16, padding: "32px 24px", marginBottom: 24 }}>
        <p style={{ color: "#8899aa", fontSize: 14, margin: "0 0 8px" }}>Xin chào, Tổng đài viên 👋</p>
        <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 700, margin: 0 }}>Hỗ trợ kỹ thuật</h1>
      </div>

      <p style={{ color: "#888", fontSize: 13, marginBottom: 12, fontWeight: 600 }}>CHỌN NGÀNH HÀNG</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => navigate(`/error-list/${cat.id}`)}
            style={{
              width: "calc(50% - 8px)",
              background: "#fff",
              borderRadius: 16,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              boxSizing: "border-box"
            }}
          >
            <div style={{ width: 64, height: 64, borderRadius: 16, background: cat.bgColor || "#e8f0fe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>
              {cat.icon}
            </div>
            <p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#1a1a2e" }}>{cat.name}</p>
            <p style={{ margin: 0, fontSize: 13, color: "#888" }}>
              {errors.filter((e) => e.category === cat.id).length} mã lỗi
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;