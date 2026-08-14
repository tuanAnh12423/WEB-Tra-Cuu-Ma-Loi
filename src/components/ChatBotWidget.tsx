import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { errors, categories } from "../data/errors";
import { manuals } from "../data/manuals";
import { chatbotKnowledge } from "../data/chatbotKnowledge";

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
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState("");
  const [selectedModelFilter, setSelectedModelFilter] = useState<string>("ALL");
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
        text: "Xin chào! Tôi là Trợ lý Tra cứu Hỗ trợ Tổng đài Toshiba. Bạn có thể chọn Bộ lọc Model bên trên hoặc gõ Mã lỗi/Model máy để tìm kiếm tức thì!",
      },
    ];
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("chat_history", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Các model phục vụ Filter nhanh ở Header
  const modelFilters = [
    { id: "ALL", label: "🌐 Tất cả" },
    { id: "RF611", label: "🧊 Tủ lạnh RF611" },
    { id: "15F9", label: "🍽️ Máy rửa 15F9" },
    { id: "15F8", label: "🍽️ Máy rửa 15F8" },
    { id: "15F7", label: "🍽️ Máy rửa 15F7" },
  ];

  // Gợi ý từ khóa tự động (Auto-suggest)
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
          .slice(0, 5)
      : [];

  // Copy dành cho Khách hàng (Thêm lời chào lịch sự)
  const handleCopyForCustomer = (text: string, msgId: string) => {
    const cleanText = text
      .replace(/<[^>]*>/g, "") // Loại bỏ các thẻ HTML nếu có
      .replace(/###\s*/g, "")
      .replace(/---/g, "")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "");

    const customerFormatted = `Dạ Toshiba xin hướng dẫn anh/chị ạ:\n\n${cleanText}\n\nNếu cần hỗ trợ thêm, anh/chị liên hệ lại tổng đài 1800 1529 nhé!`;

    navigator.clipboard.writeText(customerFormatted);
    setCopiedId(`cust_${msgId}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Copy Kỹ thuật (Giữ thuần túy thông số)
  const handleCopyTechnical = (text: string, msgId: string) => {
    const cleanText = text
      .replace(/<[^>]*>/g, "")
      .replace(/###\s*/g, "")
      .replace(/---/g, "")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "");

    navigator.clipboard.writeText(cleanText);
    setCopiedId(`tech_${msgId}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFeedback = (msgId: string, type: "like" | "dislike") => {
    setMessages((prev) =>
      prev.map((m) => (m.id === msgId ? { ...m, feedback: type } : m)),
    );
  };

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

  // 🌳 BƯỚC 2: CHỌN LOẠI THÔNG TIN
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
        text: `✅ Tìm thấy ${filtered.length} mã lỗi dành cho **${categoryName}**. Bấm vào lỗi bên dưới để xem:`,
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

  // 🔍 XỬ LÝ TÌM KIẾM DỮ LIỆU
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

    let matchedKnowledge = chatbotKnowledge.filter((k) =>
      k.keywords.some((kw) => {
        const cleanKw = cleanString(kw);
        return cleanKw.includes(cleanKeyword) || cleanKeyword.includes(cleanKw);
      }),
    );

    // Áp dụng bộ lọc Model nếu đang chọn Filter
    if (selectedModelFilter !== "ALL") {
      matchedKnowledge = matchedKnowledge.filter(
        (k) =>
          cleanString(k.title || "").includes(cleanString(selectedModelFilter)) ||
          k.keywords.some((kw) =>
            cleanString(kw).includes(cleanString(selectedModelFilter)),
          ),
      );
    }

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

    const matchedManuals = (manuals || []).filter((item: any) => {
      const model = cleanString(
        item.model || item.modelName || item.code || "",
      );
      const title = cleanString(item.title || item.name || "");
      const category = cleanString(item.category || "");
      const id = cleanString(item.id || "");
      return (
        model.includes(cleanKeyword) ||
        title.includes(cleanKeyword) ||
        category.includes(cleanKeyword) ||
        id.includes(cleanKeyword)
      );
    });

    let botResponseText = "";
    let botOptions: Option[] = [];

    if (matchedKnowledge.length > 0) {
      if (matchedKnowledge.length === 1) {
        botResponseText = matchedKnowledge[0].answer;
        if (matchedKnowledge[0].link) {
          botOptions.push({
            label: "🔗 Xem chi tiết liên kết",
            action: () => window.open(matchedKnowledge[0].link, "_blank"),
          });
        }
      } else {
        botResponseText = `🔍 Tìm thấy **${matchedKnowledge.length}** kết quả phù hợp với từ khóa "${queryText}".\nVui lòng bấm chọn thông tin bên dưới:`;

        matchedKnowledge.forEach((item) => {
          let displayTag = "📌";
          if (item.title?.includes("RF611")) displayTag = "🧊 [TỦ LẠNH RF611]";
          else if (item.title?.includes("DW-15F9")) displayTag = "🍽️ [MÁY RỬA 15F9]";
          else if (item.title?.includes("DW-15F8")) displayTag = "🍽️ [MÁY RỬA 15F8]";
          else if (item.title?.includes("DW-15F7")) displayTag = "🍽️ [MÁY RỬA 15F7]";

          botOptions.push({
            label: `${displayTag} ${item.title || "Xem chi tiết"}`,
            action: () => {
              setMessages((prev) => [
                ...prev,
                {
                  id: Date.now().toString(),
                  sender: "user",
                  text: item.title || "Xem chi tiết",
                },
                {
                  id: (Date.now() + 1).toString(),
                  sender: "bot",
                  text: item.answer,
                  options: item.link
                    ? [
                        {
                          label: "🔗 Xem chi tiết liên kết",
                          action: () => window.open(item.link, "_blank"),
                        },
                      ]
                    : [],
                },
              ]);
            },
          });
        });
      }
    } else {
      const totalMatches = matchedCallCenter.length + matchedManuals.length;

      if (totalMatches > 0) {
        botResponseText = `🔍 Tìm thấy ${totalMatches} kết quả phù hợp cho "${queryText}":`;

        matchedManuals.slice(0, 3).forEach((item: any) => {
          const displayModel = item.model || item.modelName || "PDF";
          const displayTitle = item.title || item.name || "Sách HDSD";
          const pdfLink = item.pdfUrl || item.link || item.url || item.file;

          botOptions.push({
            label: `📖 [SÁCH HDSD] ${displayModel} - ${displayTitle}`,
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

        matchedCallCenter.slice(0, 3).forEach((item: any) => {
          botOptions.push({
            label: `🎧 [MÃ LỖI] ${item.code || ""} - ${item.title}`,
            action: () => {
              navigate(`/error-detail/${item.id}`);
              setIsOpen(false);
            },
          });
        });
      } else {
        botResponseText = `❌ Không tìm thấy thông tin cho từ khóa "${queryText}".\n\n👉 Bạn hãy chọn ngành hàng bên dưới để tra cứu:`;

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
    }, 200);
  };

  const handleClearHistory = () => {
    localStorage.removeItem("chat_history");
    setMessages([
      {
        id: "1",
        sender: "bot",
        text: "Lịch sử trò chuyện đã được dọn dẹp! Bạn cần tra cứu thông tin gì tiếp theo?",
      },
    ]);
  };

  // 🌟 Hàm Format & Render văn bản chuẩn (Loại bỏ <br /> thừa xung quanh Table)
  const renderFormattedText = (text: string) => {
    let formatted = text
      // 1. Biến ### Thành Header Card xanh
      .replace(
        /###\s*(.*)/g,
        '<div style="color: #0369a1; font-size: 13px; font-weight: 800; background: #f0f9ff; padding: 6px 10px; border-radius: 6px; border-left: 4px solid #0284c7; margin-bottom: 8px;">$1</div>',
      )
      // 2. Biến --- Thành đường kẻ ngang
      .replace(
        /---/g,
        '<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 8px 0;" />',
      )
      // 3. In đậm & In nghiêng
      .replace(
        /\*\*(.*?)\*\*/g,
        '<strong style="color: #0f172a; font-weight: 700;">$1</strong>',
      )
      .replace(/\*(.*?)\*/g, '<em style="color: #0284c7;">$1</em>')
      
      // 4. Xuống dòng tự nhiên
      .replace(/\n/g, "<br />")

      // 🌟 Xóa bỏ toàn bộ <br /> thừa xung quanh các thẻ HTML Bảng
      .replace(/<br\s*\/?>\s*(?=<table|<thead|<tbody|<tr|<th|<td|<\/table|<\/thead|<\/tbody|<\/tr|<\/th|<\/td)/gi, "")
      .replace(/(<\/table>|<\/thead>|<\/tbody>|<\/tr>|<\/th>|<\/td>)\s*<br\s*\/?>/gi, "$1");

    // 5. Highlight từ khóa đang nhập
    if (input.trim().length >= 2) {
      try {
        const reg = new RegExp(`(${input.trim()})`, "gi");
        formatted = formatted.replace(
          reg,
          '<mark style="background: #fef08a; padding: 0 2px; border-radius: 2px; color: #854d0e;">$1</mark>',
        );
      } catch (e) {
        /* ignore regex error */
      }
    }

    return formatted;
  };

  return (
    <>
      {/* Nút Toggle mở Chatbot ở góc màn hình */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
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
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "fixed",
            bottom: isMaximized ? 20 : 86,
            right: 20,
            width: isMaximized ? "calc(100vw - 40px)" : 430,
            maxWidth: isMaximized ? 1200 : "94vw",
            height: isMaximized ? "calc(100vh - 100px)" : 600,
            maxHeight: isMaximized ? "none" : "85vh",
            backgroundColor: "#ffffff",
            borderRadius: 16,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 9999,
            border: "1px solid #e2e8f0",
            transition: "all 0.25s ease-in-out",
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
              <span style={{ fontSize: 22 }}>🤖</span>
              <div>
                <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>
                  Trợ Lý Tra Cứu Hỗ Trợ
                </h3>
                <span style={{ fontSize: 11, color: "#4ade80" }}>
                  ● Call Center & Training Q&A
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMaximized(!isMaximized);
                }}
                title={isMaximized ? "Thu nhỏ" : "Phóng to toàn màn hình"}
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "none",
                  color: "#cbd5e1",
                  cursor: "pointer",
                  fontSize: 12,
                  padding: "4px 8px",
                  borderRadius: 6,
                  fontWeight: 600,
                }}
              >
                {isMaximized ? "🗗 Thu nhỏ" : "🗖 Phóng to"}
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleClearHistory();
                }}
                title="Xóa lịch sử"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#94a3b8",
                  cursor: "pointer",
                  fontSize: 12,
                  padding: "4px 6px",
                }}
              >
                🗑️ Xóa
              </button>
            </div>
          </div>

          {/* Thanh Filter Model gọn gàng */}
          <div
            style={{
              display: "flex",
              gap: 6,
              padding: "8px 12px",
              backgroundColor: "#1e293b",
              borderBottom: "1px solid #334155",
              overflowX: "auto",
            }}
          >
            {modelFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedModelFilter(filter.id);
                }}
                style={{
                  background:
                    selectedModelFilter === filter.id ? "#0284c7" : "#334155",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: 12,
                  padding: "4px 10px",
                  fontSize: 11,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Màn hình Lịch sử Tin nhắn */}
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
                  maxWidth: isMaximized ? "80%" : "92%",
                }}
              >
                <div
                  style={{
                    backgroundColor:
                      msg.sender === "user" ? "#0284c7" : "#ffffff",
                    color: msg.sender === "user" ? "#ffffff" : "#0f172a",
                    padding: msg.sender === "user" ? "10px 14px" : "12px 14px",
                    borderRadius:
                      msg.sender === "user"
                        ? "14px 14px 2px 14px"
                        : "14px 14px 14px 2px",
                    fontSize: 13,
                    lineHeight: 1.6,
                    border: msg.sender === "bot" ? "1px solid #e2e8f0" : "none",
                    boxShadow:
                      msg.sender === "bot"
                        ? "0 2px 6px rgba(0,0,0,0.03)"
                        : "none",
                  }}
                >
                  {msg.sender === "bot" ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: renderFormattedText(msg.text),
                      }}
                    />
                  ) : (
                    msg.text
                  )}
                </div>

                {/* Tiện ích 2 Nút Copy & Feedback */}
                {msg.sender === "bot" && (
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      marginTop: 4,
                      alignItems: "center",
                      fontSize: 11,
                      color: "#64748b",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCopyForCustomer(msg.text, msg.id);
                      }}
                      style={{
                        background: "#e0f2fe",
                        border: "1px solid #bae6fd",
                        color: "#0369a1",
                        cursor: "pointer",
                        padding: "2px 6px",
                        borderRadius: 4,
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {copiedId === `cust_${msg.id}`
                        ? "✓ Đã copy gửi Khách"
                        : "📋 Copy gửi Khách"}
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCopyTechnical(msg.text, msg.id);
                      }}
                      style={{
                        background: "#f1f5f9",
                        border: "1px solid #cbd5e1",
                        color: "#334155",
                        cursor: "pointer",
                        padding: "2px 6px",
                        borderRadius: 4,
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {copiedId === `tech_${msg.id}`
                        ? "✓ Đã copy Kỹ thuật"
                        : "🛠️ Copy Kỹ thuật"}
                    </button>

                    <span>•</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleFeedback(msg.id, "like");
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        opacity: msg.feedback === "like" ? 1 : 0.4,
                      }}
                    >
                      👍
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleFeedback(msg.id, "dislike");
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        opacity: msg.feedback === "dislike" ? 1 : 0.4,
                      }}
                    >
                      👎
                    </button>
                  </div>
                )}

                {/* Danh sách các nút lựa chọn */}
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
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          opt.action();
                        }}
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#0369a1",
                          border: "1px solid #bae6fd",
                          padding: "8px 12px",
                          borderRadius: 8,
                          fontSize: 12,
                          fontWeight: 600,
                          cursor: "pointer",
                          textAlign: "left",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                          transition: "background 0.2s",
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

          {/* Gợi ý Auto-Suggest khi gõ từ 2 ký tự */}
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
                💡 Gợi ý tìm nhanh:
              </span>
              {autoSuggestions.map((sug, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSend(sug);
                  }}
                  style={{
                    background: "#e0f2fe",
                    color: "#0369a1",
                    border: "none",
                    borderRadius: 12,
                    padding: "4px 10px",
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

          {/* Form Nhập câu hỏi */}
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
              placeholder="Nhập từ khóa, Model máy hoặc Mã lỗi..."
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
    </>
  );
}