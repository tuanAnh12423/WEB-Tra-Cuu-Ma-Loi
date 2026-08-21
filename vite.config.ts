import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// ⚠️ Đã thử cấu hình vite-plugin-pwa (cài app ra màn hình chính) nhưng bỏ lại
// vì app này host bằng cách copy-paste index.html vào Google Apps Script —
// PWA cần thêm vài file riêng (manifest.webmanifest, sw.js, registerSW.js)
// mà GAS không phục vụ được, nên tính năng cài đặt sẽ không hoạt động ở đó.
// Nếu sau này đổi sang host tĩnh thật (GitHub Pages, Firebase Hosting...)
// thì có thể bật lại được.
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
