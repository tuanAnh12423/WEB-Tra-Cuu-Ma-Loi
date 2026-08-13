import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  base: "./", // Dùng đường dẫn tương đối để tương thích GAS
  plugins: [
    react(),
    viteSingleFile(), // Nhúng toàn bộ JS/CSS vào duy nhất 1 file index.html
  ],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  // 🟢 THÊM CẤU HÌNH KẾT NỐI SANG BACKEND TẠI ĐÂY
});
