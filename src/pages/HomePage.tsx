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
        padding: "32px 20px",
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
            borderRadius: 20,
            padding: "32px 24px",
            marginBottom: 20,
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(15, 23, 42, 0.12)",
          }}
        >
          <p style={{ color: "#94a3b8", fontSize: 14, margin: "0 0 8px 0" }}>
            Xin chào, Tổng đài viên 👋
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: 28,
              fontWeight: 800,
              margin: 0,
            }}
          >
            Hỗ Trợ Kỹ Thuật
          </h1>
        </div>

        {/* 📚 NÚT CHUYỂN SANG TRANG MANUALS (THÊM MỚI - RẤT NỔI BẬT) */}
        <div
          onClick={() => navigate("/manuals")}
          style={{
            background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
            borderRadius: 16,
            padding: "20px 24px",
            color: "#ffffff",
            marginBottom: 28,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",   // 👈 Xếp các dòng chữ thành hàng dọc
            alignItems: "center",       // 👈 Căn giữa theo chiều ngang
            justifyContent: "center",  // 👈 Căn giữa theo chiều dọc
            textAlign: "center",        // 👈 Căn giữa chữ
            boxShadow: "0 4px 14px rgba(2, 132, 199, 0.25)",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(2, 132, 199, 0.35)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 14px rgba(2, 132, 199, 0.25)";
          }}
        >
          <h2 style={{ margin: "0 0 6px 0", fontSize: 18, fontWeight: 700 }}>
            📚 TRA CỨU SÁCH HDSD (PDF)
          </h2>
          <p style={{ margin: 0, fontSize: 13, color: "#e0f2fe" }}>
            Xem nhanh tài liệu hướng dẫn sử dụng theo từng model máy
          </p>
        </div>
        {/* Tiêu đề mục */}
        <p
          style={{
            color: "#64748b",
            fontSize: 13,
            fontWeight: 700,
            marginBottom: 16,
            textAlign: "left",
          }}
        >
          CHỌN NGÀNH HÀNG TRA CỨU MÃ LỖI
        </p>

        {/* Danh sách ngành hàng + NÚT BÁO CÁO MỚI */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          {/* Các ngành hàng hiện tại */}
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/error-list/${cat.id}`)}
              style={{
                background: "#ffffff",
                borderRadius: 16,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "#93c5fd";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>
                {cat.icon || "⚙️"}
              </div>
              <p
                style={{
                  margin: "0 0 4px 0",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#0f172a",
                }}
              >
                {cat.name}
              </p>
              <p style={{ margin: 0, fontSize: 13, color: "#64748b" }}>
                {errors.filter((e) => e.category === cat.id).length} mã lỗi
              </p>
            </div>
          ))}

          {/* 🔴 THẺ NÚT BÁO CÁO MÃ LỖI MỚI */}
          <div
            onClick={() => navigate("/report")}
            style={{
              background: "#f0f9ff",
              borderRadius: 16,
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "2px dashed #0284c7",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.background = "#e0f2fe";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "#f0f9ff";
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 12 }}>➕</div>
            <p
              style={{
                margin: "0 0 4px 0",
                fontSize: 16,
                fontWeight: 700,
                color: "#0369a1",
              }}
            >
              Báo Lỗi Mới
            </p>
            <p style={{ margin: 0, fontSize: 13, color: "#0284c7" }}>
              Đóng góp mã lỗi mới
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;