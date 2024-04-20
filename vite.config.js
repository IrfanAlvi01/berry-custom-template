import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import generatedAliases from "./generate-aliases";
export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        ...generatedAliases,
      },
    },
    server : {port : 5174},
    build: {
      outDir: "build",
    },
    plugins: [react()],
    
  };
});
