import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SENSOR_OPTIONS,
  SENSOR_2K_LOOKUP_TABLE,
  COLOR_MAP,
  POWER_ELECTRICAL_DATA,
} from "../data/toolsData";

export default function ToolsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<
    "sensor" | "resistor" | "electrical"
  >("sensor");

  // ==========================================
  // 1. STATE & LOGIC: TÍNH SENSOR THEO NHIỆT ĐỘ
  // ==========================================
  const [selectedSensorIdx, setSelectedSensorIdx] = useState<number>(0); // Mặc định chọn 2k (Tủ lạnh)
  const [temp, setTemp] = useState<number>(25); // Mặc định 25°C

  // Hàm tính toán trở kháng Sensor: Tra bảng chuẩn 100% cho 2k hoặc dùng công thức Beta cho loại khác
  const calculateSensorResistance = (): string => {
    const sensor = SENSOR_OPTIONS[selectedSensorIdx];

    // 🟢 NẾU LÀ SENSOR 2K TỦ LẠNH -> TRA TRỰC TIẾP TỪ BẢNG HÃNG
    if (sensor.isLookupTable) {
      // 1. Nếu là số nhiệt độ nguyên có trong bảng
      if (SENSOR_2K_LOOKUP_TABLE[temp] !== undefined) {
        return `${SENSOR_2K_LOOKUP_TABLE[temp]} kΩ`;
      }

      // 2. Nếu là số nhiệt độ lẻ -> Nội suy tuyến tính giữa 2 mốc
      const lowerTemp = Math.floor(temp);
      const upperTemp = Math.ceil(temp);

      const rLower = SENSOR_2K_LOOKUP_TABLE[lowerTemp];
      const rUpper = SENSOR_2K_LOOKUP_TABLE[upperTemp];

      if (rLower !== undefined && rUpper !== undefined) {
        const interpolatedR = rLower + (rUpper - rLower) * (temp - lowerTemp);
        return `${interpolatedR.toFixed(3)} kΩ`;
      }

      return "Ngoài khoảng tra cứu (-30°C ~ 44°C)";
    }

    // 🔵 NẾU LÀ CÁC SENSOR THÔNG THƯỜNG -> DÙNG CÔNG THỨC BETA NTC
    const bConstant = sensor.bConstant || 3950;
    const T1 = 25 + 273.15; // 25°C sang Kelvin
    const T2 = temp + 273.15; // Nhiệt độ đo sang Kelvin
    const R1 = sensor.value * 1000; // kOhm sang Ohm

    const R2 = R1 * Math.exp(bConstant * (1 / T2 - 1 / T1));
    const kOhm = R2 / 1000;

    if (isNaN(kOhm) || kOhm <= 0) return "---";
    return kOhm >= 1 ? `${kOhm.toFixed(2)} kΩ` : `${R2.toFixed(0)} Ω`;
  };

  // ==========================================
  // 2. STATE & LOGIC: MÃ MÀU ĐIỆN TRỞ (4 VẠCH)
  // ==========================================
  const [b1, setB1] = useState<string>("brown");
  const [b2, setB2] = useState<string>("black");
  const [b3, setB3] = useState<string>("red");
  const [b4, setB4] = useState<string>("gold");

  const calculateResistor = () => {
    const v1 = COLOR_MAP[b1].val;
    const v2 = COLOR_MAP[b2].val;
    const mult = COLOR_MAP[b3].mult;
    const tol = COLOR_MAP[b4].tol || "±5%";

    const ohms = (v1 * 10 + v2) * mult;

    let formatted = "";
    if (ohms >= 1000000) {
      formatted = `${(ohms / 1000000).toFixed(2)} MΩ`;
    } else if (ohms >= 1000) {
      formatted = `${(ohms / 1000).toFixed(2)} kΩ`;
    } else {
      formatted = `${ohms.toFixed(1)} Ω`;
    }

    return { valueStr: formatted, tol };
  };

  // ==========================================
  // 3. STATE & LOGIC: TRA CỨU CÔNG SUẤT - DÂY & CB
  // ==========================================
  const [selectedPowerIdx, setSelectedPowerIdx] = useState<number>(0);
  const currentPowerInfo = POWER_ELECTRICAL_DATA[selectedPowerIdx];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        padding: "12px 10px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <button
            onClick={() => navigate(-1)}
            style={{
              background: "#334155",
              color: "#fff",
              border: "none",
              padding: "8px 14px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            ← Quay lại
          </button>
          <span style={{ fontSize: 16, fontWeight: 800, color: "#38bdf8" }}>
            🧮 BỘ CÔNG CỤ TÍNH TOÁN
          </span>
        </div>

        {/* TAB CHỌN CÔNG CỤ */}
        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 16,
            overflowX: "auto",
          }}
        >
          <button
            onClick={() => setActiveTab("sensor")}
            style={{
              flex: 1,
              padding: "10px 8px",
              borderRadius: 10,
              border: "none",
              fontWeight: 700,
              fontSize: 12,
              cursor: "pointer",
              background: activeTab === "sensor" ? "#0284c7" : "#1e293b",
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            🌡️ Sensor (NTC)
          </button>

          <button
            onClick={() => setActiveTab("resistor")}
            style={{
              flex: 1,
              padding: "10px 8px",
              borderRadius: 10,
              border: "none",
              fontWeight: 700,
              fontSize: 12,
              cursor: "pointer",
              background: activeTab === "resistor" ? "#0284c7" : "#1e293b",
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            🎨 Mã màu Trở
          </button>

          <button
            onClick={() => setActiveTab("electrical")}
            style={{
              flex: 1,
              padding: "10px 8px",
              borderRadius: 10,
              border: "none",
              fontWeight: 700,
              fontSize: 12,
              cursor: "pointer",
              background: activeTab === "electrical" ? "#0284c7" : "#1e293b",
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            ⚡ Dây điện & CB
          </button>
        </div>

        {/* ================= TAB 1: TÍNH SENSOR ================= */}
        {activeTab === "sensor" && (
          <div
            style={{ background: "#1e293b", borderRadius: 12, padding: "16px" }}
          >
            <h3
              style={{ margin: "0 0 12px 0", color: "#38bdf8", fontSize: 15 }}
            >
              🌡️ Tra Trị Số Cảm Biến Sensor Theo Nhiệt Độ
            </h3>

            {/* Chọn Loại Sensor */}
            <div style={{ marginBottom: 12 }}>
              <label
                style={{
                  fontSize: 12,
                  color: "#94a3b8",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: 6,
                }}
              >
                1. Chọn trị số Sensor gốc (ở 25°C):
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {SENSOR_OPTIONS.map((sensor, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSensorIdx(idx)}
                    style={{
                      padding: "6px 12px",
                      borderRadius: 6,
                      border: "none",
                      fontWeight: 700,
                      fontSize: 12,
                      cursor: "pointer",
                      background:
                        selectedSensorIdx === idx ? "#facc15" : "#0f172a",
                      color: selectedSensorIdx === idx ? "#0f172a" : "#cbd5e1",
                    }}
                  >
                    {sensor.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chọn/Kéo Nhiệt Độ Môi Trường */}
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <label
                  style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600 }}
                >
                  2. Nhiệt độ môi trường đo thực tế:
                </label>
                <span
                  style={{ fontSize: 14, color: "#facc15", fontWeight: 800 }}
                >
                  {temp} °C
                </span>
              </div>

              <input
                type="range"
                min="-30"
                max="44"
                value={temp}
                onChange={(e) => setTemp(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#0284c7" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 10,
                  color: "#64748b",
                }}
              >
                <span>-30°C (Lạnh âm)</span>
                <span>0°C (Đá tan)</span>
                <span>25°C (Gốc)</span>
                <span>44°C (Nóng)</span>
              </div>
            </div>

            {/* KẾT QUẢ ĐO VOM CHUẨN */}
            <div
              style={{
                background: "#0f172a",
                borderRadius: 10,
                padding: "16px",
                textAlign: "center",
                border: "1px solid #38bdf8",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  color: "#94a3b8",
                  display: "block",
                  marginBottom: 4,
                }}
              >
                Trị số trở kháng chuẩn khi đo VOM ở {temp}°C:
              </span>
              <span style={{ fontSize: 26, fontWeight: 800, color: "#4ade80" }}>
                {calculateSensorResistance()}
              </span>
            </div>

            <p
              style={{
                fontSize: 11,
                color: "#64748b",
                marginTop: 12,
                marginBottom: 0,
                lineHeight: 1.4,
              }}
            >
              💡{" "}
              <em>
                {SENSOR_OPTIONS[selectedSensorIdx].isLookupTable
                  ? "Thông số là tham khảo vì cảm biến có thể biến thiên theo nhiệt độ thực tế. Sai số đo thực tế cho phép trong khoảng ±5% ~ ±10%."
                  : "Sensor NTC có đặc tính trở kháng giảm khi nhiệt độ tăng. Sai số đo thực tế cho phép trong khoảng ±5% ~ ±10%."}
              </em>
            </p>
          </div>
        )}

        {/* ================= TAB 2: MÃ MÀU ĐIỆN TRỞ ================= */}
        {activeTab === "resistor" && (
          <div
            style={{ background: "#1e293b", borderRadius: 12, padding: "16px" }}
          >
            <h3
              style={{ margin: "0 0 12px 0", color: "#38bdf8", fontSize: 15 }}
            >
              🎨 Quy Đổi Mã Màu Điện Trở (4 Vạch Màu)
            </h3>

            {/* Mô phỏng điện trở */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "16px 0",
              }}
            >
              <div
                style={{
                  width: 180,
                  height: 36,
                  background: "#d1d5db",
                  borderRadius: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 24px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 36,
                    background: COLOR_MAP[b1].hex,
                  }}
                />
                <div
                  style={{
                    width: 8,
                    height: 36,
                    background: COLOR_MAP[b2].hex,
                  }}
                />
                <div
                  style={{
                    width: 8,
                    height: 36,
                    background: COLOR_MAP[b3].hex,
                  }}
                />
                <div
                  style={{
                    width: 8,
                    height: 36,
                    background: COLOR_MAP[b4].hex,
                  }}
                />
              </div>
            </div>

            {/* Chọn 4 Vạch */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: 11,
                    color: "#94a3b8",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  Vạch 1 (Số 1)
                </label>
                <select
                  value={b1}
                  onChange={(e) => setB1(e.target.value)}
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 6,
                    background: "#0f172a",
                    color: "#fff",
                    border: "1px solid #334155",
                  }}
                >
                  {Object.keys(COLOR_MAP)
                    .filter((k) => COLOR_MAP[k].val >= 0)
                    .map((k) => (
                      <option key={k} value={k}>
                        {COLOR_MAP[k].name}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label
                  style={{
                    fontSize: 11,
                    color: "#94a3b8",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  Vạch 2 (Số 2)
                </label>
                <select
                  value={b2}
                  onChange={(e) => setB2(e.target.value)}
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 6,
                    background: "#0f172a",
                    color: "#fff",
                    border: "1px solid #334155",
                  }}
                >
                  {Object.keys(COLOR_MAP)
                    .filter((k) => COLOR_MAP[k].val >= 0)
                    .map((k) => (
                      <option key={k} value={k}>
                        {COLOR_MAP[k].name}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label
                  style={{
                    fontSize: 11,
                    color: "#94a3b8",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  Vạch 3 (Bội số)
                </label>
                <select
                  value={b3}
                  onChange={(e) => setB3(e.target.value)}
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 6,
                    background: "#0f172a",
                    color: "#fff",
                    border: "1px solid #334155",
                  }}
                >
                  {Object.keys(COLOR_MAP).map((k) => (
                    <option key={k} value={k}>
                      {COLOR_MAP[k].name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  style={{
                    fontSize: 11,
                    color: "#94a3b8",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  Vạch 4 (Sai số)
                </label>
                <select
                  value={b4}
                  onChange={(e) => setB4(e.target.value)}
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 6,
                    background: "#0f172a",
                    color: "#fff",
                    border: "1px solid #334155",
                  }}
                >
                  {Object.keys(COLOR_MAP)
                    .filter((k) => COLOR_MAP[k].tol)
                    .map((k) => (
                      <option key={k} value={k}>
                        {COLOR_MAP[k].name} ({COLOR_MAP[k].tol})
                      </option>
                    ))}
                </select>
              </div>
            </div>

            {/* KẾT QUẢ TÍNH TRỞ */}
            <div
              style={{
                background: "#0f172a",
                borderRadius: 10,
                padding: "14px",
                textAlign: "center",
                border: "1px solid #eab308",
              }}
            >
              <span style={{ fontSize: 12, color: "#94a3b8" }}>
                Giá trị điện trở:{" "}
              </span>
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#facc15",
                  marginLeft: 6,
                }}
              >
                {calculateResistor().valueStr}
              </span>
              <span style={{ fontSize: 12, color: "#94a3b8", marginLeft: 6 }}>
                ({calculateResistor().tol})
              </span>
            </div>
          </div>
        )}

        {/* ================= TAB 3: TRA CỨU CÔNG SUẤT & DÂY ĐIỆN ================= */}
        {activeTab === "electrical" && (
          <div
            style={{ background: "#1e293b", borderRadius: 12, padding: "16px" }}
          >
            <h3
              style={{ margin: "0 0 12px 0", color: "#38bdf8", fontSize: 15 }}
            >
              ⚡ Tra Cứu Dòng Điện, Aptomat & Cỡ Dây Dẫn Chuẩn
            </h3>

            <div style={{ marginBottom: 14 }}>
              <label
                style={{
                  fontSize: 12,
                  color: "#94a3b8",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: 6,
                }}
              >
                Chọn Công suất máy lạnh / điều hòa:
              </label>
              <select
                value={selectedPowerIdx}
                onChange={(e) => setSelectedPowerIdx(Number(e.target.value))}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: 8,
                  background: "#0f172a",
                  color: "#fff",
                  border: "1px solid #38bdf8",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {POWER_ELECTRICAL_DATA.map((item, idx) => (
                  <option key={idx} value={idx}>
                    {item.hp} ({item.kw})
                  </option>
                ))}
              </select>
            </div>

            {/* BẢNG KẾT QUẢ GỢI Ý KỸ THUẬT */}
            <div
              style={{
                background: "#0f172a",
                borderRadius: 10,
                padding: "14px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #334155",
                  paddingBottom: 6,
                }}
              >
                <span style={{ fontSize: 12, color: "#94a3b8" }}>
                  ⚡ Dòng làm việc (Chạy tải):
                </span>
                <span
                  style={{ fontSize: 14, fontWeight: 700, color: "#facc15" }}
                >
                  {currentPowerInfo.current}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #334155",
                  paddingBottom: 6,
                }}
              >
                <span style={{ fontSize: 12, color: "#94a3b8" }}>
                  🛡️ Khuyến nghị Aptomat (CB):
                </span>
                <span
                  style={{ fontSize: 14, fontWeight: 700, color: "#ef4444" }}
                >
                  {currentPowerInfo.cb}
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 12, color: "#94a3b8" }}>
                  🔌 Tiết diện dây đồng nguồn:
                </span>
                <span
                  style={{ fontSize: 14, fontWeight: 700, color: "#4ade80" }}
                >
                  {currentPowerInfo.wire}
                </span>
              </div>

              {currentPowerInfo.note && (
                <div
                  style={{
                    marginTop: 4,
                    paddingTop: 8,
                    borderTop: "1px dashed #334155",
                    fontSize: 11,
                    color: "#94a3b8",
                  }}
                >
                  💡 <em>{currentPowerInfo.note}</em>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
