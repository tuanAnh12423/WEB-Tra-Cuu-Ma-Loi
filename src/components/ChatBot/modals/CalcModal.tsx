import { useState } from "react";
import { calculateWaterHardness } from "../../../utils/chatUtils";
import { useTimer } from "../../../hooks/useTimer";

interface Props {
  onClose: () => void;
}

export default function CalcModal({ onClose }: Props) {
  const [calcDhInput, setCalcDhInput] = useState("15");
  const { timerSeconds, startTimer, stopTimer } = useTimer();

  return (
    <div style={{
      backgroundColor: "#f0fdf4",
      padding: "10px",
      borderBottom: "1px solid #bbf7d0",
      fontSize: 11,
      flexShrink: 0,
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: "#166534" }}>
          🧮 Tiện ích Quy đổi & Đếm giờ thao tác:
        </span>
        <button type="button" onClick={onClose} style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 11 }}>
          ✕ Đóng
        </button>
      </div>

      {/* Hẹn giờ */}
      <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
        <span style={{ fontWeight: 600 }}>⏱️ Hẹn giờ:</span>
        {[
          { label: "Giữ 3s", secs: 3 },
          { label: "Giữ 5s", secs: 5 },
          { label: "Xả tụ 5p", secs: 300 },
          { label: "Nguội bát 15p", secs: 900 },
        ].map((btn) => (
          <button
            key={btn.secs}
            type="button"
            onClick={() => startTimer(btn.secs)}
            style={{ background: "#dcfce7", border: "1px solid #86efac", borderRadius: 4, padding: "2px 5px", cursor: "pointer", fontSize: 10 }}
          >
            {btn.label}
          </button>
        ))}
        {timerSeconds !== null && (
          <>
            <span style={{ color: "#f59e0b", fontWeight: 700 }}>⏱️ {timerSeconds}s</span>
            <button
              type="button"
              onClick={stopTimer}
              style={{ background: "#fee2e2", border: "1px solid #fca5a5", color: "#b91c1c", borderRadius: 4, padding: "2px 5px", cursor: "pointer", fontSize: 10 }}
            >
              Dừng
            </button>
          </>
        )}
      </div>

      {/* Độ cứng nước */}
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <span>Độ cứng nước (°dH):</span>
        <input
          type="number"
          placeholder="VD: 15"
          value={calcDhInput}
          onChange={(e) => setCalcDhInput(e.target.value)}
          style={{ width: 60, padding: "2px 4px", borderRadius: 4, border: "1px solid #cbd5e1", fontSize: 11 }}
        />
      </div>
      {calcDhInput && (
        <div style={{ background: "#ffffff", padding: "4px 8px", borderRadius: 4, color: "#15803d", fontWeight: 600, marginTop: 4 }}>
          ➔ {calculateWaterHardness(calcDhInput)}
        </div>
      )}
    </div>
  );
}