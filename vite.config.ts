import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    // Tắt tính năng tự động biến đổi URL tài nguyên bên ngoài
    assetsInlineLimit: 0,
  },
  // 🟢 THÊM CẤU HÌNH KẾT NỐI SANG BACKEND TẠI ĐÂY
  server: {
    port: 5173, // Port chạy Frontend
    proxy: {
      // Mỗi khi Frontend fetch('/api/...'), Vite sẽ tự chuyển sang Backend port 5000
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
