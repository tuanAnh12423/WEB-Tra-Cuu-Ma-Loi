import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { errors, categories } from "../data/errors";
import { manuals } from "../data/manuals"; // Chỉ giữ dữ liệu Mã lỗi Call Center & Sách HDSD
import { chatbotKnowledge } from "../data/chatbotKnowledge"; // Import dữ liệu Training Q&A

function cleanString(str: string): string {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .trim();
}

interface Option {
  label: string;
  action: () => void;
}

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: Option[];
  feedback?: "like" | "dislike";
}

export default function ChatBotWidget() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem("chat_history");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        /* ignore */
      }
    }
    return [
      {
        id: "1",
        sender: "bot",
        text: "Xin chào! Tôi là Trợ lý Tra cứu Hỗ trợ Tổng đài. Bạn cần hỏi về Bảo hành, Reset máy, Mã lỗi hay Sách HDSD? (VD: 'bao hanh', 'reset', 'E10', 'TW-BK115')",
      },
    ];
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("chat_history", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Gợi ý từ khóa tự động (Auto-suggest) khi gõ từ 2 ký tự trở lên
  const autoSuggestions =
    input.trim().length >= 2
      ? [
          ...chatbotKnowledge.flatMap((k) => k.keywords),
          ...errors.map((e) => e.code || ""),
          ...manuals.map((m) => m.model || ""),
        ]
          .filter(
            (item, index, self) =>
              item &&
              cleanString(item).includes(cleanString(input)) &&
              self.indexOf(item) === index,
          )
          .slice(0, 4)
      : [];

  const handleCopy = (text: string, msgId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(msgId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFeedback = (msgId: string, type: "like" | "dislike") => {
    setMessages((prev) =>
      prev.map((m) => (m.id === msgId ? { ...m, feedback: type } : m)),
    );
  };

  const quickReplies = [
    { label: "📚 HDSD TW-BK115", query: "TW-BK115" },
    { label: "⚡ Mã lỗi E10", query: "E10" },
    { label: "⚡ Mã lỗi E4", query: "E4" },
    { label: "🔍 Tìm theo danh mục", query: "tro giup tung buoc" },
  ];

  // 🌳 BƯỚC 1: CHỌN NGÀNH HÀNG
  const startStepByStepDiagnosis = () => {
    const categoryOptions: Option[] = categories.map((cat) => ({
      label: `${cat.icon || "⚙️"} ${cat.name}`,
      action: () => handleSelectCategory(cat.id, cat.name),
    }));

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "bot",
        text: "🔍 **Tra cứu theo danh mục**\n\n**Bước 1:** Vui lòng chọn ngành hàng bạn cần tìm:",
        options: categoryOptions,
      },
    ]);
  };

  // 🌳 BƯỚC 2: CHỌN LOẠI THÔNG TIN (MÃ LỖI HOẶC HDSD)
  const handleSelectCategory = (categoryId: string, categoryName: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), sender: "user", text: categoryName },
      {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: `📌 **Bước 2 (${categoryName}):** Bạn cần tra cứu thông tin nào?`,
        options: [
          {
            label: "🎧 Tra cứu Mã lỗi Call Center",
            action: () => handleListCategoryErrors(categoryId, categoryName),
          },
          {
            label: "📚 Tra cứu Sách HDSD (PDF)",
            action: () => handleListCategoryManuals(categoryId, categoryName),
          },
        ],
      },
    ]);
  };

  // 🌳 BƯỚC 3A: HIỂN THỊ MÃ LỖI CALL CENTER
  const handleListCategoryErrors = (
    categoryId: string,
    categoryName: string,
  ) => {
    const filtered = errors.filter((e) => e.category === categoryId);
    let options: Option[] = filtered.map((item) => ({
      label: `🎧 [${item.code || "LỖI"}] ${item.title}`,
      action: () => {
        navigate(`/error-detail/${item.id}`);
        setIsOpen(false);
      },
    }));

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "bot",
        text: `✅ Tìm thấy ${filtered.length} mã lỗi dành cho **${categoryName}**. Bấm vào lỗi bên dưới để xem hướng dẫn:`,
        options,
      },
    ]);
  };

  // 🌳 BƯỚC 3B: HIỂN THỊ SÁCH HDSD (PDF)
  const handleListCategoryManuals = (
    categoryId: string,
    categoryName: string,
  ) => {
    const filtered = (manuals || []).filter(
      (m: any) => m.category === categoryId,
    );
    let options: Option[] = filtered.map((item: any) => ({
      label: `📖 ${item.model || ""} - ${item.title}`,
      action: () => {
        const pdfLink = item.pdfUrl || item.link || item.url || item.file;
        if (pdfLink) {
          window.open(pdfLink, "_blank");
        } else {
          navigate("/manuals");
        }
        setIsOpen(false);
      },
    }));

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "bot",
        text: `✅ Tìm thấy ${filtered.length} tài liệu HDSD thuộc **${categoryName}**:`,
        options,
      },
    ]);
  };

  // 🔍 XỬ LÝ TÌM KIẾM DỮ LIỆU CÓ TRAINING
  const handleSend = (textToSend?: string) => {
    const queryText = textToSend || input;
    if (!queryText.trim()) return;

    if (queryText === "tro giup tung buoc") {
      startStepByStepDiagnosis();
      setInput("");
      return;
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: queryText,
    };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");

    const cleanKeyword = cleanString(queryText);

    // 🌟 1. ƯU TIÊN TÌM TRONG FILE KHIẾN THỨC TRAINING (chatbotKnowledge.ts)
    const matchedKnowledge = chatbotKnowledge.filter((k) =>
      k.keywords.some((kw) => {
        const cleanKw = cleanString(kw);
        return cleanKw.includes(cleanKeyword) || cleanKeyword.includes(cleanKw);
      }),
    );

    // 2. Chỉ tìm trong Mã lỗi Call Center
    const matchedCallCenter = errors.filter((item: any) => {
      const code = cleanString(item.code || "");
      const title = cleanString(item.title || "");
      const desc = cleanString(item.description || "");
      return (
        code.includes(cleanKeyword) ||
        title.includes(cleanKeyword) ||
        desc.includes(cleanKeyword)
      );
    });

    // 3. Chỉ tìm trong Sách HDSD (PDF)
    const matchedManuals = (manuals || []).filter((item: any) => {
      const model = cleanString(
        item.model || item.modelName || item.code || "",
      );
      const title = cleanString(item.title || item.name || "");
      const category = cleanString(item.category || "");
      const id = cleanString(item.id || "");
      const isHdsdSearch =
        cleanKeyword.includes("hdsd") || cleanKeyword.includes("sach");
      return (
        model.includes(cleanKeyword) ||
        title.includes(cleanKeyword) ||
        category.includes(cleanKeyword) ||
        id.includes(cleanKeyword) ||
        isHdsdSearch
      );
    });

    let botResponseText = "";
    let botOptions: Option[] = [];

    // Nếu khớp dữ liệu Training Q&A trong chatbotKnowledge.ts
    if (matchedKnowledge.length > 0) {
      botResponseText = matchedKnowledge[0].answer;
      if (matchedKnowledge[0].link) {
        botOptions.push({
          label: "🔗 Xem chi tiết liên kết",
          action: () => window.open(matchedKnowledge[0].link, "_blank"),
        });
      }
    } else {
      const totalMatches = matchedCallCenter.length + matchedManuals.length;

      if (totalMatches > 0) {
        botResponseText = `🔍 Tìm thấy ${totalMatches} kết quả phù hợp với từ khóa "${queryText}":`;

        // Ưu tiên Sách HDSD
        matchedManuals.slice(0, 3).forEach((item: any) => {
          const displayModel = item.model || item.modelName || "PDF";
          const displayTitle = item.title || item.name || "Sách HDSD";
          const pdfLink = item.pdfUrl || item.link || item.url || item.file;

          botOptions.push({
            label: `📖 [Mở Sách HDSD] ${displayModel} - ${displayTitle}`,
            action: () => {
              if (pdfLink) {
                window.open(pdfLink, "_blank");
              } else {
                navigate(
                  `/manuals?search=${encodeURIComponent(
                    displayModel || displayTitle,
                  )}`,
                );
              }
              setIsOpen(false);
            },
          });
        });

        // Hiển thị Mã lỗi Call Center
        matchedCallCenter.slice(0, 3).forEach((item: any) => {
          botOptions.push({
            label: `🎧 [Mã Lỗi] ${item.code || ""} - ${item.title}`,
            action: () => {
              navigate(`/error-detail/${item.id}`);
              setIsOpen(false);
            },
          });
        });
      } else {
        // Nếu không tìm thấy, chuyển hướng chọn theo Ngành hàng
        botResponseText = `❌ Không tìm thấy mã lỗi hay sách HDSD trực tiếp cho từ khóa "${queryText}".\n\n👉 Bạn hãy chọn ngành hàng bên dưới để tìm theo danh mục:`;

        botOptions = categories.map((cat) => ({
          label: `${cat.icon || "⚙️"} ${cat.name}`,
          action: () => handleSelectCategory(cat.id, cat.name),
        }));
      }
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: botResponseText,
          options: botOptions,
        },
      ]);
    }, 250);
  };

  const handleClearHistory = () => {
    localStorage.removeItem("chat_history");
    setMessages([
      {
        id: "1",
        sender: "bot",
        text: "Lịch sử trò chuyện đã làm sạch! Tôi có thể giúp gì cho bạn?",
      },
    ]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 56,
          height: 56,
          borderRadius: "50%",
          backgroundColor: "#0284c7",
          color: "#ffffff",
          border: "none",
          boxShadow: "0 4px 14px rgba(2, 132, 199, 0.4)",
          fontSize: 26,
          cursor: "pointer",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 86,
            right: 20,
            width: 380,
            maxWidth: "92vw",
            height: 520,
            backgroundColor: "#ffffff",
            borderRadius: 16,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 9999,
            border: "1px solid #e2e8f0",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#0f172a",
              color: "#ffffff",
              padding: "12px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 20 }}>🤖</span>
              <div>
                <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>
                  Trợ Lý Tra Cứu Hỗ Trợ
                </h3>
                <span style={{ fontSize: 11, color: "#4ade80" }}>
                  ● Call Center & Training Q&A
                </span>
              </div>
            </div>
            <button
              onClick={handleClearHistory}
              title="Xóa lịch sử"
              style={{
                background: "transparent",
                border: "none",
                color: "#94a3b8",
                cursor: "pointer",
                fontSize: 12,
              }}
            >
              🗑️ Xóa
            </button>
          </div>

          {/* Lịch sử Tin nhắn */}
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
                  maxWidth: "88%",
                }}
              >
                <div
                  style={{
                    backgroundColor:
                      msg.sender === "user" ? "#0284c7" : "#ffffff",
                    color: msg.sender === "user" ? "#ffffff" : "#0f172a",
                    padding: "10px 12px",
                    borderRadius:
                      msg.sender === "user"
                        ? "14px 14px 2px 14px"
                        : "14px 14px 14px 2px",
                    fontSize: 13,
                    lineHeight: 1.5,
                    border: msg.sender === "bot" ? "1px solid #e2e8f0" : "none",
                    whiteSpace: "pre-line",
                  }}
                >
                  {msg.text}
                </div>

                {/* Tiện ích Nút Copy & Feedback cho câu trả lời của Bot */}
                {msg.sender === "bot" && (
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      marginTop: 4,
                      alignItems: "center",
                      fontSize: 11,
                      color: "#64748b",
                    }}
                  >
                    <button
                      onClick={() => handleCopy(msg.text, msg.id)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#0284c7",
                        cursor: "pointer",
                        padding: 0,
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {copiedId === msg.id ? "✓ Đã copy" : "📋 Copy"}
                    </button>
                    <span>•</span>
                    <button
                      onClick={() => handleFeedback(msg.id, "like")}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        opacity: msg.feedback === "like" ? 1 : 0.5,
                      }}
                    >
                      👍
                    </button>
                    <button
                      onClick={() => handleFeedback(msg.id, "dislike")}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        opacity: msg.feedback === "dislike" ? 1 : 0.5,
                      }}
                    >
                      👎
                    </button>
                  </div>
                )}

                {msg.options && msg.options.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      marginTop: 8,
                    }}
                  >
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={opt.action}
                        style={{
                          backgroundColor: "#f0f9ff",
                          color: "#0369a1",
                          border: "1px solid #bae6fd",
                          padding: "8px 10px",
                          borderRadius: 8,
                          fontSize: 12,
                          fontWeight: 600,
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        {opt.label} →
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Gợi ý Auto-Suggest xổ lên khi gõ */}
          {autoSuggestions.length > 0 && (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderTop: "1px solid #e2e8f0",
                padding: "6px 10px",
                display: "flex",
                gap: 6,
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: 11, color: "#64748b", width: "100%" }}>
                💡 Gợi ý từ khóa:
              </span>
              {autoSuggestions.map((sug, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(sug)}
                  style={{
                    background: "#e0f2fe",
                    color: "#0369a1",
                    border: "none",
                    borderRadius: 12,
                    padding: "3px 10px",
                    fontSize: 11,
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  {sug}
                </button>
              ))}
            </div>
          )}

          {/* Quick Replies */}
          <div
            style={{
              display: "flex",
              gap: 6,
              padding: "8px 10px",
              backgroundColor: "#fff",
              borderTop: "1px solid #f1f5f9",
              overflowX: "auto",
            }}
          >
            {quickReplies.map((qr, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qr.query)}
                style={{
                  background: "#f1f5f9",
                  border: "1px solid #cbd5e1",
                  borderRadius: 16,
                  padding: "4px 10px",
                  fontSize: 11,
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  color: "#334155",
                  fontWeight: 600,
                }}
              >
                {qr.label}
              </button>
            ))}
          </div>

          {/* Form Nhập */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              display: "flex",
              padding: "8px 10px",
              borderTop: "1px solid #e2e8f0",
              backgroundColor: "#ffffff",
              gap: 6,
            }}
          >
            <input
              type="text"
              placeholder="Nhập câu hỏi, Model máy hoặc Mã lỗi..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid #cbd5e1",
                outline: "none",
                fontSize: 13,
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#0284c7",
                color: "#ffffff",
                border: "none",
                padding: "8px 14px",
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
    </>
  );
}
