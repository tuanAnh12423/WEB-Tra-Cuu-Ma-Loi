import { useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";

interface Props {
  onClose: () => void;
  defaultKeyword?: string;
  onSaved: (keywords: string[], answer: string, imgUrl?: string, vidUrl?: string) => void;
}

export default function TeachModal({ onClose, defaultKeyword = "", onSaved }: Props) {
  const { saveKnowledge } = useFirestore();
  const [keywords, setKeywords] = useState(defaultKeyword);
  const [answer, setAnswer] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    const success = await saveKnowledge(keywords, answer, imageUrl, videoUrl);
    if (success) {
      const keywordList = keywords.split(",").map((k) => k.trim()).filter(Boolean);
      onSaved(keywordList, answer, imageUrl, videoUrl);
      onClose();
    }
    setIsSaving(false);
  };

  return (
    <div style={{
      backgroundColor: "#ffffff",
      padding: "12px 14px",
      borderBottom: "2px solid #10b981",
      fontSize: 12,
      flexShrink: 0,
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, paddingBottom: 6, borderBottom: "1px dashed #cbd5e1" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 16 }}>☁️</span>
          <span style={{ fontSize: 12, fontWeight: 800, color: "#065f46" }}>
            DẠY BOT & ĐỒNG BỘ LÊN CLOUD CẢ TEAM
          </span>
        </div>
        <button type="button" onClick={onClose} style={{ border: "1px solid #fecaca", background: "#fef2f2", color: "#dc2626", cursor: "pointer", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6 }}>
          ✕ Đóng
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {/* Từ khóa */}
        <div>
          <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#334155", marginBottom: 3 }}>
            1. Từ khóa tìm kiếm <span style={{ color: "#ef4444" }}>*</span> (cách nhau bằng dấu phẩy):
          </label>
          <input
            type="text"
            placeholder="VD: kẹt cửa, không mở được cửa..."
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            style={{ width: "100%", boxSizing: "border-box", padding: "8px 10px", borderRadius: 8, border: "1.5px solid #cbd5e1", backgroundColor: "#f8fafc", color: "#0f172a", fontSize: 12, outline: "none" }}
            onFocus={(e) => { e.target.style.borderColor = "#10b981"; e.target.style.backgroundColor = "#ffffff"; }}
            onBlur={(e) => { e.target.style.borderColor = "#cbd5e1"; e.target.style.backgroundColor = "#f8fafc"; }}
          />
        </div>

        {/* Câu trả lời */}
        <div>
          <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#334155", marginBottom: 3 }}>
            2. Nội dung câu trả lời <span style={{ color: "#ef4444" }}>*</span>:
          </label>
          <textarea
            rows={3}
            placeholder="Nhập chi tiết nguyên nhân và các bước khắc phục..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            style={{ width: "100%", boxSizing: "border-box", padding: "8px 10px", borderRadius: 8, border: "1.5px solid #cbd5e1", backgroundColor: "#f8fafc", color: "#0f172a", fontSize: 12, outline: "none", resize: "vertical" }}
            onFocus={(e) => { e.target.style.borderColor = "#10b981"; e.target.style.backgroundColor = "#ffffff"; }}
            onBlur={(e) => { e.target.style.borderColor = "#cbd5e1"; e.target.style.backgroundColor = "#f8fafc"; }}
          />
        </div>

        {/* Ảnh + Video */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <div>
            <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "#475569", marginBottom: 2 }}>
              🖼️ Link ảnh minh họa (nếu có):
            </label>
            <input
              type="text"
              placeholder="https://...jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              style={{ width: "100%", boxSizing: "border-box", padding: "6px 8px", borderRadius: 6, border: "1px solid #cbd5e1", backgroundColor: "#f8fafc", color: "#0f172a", fontSize: 11, outline: "none" }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "#475569", marginBottom: 2 }}>
              🎬 Link video (YouTube):
            </label>
            <input
              type="text"
              placeholder="https://youtube.com/..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              style={{ width: "100%", boxSizing: "border-box", padding: "6px 8px", borderRadius: 6, border: "1px solid #cbd5e1", backgroundColor: "#f8fafc", color: "#0f172a", fontSize: 11, outline: "none" }}
            />
          </div>
        </div>

        {/* Nút lưu */}
        <button
          type="button"
          disabled={isSaving}
          onClick={handleSave}
          style={{
            marginTop: 4,
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            color: "#ffffff",
            border: "none",
            padding: "10px 16px",
            borderRadius: 8,
            cursor: isSaving ? "not-allowed" : "pointer",
            fontWeight: 800,
            fontSize: 12,
            opacity: isSaving ? 0.7 : 1,
          }}
        >
          {isSaving ? "⏳ Đang lưu lên Cloud..." : "☁️ LƯU LÊN CLOUD CHO CẢ TEAM CÙNG XÀI"}
        </button>
      </div>
    </div>
  );
}