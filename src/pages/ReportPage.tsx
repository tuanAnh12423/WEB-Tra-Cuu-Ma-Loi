import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReportPage() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("may-giat");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hàm xử lý gửi dữ liệu về Google Sheet
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Đường link Google Apps Script đã được triển khai để nhận dữ liệu từ form và ghi vào Google Sheet
    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxGoh5aGjTavCQaz-qmbiRxHg-kHrw3yhz1F_izItE3iSUAB3bbsqwH1CCw2WAKZC0xig/exec";

    // Đóng gói dữ liệu dạng URLSearchParams để Google Apps Script nhận ổn định nhất
    const formData = new URLSearchParams();
    formData.append("category", category);
    formData.append("code", code);
    formData.append("description", description);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      alert(
        "🎉 Cảm ơn bạn! Báo cáo mã lỗi đã được gửi thành công về Google Sheet.",
      );

      // Reset form & quay lại trang chủ
      setCode("");
      setDescription("");
      navigate("/");
    } catch (error) {
      console.error("Lỗi gửi báo cáo:", error);
      alert("❌ Có lỗi xảy ra khi gửi dữ liệu, vui lòng thử lại sau!");
    } finally {
      setIsSubmitting(false);
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
      <div style={{ maxWidth: 640, width: "100%" }}>
        {/* Nút Quay lại */}
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            padding: "8px 16px",
            borderRadius: 10,
            cursor: "pointer",
            fontWeight: 600,
            color: "#475569",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 20,
            transition: "all 0.2s",
          }}
        >
          ← Quay lại
        </button>

        {/* Tiêu đề trang */}
        <div style={{ marginBottom: 24 }}>
          <h1
            style={{
              fontSize: 24,
              color: "#0f172a",
              fontWeight: 600,
              margin: "0 0 6px 0",
            }}
          >
            📢 Báo Cáo Mã Lỗi Mới
          </h1>
          <p style={{ margin: 0, fontSize: 14, color: "#64748b" }}>
            Bạn phát hiện mã lỗi mới hoặc hiện tượng lạ? Hãy chia sẻ để hỗ trợ
            chúng mình nhé!
          </p>
        </div>

        {/* Form chính */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#ffffff",
            padding: "28px 24px",
            borderRadius: 16,
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
          }}
        >
          {/* 1. Chọn Thiết bị / Danh mục */}
          <div style={{ marginBottom: 18 }}>
            <label
              style={{
                display: "block",
                marginBottom: 8,
                fontWeight: 700,
                fontSize: 14,
                color: "#334155",
              }}
            >
              Loại thiết bị <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 10,
                border: "1px solid #cbd5e1",
                outline: "none",
                fontSize: 14,
                color: "#0f172a",
                backgroundColor: "#fff",
                boxSizing: "border-box",
              }}
            >
              <option value="Máy Giặt">Máy Giặt</option>
              <option value="Điều Hòa / Máy Lạnh">Điều Hòa / Máy Lạnh</option>
              <option value="Tủ Lạnh">Tủ Lạnh</option>
              <option value="Máy Lọc Nước">Máy Lọc Nước</option>
              <option value="Thiết bị khác">Thiết bị khác</option>
            </select>
          </div>

          {/* 2. Tên Mã Lỗi / Hiện tượng */}
          <div style={{ marginBottom: 18 }}>
            <label
              style={{
                display: "block",
                marginBottom: 8,
                fontWeight: 700,
                fontSize: 14,
                color: "#334155",
              }}
            >
              Mã lỗi hoặc Hiện tượng <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Ví dụ: Lỗi E3, Đèn nhấp nháy 3 lần, Kêu to khi vắt..."
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 10,
                border: "1px solid #cbd5e1",
                outline: "none",
                fontSize: 14,
                color: "#f5f6f8", // Màu chữ nhập
                boxSizing: "border-box",
              }}
              required
            />
          </div>

          {/* 3. Mô tả chi tiết cách nhận biết / sửa chữa */}
          <div style={{ marginBottom: 18 }}>
            <label
              style={{
                display: "block",
                marginBottom: 8,
                fontWeight: 700,
                fontSize: 14,
                color: "#334155",
              }}
            >
              Mô tả chi tiết / Nguyên nhân & Cách xử lý{" "}
              <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Mô tả hoàn cảnh bị lỗi, nguyên nhân do đâu hoặc các bước bạn đã xử lý thành công..."
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 10,
                border: "1px solid #cbd5e1",
                outline: "none",
                fontSize: 14,
                color: "#fcfdfe",
                boxSizing: "border-box",
                fontFamily: "inherit",
                resize: "vertical",
              }}
              required
            />
          </div>

          {/* Nút Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: "100%",
              padding: "14px",
              background: isSubmitting ? "#94a3b8" : "#0284c7",
              color: "#ffffff",
              border: "none",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 15,
              cursor: isSubmitting ? "not-allowed" : "pointer",
              boxShadow: "0 4px 12px rgba(2, 132, 199, 0.25)",
              transition: "all 0.2s ease",
            }}
          >
            {isSubmitting ? "⏳ Đang gửi thông tin..." : "🚀 Gửi Báo Cáo"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReportPage;
