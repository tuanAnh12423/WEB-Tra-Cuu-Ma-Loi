import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorListPage from "./pages/ErrorListPage";
import ErrorDetailPage from "./pages/ErrorDetailPage";
import ReportPage from "./pages/ReportPage";

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", background: "#f5f6fa" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/error-list/:categoryId" element={<ErrorListPage />} />
          <Route path="/error-detail/:errorId" element={<ErrorDetailPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;