import { useState, useEffect } from "react";
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
import type { LearnedKnowledge } from "../types/chat";

export function useFirestore() {
  const [learnedList, setLearnedList] = useState<LearnedKnowledge[]>([]);

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

  const saveKnowledge = async (
    rawKeywords: string,
    answerText: string,
    imgUrl?: string,
    vidUrl?: string,
  ) => {
    if (!rawKeywords.trim() || !answerText.trim()) {
      alert("Ủa mấy má, chưa nhập từ khóa với câu trả lời sao tui lưu được???");
      return false;
    }

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
      return true;
    } catch (error) {
      console.error("Lỗi khi lưu lên Cloud:", error);
      alert("Mạng mẽo bị gì rồi mấy má ơi, lưu hổng được!");
      return false;
    }
  };

  const deleteKnowledge = async (docId: string) => {
    if (confirm("Ủa tính xóa thiệt hả mấy má? Xóa là cả Team mất luôn á nha!")) {
      try {
        await deleteDoc(doc(db, "bot_knowledge", docId));
      } catch (error) {
        console.error("Lỗi khi xóa:", error);
      }
    }
  };

  const exportToFile = (learnedList: LearnedKnowledge[]) => {
    if (learnedList.length === 0) {
      alert("Có miếng dữ liệu nào đâu mà đòi tải về mấy má ơi!");
      return;
    }

    const fileContent = `// File dữ liệu xuất từ Kho Tri Thức Đám Mây
// Ngày xuất: ${new Date().toLocaleString("vi-VN")}

export const cloudExportedKnowledge = ${JSON.stringify(
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
    )};`;

    const blob = new Blob([fileContent], { type: "text/typescript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `chatbotKnowledge_cloud_${Date.now()}.ts`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return { learnedList, saveKnowledge, deleteKnowledge, exportToFile };
}