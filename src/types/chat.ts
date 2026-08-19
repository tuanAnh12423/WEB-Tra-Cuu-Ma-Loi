export interface Option {
  label: string;
  action: () => void;
}

export interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  images?: string[];
  videoUrl?: string;
  options?: Option[];
  feedback?: "like" | "dislike";
  isPinned?: boolean;
}

export interface SuggestionItem {
  type: "ERROR" | "MANUAL" | "KNOWLEDGE" | "IMAGE";
  label: string;
  subLabel?: string;
  query: string;
  icon: string;
  dataItem?: any;
}

export interface LearnedKnowledge {
  id: string;
  keywords: string[];
  title: string;
  answer: string;
  imageUrl?: string;
  videoUrl?: string;
  createdAt: string;
}