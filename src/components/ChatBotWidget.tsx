import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 📦 1. IMPORT DỮ LIỆU
import { errors, categories } from "../data/errors";
import { manuals } from "../data/manuals";
import { chatbotKnowledge } from "../data/chatbotKnowledge";
import { diagnosisTree } from "../data/diagnosisTree";
import type { DiagnosisNode } from "../data/diagnosisTree";
import { deviceImages, type DeviceImageItem } from "../data/deviceImages";
import { modelComparisons } from "../data/modelComparisons";

// 🧹 2. HÀM LÀM SẠCH CHUỖI TÌM KIẾM
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

// 🏷️ 3. INTERFACES
interface Option {
  label: string;
  action: () => void;
}

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  images?: string[];
  options?: Option[];
  feedback?: "like" | "dislike";
  isPinned?: boolean;
}

interface SuggestionItem {
  type: "ERROR" | "MANUAL" | "KNOWLEDGE" | "IMAGE";
  label: string;
  subLabel?: string;
  query: string;
  icon: string;
  dataItem?: any;
}

export default function ChatBotWidget() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Mặc định mở nếu là mobile hoặc đã mở trước đó
  const [isOpen, setIsOpen] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState("");
  const [selectedModelFilter, setSelectedModelFilter] = useState<string>("ALL");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [activeModal, setActiveModal] = useState<"PINNED" | "UNRESOLVED" | "CALC" | "COMPARE" | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [compareCategory, setCompareCategory] = useState<string>("dishwasher");
  const [selectedCompareModels, setSelectedCompareModels] = useState<string[]>(["DW-15F9(B)-VN", "DW-15F8(B)-VN", "DW-15F7(G)-VN"]);
  const [calcDhInput, setCalcDhInput] = useState<string>("15");

  const [timerSeconds, setTimerSeconds] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

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
        text: "Xin chào! Tôi là Trợ lý Tra cứu Nghiệp vụ Call Center Toshiba. Bạn có thể gõ Mã lỗi/Hiện tượng để vào trực tiếp trang hướng dẫn xử lý chi tiết!",
      },
    ];
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("chat_history", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Phím tắt bàn phím
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

  // Đếm giờ thao tác
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds !== null && timerSeconds > 0) {
      interval = setInterval(() => setTimerSeconds((prev) => (prev !== null ? prev - 1 : 0)), 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
      alert("⏱️ Đã hết thời gian thao tác!");
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const startTimer = (secs: number) => {
    setTimerSeconds(secs);
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(null);
  };

  const modelFilters = [
    { id: "ALL", label: "🌐 Tất cả" },
    { id: "RF611", label: "🧊 Tủ lạnh RF611" },
    { id: "15F9", label: "🍽️ Máy rửa 15F9" },
    { id: "15F8", label: "🍽️ Máy rửa 15F8" },
    { id: "15F7", label: "🍽️ Máy rửa 15F7" },
  ];

  // 🌟 GỢI Ý THÔNG MINH - KÈM LINK TRỰC TIẾP
  const smartSuggestions: SuggestionItem[] = (() => {
    const q = cleanString(input);
    if (q.length < 2) return [];
    const results: SuggestionItem[] = [];

    // [A] Quét Mã lỗi
    errors.forEach((e) => {
      const code = cleanString(e.code || "");
      const title = cleanString(e.title || "");
      if (code.includes(q) || title.includes(q)) {
        results.push({
          type: "ERROR",
          icon: "⚡",
          label: `[Mã Lỗi ${e.code}] ${e.title}`,
          subLabel: e.description?.slice(0, 45) + "...",
          query: e.code || e.title,
          dataItem: e,
        });
      }
    });

    // [B] Quét Sách HDSD
    (manuals || []).forEach((m: any) => {
      const model = cleanString(m.model || m.code || "");
      const title = cleanString(m.title || "");
      if (model.includes(q) || title.includes(q)) {
        results.push({
          type: "MANUAL",
          icon: "📖",
          label: `[Sách HDSD] ${m.model || ""}`,
          subLabel: m.title,
          query: m.model || m.title,
          dataItem: m,
        });
      }
    });

    // [C] Quét Hình ảnh
    deviceImages.forEach((img) => {
      const title = cleanString(img.title);
      const matchKw = img.keywords.some((kw) => cleanString(kw).includes(q));
      if (title.includes(q) || matchKw) {
        results.push({
          type: "IMAGE",
          icon: "🖼️",
          label: `[Ảnh (${img.images.length})] ${img.title}`,
          subLabel: img.description,
          query: img.keywords[0] || img.title,
        });
      }
    });

    return results.slice(0, 5);
  })();

  const togglePinMessage = (msgId: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === msgId ? { ...m, isPinned: !m.isPinned } : m))
    );
  };

  const logUnresolvedQuery = (query: string) => {
    if (!query.trim()) return;
    try {
      const existing = JSON.parse(localStorage.getItem("unresolved_queries") || "[]");
      if (!existing.some((item: any) => item.query.toLowerCase() === query.trim().toLowerCase())) {
        existing.unshift({
          query: query.trim(),
          time: new Date().toLocaleString("vi-VN"),
        });
        localStorage.setItem("unresolved_queries", JSON.stringify(existing.slice(0, 50)));
      }
    } catch (e) {
      /* ignore */
    }
  };

  const handleCopyForCustomer = (text: string, msgId: string) => {
    const cleanText = text
      .replace(/<[^>]*>/g, "")
      .replace(/###\s*/g, "")
      .replace(/---/g, "")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "");

    const customerFormatted = `Dạ Toshiba xin hướng dẫn anh/chị ạ:\n\n${cleanText}\n\nNếu cần hỗ trợ thêm, anh/chị liên hệ lại tổng đài 1800 1529 nhé!`;
    navigator.clipboard.writeText(customerFormatted);
    setCopiedId(`cust_${msgId}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

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

  const handleCopyCrmTicket = (text: string, msgId: string) => {
    const cleanText = text
      .replace(/<[^>]*>/g, "")
      .replace(/###\s*/g, "")
      .replace(/---/g, "")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .slice(0, 150);

    const ticketTemplate = `[TOSHIBA SVC TICKET - ${new Date().toLocaleDateString("vi-VN")}]\n- Nội dung: Hỗ trợ kỹ thuật\n- Hướng dẫn: ${cleanText}...\n- Kết quả: Đã hướng dẫn KH thao tác.\n- Hotline: 1800 1529`;
    navigator.clipboard.writeText(ticketTemplate);
    setCopiedId(`crm_${msgId}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFeedback = (msgId: string, type: "like" | "dislike") => {
    setMessages((prev) =>
      prev.map((m) => (m.id === msgId ? { ...m, feedback: type } : m))
    );
  };

  // 🌟 HÀM MỞ TRỰC TIẾP TRANG CHI TIẾT MÃ LỖI TRÊN WEB NỀN
  const handleGoToErrorPage = (item: any) => {
    navigate(`/error-detail/${item.id}`);
    setIsOpen(false); // Ẩn chatbot để hiện trang web chi tiết
  };

  // Cây chẩn đoán pan bệnh
  const handleDiagnosisStep = (node: DiagnosisNode, userSelectedLabel: string) => {
    const nextOptions: Option[] = [];
    if (node.children && node.children.length > 0) {
      node.children.forEach((child) => {
        nextOptions.push({
          label: child.label,
          action: () => handleDiagnosisStep(child, child.label),
        });
      });
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), sender: "user", text: userSelectedLabel },
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: `### 🧭 ${node.title || node.label.toUpperCase()}\n---\n${node.guide || "Vui lòng chọn hiện tượng chi tiết bên dưới:"}`,
          options: nextOptions,
        },
      ]);
    } else if (node.result) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), sender: "user", text: userSelectedLabel },
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: `### 🛠️ ${node.title ? node.title.toUpperCase() : "HƯỚNG DẪN XỬ LÝ"}\n---\n${node.result}`,
        },
      ]);
    }
  };

  const startDecisionTree = () => {
    const rootOptions: Option[] = diagnosisTree.map((device) => ({
      label: device.label,
      action: () => handleDiagnosisStep(device, device.label),
    }));

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "bot",
        text: "### 🌳 CHẨN ĐOÁN PAN BỆNH THEO HIỆN TƯỢNG\n---\nVui lòng chọn thiết bị đang gặp sự cố để bắt đầu kiểm tra từng bước:",
        options: rootOptions,
      },
    ]);
  };

  // Tra cứu hình ảnh
  const showImageCatalog = () => {
    const categoryMap: { [key: string]: { label: string; icon: string } } = {
      washing: { label: "Máy giặt & Máy sấy", icon: "🧺" },
      fridge: { label: "Tủ lạnh", icon: "🧊" },
      dishwasher: { label: "Máy rửa chén", icon: "🍽️" },
      waterPurifier: { label: "Máy lọc nước", icon: "💧" },
    };

    const options: Option[] = Object.keys(categoryMap).map((catKey) => {
      const count = deviceImages.filter((img) => img.category === catKey).length;
      return {
        label: `${categoryMap[catKey].icon} ${categoryMap[catKey].label} (${count} model)`,
        action: () => showImageModelsByCategory(catKey, categoryMap[catKey].label),
      };
    });

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "bot",
        text: "### 🖼️ THƯ VIỆN HÌNH ẢNH & SƠ ĐỒ THIẾT BỊ\n---\n**Bước 1:** Vui lòng chọn ngành hàng bạn muốn tra cứu hình ảnh sơ đồ:",
        options,
      },
    ]);
  };

  const showImageModelsByCategory = (categoryId: string, categoryName: string) => {
    const filteredImages = deviceImages.filter((img) => img.category === categoryId);
    const options: Option[] = filteredImages.map((img) => ({
      label: `📌 [${img.model}] ${img.title} (${img.images.length} ảnh)`,
      action: () => displayImageResult(img),
    }));

    options.push({
      label: "⬅️ Chọn ngành hàng khác",
      action: () => showImageCatalog(),
    });

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), sender: "user", text: categoryName },
      {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: `### 🖼️ SƠ ĐỒ HÌNH ẢNH (${categoryName.toUpperCase()})\n---\n**Bước 2:** Chọn Model máy cần xem chi tiết sơ đồ:`,
        options,
      },
    ]);
  };

  const displayImageResult = (img: DeviceImageItem) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), sender: "user", text: img.title },
      {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: `### 🖼️ ${img.title.toUpperCase()}\n---\n**Mô tả:** ${img.description}\n*(Tìm thấy ${img.images.length} hình ảnh, bấm vào ảnh để phóng to)*`,
        images: img.images,
        options: [
          {
            label: "⬅️ Xem model khác cùng danh mục",
            action: () => showImageModelsByCategory(img.category, img.category),
          },
        ],
      },
    ]);
  };

  // 🔍 TÌM KIẾM TRUNG TÂM
  const handleSend = (textToSend?: string) => {
    const queryText = textToSend || input;
    if (!queryText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: queryText,
    };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");

    const cleanKeyword = cleanString(queryText);

    // [A] Khớp Hình ảnh
    const matchedImg = deviceImages.find(
      (img) =>
        cleanString(img.title).includes(cleanKeyword) ||
        img.keywords.some((kw) => cleanString(kw).includes(cleanKeyword) || cleanKeyword.includes(cleanString(kw)))
    );

    if (matchedImg) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: "bot",
            text: `### 🖼️ ${matchedImg.title.toUpperCase()}\n---\n**Mô tả:** ${matchedImg.description}\n*(Tìm thấy ${matchedImg.images.length} hình ảnh, bấm vào ảnh để phóng to)*`,
            images: matchedImg.images,
          },
        ]);
      }, 200);
      return;
    }

    // [B] Trợ giúp chung
    const helpKeywords = ["giuptoi", "toicangiup", "help", "hotro", "trogiup", "menu", "batdau", "canhotro", "huongdan", "hinh"];
    const isHelpIntent = helpKeywords.some((kw) => cleanKeyword.includes(kw) || kw.includes(cleanKeyword));

    if (isHelpIntent) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: "bot",
            text: "### 🧭 TRUNG TÂM HỖ TRỢ TRA CỨU NHANH\n---\nChào bạn, vui lòng **chọn Ngành hàng hoặc Công cụ tra cứu** bên dưới:",
            options: [
              { label: "🖼️ Tra cứu Hình ảnh Bảng điều khiển & Sơ đồ", action: () => showImageCatalog() },
              { label: "🌳 Cây Chẩn đoán Pan bệnh (Theo hiện tượng)", action: () => startDecisionTree() },
              { label: "⚖️ Đối chiếu So sánh Thông số Model", action: () => setActiveModal("COMPARE") },
              { label: "🧺 Tra cứu Máy giặt & Máy sấy", action: () => handleSend("TW-BK115") },
              { label: "🧊 Tra cứu Tủ lạnh Toshiba", action: () => handleSend("GR-RF611WI-PGV") },
              { label: "🍽️ Tra cứu Máy rửa chén Toshiba", action: () => handleSend("DW-15F9(B)-VN") },
            ],
          },
        ]);
      }, 200);
      return;
    }

    // [C] Khớp Knowledge Base Q&A
    let matchedKnowledge = chatbotKnowledge.filter((k) =>
      k.keywords.some((kw) => {
        const cleanKw = cleanString(kw);
        return cleanKw.includes(cleanKeyword) || cleanKeyword.includes(cleanKw);
      })
    );

    if (selectedModelFilter !== "ALL") {
      matchedKnowledge = matchedKnowledge.filter(
        (k) =>
          cleanString(k.title || "").includes(cleanString(selectedModelFilter)) ||
          k.keywords.some((kw) => cleanString(kw).includes(cleanString(selectedModelFilter)))
      );
    }

    // [D] Khớp Danh mục Mã lỗi (errors.ts)
    const matchedCallCenter = errors.filter((item: any) => {
      const code = cleanString(item.code || "");
      const title = cleanString(item.title || "");
      const desc = cleanString(item.description || "");
      return code.includes(cleanKeyword) || title.includes(cleanKeyword) || desc.includes(cleanKeyword);
    });

    // [E] Khớp Sách HDSD (manuals.ts)
    const matchedManuals = (manuals || []).filter((item: any) => {
      const model = cleanString(item.model || item.modelName || item.code || "");
      const title = cleanString(item.title || item.name || "");
      const category = cleanString(item.category || "");
      const id = cleanString(item.id || "");
      return model.includes(cleanKeyword) || title.includes(cleanKeyword) || category.includes(cleanKeyword) || id.includes(cleanKeyword);
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
          botOptions.push({
            label: `📌 ${item.title || "Xem chi tiết"}`,
            action: () => {
              setMessages((prev) => [
                ...prev,
                { id: Date.now().toString(), sender: "user", text: item.title || "Xem chi tiết" },
                {
                  id: (Date.now() + 1).toString(),
                  sender: "bot",
                  text: item.answer,
                  options: item.link
                    ? [{ label: "🔗 Xem chi tiết liên kết", action: () => window.open(item.link, "_blank") }]
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
        botResponseText = `🔍 Tìm thấy ${totalMatches} kết quả phù hợp cho "${queryText}". Bấm vào để **mở trang xử lý chi tiết**:`;

        // 🌟 BẤM VÀO LÀ MỞ THẲNG TRANG WEB NỀN
        matchedCallCenter.slice(0, 6).forEach((item: any) => {
          botOptions.push({
            label: `🚀 [MÃ LỖI ${item.code || ""}] ${item.title} (Vào trang chi tiết) →`,
            action: () => handleGoToErrorPage(item),
          });
        });

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
                navigate(`/manuals?search=${encodeURIComponent(displayModel || displayTitle)}`);
                setIsOpen(false);
              }
            },
          });
        });
      } else {
        logUnresolvedQuery(queryText);
        botResponseText = `❌ Chưa tìm thấy dữ liệu chính xác cho từ khóa "${queryText}".\n\n👉 Bạn hãy chọn công cụ tra cứu bên dưới:`;
        botOptions = [
          { label: "🖼️ Xem thư viện hình ảnh", action: () => showImageCatalog() },
          { label: "🌳 Chẩn đoán theo hiện tượng", action: () => startDecisionTree() },
          ...categories.map((cat) => ({
            label: `${cat.icon || "⚙️"} ${cat.name}`,
            action: () => handleSelectCategory(cat.id, cat.name),
          })),
        ];
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

  const handleSelectCategory = (categoryId: string, categoryName: string) => {
    const filtered = errors.filter((e) => e.category === categoryId);
    let options: Option[] = filtered.slice(0, 8).map((item) => ({
      label: `🚀 [${item.code || "LỖI"}] ${item.title} (Vào trang) →`,
      action: () => handleGoToErrorPage(item),
    }));

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), sender: "user", text: categoryName },
      {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: `✅ Danh sách mã lỗi của **${categoryName}**. Bấm vào để mở trang hướng dẫn chi tiết:`,
        options,
      },
    ]);
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

  const renderFormattedText = (text: string) => {
    let formatted = text
      .replace(
        /###\s*(.*)/g,
        '<div style="color: #0369a1; font-size: 13px; font-weight: 800; background: #f0f9ff; padding: 6px 10px; border-radius: 6px; border-left: 4px solid #0284c7; margin-bottom: 8px;">$1</div>'
      )
      .replace(/---/g, '<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 8px 0;" />')
      .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #0f172a; font-weight: 700;">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em style="color: #0284c7;">$1</em>')
      .replace(/\n/g, "<br />")
      .replace(/<br\s*\/?>\s*(?=<table|<thead|<tbody|<tr|<th|<td|<\/table|<\/thead|<\/tbody|<\/tr|<\/th|<\/td)/gi, "")
      .replace(/(<\/table>|<\/thead>|<\/tbody>|<\/tr>|<\/th>|<\/td>)\s*<br\s*\/?>/gi, "$1");

    if (input.trim().length >= 2) {
      try {
        const reg = new RegExp(`(${input.trim()})`, "gi");
        formatted = formatted.replace(
          reg,
          '<mark style="background: #fef08a; padding: 0 2px; border-radius: 2px; color: #854d0e;">$1</mark>'
        );
      } catch (e) {
        /* ignore */
      }
    }

    return formatted;
  };

  const calculateWaterHardness = (valStr: string) => {
    const val = parseFloat(valStr);
    if (isNaN(val)) return "Vui lòng nhập số hợp lệ (°dH)";
    if (val <= 5) return "Mức H1 (0 - 5 °dH): Không cần tái sinh muối (0g/chu kỳ)";
    if (val <= 11) return "Mức H2 (6 - 11 °dH): Tái tạo sau mỗi 10 chu trình (9g muối)";
    if (val <= 17) return "Mức H3 ⭐ (12 - 17 °dH): Mặc định nhà máy. Tái tạo sau 5 chu trình (12g muối)";
    if (val <= 22) return "Mức H4 (18 - 22 °dH): Tái tạo sau mỗi 3 chu trình (20g muối)";
    if (val <= 34) return "Mức H5 (23 - 34 °dH): Tái tạo sau mỗi 2 chu trình (30g muối)";
    return "Mức H6 (35 - 55 °dH): Nước rất cứng! Tái tạo sau mỗi 1 chu trình (60g muối)";
  };

  const renderSpecValue = (value: string | undefined) => {
    if (!value) return "—";
    if (value.startsWith("✕") || value.toLowerCase().includes("không")) {
      return (
        <span style={{ display: "inline-block", backgroundColor: "#fee2e2", color: "#dc2626", padding: "2px 6px", borderRadius: 4, fontWeight: 700, fontSize: 10 }}>
          {value}
        </span>
      );
    }
    if (value.startsWith("✓") || value.toLowerCase().includes("có")) {
      return (
        <span style={{ display: "inline-block", backgroundColor: "#dcfce7", color: "#16a34a", padding: "2px 6px", borderRadius: 4, fontWeight: 700, fontSize: 10 }}>
          {value}
        </span>
      );
    }
    return <span style={{ fontWeight: 600, color: "#0f172a" }}>{value}</span>;
  };

  const toggleCompareModel = (modelName: string) => {
    if (selectedCompareModels.includes(modelName)) {
      if (selectedCompareModels.length > 1) {
        setSelectedCompareModels(selectedCompareModels.filter((m) => m !== modelName));
      }
    } else {
      setSelectedCompareModels([...selectedCompareModels, modelName]);
    }
  };

  const currentCategoryCompareData = modelComparisons.find((c) => c.category === compareCategory);
  const activeCompareModels = (currentCategoryCompareData?.models || []).filter((m) =>
    selectedCompareModels.includes(m.model)
  );

  const pinnedMessages = messages.filter((m) => m.isPinned);
  const unresolvedList = JSON.parse(localStorage.getItem("unresolved_queries") || "[]");

  return (
    <>
      {/* 🔘 NÚT MỞ LẠI CHATBOT (HIỂN THỊ TRÊN MÀN HÌNH KHI CHATBOT ĐANG ĐÓNG) */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          title="Mở lại Trợ lý Call Center (Ctrl + K)"
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "#0284c7",
            color: "#ffffff",
            border: "none",
            boxShadow: "0 4px 14px rgba(2, 132, 199, 0.4)",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "10px 16px",
            borderRadius: 24,
          }}
        >
          <span>🤖 Mở Chatbot</span>
        </button>
      )}

      {/* 💬 Khung Chatbot */}
      {isOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100dvh",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            zIndex: 99999,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#0f172a",
              color: "#ffffff",
              padding: "10px 14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 20 }}>🤖</span>
              <div>
                <h3 style={{ margin: 0, fontSize: 13, fontWeight: 700 }}>Trợ Lý Call Center Toshiba</h3>
                <span style={{ fontSize: 10, color: "#4ade80" }}>
                  ● SVC Station
                  {timerSeconds !== null && ` | ⏱️ ${timerSeconds}s`}
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {/* Nút Xem Đã Ghim */}
              <button
                type="button"
                onClick={() => setActiveModal(activeModal === "PINNED" ? null : "PINNED")}
                title="Xem câu trả lời đã ghim"
                style={{
                  background: pinnedMessages.length > 0 ? "#f59e0b" : "rgba(255,255,255,0.12)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "4px 6px",
                  fontSize: 11,
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                ⭐ ({pinnedMessages.length})
              </button>

              {/* Nút So sánh Model */}
              <button
                type="button"
                onClick={() => setActiveModal(activeModal === "COMPARE" ? null : "COMPARE")}
                title="Bảng đối chiếu thông số Model"
                style={{
                  background: activeModal === "COMPARE" ? "#0284c7" : "rgba(255,255,255,0.12)",
                  color: "#cbd5e1",
                  border: "none",
                  borderRadius: 6,
                  padding: "4px 6px",
                  fontSize: 11,
                  cursor: "pointer",
                }}
              >
                ⚖️
              </button>

              {/* Nút Tính Toán */}
              <button
                type="button"
                onClick={() => setActiveModal(activeModal === "CALC" ? null : "CALC")}
                title="Tiện ích quy đổi muối & hẹn giờ"
                style={{
                  background: activeModal === "CALC" ? "#0284c7" : "rgba(255,255,255,0.12)",
                  color: "#cbd5e1",
                  border: "none",
                  borderRadius: 6,
                  padding: "4px 6px",
                  fontSize: 11,
                  cursor: "pointer",
                }}
              >
                🧮
              </button>

              {/* Nút Thu nhỏ để xem trang Web nền */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Thu nhỏ để xem Web nền"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: 6,
                  padding: "4px 8px",
                  fontSize: 11,
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                🌐 Xem Web
              </button>

              <button
                type="button"
                onClick={handleClearHistory}
                title="Xóa lịch sử"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#94a3b8",
                  cursor: "pointer",
                  fontSize: 11,
                  padding: "4px",
                }}
              >
                🗑️
              </button>
            </div>
          </div>

          {/* Thanh Filter & Nút Chức Năng Nhanh */}
          <div
            style={{
              display: "flex",
              gap: 6,
              padding: "6px 10px",
              backgroundColor: "#1e293b",
              borderBottom: "1px solid #334155",
              overflowX: "auto",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <button
              type="button"
              onClick={showImageCatalog}
              style={{
                background: "#0891b2",
                color: "#ffffff",
                border: "none",
                borderRadius: 12,
                padding: "3px 8px",
                fontSize: 11,
                fontWeight: 700,
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              🖼️ Tra cứu Ảnh
            </button>

            <button
              type="button"
              onClick={startDecisionTree}
              style={{
                background: "#0284c7",
                color: "#ffffff",
                border: "none",
                borderRadius: 12,
                padding: "3px 8px",
                fontSize: 11,
                fontWeight: 700,
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              🌳 Chẩn đoán bệnh
            </button>

            {modelFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedModelFilter(filter.id);
                }}
                style={{
                  background: selectedModelFilter === filter.id ? "#0284c7" : "#334155",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: 12,
                  padding: "3px 8px",
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

          {/* MODALS PANEL */}
          {activeModal === "PINNED" && (
            <div style={{ backgroundColor: "#fef3c7", padding: "10px", borderBottom: "1px solid #fde68a", maxHeight: 180, overflowY: "auto", flexShrink: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#92400e" }}>⭐ Danh sách câu trả lời đã ghim ({pinnedMessages.length}):</span>
                <button type="button" onClick={() => setActiveModal(null)} style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 11 }}>✕ Đóng</button>
              </div>
              {pinnedMessages.length === 0 ? (
                <span style={{ fontSize: 11, color: "#b45309" }}>Chưa có tin nhắn nào được ghim. Bấm nút ⭐ dưới mỗi câu trả lời của Bot để lưu lại!</span>
              ) : (
                pinnedMessages.map((p) => (
                  <div key={p.id} style={{ background: "#ffffff", padding: "6px 8px", borderRadius: 6, marginBottom: 4, fontSize: 11, border: "1px solid #fde68a" }}>
                    <div style={{ fontWeight: 600, color: "#0f172a", marginBottom: 2 }}>{p.text.slice(0, 60)}...</div>
                    <button type="button" onClick={() => handleCopyForCustomer(p.text, p.id)} style={{ color: "#0284c7", background: "none", border: "none", cursor: "pointer", fontSize: 10, padding: 0 }}>📋 Copy cho khách</button>
                  </div>
                ))
              )}
            </div>
          )}

          {activeModal === "COMPARE" && (
            <div style={{ backgroundColor: "#f8fafc", padding: "10px", borderBottom: "1px solid #cbd5e1", maxHeight: 250, overflowY: "auto", fontSize: 11, flexShrink: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, alignItems: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#0369a1" }}>⚖️ SO SÁNH THÔNG SỐ MODEL:</span>
                <button type="button" onClick={() => setActiveModal(null)} style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 11 }}>✕ Đóng</button>
              </div>

              <div style={{ display: "flex", gap: 4, marginBottom: 8, overflowX: "auto" }}>
                {modelComparisons.map((cat) => (
                  <button
                    key={cat.category}
                    type="button"
                    onClick={() => {
                      setCompareCategory(cat.category);
                      setSelectedCompareModels(cat.models.map((m) => m.model).slice(0, 3));
                    }}
                    style={{
                      background: compareCategory === cat.category ? "#0284c7" : "#e2e8f0",
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

              <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center", flexWrap: "wrap", background: "#f1f5f9", padding: "4px 8px", borderRadius: 6 }}>
                <span style={{ fontSize: 10, color: "#64748b", fontWeight: 600 }}>Chọn model:</span>
                {currentCategoryCompareData?.models.map((m) => (
                  <label key={m.model} style={{ display: "flex", alignItems: "center", gap: 3, cursor: "pointer", fontSize: 10 }}>
                    <input
                      type="checkbox"
                      checked={selectedCompareModels.includes(m.model)}
                      onChange={() => toggleCompareModel(m.model)}
                    />
                    {m.model}
                  </label>
                ))}
              </div>

              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center", fontSize: 10, background: "#fff" }}>
                <thead>
                  <tr style={{ background: "#e0f2fe", color: "#0369a1" }}>
                    <th style={{ border: "1px solid #bae6fd", padding: 4, textAlign: "left" }}>Tính năng</th>
                    {activeCompareModels.map((m) => (
                      <th key={m.model} style={{ border: "1px solid #bae6fd", padding: 4 }}>
                        {m.model}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentCategoryCompareData?.attributes.map((attr) => (
                    <tr key={attr}>
                      <td style={{ border: "1px solid #e2e8f0", padding: 4, textAlign: "left", fontWeight: 600, color: "#475569" }}>
                        {attr}
                      </td>
                      {activeCompareModels.map((m) => (
                        <td key={m.model} style={{ border: "1px solid #e2e8f0", padding: 4 }}>
                          {renderSpecValue(m.specs[attr])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeModal === "CALC" && (
            <div style={{ backgroundColor: "#f0fdf4", padding: "10px", borderBottom: "1px solid #bbf7d0", fontSize: 11, flexShrink: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#166534" }}>🧮 Tiện ích Quy đổi & Đếm giờ thao tác:</span>
                <button type="button" onClick={() => setActiveModal(null)} style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 11 }}>✕ Đóng</button>
              </div>

              <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
                <span style={{ fontWeight: 600 }}>⏱️ Hẹn giờ:</span>
                <button type="button" onClick={() => startTimer(3)} style={{ background: "#dcfce7", border: "1px solid #86efac", borderRadius: 4, padding: "2px 5px", cursor: "pointer", fontSize: 10 }}>Giữ 3s</button>
                <button type="button" onClick={() => startTimer(5)} style={{ background: "#dcfce7", border: "1px solid #86efac", borderRadius: 4, padding: "2px 5px", cursor: "pointer", fontSize: 10 }}>Giữ 5s</button>
                <button type="button" onClick={() => startTimer(300)} style={{ background: "#dcfce7", border: "1px solid #86efac", borderRadius: 4, padding: "2px 5px", cursor: "pointer", fontSize: 10 }}>Xả tụ 5p</button>
                <button type="button" onClick={() => startTimer(900)} style={{ background: "#dcfce7", border: "1px solid #86efac", borderRadius: 4, padding: "2px 5px", cursor: "pointer", fontSize: 10 }}>Nguội bát 15p</button>
                {timerSeconds !== null && (
                  <button type="button" onClick={stopTimer} style={{ background: "#fee2e2", border: "1px solid #fca5a5", color: "#b91c1c", borderRadius: 4, padding: "2px 5px", cursor: "pointer", fontSize: 10 }}>Dừng</button>
                )}
              </div>

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
          )}

          {/* 📜 Màn hình Tin nhắn */}
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
                  maxWidth: "94%",
                }}
              >
                <div
                  style={{
                    backgroundColor: msg.sender === "user" ? "#0284c7" : "#ffffff",
                    color: msg.sender === "user" ? "#ffffff" : "#0f172a",
                    padding: msg.sender === "user" ? "10px 14px" : "12px 14px",
                    borderRadius: msg.sender === "user" ? "14px 14px 2px 14px" : "14px 14px 14px 2px",
                    fontSize: 13,
                    lineHeight: 1.6,
                    border: msg.sender === "bot" ? "1px solid #e2e8f0" : "none",
                    boxShadow: msg.sender === "bot" ? "0 2px 6px rgba(0,0,0,0.03)" : "none",
                  }}
                >
                  {msg.sender === "bot" ? (
                    <>
                      <div dangerouslySetInnerHTML={{ __html: renderFormattedText(msg.text) }} />

                      {msg.images && msg.images.length > 0 && (
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: msg.images.length === 1 ? "1fr" : "repeat(auto-fit, minmax(130px, 1fr))",
                            gap: 6,
                            marginTop: 10,
                          }}
                        >
                          {msg.images.map((imgUrl, imgIdx) => (
                            <div
                              key={imgIdx}
                              style={{
                                position: "relative",
                                overflow: "hidden",
                                borderRadius: 8,
                                border: "1px solid #cbd5e1",
                                cursor: "pointer",
                                height: 110,
                                background: "#000",
                              }}
                              onClick={() => setPreviewImage(imgUrl)}
                            >
                              <img
                                src={imgUrl}
                                alt={`Ảnh ${imgIdx + 1}`}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  transition: "transform 0.2s",
                                }}
                                title="Bấm để phóng to"
                              />
                              <span
                                style={{
                                  position: "absolute",
                                  bottom: 4,
                                  right: 4,
                                  background: "rgba(0, 0, 0, 0.65)",
                                  color: "#fff",
                                  fontSize: 9,
                                  padding: "2px 5px",
                                  borderRadius: 4,
                                  fontWeight: 600,
                                }}
                              >
                                🔍 Ảnh {imgIdx + 1}/{msg.images?.length}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    msg.text
                  )}
                </div>

                {/* Tiện ích dưới câu trả lời */}
                {msg.sender === "bot" && (
                  <div style={{ display: "flex", gap: 4, marginTop: 4, alignItems: "center", fontSize: 11, color: "#64748b", flexWrap: "wrap" }}>
                    <button
                      type="button"
                      onClick={() => handleCopyForCustomer(msg.text, msg.id)}
                      style={{ background: "#e0f2fe", border: "1px solid #bae6fd", color: "#0369a1", cursor: "pointer", padding: "2px 5px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}
                    >
                      {copiedId === `cust_${msg.id}` ? "✓ Đã copy" : "📋 Cho khách"}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopyTechnical(msg.text, msg.id)}
                      style={{ background: "#f1f5f9", border: "1px solid #cbd5e1", color: "#334155", cursor: "pointer", padding: "2px 5px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}
                    >
                      {copiedId === `tech_${msg.id}` ? "✓ Đã copy" : "🛠️ Kỹ thuật"}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopyCrmTicket(msg.text, msg.id)}
                      style={{ background: "#fef3c7", border: "1px solid #fde68a", color: "#92400e", cursor: "pointer", padding: "2px 5px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}
                    >
                      {copiedId === `crm_${msg.id}` ? "✓ Đã copy Ticket" : "📝 Tạo Ticket"}
                    </button>

                    <button
                      type="button"
                      onClick={() => togglePinMessage(msg.id)}
                      title={msg.isPinned ? "Bỏ ghim" : "Ghim câu trả lời"}
                      style={{ background: "none", border: "none", cursor: "pointer", opacity: msg.isPinned ? 1 : 0.4 }}
                    >
                      {msg.isPinned ? "⭐" : "☆"}
                    </button>

                    <span>•</span>
                    <button type="button" onClick={() => handleFeedback(msg.id, "like")} style={{ background: "none", border: "none", cursor: "pointer", opacity: msg.feedback === "like" ? 1 : 0.4 }}>👍</button>
                    <button type="button" onClick={() => handleFeedback(msg.id, "dislike")} style={{ background: "none", border: "none", cursor: "pointer", opacity: msg.feedback === "dislike" ? 1 : 0.4 }}>👎</button>
                  </div>
                )}

                {/* Danh sách các nút lựa chọn liên kết trực tiếp */}
                {msg.options && msg.options.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
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
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* 🌟 GỢI Ý ĐA CHIỀU - CLICK VÀO LÀ MỞ TRANG NGAY */}
          {smartSuggestions.length > 0 && (
            <div style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e2e8f0", padding: "6px 8px", display: "flex", flexDirection: "column", gap: 4, maxHeight: 200, overflowY: "auto", boxShadow: "0 -4px 12px rgba(0,0,0,0.05)", flexShrink: 0 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", padding: "2px 6px", display: "flex", justifyContent: "space-between" }}>
                <span>💡 Gợi ý (Bấm vào để mở trang hướng dẫn):</span>
                <span style={{ fontSize: 10, color: "#0284c7" }}>Chạm để mở</span>
              </div>
              {smartSuggestions.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.type === "ERROR" && item.dataItem) {
                      handleGoToErrorPage(item.dataItem); // 🌟 Chuyển trang trực tiếp!
                    } else {
                      handleSend(item.query);
                    }
                  }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 10px", cursor: "pointer", textAlign: "left" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, overflow: "hidden" }}>
                    <span style={{ fontSize: 14 }}>{item.icon}</span>
                    <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "#0f172a", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>{item.label}</span>
                      {item.subLabel && <span style={{ fontSize: 10, color: "#64748b", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>{item.subLabel}</span>}
                    </div>
                  </div>
                  <span style={{ fontSize: 12, color: "#0284c7", fontWeight: 700, marginLeft: 6 }}>→</span>
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
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Nhập Mã lỗi, Model, Hiện tượng hoặc gõ 'ảnh'..."
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

      {/* POPUP LIGHTBOX PHÓNG TO ẢNH */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100000,
            cursor: "zoom-out",
            padding: 20,
          }}
        >
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}>
            <img
              src={previewImage}
              alt="Phóng to sơ đồ"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: 8,
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              }}
            />
            <button
              type="button"
              onClick={() => setPreviewImage(null)}
              style={{
                position: "absolute",
                top: -12,
                right: -12,
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "#ef4444",
                color: "#ffffff",
                border: "none",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}