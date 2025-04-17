import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      // PNG 无损
      optipng: { optimizationLevel: 7 },
      // JPEG 有损（质量 85%）
      mozjpeg: { quality: 85 },
      // SVG 压缩
      svgo: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "cleanupIDs", active: true },
        ],
      },
      // WebP 有损（质量 80%）
      webp: { quality: 80 },
    }),
  ],
  // …你其他的 Vite 配置
});
