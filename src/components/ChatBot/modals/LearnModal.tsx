import type { LearnedKnowledge } from "../../../types/chat";

interface Props {
  learnedList: LearnedKnowledge[];
  onClose: () => void;
  onDelete: (id: string) => void;
  onExport: () => void;
}

export default function LearnModal({
  learnedList,
  onClose,
  onDelete,
  onExport,
}: Props) {
  return (
    <div
      style={{
        backgroundColor: "#f0fdf4",
        padding: "10px",
        borderBottom: "1px solid #bbf7d0",
        maxHeight: 250,
        overflowY: "auto",
        fontSize: 11,
        flexShrink: 0,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, color: "#166534" }}>
          ☁️ KHO TRI THỨC ĐÁM MÂY ({learnedList.length}):
        </span>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <button
            type="button"
            onClick={onExport}
            style={{
              background: "#0284c7",
              color: "#fff",
              border: "none",
              padding: "3px 8px",
              borderRadius: 4,
              fontSize: 10,
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            📥 Tải File Code (.TS)
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: 11,
            }}
          >
            ✕ Đóng
          </button>
        </div>
      </div>

      {/* Danh sách */}
      {learnedList.length === 0 ? (
        <span style={{ color: "#64748b" }}>
          Chưa có kiến thức đám mây nào hết á. Mấy má bấm nút ☁️ Dạy Bot ở trên
          giùm con!
        </span>
      ) : (
        learnedList.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              padding: "6px 8px",
              borderRadius: 6,
              marginBottom: 4,
              border: "1px solid #dcfce7",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <strong style={{ color: "#065f46" }}>📌 {item.title}</strong>
              <button
                type="button"
                onClick={() => onDelete(item.id)}
                style={{
                  color: "#ef4444",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 10,
                }}
              >
                🗑️ Xóa
              </button>
            </div>
            <div style={{ color: "#475569", fontSize: 10 }}>
              {item.answer.slice(0, 70)}...
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 4,
                fontSize: 9,
                color: "#0284c7",
              }}
            >
              {item.imageUrl && <span>🖼️ Có Ảnh</span>}
              {item.videoUrl && <span>🎬 Có Video</span>}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
