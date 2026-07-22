import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReportPage() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã gửi báo cáo mã lỗi mới!");
    navigate("/");
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <button onClick={() => navigate(-1)} style={{ background: "#e4e6eb", border: "none", padding: "8px 16px", borderRadius: 8, cursor: "pointer", marginBottom: 16 }}>
        ← Quay lại
      </button>

      <h2>Báo cáo hiện tượng & Mã lỗi mới</h2>
      <form onSubmit={handleSubmit} style={{ background: "#fff", padding: 24, borderRadius: 16 }}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 6, fontWeight: 600 }}>Tên mã lỗi / Hiện tượng</label>
          <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Ví dụ: Lỗi E3, Máy kêu to..." style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid #ccc", boxSizing: "border-box" }} required />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", marginBottom: 6, fontWeight: 600 }}>Mô tả chi tiết</label>
          <textarea rows={4} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Mô tả hiện tượng..." style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid #ccc", boxSizing: "border-box" }} required />
        </div>
        <button type="submit" style={{ width: "100%", padding: 14, background: "#1a6fc4", color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>
          🚀 Gửi thông tin
        </button>
      </form>
    </div>
  );
}

export default ReportPage;