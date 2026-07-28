import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    // Tắt tính năng tự động biến đổi URL tài nguyên bên ngoài
    assetsInlineLimit: 0,
  },
});
