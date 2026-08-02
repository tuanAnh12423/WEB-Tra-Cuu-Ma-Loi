import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorListPage from "./pages/ErrorListPage";
import ErrorDetailPage from "./pages/ErrorDetailPage";
import ReportPage from "./pages/ReportPage";
import ManualListPage from "./pages/ManualListPage";
import RepairSupportPage from "./pages/RepairSupportPage";

// 📡 Component hiển thị thông báo trạng thái Ngoại tuyến
function OfflineNotification() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#b91c1c",
        color: "#ffffff",
        textAlign: "center",
        padding: "6px 12px",
        fontSize: 12,
        fontWeight: 700,
        zIndex: 10000,
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      📡 Bạn đang ở chế độ Ngoại tuyến (Offline) - Dữ liệu đã được lưu sẵn trong
      máy!
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* Thanh thông báo hiển thị khi KTV bị đứt mạng/sóng yếu */}
      <OfflineNotification />

      <div style={{ minHeight: "100vh", background: "#f5f6fa" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/error-list/:categoryId" element={<ErrorListPage />} />
          <Route path="/error-detail/:errorId" element={<ErrorDetailPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/repair-support" element={<RepairSupportPage />} />
          <Route path="/manuals" element={<ManualListPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
