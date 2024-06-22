import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@ui", replacement: path.resolve(__dirname, "src/components/ui") },
      { find: "@icons", replacement: path.resolve(__dirname, "src/components/icons") },
    ],
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
});
