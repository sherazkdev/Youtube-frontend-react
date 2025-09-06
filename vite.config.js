import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const env = loadEnv("development", process.cwd(), "");

  console.log(env);
  return {
    plugins: [react()],
    server: {
      allowedHosts: "all",
      historyApiFallback: true,
    },
    base: "/",
  };
});
