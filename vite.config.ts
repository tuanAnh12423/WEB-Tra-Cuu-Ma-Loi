import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Tra Cứu Mã Lỗi & Sửa Chữa Điện Lạnh",
        short_name: "TraLoiĐienLanh",
        description: "Sổ tay tra cứu mã lỗi và sơ đồ đo đạc cho Kỹ thuật viên",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone", // Chạy full màn hình như app di động
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        // 🟢 Cấu hình Cache Offline cho hình ảnh và tài nguyên
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}"],
        runtimeCaching: [
          {
            // Cache toàn bộ hình ảnh (kể cả ảnh từ Google Drive / CDN ngoài)
            urlPattern:
              /^https:\/\/.*(googleusercontent|placeholder|via\.placeholder).*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "external-images-cache",
              expiration: {
                maxEntries: 200, // Lưu tối đa 200 tấm ảnh
                maxAgeSeconds: 30 * 24 * 60 * 60, // Giữ trong bộ nhớ 30 ngày
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
});
