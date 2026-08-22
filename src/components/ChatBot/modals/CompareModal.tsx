import { useState } from "react";
import { modelComparisons } from "../../../data/shared/modelComparisons";

interface Props {
  onClose: () => void;
}

function renderSpecValue(value: string | undefined) {
  if (!value) return <span>—</span>;
  if (value.startsWith("✕") || value.toLowerCase().includes("không")) {
    return (
      <span
        style={{
          display: "inline-block",
          backgroundColor: "#fee2e2",
          color: "#dc2626",
          padding: "2px 6px",
          borderRadius: 4,
          fontWeight: 700,
          fontSize: 10,
        }}
      >
        {value}
      </span>
    );
  }
  if (value.startsWith("✓") || value.toLowerCase().includes("có")) {
    return (
      <span
        style={{
          display: "inline-block",
          backgroundColor: "#dcfce7",
          color: "#16a34a",
          padding: "2px 6px",
          borderRadius: 4,
          fontWeight: 700,
          fontSize: 10,
        }}
      >
        {value}
      </span>
    );
  }
  return <span style={{ fontWeight: 600, color: "#0f172a" }}>{value}</span>;
}

export default function CompareModal({ onClose }: Props) {
  const [compareCategory, setCompareCategory] = useState("dishwasher");
  const [selectedModels, setSelectedModels] = useState<string[]>([
    "DW-15F9(B)-VN",
    "DW-15F8(B)-VN",
    "DW-15F7(G)-VN",
  ]);

  const currentData = modelComparisons.find(
    (c) => c.category === compareCategory,
  );
  const activeModels = (currentData?.models || []).filter((m) =>
    selectedModels.includes(m.model),
  );

  const toggleModel = (modelName: string) => {
    if (selectedModels.includes(modelName)) {
      if (selectedModels.length > 1) {
        setSelectedModels(selectedModels.filter((m) => m !== modelName));
      }
    } else {
      setSelectedModels([...selectedModels, modelName]);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        padding: "10px",
        borderBottom: "1px solid #cbd5e1",
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
          marginBottom: 8,
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, color: "#0369a1" }}>
          ⚖️ SO SÁNH THÔNG SỐ MODEL:
        </span>
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

      {/* Chọn ngành hàng */}
      <div
        style={{ display: "flex", gap: 4, marginBottom: 8, overflowX: "auto" }}
      >
        {modelComparisons.map((cat) => (
          <button
            key={cat.category}
            type="button"
            onClick={() => {
              setCompareCategory(cat.category);
              setSelectedModels(cat.models.map((m) => m.model).slice(0, 3));
            }}
            style={{
              background:
                compareCategory === cat.category ? "#0284c7" : "#e2e8f0",
              color: compareCategory === cat.category ? "#fff" : "#334155",
              border: "none",
              padding: "3px 8px",
              borderRadius: 12,
              fontSize: 10,
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {cat.icon} {cat.categoryName}
          </button>
        ))}
      </div>

      {/* Chọn model */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 8,
          alignItems: "center",
          flexWrap: "wrap",
          background: "#f1f5f9",
          padding: "4px 8px",
          borderRadius: 6,
        }}
      >
        <span style={{ fontSize: 10, color: "#64748b", fontWeight: 600 }}>
          Chọn model:
        </span>
        {currentData?.models.map((m) => (
          <label
            key={m.model}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              cursor: "pointer",
              fontSize: 10,
            }}
          >
            <input
              type="checkbox"
              checked={selectedModels.includes(m.model)}
              onChange={() => toggleModel(m.model)}
            />
            {m.model}
          </label>
        ))}
      </div>

      {/* Bảng so sánh */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
          fontSize: 10,
          background: "#fff",
        }}
      >
        <thead>
          <tr style={{ background: "#e0f2fe", color: "#0369a1" }}>
            <th
              style={{
                border: "1px solid #bae6fd",
                padding: 4,
                textAlign: "left",
              }}
            >
              Tính năng
            </th>
            {activeModels.map((m) => (
              <th
                key={m.model}
                style={{ border: "1px solid #bae6fd", padding: 4 }}
              >
                {m.model}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData?.attributes.map((attr) => (
            <tr key={attr}>
              <td
                style={{
                  border: "1px solid #e2e8f0",
                  padding: 4,
                  textAlign: "left",
                  fontWeight: 600,
                  color: "#475569",
                }}
              >
                {attr}
              </td>
              {activeModels.map((m) => (
                <td
                  key={m.model}
                  style={{ border: "1px solid #e2e8f0", padding: 4 }}
                >
                  {renderSpecValue(m.specs[attr])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
