import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorListPage from "./pages/ErrorListPage";
import ErrorDetailPage from "./pages/ErrorDetailPage";
import ReportPage from "./pages/ReportPage";
import ManualListPage from "./pages/ManualListPage";
import RepairSupportPage from "./pages/RepairSupportPage";

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", background: "#f5f6fa" }}>
        {/* Container giới hạn chiều rộng để giao diện gọn gàng */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
          {/* Các Route chuyển trang giữ nguyên */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/error-list/:categoryId" element={<ErrorListPage />} />
            <Route
              path="/error-detail/:errorId"
              element={<ErrorDetailPage />}
            />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/repair-support" element={<RepairSupportPage />} />
            <Route path="/manuals" element={<ManualListPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
