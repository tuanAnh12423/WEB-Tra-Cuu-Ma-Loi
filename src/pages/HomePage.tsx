import { useNavigate } from "react-router-dom";
import { categories, errors } from "../data/errors";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        padding: "16px 12px", // 🟢 Giảm padding ngoài cho màn hình nhỏ
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: 900, width: "100%" }}>
        {/* Banner tiêu đề */}
        <div
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            borderRadius: 16,
            padding: "24px 16px",
            marginBottom: 16,
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(15, 23, 42, 0.12)",
          }}
        >
          <p style={{ color: "#94a3b8", fontSize: 13, margin: "0 0 6px 0" }}>
            Xin chào, Tổng đài viên 👋
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: 22,
              fontWeight: 800,
              margin: 0,
            }}
          >
            Hỗ Trợ Kỹ Thuật
          </h1>
        </div>

        {/* 📚 NÚT TRA CỨU SÁCH HDSD (PDF) */}
        <div
          onClick={() => navigate("/manuals")}
          style={{
            background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
            borderRadius: 16,
            padding: "16px 20px",
            color: "#ffffff",
            marginBottom: 20,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            boxShadow: "0 4px 14px rgba(2, 132, 199, 0.25)",
            transition: "all 0.2s ease",
          }}
        >
          <h2 style={{ margin: "0 0 4px 0", fontSize: 16, fontWeight: 700 }}>
            📚 TRA CỨU SÁCH HDSD (PDF)
          </h2>
          <p style={{ margin: 0, fontSize: 12, color: "#e0f2fe" }}>
            Xem nhanh tài liệu hướng dẫn sử dụng theo từng model máy
          </p>
        </div>

        {/* Tiêu đề mục */}
        <p
          style={{
            color: "#64748b",
            fontSize: 12,
            fontWeight: 700,
            marginBottom: 12,
          }}
        >
          CHỌN NGÀNH HÀNG TRA CỨU MÃ LỖI
        </p>

        {/* 📱 DANH SÁCH TỰ ĐỘNG CHUYỂN 2 CỘT TRÊN ĐIỆN THOẠI */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", // 🟢 Đổi minmax thành 150px để tự chia 2 cột đẹp trên di động
            gap: 12,
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/error-list/${cat.id}`)}
              style={{
                background: "#ffffff",
                borderRadius: 14,
                padding: "16px 12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                transition: "all 0.2s",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {cat.icon || "⚙️"}
              </div>
              <p
                style={{
                  margin: "0 0 2px 0",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#0f172a",
                }}
              >
                {cat.name}
              </p>
              <p style={{ margin: 0, fontSize: 12, color: "#64748b" }}>
                {errors.filter((e) => e.category === cat.id).length} mã lỗi
              </p>
            </div>
          ))}

          {/* 🔴 THẺ BÁO LỖI MỚI */}
          <div
            onClick={() => navigate("/report")}
            style={{
              background: "#f0f9ff",
              borderRadius: 14,
              padding: "16px 12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "2px dashed #0284c7",
              transition: "all 0.2s",
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 8 }}>➕</div>
            <p
              style={{
                margin: "0 0 2px 0",
                fontSize: 15,
                fontWeight: 700,
                color: "#0369a1",
              }}
            >
              Báo Lỗi Mới
            </p>
            <p style={{ margin: 0, fontSize: 12, color: "#0284c7" }}>
              Đóng góp mã lỗi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
