import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirestore } from "../../hooks/useFirestore";
import { useTimer } from "../../hooks/useTimer";
import {
  cleanString,
  renderFormattedText,
  cleanTextForCopy,
} from "../../utils/chatUtils";
import { errors, categories } from "../../data/errors";
import { manuals } from "../../data/manuals";
import { chatbotKnowledge } from "../../data/chatbotKnowledge";
import { diagnosisTree } from "../../data/diagnosisTree";
import type { DiagnosisNode } from "../../data/diagnosisTree";
import { deviceImages, type DeviceImageItem } from "../../data/deviceImages";
import { FUN_DIALOGUES } from "../../data/funDialogues";
import { SEARCH_MAPPING } from "../../data/searchMapping";
import type { Message, Option, SuggestionItem } from "../../types/chat";
import TeachModal from "./modals/TeachModal";
import LearnModal from "./modals/LearnModal";
import CalcModal from "./modals/CalcModal";
import CompareModal from "./modals/CompareModal";

// ============================================
// CONSTANTS
// ============================================
const MODEL_FILTERS = [
  { id: "ALL", label: "🌐 Tất cả" },
  { id: "RF611", label: "🧊 RF611" },
  { id: "15F9", label: "🍽️ 15F9" },
  { id: "15F8", label: "🍽️ 15F8" },
  { id: "15F7", label: "🍽️ 15F7" },
];

const HELP_KEYWORDS = [
  "giuptoi",
  "toicangiup",
  "help",
  "hotro",
  "trogiup",
  "menu",
  "batdau",
  "canhotro",
  "huongdan",
  "hinh",
];

const DEFAULT_MESSAGE: Message = {
  id: "1",
  sender: "bot",
  text: "Dạ kính chào mấy bà dà! 🤖 Tui là Trợ lý Toshiba đây, mấy mẹ cần tra mã lỗi, sơ đồ ảnh hay muốn dạy dỗ tui cái gì thì gõ vô đây lẹ lên nha!",
};

