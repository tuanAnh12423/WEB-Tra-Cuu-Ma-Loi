import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Cấu hình Firebase từ Project của bạn
const firebaseConfig = {
  apiKey: "AIzaSyAk3n2TiFcRMULuTw5r4SUTNOZyaTBkqZE",
  authDomain: "tracuumaloi-51892.firebaseapp.com",
  projectId: "tracuumaloi-51892",
  storageBucket: "tracuumaloi-51892.firebasestorage.app",
  messagingSenderId: "15814802502",
  appId: "1:15814802502:web:7fff340fec14236346de47",
  measurementId: "G-LS8WQZ6TX9",
};

// Khởi tạo Firebase App
const app = initializeApp(firebaseConfig);

// Khởi tạo và export Firestore Database
export const db = getFirestore(app);
