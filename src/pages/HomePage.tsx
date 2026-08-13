import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories, errors } from "../data/errors";

// 🔑 CẤU HÌNH MẬT KHẨU TRUY CẬP DÀNH CHO KỸ THUẬT VIÊN (Bạn có thể đổi mật khẩu tại đây)
const TECHNICIAN_PASSWORD = "123456";

export default function HomePage() {
  const navigate = useNavigate();

  const [showPassModal, setShowPassModal] = useState(false);
  const [inputPass, setInputPass] = useState("");
  const [passError, setPassError] = useState("");

  const handleVerifyPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPass === TECHNICIAN_PASSWORD) {
      setShowPassModal(false);
      setInputPass("");
      setPassError("");
      navigate("/repair-support");
    } else {
      setPassError("❌ Mật khẩu không đúng! Vui lòng thử lại.");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f1f5f9",
        padding: "32px 24px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 🖥️ CONTAINER CHÍNH DÀNH CHO MÁY TÍNH */}
      <div style={{ maxWidth: 1100, width: "100%" }}>
        {/* 🌟 BANNER TIÊU ĐỀ CHÍNH */}
        <div
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            borderRadius: 14,
            padding: "24px 32px",
            marginBottom: 24,
            textAlign: "center",
            boxShadow: "0 4px 16px rgba(15, 23, 42, 0.1)",
          }}
        >
          <span
            style={{
              color: "#38bdf8",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Hệ thống tra cứu nội bộ
          </span>
          <h1
            style={{
              color: "#ffffff",
              fontSize: 24,
              fontWeight: 800,
              margin: "6px 0 0 0",
              letterSpacing: "-0.01em",
            }}
          >
            Hỗ Trợ Kỹ Thuật & Sửa Chữa
          </h1>
        </div>

        {/* 🎧 PHÂN VÙNG 1: DÀNH CHO TỔNG ĐÀI VIÊN */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 12,
            }}
          >
            <span style={{ fontSize: 16 }}>🎧</span>
            <h2
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: "#0369a1",
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "0.03em",
              }}
            >
              Dành cho tổng đài viên (Hỗ trợ kỹ thuật)
            </h2>
          </div>

          {/* 📚 Sách HDSD (Nằm full chiều ngang trên cùng) */}
          <div
            onClick={() => navigate("/manuals")}
            style={{
              background: "#ffffff",
              borderRadius: 12,
              padding: "16px 24px",
              marginBottom: 16,
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #cbd5e1",
              boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
              transition: "all 0.15s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#0284c7";
              e.currentTarget.style.background = "#f0f9ff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#cbd5e1";
              e.currentTarget.style.background = "#ffffff";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 26 }}>📚</span>
              <div>
                <h3
                  style={{
                    margin: "0 0 3px 0",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#0f172a",
                  }}
                >
                  Tra cứu Sách HDSD (PDF)
                </h3>
                <p style={{ margin: 0, fontSize: 12, color: "#64748b" }}>
                  Xem nhanh tài liệu hướng dẫn sử dụng chi tiết theo từng model
                  máy
                </p>
              </div>
            </div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#0284c7",
                background: "#e0f2fe",
                padding: "6px 14px",
                borderRadius: 8,
              }}
            >
              Mở ngay →
            </span>
          </div>

          {/* 🧺 5 Ngành hàng dàn đều thành 1 hàng ngang trên Desktop */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 14,
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => navigate(`/error-list/${cat.id}`)}
                style={{
                  background: "#ffffff",
                  borderRadius: 12,
                  padding: "16px 12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                  transition: "all 0.15s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "#0284c7";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 12px rgba(2, 132, 199, 0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 4px rgba(0,0,0,0.02)";
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 8 }}>
                  {cat.icon || "⚙️"}
                </div>
                <p
                  style={{
                    margin: "0 0 4px 0",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  {cat.name}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    color: "#64748b",
                    fontWeight: 500,
                  }}
                >
                  {errors.filter((e) => e.category === cat.id).length} mã lỗi
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 🛠️ PHÂN VÙNG 2: DÀNH CHO KỸ THUẬT VIÊN */}
        <div style={{ paddingTop: 20, borderTop: "2px dashed #cbd5e1" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16 }}>🛠️</span>
              <h2
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#b91c1c",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                }}
              >
                Dành cho kỹ thuật viên (Sửa chữa)
              </h2>
            </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 12,
            }}
          >
            {/* Thẻ Hỗ Trợ Sửa Chữa Chuyên Sâu (Bấm vào hỏi Mật Khẩu) */}
            <div
              onClick={() => setShowPassModal(true)} // 🟢 MỞ DIALOG NHẬP MẬT KHẨU
              style={{
                background: "#0284c7",
                color: "#ffffff",
                border: "none",
                padding: "6px 14px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 12,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                boxShadow: "0 2px 6px rgba(2, 132, 199, 0.2)",
                transition: "background 0.15s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#0369a1")
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#0284c7")}
            >
              {/* Biểu tượng 🔒 góc thẻ */}
              <span
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  fontSize: 16,
                }}
              >
                🔒
              </span>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <span style={{ fontSize: 24 }}>🧰</span>
                <h3
                  style={{
                    margin: "0 0 3px 0",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#0f172a",
                  }}
                >
                  SỬA CHỮA CHUYÊN SÂU
                </h3>
                <p style={{ margin: 0, fontSize: 11, color: "#64748b" }}>
                  Sơ đồ mạch, thông số đo đạc linh kiện, pan bệnh thực tế
                </p>
              </div>
            </div>

            {/* Đóng góp pan bệnh mới */}
            <div
              onClick={() => navigate("/report")}
              style={{
                background: "#ffffff",
                borderRadius: 12,
                padding: "18px 20px",
                cursor: "pointer",
                border: "2px dashed #0284c7",
                display: "flex",
                alignItems: "center",
                gap: 14,
                transition: "all 0.15s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#f0f9ff")
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#ffffff")}
            >
              <div style={{ fontSize: 28, color: "#0284c7" }}>➕</div>
              <div>
                <h3
                  style={{
                    margin: "0 0 3px 0",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#0369a1",
                  }}
                >
                  ĐÓNG GÓP PAN BỆNH MỚI
                </h3>
                <p style={{ margin: 0, fontSize: 11, color: "#0284c7" }}>
                  Kỹ thuật viên gửi mã lỗi hoặc kinh nghiệm sửa chữa mới
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔒 MODAL XÁC NHẬN MẬT KHẨU */}
      {showPassModal && (
        <div
          onClick={() => {
            setShowPassModal(false);
            setPassError("");
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(3px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            boxSizing: "border-box",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
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
              Nhập mật khẩu để truy cập dữ liệu sửa chữa chuyên sâu.
            </p>

            <form onSubmit={handleVerifyPassword}>
              <input
                type="password"
                autoFocus
                placeholder="Nhập mật khẩu"
                value={inputPass}
                onChange={(e) => setInputPass(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: passError
                    ? "2px solid #ef4444"
                    : "1.5px solid #cbd5e1",
                  outline: "none",
                  fontSize: 14,
                  textAlign: "center",
                  boxSizing: "border-box",
                  marginBottom: 10,
                }}
              />

              {passError && (
                <p
                  style={{
                    margin: "0 0 12px 0",
                    fontSize: 12,
                    color: "#ef4444",
                    fontWeight: 600,
                  }}
                >
                  {passError}
                </p>
              )}

              <div style={{ display: "flex", gap: 10 }}>
                <button
                  type="button"
                  onClick={() => {
                    setShowPassModal(false);
                    setPassError("");
                  }}
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
                  Hủy
                </button>
                <button
                  type="submit"
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
      )}
    </div>
  );
}