// ============================================
// MAIN COMPONENT
// ============================================
export default function ChatBotWidget() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // --- State ---
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 640);
  const [isOpen, setIsOpen] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedModelFilter, setSelectedModelFilter] = useState("ALL");
  const [activeModal, setActiveModal] = useState<
    "PINNED" | "CALC" | "COMPARE" | "LEARN" | "TEACH" | null
  >(null);
  const [teachKeyword, setTeachKeyword] = useState("");
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const saved = localStorage.getItem("chat_history");
      return saved ? JSON.parse(saved) : [DEFAULT_MESSAGE];
    } catch {
      return [DEFAULT_MESSAGE];
    }
  });

  // --- Hooks ---
  const { learnedList, deleteKnowledge, exportToFile } = useFirestore();
  const { timerSeconds } = useTimer();

  // --- Computed ---
  const pinnedMessages = messages.filter((m) => m.isPinned);

  // --- Effects ---
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem("chat_history", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 150);
      } else if (e.key === "Escape" && isOpen) {
        if (previewImage) setPreviewImage(null);
        else if (activeModal) setActiveModal(null);
        else setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, previewImage, activeModal]);

  // --- Helpers ---
  const addMessage = (msg: Omit<Message, "id">) => {
    setMessages((prev) => [...prev, { ...msg, id: Date.now().toString() }]);
  };

  const addBotMessage = (
    text: string,
    options?: Option[],
    images?: string[],
    videoUrl?: string,
  ) => {
    setTimeout(() => {
      addMessage({ sender: "bot", text, options, images, videoUrl });
    }, 200);
  };

  const handleGoToErrorPage = (item: any) => {
    navigate(`/error-detail/${item.id}`);
    if (isMobile) setIsOpen(false);
  };

  const handleCopyForCustomer = (text: string, msgId: string) => {
    const clean = cleanTextForCopy(text);
    navigator.clipboard.writeText(
      `Dạ Toshiba xin hướng dẫn anh/chị ạ:\n\n${clean}\n\nNếu cần hỗ trợ thêm, anh/chị liên hệ lại tổng đài 1800 1529 nhé!`,
    );
    setCopiedId(`cust_${msgId}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyTechnical = (text: string, msgId: string) => {
    navigator.clipboard.writeText(cleanTextForCopy(text));
    setCopiedId(`tech_${msgId}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const togglePinMessage = (msgId: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === msgId ? { ...m, isPinned: !m.isPinned } : m)),
    );
  };

  const handleClearHistory = () => {
    localStorage.removeItem("chat_history");
    setMessages([{ ...DEFAULT_MESSAGE, id: Date.now().toString() }]);
  };

  // --- Diagnosis Tree ---
  const handleDiagnosisStep = (node: DiagnosisNode, userLabel: string) => {
    addMessage({ sender: "user", text: userLabel });
    if (node.children?.length) {
      addBotMessage(
        `### 🧭 ${node.title || node.label.toUpperCase()}\n---\n${node.guide || "Chọn đúng triệu chứng bên dưới:"}`,
        node.children.map((child) => ({
          label: child.label,
          action: () => handleDiagnosisStep(child, child.label),
        })),
      );
    } else if (node.result) {
      addBotMessage(`### 🛠️ CÁCH TRỊ ĐÂY NÈ\n---\n${node.result}`);
    }
  };

  const startDecisionTree = () => {
    addBotMessage(
      "### 🌳 CHẨN ĐOÁN PAN BỆNH THEO HIỆN TƯỢNG\n---\nBị máy nào vậy mấy bà dà?",
      diagnosisTree.map((device) => ({
        label: device.label,
        action: () => handleDiagnosisStep(device, device.label),
      })),
    );
  };

  // --- Image Catalog ---
  const showImageCatalog = () => {
    const categoryMap: Record<string, { label: string; icon: string }> = {
      washing: { label: "Máy giặt & Máy sấy", icon: "🧺" },
      fridge: { label: "Tủ lạnh", icon: "🧊" },
      dishwasher: { label: "Máy rửa chén", icon: "🍽️" },
      waterPurifier: { label: "Máy lọc nước", icon: "💧" },
    };
    addBotMessage(
      "### 🖼️ THƯ VIỆN HÌNH ẢNH & SƠ ĐỒ THIẾT BỊ\n---\nChọn ngành hàng muốn xem:",
      Object.keys(categoryMap).map((key) => ({
        label: `${categoryMap[key].icon} ${categoryMap[key].label}`,
        action: () => showImagesByCategory(key, categoryMap[key].label),
      })),
    );
  };

  const showImagesByCategory = (categoryId: string, categoryName: string) => {
    const filtered = deviceImages.filter((img) => img.category === categoryId);
    addMessage({ sender: "user", text: categoryName });
    addBotMessage(
      `### 🖼️ SƠ ĐỒ HÌNH ẢNH (${categoryName.toUpperCase()})\n---\nChọn đúng Model cần xem:`,
      [
        ...filtered.map((img) => ({
          label: `📌 [${img.model}] ${img.title} (${img.images.length} ảnh)`,
          action: () => displayImageResult(img),
        })),
        { label: "⬅️ Chọn ngành hàng khác", action: () => showImageCatalog() },
      ],
    );
  };

  const displayImageResult = (img: DeviceImageItem) => {
    addMessage({ sender: "user", text: img.title });
    addBotMessage(
      `### 🖼️ ${img.title.toUpperCase()}\n---\n**Mô tả:** ${img.description}`,
      [
        {
          label: "⬅️ Xem model khác",
          action: () => showImagesByCategory(img.category, img.category),
        },
      ],
      img.images,
    );
  };

  // --- Smart Suggestions ---
  const smartSuggestions: SuggestionItem[] = (() => {
    const q = cleanString(input);
    if (q.length < 2) return [];
    const results: SuggestionItem[] = [];

    learnedList.forEach((item) => {
      if (
        cleanString(item.title).includes(q) ||
        item.keywords.some((kw) => cleanString(kw).includes(q))
      ) {
        results.push({
          type: "KNOWLEDGE",
          icon: "☁️",
          label: `[Mấy Má Dạy] ${item.title}`,
          subLabel: item.answer.slice(0, 45) + "...",
          query: item.keywords[0] || item.title,
        });
      }
    });

    errors.forEach((e) => {
      if (cleanString(e.code).includes(q) || cleanString(e.title).includes(q)) {
        results.push({
          type: "ERROR",
          icon: "⚡",
          label: `[Mã Lỗi ${e.code}] ${e.title}`,
          subLabel: e.description?.slice(0, 45) + "...",
          query: e.code,
          dataItem: e,
        });
      }
    });

    return results.slice(0, 5);
  })();

  // --- Handle Send ---
  const handleSend = (textToSend?: string) => {
    const queryText = (textToSend || input).trim();
    if (!queryText) return;

    addMessage({ sender: "user", text: queryText });
    if (!textToSend) setInput("");

    let cleanKeyword = cleanString(queryText);
    const lowerQuery = queryText.toLowerCase();

    Object.keys(SEARCH_MAPPING).forEach((key) => {
      if (SEARCH_MAPPING[key].some((s) => cleanString(s) === cleanKeyword)) {
        cleanKeyword = cleanString(key);
      }
    });

    const expandedKeywords = [cleanKeyword];
    Object.keys(SEARCH_MAPPING).forEach((key) => {
      if (SEARCH_MAPPING[key].some((s) => cleanString(s) === cleanKeyword)) {
        expandedKeywords.push(key);
      }
    });

    // 1. Fun dialogues
    if (!lowerQuery.includes("=")) {
      const matchedFun = FUN_DIALOGUES.find((item) =>
        item.triggers.some(
          (t) =>
            cleanKeyword === cleanString(t) ||
            lowerQuery.split(" ").includes(t),
        ),
      );
      if (matchedFun) {
        const text =
          matchedFun.responses[
            Math.floor(Math.random() * matchedFun.responses.length)
          ];
        addBotMessage(
          text,
          matchedFun.hasTeachButton
            ? [
                {
                  label: "✨ ☁️ MỞ BẢNG DẠY BOT ➔",
                  action: () => setActiveModal("TEACH"),
                },
              ]
            : undefined,
        );
        return;
      }
    }

    // 2. Quick teach
    if (
      ["học:", "dạy:", "hoc:", "day:"].some((p) => lowerQuery.startsWith(p))
    ) {
      const parts = queryText.slice(4).trim().split("=");
      if (parts.length >= 2) {
        const kw = parts[0].trim();
        const ans = parts.slice(1).join("=").trim();
        if (kw && ans) {
          setTeachKeyword(kw);
          setActiveModal("TEACH");
          return;
        }
      }
    }

    // 3. Image match
    const matchedImg = deviceImages.find(
      (img) =>
        cleanKeyword.length >= 2 &&
        (cleanString(img.title).includes(cleanKeyword) ||
          cleanString(img.model).includes(cleanKeyword) ||
          img.keywords.some((kw) => cleanString(kw).includes(cleanKeyword))),
    );
    if (matchedImg) {
      displayImageResult(matchedImg);
      return;
    }

    // 4. Cloud knowledge
    const matchedLearned = learnedList.find((item) =>
      expandedKeywords.some(
        (exp) =>
          (cleanString(item.title) + cleanString(item.answer)).includes(exp) ||
          item.keywords.some((kw) => cleanString(kw).includes(exp)),
      ),
    );
    if (matchedLearned) {
      addBotMessage(
        `### ☁️ [BÀI MẤY MÁ DẠY NÈ] ${matchedLearned.title.toUpperCase()}\n---\n${matchedLearned.answer}`,
        matchedLearned.videoUrl
          ? [
              {
                label: "🎬 Mở Video",
                action: () => window.open(matchedLearned.videoUrl, "_blank"),
              },
            ]
          : undefined,
        matchedLearned.imageUrl ? [matchedLearned.imageUrl] : undefined,
        matchedLearned.videoUrl,
      );
      return;
    }

    // 5. Help intent
    if (
      HELP_KEYWORDS.some((kw) =>
        expandedKeywords.some((exp) => exp.includes(kw)),
      )
    ) {
      addBotMessage(
        "### 🧭 TRUNG TÂM HỖ TRỢ TRA CỨU NHANH\n---\nChọn ngành hàng bên dưới:",
        [
          { label: "🖼️ Tra cứu Hình ảnh", action: showImageCatalog },
          { label: "🌳 Cây Chẩn đoán Pan bệnh", action: startDecisionTree },
          {
            label: "⚖️ So sánh Thông số Model",
            action: () => setActiveModal("COMPARE"),
          },
          {
            label: "☁️ Dạy Bot lưu Đám Mây",
            action: () => setActiveModal("TEACH"),
          },
          ...categories.map((cat) => ({
            label: `${cat.icon} ${cat.name}`,
            action: () => handleSelectCategory(cat.id, cat.name),
          })),
        ],
      );
      return;
    }

    // 6. Manuals & Errors
    const matchedErrors = errors.filter((item: any) =>
      expandedKeywords.some((exp) =>
        [item.code, item.title, item.description].some((f) =>
          cleanString(f || "").includes(exp),
        ),
      ),
    );
    const matchedManuals = (manuals || []).filter((item: any) =>
      expandedKeywords.some((exp) =>
        [
          item.model,
          item.modelName,
          item.title,
          item.name,
          item.category,
          item.id,
        ].some((f) => cleanString(f || "").includes(exp)),
      ),
    );

    // 7. Knowledge base
    let matchedKnowledge = chatbotKnowledge.filter((k) => {
      const titleClean = cleanString(k.title || "");
      const answerClean = cleanString(k.answer || "");
      const keywordsClean = (k.keywords || []).map((kw) => cleanString(kw));

      return expandedKeywords.some(
        (exp) =>
          titleClean.includes(exp) ||
          keywordsClean.some((kw) => kw.includes(exp)) ||
          answerClean.includes(exp),
      );
    });

    if (selectedModelFilter !== "ALL") {
      const cleanFilter = cleanString(selectedModelFilter);
      matchedKnowledge = matchedKnowledge.filter(
        (k) =>
          (k.keywords || []).some((kw) =>
            cleanString(kw).includes(cleanFilter),
          ) || cleanString(k.title || "").includes(cleanFilter),
      );
    }

    let botResponseText = "";
    let botOptions: Option[] = [];

    if (matchedErrors.length > 0 || matchedManuals.length > 0) {
      botResponseText = `🔍 Tìm thấy ${matchedErrors.length + matchedManuals.length} mục liên quan:`;

      matchedErrors.slice(0, 5).forEach((item: any) => {
        botOptions.push({
          label: `🚀 [MÃ LỖI ${item.code}] ${item.title}`,
          action: () => handleGoToErrorPage(item),
        });
      });

      matchedManuals.slice(0, 3).forEach((item: any) => {
        const displayModel = item.model || item.modelName || item.code || "PDF";
        const displayTitle = item.title || item.name || "Sách HDSD";
        const pdfLink = item.pdfUrl || item.link || item.url || item.file;
        botOptions.push({
          label: `📖 [SÁCH HDSD] ${displayModel} - ${displayTitle}`,
          action: () => {
            if (pdfLink) window.open(pdfLink, "_blank");
            else
              navigate(`/manuals?search=${encodeURIComponent(displayModel)}`);
          },
        });
      });
    } else if (matchedKnowledge.length > 0) {
      if (matchedKnowledge.length === 1) {
        botResponseText = matchedKnowledge[0].answer;
        if (matchedKnowledge[0].link) {
          botOptions.push({
            label: "🔗 Xem chi tiết",
            action: () => window.open(matchedKnowledge[0].link, "_blank"),
          });
        }
      } else {
        botResponseText = `🔍 Kiếm được **${matchedKnowledge.length}** kết quả. Chọn lẹ giùm con:`;
        matchedKnowledge.forEach((item) => {
          botOptions.push({
            label: `📌 ${item.title || "Xem chi tiết"}`,
            action: () => addBotMessage(item.answer),
          });
        });
      }
    } else {
      botResponseText = `### ❌ HỔNG TÌM THẤY "${queryText.toUpperCase()}"!\n---\nBấm nút Dạy Bot bên dưới để nạp kiến thức nha!`;
      botOptions = [
        {
          label: "✨ DẠY TUI CÂU NÀY ĐI",
          action: () => {
            setTeachKeyword(queryText);
            setActiveModal("TEACH");
          },
        },
        { label: "🖼️ Xem thư viện hình ảnh", action: showImageCatalog },
        { label: "🌳 Chẩn đoán theo hiện tượng", action: startDecisionTree },
        ...categories.map((cat) => ({
          label: `${cat.icon} ${cat.name}`,
          action: () => handleSelectCategory(cat.id, cat.name),
        })),
      ];
    }

    addBotMessage(
      botResponseText,
      botOptions.length > 0 ? botOptions : undefined,
    );
  };

  const handleSelectCategory = (categoryId: string, categoryName: string) => {
    addMessage({ sender: "user", text: categoryName });
    addBotMessage(
      `✅ Danh sách mã lỗi **${categoryName}**:`,
      errors
        .filter((e) => e.category === categoryId)
        .slice(0, 8)
        .map((item) => ({
          label: `🚀 [${item.code}] ${item.title}`,
          action: () => handleGoToErrorPage(item),
        })),
    );
  };

  // ============================================
  // RENDER
  // ============================================
  return (
    <>
      {/* Nút mở chatbot */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "#0284c7",
            color: "#fff",
            border: "none",
            borderRadius: isMobile ? 24 : "50%",
            width: isMobile ? "auto" : 56,
            height: isMobile ? "auto" : 56,
            padding: isMobile ? "10px 16px" : 0,
            fontSize: isMobile ? 13 : 24,
            fontWeight: 700,
            cursor: "pointer",
            zIndex: 9999,
            boxShadow: "0 4px 14px rgba(2,132,199,0.4)",
          }}
        >
          {isMobile ? "🤖 Mở Chatbot" : "💬"}
        </button>
      )}

      {/* Khung chatbot */}
      {isOpen && (
        <div
          style={
            isMobile
              ? {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100dvh",
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  zIndex: 99999,
                }
              : {
                  position: "fixed",
                  bottom: isMaximized ? 20 : 86,
                  right: 20,
                  width: isMaximized ? "calc(100vw - 40px)" : 440,
                  height: isMaximized ? "calc(100vh - 100px)" : 620,
                  backgroundColor: "#fff",
                  borderRadius: 16,
                  boxShadow: "0 12px 32px rgba(15,23,42,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  zIndex: 9999,
                  border: "1px solid #e2e8f0",
                }
          }
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#0f172a",
              color: "#fff",
              padding: "10px 14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: "#0284c7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                }}
              >
                🤖
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: 13, fontWeight: 700 }}>
                  Trợ lý mấy má nè
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 10,
                  }}
                >
                  <span style={{ color: "#4ade80", fontWeight: 600 }}>
                    ● Cloud Active
                  </span>
                  {timerSeconds !== null && (
                    <span style={{ color: "#f59e0b", fontWeight: 700 }}>
                      ⏱️ {timerSeconds}s
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              {[
                {
                  modal: "LEARN" as const,
                  icon: "☁️",
                  count: learnedList.length,
                },
                {
                  modal: "PINNED" as const,
                  icon: "⭐",
                  count: pinnedMessages.length,
                },
                { modal: "COMPARE" as const, icon: "⚖️" },
                { modal: "CALC" as const, icon: "🧮" },
              ].map(({ modal, icon, count }) => (
                <button
                  key={modal}
                  type="button"
                  onClick={() =>
                    setActiveModal(activeModal === modal ? null : modal)
                  }
                  style={{
                    position: "relative",
                    background:
                      activeModal === modal
                        ? "#0284c7"
                        : "rgba(255,255,255,0.08)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    width: 26,
                    height: 26,
                    cursor: "pointer",
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                  {count !== undefined && count > 0 && (
                    <span
                      style={{
                        position: "absolute",
                        top: -3,
                        right: -3,
                        backgroundColor: "#10b981",
                        color: "#fff",
                        fontSize: 8,
                        fontWeight: 800,
                        padding: "1px 3px",
                        borderRadius: 8,
                      }}
                    >
                      {count}
                    </span>
                  )}
                </button>
              ))}

              <div
                style={{
                  width: 1,
                  height: 16,
                  backgroundColor: "#334155",
                  margin: "0 2px",
                }}
              />

              <button
                type="button"
                onClick={handleClearHistory}
                title="Dọn dẹp lịch sử"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#94a3b8",
                  cursor: "pointer",
                  fontSize: 12,
                  padding: 4,
                }}
              >
                🗑️
              </button>
              {!isMobile && (
                <button
                  type="button"
                  onClick={() => setIsMaximized(!isMaximized)}
                  title="Phóng to / Thu nhỏ"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#94a3b8",
                    cursor: "pointer",
                    fontSize: 11,
                    padding: 4,
                  }}
                >
                  {isMaximized ? "🗗" : "🗖"}
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Đóng"
                style={{
                  background: "rgba(239,68,68,0.2)",
                  border: "none",
                  color: "#fca5a5",
                  borderRadius: 6,
                  width: 26,
                  height: 26,
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* 🌟 THIẾT KẾ MỚI: Thanh Công Cụ & Bộ Lọc Gọn Gàng, Hiện Đại */}
          <div
            style={{
              backgroundColor: "#1e293b",
              borderBottom: "1px solid #334155",
              padding: "8px 10px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              flexShrink: 0,
            }}
          >
            {/* Hàng 1: Nút chức năng chính (Dạy bot, Ảnh, Chẩn đoán) */}
            <div style={{ display: "flex", gap: 6 }}>
              <button
                type="button"
                onClick={() => setActiveModal("TEACH")}
                style={{
                  flex: 1,
                  background:
                    "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "6px 8px",
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  boxShadow: "0 2px 6px rgba(16,185,129,0.3)",
                }}
              >
                <span>✨</span> Dạy Tuiiii!!
              </button>

              <button
                type="button"
                onClick={showImageCatalog}
                style={{
                  flex: 1,
                  background: "#0891b2",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "6px 8px",
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                }}
              >
                <span>🖼️</span> Tra Ảnh
              </button>

              <button
                type="button"
                onClick={startDecisionTree}
                style={{
                  flex: 1,
                  background: "#0284c7",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "6px 8px",
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                }}
              >
                <span>🌳</span> Chẩn Đoán
              </button>
            </div>

            {/* Hàng 2: Bộ lọc ngành hàng / Model dạng chip nhỏ gọn */}
            <div
              style={{
                display: "flex",
                gap: 4,
                overflowX: "auto",
                paddingBottom: 2,
              }}
            >
              {MODEL_FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setSelectedModelFilter(f.id)}
                  style={{
                    background:
                      selectedModelFilter === f.id
                        ? "#0284c7"
                        : "rgba(255,255,255,0.06)",
                    color: selectedModelFilter === f.id ? "#fff" : "#94a3b8",
                    border:
                      selectedModelFilter === f.id
                        ? "none"
                        : "1px solid #334155",
                    borderRadius: 6,
                    padding: "3px 8px",
                    fontSize: 10,
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Modals */}
          {activeModal === "TEACH" && (
            <TeachModal
              onClose={() => setActiveModal(null)}
              defaultKeyword={teachKeyword}
              onSaved={(keywords, answer, imgUrl, vidUrl) => {
                addBotMessage(
                  `### ☁️ NHỚ RỒI MẤY MÁ!\n---\n📌 **Từ khóa:** ${keywords.join(", ")}\n📝 ${answer}`,
                  undefined,
                  imgUrl ? [imgUrl] : undefined,
                  vidUrl,
                );
                setTeachKeyword("");
              }}
            />
          )}
          {activeModal === "LEARN" && (
            <LearnModal
              learnedList={learnedList}
              onClose={() => setActiveModal(null)}
              onDelete={deleteKnowledge}
              onExport={() => exportToFile(learnedList)}
            />
          )}
          {activeModal === "COMPARE" && (
            <CompareModal onClose={() => setActiveModal(null)} />
          )}
          {activeModal === "CALC" && (
            <CalcModal onClose={() => setActiveModal(null)} />
          )}
          {activeModal === "PINNED" && (
            <div
              style={{
                backgroundColor: "#fef3c7",
                padding: "10px",
                borderBottom: "1px solid #fde68a",
                maxHeight: 180,
                overflowY: "auto",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <span
                  style={{ fontSize: 11, fontWeight: 700, color: "#92400e" }}
                >
                  ⭐ Tin nhắn đã ghim ({pinnedMessages.length}):
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              </div>
              {pinnedMessages.length === 0 ? (
                <span style={{ fontSize: 11, color: "#b45309" }}>
                  Chưa có tin nhắn nào được ghim!
                </span>
              ) : (
                pinnedMessages.map((p) => (
                  <div
                    key={p.id}
                    style={{
                      background: "#fff",
                      padding: "6px 8px",
                      borderRadius: 6,
                      marginBottom: 4,
                      fontSize: 11,
                      border: "1px solid #fde68a",
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>
                      {p.text.slice(0, 60)}...
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyForCustomer(p.text, p.id)}
                      style={{
                        color: "#0284c7",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: 10,
                      }}
                    >
                      📋 Copy cho khách
                    </button>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "12px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              backgroundColor: "#f8fafc",
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: "92%",
                }}
              >
                <div
                  style={{
                    backgroundColor: msg.sender === "user" ? "#0284c7" : "#fff",
                    color: msg.sender === "user" ? "#fff" : "#0f172a",
                    padding: "10px 14px",
                    borderRadius:
                      msg.sender === "user"
                        ? "14px 14px 2px 14px"
                        : "14px 14px 14px 2px",
                    fontSize: 13,
                    lineHeight: 1.6,
                    border: msg.sender === "bot" ? "1px solid #e2e8f0" : "none",
                  }}
                >
                  {msg.sender === "bot" ? (
                    <>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: renderFormattedText(msg.text, input),
                        }}
                      />
                      {msg.images && msg.images.length > 0 && (
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns:
                              msg.images.length === 1
                                ? "1fr"
                                : "repeat(auto-fit, minmax(130px, 1fr))",
                            gap: 6,
                            marginTop: 10,
                          }}
                        >
                          {msg.images.map((imgUrl, idx) => (
                            <div
                              key={idx}
                              onClick={() => setPreviewImage(imgUrl)}
                              style={{
                                position: "relative",
                                borderRadius: 8,
                                overflow: "hidden",
                                cursor: "pointer",
                                height: 110,
                                border: "1px solid #cbd5e1",
                              }}
                            >
                              <img
                                src={imgUrl}
                                alt={`Ảnh ${idx + 1}`}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      {msg.videoUrl && (
                        <button
                          type="button"
                          onClick={() => window.open(msg.videoUrl, "_blank")}
                          style={{
                            marginTop: 8,
                            background: "#dc2626",
                            color: "#fff",
                            border: "none",
                            padding: "6px 12px",
                            borderRadius: 6,
                            fontSize: 11,
                            fontWeight: 700,
                            cursor: "pointer",
                          }}
                        >
                          🎬 Xem Video Hướng Dẫn ➔
                        </button>
                      )}
                    </>
                  ) : (
                    msg.text
                  )}
                </div>

                {/* Action buttons */}
                {msg.sender === "bot" && (
                  <div
                    style={{
                      display: "flex",
                      gap: 4,
                      marginTop: 4,
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleCopyForCustomer(msg.text, msg.id)}
                      style={{
                        background: "#e0f2fe",
                        border: "1px solid #bae6fd",
                        color: "#0369a1",
                        cursor: "pointer",
                        padding: "2px 5px",
                        borderRadius: 4,
                        fontSize: 10,
                        fontWeight: 600,
                      }}
                    >
                      {copiedId === `cust_${msg.id}`
                        ? "✓ Đã copy"
                        : "📋 Cho khách"}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCopyTechnical(msg.text, msg.id)}
                      style={{
                        background: "#f1f5f9",
                        border: "1px solid #cbd5e1",
                        color: "#334155",
                        cursor: "pointer",
                        padding: "2px 5px",
                        borderRadius: 4,
                        fontSize: 10,
                        fontWeight: 600,
                      }}
                    >
                      {copiedId === `tech_${msg.id}`
                        ? "✓ Đã copy"
                        : "🛠️ Kỹ thuật"}
                    </button>
                    <button
                      type="button"
                      onClick={() => togglePinMessage(msg.id)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        opacity: msg.isPinned ? 1 : 0.4,
                      }}
                    >
                      {msg.isPinned ? "⭐" : "☆"}
                    </button>
                  </div>
                )}

                {/* Options */}
                {msg.options && msg.options.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      marginTop: 8,
                    }}
                  >
                    {msg.options.map((opt, idx) => {
                      const isTeach = opt.label.includes("DẠY");
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            opt.action();
                          }}
                          style={{
                            backgroundColor: isTeach ? "#10b981" : "#fff",
                            color: isTeach ? "#fff" : "#0369a1",
                            border: isTeach
                              ? "1px solid #34d399"
                              : "1px solid #bae6fd",
                            padding: isTeach ? "10px 14px" : "8px 12px",
                            borderRadius: 8,
                            fontSize: isTeach ? 13 : 12,
                            fontWeight: 700,
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Smart suggestions */}
          {smartSuggestions.length > 0 && (
            <div
              style={{
                backgroundColor: "#fff",
                borderTop: "1px solid #e2e8f0",
                padding: "6px 8px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                maxHeight: 200,
                overflowY: "auto",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#64748b",
                  padding: "2px 6px",
                }}
              >
                💡 Gợi ý:
              </span>
              {smartSuggestions.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() =>
                    item.type === "ERROR" && item.dataItem
                      ? handleGoToErrorPage(item.dataItem)
                      : handleSend(item.query)
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 8,
                    padding: "6px 10px",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span>{item.icon}</span>
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#0f172a",
                      }}
                    >
                      {item.label}
                    </div>
                    {item.subLabel && (
                      <div style={{ fontSize: 10, color: "#64748b" }}>
                        {item.subLabel}
                      </div>
                    )}
                  </div>
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "#0284c7",
                      fontWeight: 700,
                    }}
                  >
                    →
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Input form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              display: "flex",
              padding: "8px 10px",
              borderTop: "1px solid #e2e8f0",
              backgroundColor: "#fff",
              gap: 6,
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Nhập mã lỗi, Model máy hoặc từ khóa..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                outline: "none",
                fontSize: 14,
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#0284c7",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Gửi
            </button>
          </form>
        </div>
      )}

      {/* Lightbox */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100000,
            cursor: "zoom-out",
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          >
            <img
              src={previewImage}
              alt="Phóng to"
              style={{
                width: "100%",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: 8,
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
