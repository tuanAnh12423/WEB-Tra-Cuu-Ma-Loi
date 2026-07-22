import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categories, errors } from "../data/errors";

function ErrorListPage() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [search, setSearch] = useState("");

  const currentCat = categories.find((c) => c.id === categoryId);
  const categoryName = currentCat ? currentCat.name : "Thiết bị";

  const filteredErrors = errors
    .filter((e) => e.category === categoryId)
    .filter((e) => e.code.toLowerCase().includes(search.toLowerCase()) || e.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <button onClick={() => navigate("/")} style={{ background: "#e4e6eb", border: "none", padding: "8px 16px", borderRadius: 8, cursor: "pointer", marginBottom: 16 }}>
        ← Quay lại
      </button>

      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>{categoryName}</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Tìm kiếm mã lỗi..."
        style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1px solid #ccc", marginBottom: 20, boxSizing: "border-box" }}
      />

      {filteredErrors.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <p style={{ color: "#666" }}>Không tìm thấy mã lỗi bạn cần?</p>
          <button onClick={() => navigate("/report")} style={{ padding: "10px 20px", background: "#1a6fc4", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}>
            ➕ Báo cáo mã lỗi mới
          </button>
        </div>
      ) : (
        filteredErrors.map((err) => (
          <div
            key={err.id}
            onClick={() => navigate(`/error-detail/${err.id}`)}
            style={{ background: "#fff", borderRadius: 12, padding: 20, marginBottom: 12, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
          >
            <span style={{ background: currentCat?.bgColor || "#e8f0fe", color: "#1a6fc4", fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 20 }}>
              {err.code}
            </span>
            <p style={{ margin: "8px 0 4px", fontSize: 16, fontWeight: 600 }}>{err.title}</p>
            <p style={{ margin: 0, fontSize: 13, color: "#888" }}>
              {err.steps ? err.steps.length : 0} bước xử lý
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default ErrorListPage;