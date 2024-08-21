import path from "path";
import { defineConfig } from "vite";
import vitePluginJuice from "./vitePluginJuice";

export default defineConfig({
  root: path.resolve(__dirname, "src"), // Set the project root to the 'src' directory
  build: {
    outDir: path.resolve(__dirname, "dist"), // Output directory relative to the root
    emptyOutDir: true, // Ensure the output directory is empty before building,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return `assets/${assetInfo.name}`;
          } else if (assetInfo.name.endsWith(".js")) {
            return `assets/${assetInfo.name}`;
          }
          return "[name].[ext]";
        },
      },
      plugins: [vitePluginJuice()],
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
  },
});
