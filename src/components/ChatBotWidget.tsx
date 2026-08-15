import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 🌐 IMPORT FIREBASE FIRESTORE CLOUD
import { db } from "../firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

// 📦 IMPORT DỮ LIỆU TÁCH FILE
import { errors, categories } from "../data/errors";
import { manuals } from "../data/manuals";
import { chatbotKnowledge } from "../data/chatbotKnowledge";
import { diagnosisTree } from "../data/diagnosisTree";
import type { DiagnosisNode } from "../data/diagnosisTree";
import { deviceImages, type DeviceImageItem } from "../data/deviceImages";
import { modelComparisons } from "../data/modelComparisons";
import { FUN_DIALOGUES } from "../data/funDialogues";

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
  images?: string[];
  videoUrl?: string;
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

interface LearnedKnowledge {
  id: string;
  keywords: string[];
  title: string;
  answer: string;
  imageUrl?: string;
  videoUrl?: string;
  createdAt: string;
}

export default function ChatBotWidget() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== "undefined" ? window.innerWidth <= 640 : false;
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isOpen, setIsOpen] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState("");
  const [selectedModelFilter, setSelectedModelFilter] = useState<string>("ALL");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [learnedList, setLearnedList] = useState<LearnedKnowledge[]>([]);

  // Form Dạy Bot
  const [teachKeywords, setTeachKeywords] = useState("");
  const [teachAnswer, setTeachAnswer] = useState("");
  const [teachImageUrl, setTeachImageUrl] = useState("");
  const [teachVideoUrl, setTeachVideoUrl] = useState("");
  const [isSavingCloud, setIsSavingCloud] = useState(false);

  // Modals
  const [activeModal, setActiveModal] = useState<
    "PINNED" | "UNRESOLVED" | "CALC" | "COMPARE" | "LEARN" | "TEACH" | null
  >(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [compareCategory, setCompareCategory] = useState<string>("dishwasher");
  const [selectedCompareModels, setSelectedCompareModels] = useState<string[]>([
    "DW-15F9(B)-VN",
    "DW-15F8(B)-VN",
    "DW-15F7(G)-VN",
  ]);
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
        text: "Dạ kính chào mấy bà dà! 🤖 Tui là Trợ lý Toshiba đây, mấy mẹ cần tra mã lỗi, sơ đồ ảnh hay muốn dạy dỗ tui cái gì thì gõ vô đây lẹ lên nha!",
      },
    ];
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("chat_history", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    try {
      const q = query(
        collection(db, "bot_knowledge"),
        orderBy("createdAt", "desc"),
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const cloudData: LearnedKnowledge[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          keywords: doc.data().keywords || [],
          title: doc.data().title || "",
          answer: doc.data().answer || "",
          imageUrl: doc.data().imageUrl || "",
          videoUrl: doc.data().videoUrl || "",
          createdAt: doc.data().createdAt || "",
        }));
        setLearnedList(cloudData);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Lỗi kết nối Firebase:", error);
    }
  }, []);

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

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds !== null && timerSeconds > 0) {
      interval = setInterval(
        () => setTimerSeconds((prev) => (prev !== null ? prev - 1 : 0)),
        1000,
      );
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
      alert("⏱️ Hết giờ rồi mấy má ơi! Thao tác lẹ giùm tui cái!");
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

  const smartSuggestions: SuggestionItem[] = (() => {
    const q = cleanString(input);
    if (q.length < 2) return [];
    const results: SuggestionItem[] = [];

    learnedList.forEach((item) => {
      const match = item.keywords.some((kw) => cleanString(kw).includes(q));
      if (cleanString(item.title).includes(q) || match) {
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

    chatbotKnowledge.forEach((k) => {
      const title = cleanString(k.title || "");
      const matchKeyword = k.keywords.some((kw) => cleanString(kw).includes(q));
      if (title.includes(q) || matchKeyword) {
        results.push({
          type: "KNOWLEDGE",
          icon: "💡",
          label: k.title || "Hướng dẫn xử lý",
          subLabel: "Mẹo & Tính năng Q&A",
          query: k.keywords[0] || k.title || "",
        });
      }
    });

    return results.slice(0, 5);
  })();

  const togglePinMessage = (msgId: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === msgId ? { ...m, isPinned: !m.isPinned } : m)),
    );
  };

  const handleSaveLearnedKnowledge = async (
    rawKeywords: string,
    answerText: string,
    imgUrl?: string,
    vidUrl?: string,
  ) => {
    if (!rawKeywords.trim() || !answerText.trim()) {
      alert("Ủa mấy má, chưa nhập từ khóa với câu trả lời sao tui lưu được???");
      return;
    }

    setIsSavingCloud(true);
    const keywordList = rawKeywords
      .split(",")
      .map((k) => k.trim())
      .filter((k) => k.length > 0);

    try {
      await addDoc(collection(db, "bot_knowledge"), {
        title: keywordList[0] || "Kiến thức đám mây",
        keywords: keywordList,
        answer: answerText.trim(),
        imageUrl: imgUrl ? imgUrl.trim() : "",
        videoUrl: vidUrl ? vidUrl.trim() : "",
        createdAt: new Date().toISOString(),
      });

      setActiveModal(null);
      setTeachKeywords("");
      setTeachAnswer("");
      setTeachImageUrl("");
      setTeachVideoUrl("");

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: "bot",
          text: `### ☁️ Ố KỀ NHỚ RỒI MẤY MÁ ƠI!\n---\n📌 **Từ khóa:** ${keywordList.join(", ")}\n📝 **Nội dung:**\n${answerText.trim()}${imgUrl ? `\n🖼️ **Có hình ảnh kèm theo**` : ""}${vidUrl ? `\n🎬 **Có video kèm theo**` : ""}\n\n*(Lưu lên Cloud cho cả Team rồi đó, lần sau hỏi lại là tui trả lời liền nha!)*`,
          images: imgUrl ? [imgUrl.trim()] : undefined,
          videoUrl: vidUrl ? vidUrl.trim() : undefined,
        },
      ]);
    } catch (error) {
      console.error("Lỗi khi lưu lên Cloud:", error);
      alert("Mạng mẽo bị gì rồi mấy má ơi, lưu hổng được!");
    } finally {
      setIsSavingCloud(false);
    }
  };

  const handleDeleteLearnedItem = async (docId: string) => {
    if (
      confirm("Ủa tính xóa thiệt hả mấy má? Xóa là cả Team mất luôn á nha!")
    ) {
      try {
        await deleteDoc(doc(db, "bot_knowledge", docId));
      } catch (error) {
        console.error("Lỗi khi xóa:", error);
      }
    }
  };

  const handleExportTypescriptFile = () => {
    if (learnedList.length === 0) {
      alert("Có miếng dữ liệu nào đâu mà đòi tải về mấy má ơi!");
      return;
    }

    const fileContent = `// File dữ liệu xuất từ Kho Tri Thức Đám Mây Toshiba
// Ngày xuất: ${new Date().toLocaleString("vi-VN")}

export interface ChatbotKnowledgeItem {
  id: string;
  title: string;
  keywords: string[];
  answer: string;
  imageUrl?: string;
  videoUrl?: string;
}

export const cloudExportedKnowledge: ChatbotKnowledgeItem[] = ${JSON.stringify(
      learnedList.map((item) => ({
        id: item.id,
        title: item.title,
        keywords: item.keywords,
        answer: item.answer,
        ...(item.imageUrl ? { imageUrl: item.imageUrl } : {}),
        ...(item.videoUrl ? { videoUrl: item.videoUrl } : {}),
      })),
      null,
      2,
    )};
`;

    const blob = new Blob([fileContent], {
      type: "text/typescript;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `chatbotKnowledge_cloud_${Date.now()}.ts`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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

  const handleFeedback = (msgId: string, type: "like" | "dislike") => {
    setMessages((prev) =>
      prev.map((m) => (m.id === msgId ? { ...m, feedback: type } : m)),
    );
  };

  const handleGoToErrorPage = (item: any) => {
    navigate(`/error-detail/${item.id}`);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const handleDiagnosisStep = (
    node: DiagnosisNode,
    userSelectedLabel: string,
  ) => {
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
          text: `### 🧭 ${node.title || node.label.toUpperCase()}\n---\n${node.guide || "Dạ mấy mẹ chọn đúng triệu chứng bên dưới giùm con cái:"}`,
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
          text: `### 🛠️ ${node.title ? node.title.toUpperCase() : "CÁCH TRỊ ĐÂY NÈ MẤY MÁ"}\n---\n${node.result}`,
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
        text: "### 🌳 CHẨN ĐOÁN PAN BỆNH THEO HIỆN TƯỢNG\n---\nBị máy nào vậy mấy bà dà? Chọn đúng thiết bị bên dưới rồi tui chỉ từng bước cho nè:",
        options: rootOptions,
      },
    ]);
  };

  const showImageCatalog = () => {
    const categoryMap: { [key: string]: { label: string; icon: string } } = {
      washing: { label: "Máy giặt & Máy sấy", icon: "🧺" },
      fridge: { label: "Tủ lạnh", icon: "🧊" },
      dishwasher: { label: "Máy rửa chén", icon: "🍽️" },
      waterPurifier: { label: "Máy lọc nước", icon: "💧" },
    };

    const options: Option[] = Object.keys(categoryMap).map((catKey) => {
      const count = deviceImages.filter(
        (img) => img.category === catKey,
      ).length;
      return {
        label: `${categoryMap[catKey].icon} ${categoryMap[catKey].label} (${count} model)`,
        action: () =>
          showImageModelsByCategory(catKey, categoryMap[catKey].label),
      };
    });

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "bot",
        text: "### 🖼️ THƯ VIỆN HÌNH ẢNH & SƠ ĐỒ THIẾT BỊ\n---\n**Bước 1:** Mấy mẹ muốn coi hình ngành hàng nào thì chọn cái đó giùm tui nghen:",
        options,
      },
    ]);
  };

  const showImageModelsByCategory = (
    categoryId: string,
    categoryName: string,
  ) => {
    const filteredImages = deviceImages.filter(
      (img) => img.category === categoryId,
    );
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
        text: `### 🖼️ SƠ ĐỒ HÌNH ẢNH (${categoryName.toUpperCase()})\n---\n**Bước 2:** Chọn đúng Model máy cần xem sơ đồ nha mấy má:`,
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
        text: `### 🖼️ ${img.title.toUpperCase()}\n---\n**Mô tả:** ${img.description}\n*(Có ${img.images.length} hình tất cả, bấm vô hình để phóng to ngắm cho rõ nha mấy bà dà)*`,
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
    const lowerQuery = queryText.toLowerCase().trim();

    // 🎭 🌟 1. BẮT BỘ CÂU NÓI VUI / BƯỚNG BỈNH TỪ FILE funDialogues.ts
    if (!lowerQuery.includes("=")) {
      const matchedFun = FUN_DIALOGUES.find((item) =>
        item.triggers.some(
          (t) =>
            cleanKeyword === t ||
            cleanKeyword.startsWith(t) ||
            cleanKeyword.includes(t),
        ),
      );

      if (matchedFun) {
        const randomText =
          matchedFun.responses[
            Math.floor(Math.random() * matchedFun.responses.length)
          ];

        const funOptions: Option[] = [];
        if (matchedFun.hasTeachButton) {
          funOptions.push({
            label: "✨ ☁️ MỞ BẢNG DẠY BOT NGAY (LƯU CLOUD) ➔",
            action: () => setActiveModal("TEACH"),
          });
        }

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              sender: "bot",
              text: randomText,
              options: funOptions.length > 0 ? funOptions : undefined,
            },
          ]);
        }, 200);
        return;
      }
    }

    // 🌟 2. Nhận diện cú pháp dạy học nhanh: "học: từ khóa = câu trả lời"
    if (
      lowerQuery.startsWith("học:") ||
      lowerQuery.startsWith("dạy:") ||
      lowerQuery.startsWith("hoc:") ||
      lowerQuery.startsWith("day:")
    ) {
      const content = queryText.slice(4).trim();
      const parts = content.split("=");
      if (parts.length >= 2) {
        const kw = parts[0].trim();
        const ans = parts.slice(1).join("=").trim();
        if (kw && ans) {
          handleSaveLearnedKnowledge(kw, ans);
          return;
        }
      }
    }

    // [A] Khớp trong Kho Tri Thức Đám Mây (Firestore)
    const matchedLearned = learnedList.filter((item) =>
      item.keywords.some((kw) => {
        const cKw = cleanString(kw);
        return cKw.includes(cleanKeyword) || cleanKeyword.includes(cKw);
      }),
    );

    if (matchedLearned.length > 0) {
      const foundItem = matchedLearned[0];
      const botOptionsItem: Option[] = [];

      if (foundItem.videoUrl) {
        botOptionsItem.push({
          label: "🎬 Mở Video Hướng Dẫn Chi Tiết",
          action: () => window.open(foundItem.videoUrl, "_blank"),
        });
      }

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: "bot",
            text: `### ☁️ [BÀI MẤY MÁ DẠY NÈ] ${foundItem.title.toUpperCase()}\n---\n${foundItem.answer}`,
            images: foundItem.imageUrl ? [foundItem.imageUrl] : undefined,
            videoUrl: foundItem.videoUrl || undefined,
            options: botOptionsItem.length > 0 ? botOptionsItem : undefined,
          },
        ]);
      }, 200);
      return;
    }

    // [B] Khớp Hình ảnh
    const matchedImg = deviceImages.find(
      (img) =>
        cleanString(img.title).includes(cleanKeyword) ||
        img.keywords.some(
          (kw) =>
            cleanString(kw).includes(cleanKeyword) ||
            cleanKeyword.includes(cleanString(kw)),
        ),
    );

    if (matchedImg) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: "bot",
            text: `### 🖼️ ${matchedImg.title.toUpperCase()}\n---\n**Mô tả:** ${matchedImg.description}\n*(Có ${matchedImg.images.length} hình tất cả, bấm vô coi nha mấy má)*`,
            images: matchedImg.images,
          },
        ]);
      }, 200);
      return;
    }

    // [C] Trợ giúp chung
    const helpKeywords = [
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
    const isHelpIntent = helpKeywords.some(
      (kw) => cleanKeyword.includes(kw) || kw.includes(cleanKeyword),
    );

    if (isHelpIntent) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: "bot",
            text: "### 🧭 TRUNG TÂM HỖ TRỢ TRA CỨU NHANH\n---\nDạ mấy mẹ bấm cái này giúp con cái, chọn đúng ngành hàng bên dưới nè:",
            options: [
              {
                label: "🖼️ Tra cứu Hình ảnh Bảng điều khiển & Sơ đồ",
                action: () => showImageCatalog(),
              },
              {
                label: "🌳 Cây Chẩn đoán Pan bệnh (Theo hiện tượng)",
                action: () => startDecisionTree(),
              },
              {
                label: "⚖️ Đối chiếu So sánh Thông số Model",
                action: () => setActiveModal("COMPARE"),
              },
              {
                label: "☁️ Dạy Bot lưu lên Đám Mây",
                action: () => setActiveModal("TEACH"),
              },
              {
                label: "🧺 Tra cứu Máy giặt & Máy sấy",
                action: () => handleSend("TW-BK115"),
              },
              {
                label: "🧊 Tra cứu Tủ lạnh Toshiba",
                action: () => handleSend("GR-RF611WI-PGV"),
              },
            ],
          },
        ]);
      }, 200);
      return;
    }

    // [D] Khớp Knowledge Base Q&A
    let matchedKnowledge = chatbotKnowledge.filter((k) =>
      k.keywords.some((kw) => {
        const cleanKw = cleanString(kw);
        return cleanKw.includes(cleanKeyword) || cleanKeyword.includes(cleanKw);
      }),
    );

    if (selectedModelFilter !== "ALL") {
      matchedKnowledge = matchedKnowledge.filter(
        (k) =>
          cleanString(k.title || "").includes(
            cleanString(selectedModelFilter),
          ) ||
          k.keywords.some((kw) =>
            cleanString(kw).includes(cleanString(selectedModelFilter)),
          ),
      );
    }

    // [E] Khớp Danh mục Mã lỗi (errors.ts)
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

    // [F] Khớp Sách HDSD (manuals.ts)
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
        botResponseText = `🔍 Kiếm được **${matchedKnowledge.length}** kết quả cho mấy bà dà nè. Bấm vô chọn lẹ giùm con:`;
        matchedKnowledge.forEach((item) => {
          botOptions.push({
            label: `📌 ${item.title || "Xem chi tiết"}`,
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
        botResponseText = `🔍 Tìm thấy ${totalMatches} mục liên quan nè mấy má ơi. Bấm vô để mở trang chi tiết nha:`;

        matchedCallCenter.slice(0, 6).forEach((item: any) => {
          botOptions.push({
            label: `🚀 [MÃ LỖI ${item.code || ""}] ${item.title} (Bấm vô xem)`,
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
                navigate(
                  `/manuals?search=${encodeURIComponent(displayModel || displayTitle)}`,
                );
                if (isMobile) setIsOpen(false);
              }
            },
          });
        });
      } else {
        botResponseText = `### ❌ TÌM HỔNG RA TỪ KHÓA "${queryText.toUpperCase()}" NHA MẤY MÁ!\n---\n💡 Mấy bà dà có biết cách xử lý ca này hông? Bấm nút **"Dạy Bot"** bên dưới nạp bài cho tui lẹ để lần sau tui biết đường trả lời nha! **HIỂU CHƯA MẤY MÁ???**`;
        botOptions = [
          {
            label: `✨ ☁️ DẠY TUI CÂU NÀY LIỀN ĐI MẤY BÀ ➔`,
            action: () => {
              setTeachKeywords(queryText);
              setActiveModal("TEACH");
            },
          },
          {
            label: "🖼️ Xem thư viện hình ảnh",
            action: () => showImageCatalog(),
          },
          {
            label: "🌳 Chẩn đoán theo hiện tượng",
            action: () => startDecisionTree(),
          },
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
        text: `✅ Danh sách mã lỗi của **${categoryName}** đây nè mấy má. Bấm vô xem chi tiết nha:`,
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
        text: "Dọn dẹp sạch sẽ như mới rồi nghen mấy bà dà! Giờ muốn hỏi cái gì nữa hông nè?",
      },
    ]);
  };

  const renderFormattedText = (text: string) => {
    let formatted = text
      .replace(
        /###\s*(.*)/g,
        '<div style="color: #0369a1; font-size: 13px; font-weight: 800; background: #f0f9ff; padding: 6px 10px; border-radius: 6px; border-left: 4px solid #0284c7; margin-bottom: 8px;">$1</div>',
      )
      .replace(
        /---/g,
        '<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 8px 0;" />',
      )
      .replace(
        /\*\*(.*?)\*\*/g,
        '<strong style="color: #0f172a; font-weight: 700;">$1</strong>',
      )
      .replace(/\*(.*?)\*/g, '<em style="color: #0284c7;">$1</em>')
      .replace(/\n/g, "<br />")
      .replace(
        /<br\s*\/?>\s*(?=<table|<thead|<tbody|<tr|<th|<td|<\/table|<\/thead|<\/tbody|<\/tr|<\/th|<\/td)/gi,
        "",
      )
      .replace(
        /(<\/table>|<\/thead>|<\/tbody>|<\/tr>|<\/th>|<\/td>)\s*<br\s*\/?>/gi,
        "$1",
      );

    if (input.trim().length >= 2) {
      try {
        const reg = new RegExp(`(${input.trim()})`, "gi");
        formatted = formatted.replace(
          reg,
          '<mark style="background: #fef08a; padding: 0 2px; border-radius: 2px; color: #854d0e;">$1</mark>',
        );
      } catch (e) {
        /* ignore */
      }
    }

    return formatted;
  };

  const calculateWaterHardness = (valStr: string) => {
    const val = parseFloat(valStr);
    if (isNaN(val)) return "Nhập số đàng hoàng giùm con cái mấy má ơi (°dH)";
    if (val <= 5)
      return "Mức H1 (0 - 5 °dH): Không cần tái sinh muối (0g/chu kỳ)";
    if (val <= 11)
      return "Mức H2 (6 - 11 °dH): Tái tạo sau mỗi 10 chu trình (9g muối)";
    if (val <= 17)
      return "Mức H3 ⭐ (12 - 17 °dH): Mặc định nhà máy. Tái tạo sau 5 chu trình (12g muối)";
    if (val <= 22)
      return "Mức H4 (18 - 22 °dH): Tái tạo sau mỗi 3 chu trình (20g muối)";
    if (val <= 34)
      return "Mức H5 (23 - 34 °dH): Tái tạo sau mỗi 2 chu trình (30g muối)";
    return "Mức H6 (35 - 55 °dH): Nước siêu cứng nha mấy má! Tái tạo sau mỗi 1 chu trình (60g muối)";
  };

  const renderSpecValue = (value: string | undefined) => {
    if (!value) return "—";
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
  };

  const toggleCompareModel = (modelName: string) => {
    if (selectedCompareModels.includes(modelName)) {
      if (selectedCompareModels.length > 1) {
        setSelectedCompareModels(
          selectedCompareModels.filter((m) => m !== modelName),
        );
      }
    } else {
      setSelectedCompareModels([...selectedCompareModels, modelName]);
    }
  };

  const currentCategoryCompareData = modelComparisons.find(
    (c) => c.category === compareCategory,
  );
  const activeCompareModels = (currentCategoryCompareData?.models || []).filter(
    (m) => selectedCompareModels.includes(m.model),
  );

  const pinnedMessages = messages.filter((m) => m.isPinned);

  return (
    <>
      {/* NÚT MỞ CHATBOT KHI ĐÓNG */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          title="Mở Trợ lý Chatbot"
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "#0284c7",
            color: "#ffffff",
            border: "none",
            boxShadow: "0 4px 14px rgba(2, 132, 199, 0.4)",
            fontSize: isMobile ? 13 : 24,
            fontWeight: 700,
            cursor: "pointer",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            borderRadius: isMobile ? 24 : "50%",
            width: isMobile ? "auto" : 56,
            height: isMobile ? "auto" : 56,
            padding: isMobile ? "10px 16px" : 0,
          }}
        >
          {isMobile ? <span>🤖 Mở Chatbot</span> : <span>💬</span>}
        </button>
      )}

      {/* KHUNG CHATBOT */}
      {isOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={
            isMobile
              ? {
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
                }
              : {
                  position: "fixed",
                  bottom: isMaximized ? 20 : 86,
                  right: 20,
                  width: isMaximized ? "calc(100vw - 40px)" : 480,
                  maxWidth: 1200,
                  height: isMaximized ? "calc(100vh - 100px)" : 640,
                  maxHeight: "88vh",
                  backgroundColor: "#ffffff",
                  borderRadius: 16,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  zIndex: 9999,
                  border: "1px solid #e2e8f0",
                  transition: "all 0.25s ease-in-out",
                }
          }
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
              borderBottom: "1px solid #1e293b",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  backgroundColor: "#0284c7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  boxShadow: "0 2px 6px rgba(2,132,199,0.4)",
                }}
              >
                🤖
              </div>
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "-0.2px",
                  }}
                >
                  Trợ Lý Của Mấy Má Nè
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 10,
                    marginTop: 1,
                  }}
                >
                  <span
                    style={{
                      color: "#4ade80",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#4ade80",
                      }}
                    ></span>
                    Cloud Active
                  </span>
                  {timerSeconds !== null && (
                    <span
                      style={{
                        color: "#f59e0b",
                        background: "rgba(245,158,11,0.15)",
                        padding: "1px 5px",
                        borderRadius: 4,
                        fontWeight: 700,
                      }}
                    >
                      ⏱️ {timerSeconds}s
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {/* NHÓM 1: CÔNG CỤ NGHIỆP VỤ */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  background: "#1e293b",
                  padding: "3px 4px",
                  borderRadius: 8,
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveModal(activeModal === "LEARN" ? null : "LEARN")
                  }
                  title={`Kho Tri thức Đám mây (${learnedList.length} mục)`}
                  style={{
                    position: "relative",
                    background:
                      activeModal === "LEARN" ? "#10b981" : "transparent",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: 6,
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  ☁️
                  {learnedList.length > 0 && (
                    <span
                      style={{
                        position: "absolute",
                        top: -3,
                        right: -3,
                        backgroundColor: "#10b981",
                        color: "#ffffff",
                        fontSize: 8,
                        fontWeight: 800,
                        padding: "1px 4px",
                        borderRadius: 10,
                        border: "1.5px solid #0f172a",
                      }}
                    >
                      {learnedList.length}
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActiveModal(activeModal === "PINNED" ? null : "PINNED")
                  }
                  title={`Tin nhắn đã ghim (${pinnedMessages.length} mục)`}
                  style={{
                    position: "relative",
                    background:
                      activeModal === "PINNED" ? "#f59e0b" : "transparent",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: 6,
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  ⭐
                  {pinnedMessages.length > 0 && (
                    <span
                      style={{
                        position: "absolute",
                        top: -3,
                        right: -3,
                        backgroundColor: "#f59e0b",
                        color: "#ffffff",
                        fontSize: 8,
                        fontWeight: 800,
                        padding: "1px 4px",
                        borderRadius: 10,
                        border: "1.5px solid #0f172a",
                      }}
                    >
                      {pinnedMessages.length}
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActiveModal(activeModal === "COMPARE" ? null : "COMPARE")
                  }
                  title="So sánh thông số kỹ thuật Model"
                  style={{
                    background:
                      activeModal === "COMPARE" ? "#0284c7" : "transparent",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: 6,
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  ⚖️
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActiveModal(activeModal === "CALC" ? null : "CALC")
                  }
                  title="Tiện ích quy đổi muối & đếm giờ thao tác"
                  style={{
                    background:
                      activeModal === "CALC" ? "#0284c7" : "transparent",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: 6,
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  🧮
                </button>
              </div>

              {/* VẠCH PHÂN CÁCH */}
              <div
                style={{ width: 1, height: 20, backgroundColor: "#334155" }}
              />

              {/* NHÓM 2: CỬA SỔ & HỆ THỐNG */}
              <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                <button
                  type="button"
                  onClick={handleClearHistory}
                  title="Dọn dẹp lịch sử trò chuyện"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#94a3b8",
                    borderRadius: 6,
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: 13,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ef4444")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94a3b8")
                  }
                >
                  🗑️
                </button>

                {!isMobile && (
                  <button
                    type="button"
                    onClick={() => setIsMaximized(!isMaximized)}
                    title={
                      isMaximized ? "Thu nhỏ về góc" : "Mở rộng toàn màn hình"
                    }
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#94a3b8",
                      borderRadius: 6,
                      width: 28,
                      height: 28,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: 12,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#ffffff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#94a3b8")
                    }
                  >
                    {isMaximized ? "🗗" : "🗖"}
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title={
                    isMobile ? "Thu nhỏ để xem Web nền" : "Đóng cửa sổ Chat"
                  }
                  style={{
                    background: isMobile
                      ? "rgba(2,132,199,0.2)"
                      : "rgba(239,68,68,0.15)",
                    border: isMobile
                      ? "1px solid rgba(2,132,199,0.4)"
                      : "1px solid rgba(239,68,68,0.3)",
                    color: isMobile ? "#38bdf8" : "#fca5a5",
                    borderRadius: 6,
                    height: 28,
                    padding: isMobile ? "0 8px" : "0 8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  {isMobile ? "🌐 Xem Web" : "✕"}
                </button>
              </div>
            </div>
          </div>

          {/* Thanh Filter */}
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
              onClick={() => setActiveModal("TEACH")}
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
                color: "#ffffff",
                border: "1px solid #34d399",
                borderRadius: 14,
                padding: "4px 10px",
                fontSize: 11,
                fontWeight: 800,
                whiteSpace: "nowrap",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(16, 185, 129, 0.45)",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span>✨</span>
              <span>☁️ DẠY TUI ĐI!!! </span>
            </button>

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
                  background:
                    selectedModelFilter === filter.id ? "#0284c7" : "#334155",
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

          {/* MODAL TEACH */}
          {activeModal === "TEACH" && (
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "12px 14px",
                borderBottom: "2px solid #10b981",
                boxShadow: "0 6px 16px rgba(16, 185, 129, 0.15)",
                fontSize: 12,
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 10,
                  paddingBottom: 6,
                  borderBottom: "1px dashed #cbd5e1",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 16 }}>☁️</span>
                  <span
                    style={{ fontSize: 12, fontWeight: 800, color: "#065f46" }}
                  >
                    DẠY BOT & ĐỒNG BỘ LÊN CLOUD CẢ TEAM
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  style={{
                    border: "1px solid #fecaca",
                    background: "#fef2f2",
                    color: "#dc2626",
                    cursor: "pointer",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 6,
                  }}
                >
                  ✕ Đóng
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#334155",
                      marginBottom: 3,
                    }}
                  >
                    1. Từ khóa tìm kiếm{" "}
                    <span style={{ color: "#ef4444" }}>*</span> (cách nhau bằng
                    dấu phẩy nha mấy má):
                  </label>
                  <input
                    type="text"
                    placeholder="VD: kẹt cửa, không mở được cửa, lỗi chốt cửa..."
                    value={teachKeywords}
                    onChange={(e) => setTeachKeywords(e.target.value)}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      padding: "8px 10px",
                      borderRadius: 8,
                      border: "1.5px solid #cbd5e1",
                      backgroundColor: "#f8fafc",
                      color: "#0f172a",
                      fontSize: 12,
                      fontWeight: 500,
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#10b981";
                      e.target.style.backgroundColor = "#ffffff";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#cbd5e1";
                      e.target.style.backgroundColor = "#f8fafc";
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#334155",
                      marginBottom: 3,
                    }}
                  >
                    2. Nội dung câu trả lời / Hướng dẫn xử lý{" "}
                    <span style={{ color: "#ef4444" }}>*</span>:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Nhập chi tiết nguyên nhân và các bước khắc phục để tui học theo nha..."
                    value={teachAnswer}
                    onChange={(e) => setTeachAnswer(e.target.value)}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      padding: "8px 10px",
                      borderRadius: 8,
                      border: "1.5px solid #cbd5e1",
                      backgroundColor: "#f8fafc",
                      color: "#0f172a",
                      fontSize: 12,
                      fontWeight: 500,
                      outline: "none",
                      resize: "vertical",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#10b981";
                      e.target.style.backgroundColor = "#ffffff";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#cbd5e1";
                      e.target.style.backgroundColor = "#f8fafc";
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#475569",
                        marginBottom: 2,
                      }}
                    >
                      🖼️ Link ảnh minh họa (nếu có):
                    </label>
                    <input
                      type="text"
                      placeholder="https://...jpg, png"
                      value={teachImageUrl}
                      onChange={(e) => setTeachImageUrl(e.target.value)}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        padding: "6px 8px",
                        borderRadius: 6,
                        border: "1px solid #cbd5e1",
                        backgroundColor: "#f8fafc",
                        color: "#0f172a",
                        fontSize: 11,
                        outline: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#475569",
                        marginBottom: 2,
                      }}
                    >
                      🎬 Link video (YouTube / MP4):
                    </label>
                    <input
                      type="text"
                      placeholder="https://youtube.com/..."
                      value={teachVideoUrl}
                      onChange={(e) => setTeachVideoUrl(e.target.value)}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        padding: "6px 8px",
                        borderRadius: 6,
                        border: "1px solid #cbd5e1",
                        backgroundColor: "#f8fafc",
                        color: "#0f172a",
                        fontSize: 11,
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  disabled={isSavingCloud}
                  onClick={() =>
                    handleSaveLearnedKnowledge(
                      teachKeywords,
                      teachAnswer,
                      teachImageUrl,
                      teachVideoUrl,
                    )
                  }
                  style={{
                    marginTop: 4,
                    background:
                      "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    color: "#ffffff",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: 8,
                    cursor: isSavingCloud ? "not-allowed" : "pointer",
                    fontWeight: 800,
                    fontSize: 12,
                    boxShadow: "0 2px 8px rgba(16, 185, 129, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    opacity: isSavingCloud ? 0.7 : 1,
                  }}
                >
                  {isSavingCloud
                    ? "⏳ Đang nạp bài lên Cloud..."
                    : "☁️ LƯU LÊN CLOUD CHO CẢ TEAM CÙNG XÀI"}
                </button>
              </div>
            </div>
          )}

          {/* MODAL LEARN */}
          {activeModal === "LEARN" && (
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                  alignItems: "center",
                }}
              >
                <span
                  style={{ fontSize: 11, fontWeight: 700, color: "#166534" }}
                >
                  ☁️ KHO TRI THỨC ĐÁM MÂY ({learnedList.length}):
                </span>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <button
                    type="button"
                    onClick={handleExportTypescriptFile}
                    title="Tải file code để lưu vào Github"
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
                    onClick={() => setActiveModal(null)}
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

              {learnedList.length === 0 ? (
                <span style={{ color: "#64748b" }}>
                  Chưa có kiến thức đám mây nào hết á. Mấy má bấm nút ☁️ Dạy Bot
                  ở trên giùm con!
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
                      <strong style={{ color: "#065f46" }}>
                        📌 {item.title}
                      </strong>
                      <button
                        type="button"
                        onClick={() => handleDeleteLearnedItem(item.id)}
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
          )}

          {/* MODAL PINNED */}
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
                  ⭐ Danh sách câu trả lời đã ghim ({pinnedMessages.length}):
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
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
              {pinnedMessages.length === 0 ? (
                <span style={{ fontSize: 11, color: "#b45309" }}>
                  Chưa có tin nhắn nào được ghim hết á mấy má! Bấm nút ⭐ dưới
                  mỗi câu trả lời để lưu lại nha!
                </span>
              ) : (
                pinnedMessages.map((p) => (
                  <div
                    key={p.id}
                    style={{
                      background: "#ffffff",
                      padding: "6px 8px",
                      borderRadius: 6,
                      marginBottom: 4,
                      fontSize: 11,
                      border: "1px solid #fde68a",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 600,
                        color: "#0f172a",
                        marginBottom: 2,
                      }}
                    >
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
                        padding: 0,
                      }}
                    >
                      📋 Copy cho khách
                    </button>
                  </div>
                ))
              )}
            </div>
          )}

          {/* MODAL COMPARE */}
          {activeModal === "COMPARE" && (
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                  alignItems: "center",
                }}
              >
                <span
                  style={{ fontSize: 11, fontWeight: 700, color: "#0369a1" }}
                >
                  ⚖️ SO SÁNH THÔNG SỐ MODEL:
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
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

              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 8,
                  overflowX: "auto",
                }}
              >
                {modelComparisons.map((cat) => (
                  <button
                    key={cat.category}
                    type="button"
                    onClick={() => {
                      setCompareCategory(cat.category);
                      setSelectedCompareModels(
                        cat.models.map((m) => m.model).slice(0, 3),
                      );
                    }}
                    style={{
                      background:
                        compareCategory === cat.category
                          ? "#0284c7"
                          : "#e2e8f0",
                      color:
                        compareCategory === cat.category ? "#fff" : "#334155",
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
                <span
                  style={{ fontSize: 10, color: "#64748b", fontWeight: 600 }}
                >
                  Chọn model:
                </span>
                {currentCategoryCompareData?.models.map((m) => (
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
                      checked={selectedCompareModels.includes(m.model)}
                      onChange={() => toggleCompareModel(m.model)}
                    />
                    {m.model}
                  </label>
                ))}
              </div>

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
                    {activeCompareModels.map((m) => (
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
                  {currentCategoryCompareData?.attributes.map((attr) => (
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
                      {activeCompareModels.map((m) => (
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
          )}

          {/* MODAL CALC */}
          {activeModal === "CALC" && (
            <div
              style={{
                backgroundColor: "#f0fdf4",
                padding: "10px",
                borderBottom: "1px solid #bbf7d0",
                fontSize: 11,
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
                  style={{ fontSize: 11, fontWeight: 700, color: "#166534" }}
                >
                  🧮 Tiện ích Quy đổi & Đếm giờ thao tác:
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
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

              <div
                style={{
                  display: "flex",
                  gap: 4,
                  alignItems: "center",
                  marginBottom: 8,
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontWeight: 600 }}>⏱️ Hẹn giờ:</span>
                <button
                  type="button"
                  onClick={() => startTimer(3)}
                  style={{
                    background: "#dcfce7",
                    border: "1px solid #86efac",
                    borderRadius: 4,
                    padding: "2px 5px",
                    cursor: "pointer",
                    fontSize: 10,
                  }}
                >
                  Giữ 3s
                </button>
                <button
                  type="button"
                  onClick={() => startTimer(5)}
                  style={{
                    background: "#dcfce7",
                    border: "1px solid #86efac",
                    borderRadius: 4,
                    padding: "2px 5px",
                    cursor: "pointer",
                    fontSize: 10,
                  }}
                >
                  Giữ 5s
                </button>
                <button
                  type="button"
                  onClick={() => startTimer(300)}
                  style={{
                    background: "#dcfce7",
                    border: "1px solid #86efac",
                    borderRadius: 4,
                    padding: "2px 5px",
                    cursor: "pointer",
                    fontSize: 10,
                  }}
                >
                  Xả tụ 5p
                </button>
                <button
                  type="button"
                  onClick={() => startTimer(900)}
                  style={{
                    background: "#dcfce7",
                    border: "1px solid #86efac",
                    borderRadius: 4,
                    padding: "2px 5px",
                    cursor: "pointer",
                    fontSize: 10,
                  }}
                >
                  Nguội bát 15p
                </button>
                {timerSeconds !== null && (
                  <button
                    type="button"
                    onClick={stopTimer}
                    style={{
                      background: "#fee2e2",
                      border: "1px solid #fca5a5",
                      color: "#b91c1c",
                      borderRadius: 4,
                      padding: "2px 5px",
                      cursor: "pointer",
                      fontSize: 10,
                    }}
                  >
                    Dừng
                  </button>
                )}
              </div>

              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span>Độ cứng nước (°dH):</span>
                <input
                  type="number"
                  placeholder="VD: 15"
                  value={calcDhInput}
                  onChange={(e) => setCalcDhInput(e.target.value)}
                  style={{
                    width: 60,
                    padding: "2px 4px",
                    borderRadius: 4,
                    border: "1px solid #cbd5e1",
                    fontSize: 11,
                  }}
                />
              </div>
              {calcDhInput && (
                <div
                  style={{
                    background: "#ffffff",
                    padding: "4px 8px",
                    borderRadius: 4,
                    color: "#15803d",
                    fontWeight: 600,
                    marginTop: 4,
                  }}
                >
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
                  maxWidth: isMobile ? "94%" : isMaximized ? "80%" : "92%",
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
                    <>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: renderFormattedText(msg.text),
                        }}
                      />

                      {/* HIỂN THỊ HÌNH ẢNH */}
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

                      {/* HIỂN THỊ NÚT VIDEO */}
                      {msg.videoUrl && (
                        <div style={{ marginTop: 8 }}>
                          <button
                            type="button"
                            onClick={() => window.open(msg.videoUrl, "_blank")}
                            style={{
                              background: "#dc2626",
                              color: "#fff",
                              border: "none",
                              padding: "6px 12px",
                              borderRadius: 6,
                              fontSize: 11,
                              fontWeight: 700,
                              cursor: "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <span>🎬 Xem Video Hướng Dẫn Chi Tiết ➔</span>
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    msg.text
                  )}
                </div>

                {/* Tiện ích dưới câu trả lời */}
                {msg.sender === "bot" && (
                  <div
                    style={{
                      display: "flex",
                      gap: 4,
                      marginTop: 4,
                      alignItems: "center",
                      fontSize: 11,
                      color: "#64748b",
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
                      title={msg.isPinned ? "Bỏ ghim" : "Ghim câu trả lời"}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        opacity: msg.isPinned ? 1 : 0.4,
                      }}
                    >
                      {msg.isPinned ? "⭐" : "☆"}
                    </button>

                    <span>•</span>
                    <button
                      type="button"
                      onClick={() => handleFeedback(msg.id, "like")}
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
                      onClick={() => handleFeedback(msg.id, "dislike")}
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

                {/* Danh sách Options */}
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
                      const isTeachBtn = opt.label.includes("DẠY");
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            opt.action();
                          }}
                          style={{
                            backgroundColor: isTeachBtn ? "#10b981" : "#ffffff",
                            backgroundImage: isTeachBtn
                              ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                              : "none",
                            color: isTeachBtn ? "#ffffff" : "#0369a1",
                            border: isTeachBtn
                              ? "1px solid #34d399"
                              : "1px solid #bae6fd",
                            padding: isTeachBtn ? "10px 14px" : "8px 12px",
                            borderRadius: 8,
                            fontSize: isTeachBtn ? 13 : 12,
                            fontWeight: 700,
                            cursor: "pointer",
                            textAlign: "left",
                            boxShadow: isTeachBtn
                              ? "0 4px 12px rgba(16, 185, 129, 0.35)"
                              : "0 1px 3px rgba(0,0,0,0.05)",
                            transition: "all 0.2s ease-in-out",
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

          {/* Gợi ý đa chiều */}
          {smartSuggestions.length > 0 && (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderTop: "1px solid #e2e8f0",
                padding: "6px 8px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                maxHeight: 200,
                overflowY: "auto",
                boxShadow: "0 -4px 12px rgba(0,0,0,0.05)",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#64748b",
                  padding: "2px 6px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>💡 Gợi ý (Bấm vào để mở trang hướng dẫn):</span>
                <span style={{ fontSize: 10, color: "#0284c7" }}>
                  Chạm để mở
                </span>
              </div>
              {smartSuggestions.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.type === "ERROR" && item.dataItem) {
                      handleGoToErrorPage(item.dataItem);
                    } else {
                      handleSend(item.query);
                    }
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 8,
                    padding: "6px 10px",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      overflow: "hidden",
                    }}
                  >
                    <span style={{ fontSize: 14 }}>{item.icon}</span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#0f172a",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                        }}
                      >
                        {item.label}
                      </span>
                      {item.subLabel && (
                        <span
                          style={{
                            fontSize: 10,
                            color: "#64748b",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                          }}
                        >
                          {item.subLabel}
                        </span>
                      )}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      color: "#0284c7",
                      fontWeight: 700,
                      marginLeft: 6,
                    }}
                  >
                    →
                  </span>
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
              placeholder="Nhập Mã lỗi, Hiện tượng hoặc gõ: 'học: từ khóa = câu trả lời'..."
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
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          >
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
