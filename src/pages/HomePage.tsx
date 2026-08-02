import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories, errors } from "../data/errors";

const TECHNICIAN_PASSWORD = "123456";

function HomePage() {
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
        backgroundColor: "#f8fafc",
        padding: "24px 16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: 960, width: "100%" }}>
        {/* 🌟 BANNER CHÀO MỪNG CHUNG */}
        <div
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            borderRadius: 16,
            padding: "24px 20px",
            marginBottom: 24,
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(15, 23, 42, 0.12)",
          }}
        >
          <p
            style={{
              color: "#94a3b8",
              fontSize: 13,
              margin: "0 0 6px 0",
              fontWeight: 500,
            }}
          >
            HỆ THỐNG TRA CỨU NỘI BỘ
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: 24,
              fontWeight: 800,
              margin: 0,
            }}
          >
            Hỗ Trợ Kỹ Thuật & Sửa Chữa
          </h1>
        </div>

        {/* PHÂN VÙNG 1: DÀNH CHO TỔNG ĐÀI VIÊN (HỖ TRỢ KỸ THUẬT) */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <span style={{ fontSize: 18 }}>🎧</span>
            <h2
              style={{
                fontSize: 15,
                fontWeight: 800,
                color: "#0369a1",
                margin: 0,
                letterSpacing: "0.02em",
              }}
            >
              DÀNH CHO TỔNG ĐÀI VIÊN (HỖ TRỢ KỸ THUẬT)
            </h2>
          </div>

          {/* Nút Tra Cứu HDSD */}
          <div
            onClick={() => navigate("/manuals")}
            style={{
              background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
              borderRadius: 14,
              padding: "16px 20px",
              color: "#ffffff",
              marginBottom: 16,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              boxShadow: "0 4px 14px rgba(2, 132, 199, 0.25)",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h3 style={{ margin: "0 0 4px 0", fontSize: 16, fontWeight: 700 }}>
              📚 TRA CỨU SÁCH HDSD (PDF)
            </h3>
            <p style={{ margin: 0, fontSize: 12, color: "#e0f2fe" }}>
              Xem nhanh tài liệu hướng dẫn sử dụng theo từng model máy
            </p>
          </div>

          {/* Danh sách các Ngành hàng Tra cứu Mã lỗi */}
          <p
            style={{
              color: "#64748b",
              fontSize: 12,
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            CHỌN NGÀNH HÀNG TRA CỨU MÃ LỖI CHO KHÁCH HÀNG
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
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
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "#0284c7";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 8 }}>
                  {cat.icon || "⚙️"}
                </div>
                <p
                  style={{
                    margin: "0 0 2px 0",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#0f172a",
                    textAlign: "center",
                  }}
                >
                  {cat.name}
                </p>
                <p style={{ margin: 0, fontSize: 12, color: "#64748b" }}>
                  {errors.filter((e) => e.category === cat.id).length} mã lỗi
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PHÂN VÙNG 2: DÀNH CHO KỸ THUẬT VIÊN (HỖ TRỢ SỬA CHỮA) */}
        <div style={{ paddingTop: 16, borderTop: "2px dashed #e2e8f0" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <span style={{ fontSize: 18 }}>🛠️</span>
            <h2
              style={{
                fontSize: 15,
                fontWeight: 800,
                color: "#b91c1c",
                margin: 0,
                letterSpacing: "0.02em",
              }}
            >
              DÀNH CHO KỸ THUẬT VIÊN (HỖ TRỢ SỬA CHỮA)
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 12,
            }}
          >
            {/* 🧮 1. THẺ BỘ CÔNG CỤ TÍNH TOÁN (MỚI CHUYỂN XUỐNG DÀNH CHO KTV) */}
            <div
              onClick={() => navigate("/tools")}
              style={{
                background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                borderRadius: 14,
                padding: "20px",
                color: "#ffffff",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(2, 132, 199, 0.25)",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div style={{ fontSize: 24, marginBottom: 6 }}>🧮</div>
              <h3
                style={{
                  margin: "0 0 4px 0",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                BỘ CÔNG CỤ TÍNH TOÁN
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  color: "#e0f2fe",
                  lineHeight: 1.4,
                }}
              >
                Tính trị số Sensor (NTC), mã màu điện trở, tra dây điện & CB
              </p>
            </div>

            {/* 🔒 2. THẺ HỖ TRỢ SỬA CHỮA CHUYÊN SÂU (BẢO MẬT MẬT KHẨU) */}
            <div
              onClick={() => setShowPassModal(true)}
              style={{
                background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                borderRadius: 14,
                padding: "20px",
                color: "#ffffff",
                cursor: "pointer",
                border: "1px solid #334155",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div style={{ fontSize: 24, marginBottom: 6 }}>🔒</div>
              <h3
                style={{
                  margin: "0 0 4px 0",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#f8fafc",
                }}
              >
                SỬA CHỮA CHUYÊN SÂU
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  color: "#94a3b8",
                  lineHeight: 1.4,
                }}
              >
                Tra cứu sơ đồ mạch, thông số đo đạc linh kiện, pan bệnh thực tế
              </p>
            </div>

            {/* ➕ 3. THẺ ĐÓNG GÓP PAN BỆNH MỚI */}
            <div
              onClick={() => navigate("/report")}
              style={{
                background: "#ffffff",
                borderRadius: 14,
                padding: "20px",
                cursor: "pointer",
                border: "2px dashed #0284c7",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#f0f9ff")
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#ffffff")}
            >
              <div style={{ fontSize: 24, marginBottom: 6, color: "#0284c7" }}>
                ➕
              </div>
              <h3
                style={{
                  margin: "0 0 4px 0",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#0369a1",
                }}
              >
                ĐÓNG GÓP PAN BỆNH MỚI
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  color: "#0284c7",
                  lineHeight: 1.4,
                }}
              >
                Kỹ thuật viên gửi mã lỗi hoặc kinh nghiệm sửa chữa mới
              </p>
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
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            boxSizing: "border-box",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 400,
              background: "#ffffff",
              borderRadius: 16,
              padding: "24px",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 8 }}>🔒</div>
            <h3
              style={{
                margin: "0 0 6px 0",
                fontSize: 18,
                fontWeight: 800,
                color: "#0f172a",
              }}
            >
              XÁC NHẬN KỸ THUẬT VIÊN
            </h3>
            <p style={{ margin: "0 0 16px 0", fontSize: 13, color: "#64748b" }}>
              Vui lòng nhập mật khẩu được cấp để truy cập dữ liệu sửa chữa.
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
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: passError ? "2px solid #ef4444" : "2px solid #cbd5e1",
                  outline: "none",
                  fontSize: 15,
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

              <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                <button
                  type="button"
                  onClick={() => {
                    setShowPassModal(false);
                    setPassError("");
                  }}
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: 8,
                    border: "1px solid #cbd5e1",
                    background: "#f1f5f9",
                    color: "#475569",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: 8,
                    border: "none",
                    background: "#0284c7",
                    color: "#ffffff",
                    fontWeight: 700,
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

export default HomePage;
