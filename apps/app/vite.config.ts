import { defineConfig, loadEnv } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const targetImgOptimize = 70;

  const HOST = env.VITE_APP_HOST;
  const PORT = Number(env.VITE_APP_PORT);
  const DOMAIN = env.VITE_APP_DOMAIN;
  const MODE = env.VITE_APP_MODE;

  if (!HOST || !MODE || isNaN(PORT) || !DOMAIN || !MODE)
    throw new Error("Нет необходимых переменных окружения");

  return {
    plugins: [
      react(),
      svgr(),
      ViteImageOptimizer({
        png: { quality: targetImgOptimize },
        jpeg: {
          quality: targetImgOptimize,
          progressive: true,
        },
        jpg: {
          quality: targetImgOptimize,
          progressive: true,
        },
        webp: { quality: targetImgOptimize },
        avif: { quality: targetImgOptimize },
        svg: { multipass: true },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@libs": path.resolve(__dirname, "../../libs"),
      },
    },
  };
});
