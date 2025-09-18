import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  server: {
    host: true,
    port: 3000,
    allowedHosts: ["development"],
  },
  plugins: [solid()],
});
