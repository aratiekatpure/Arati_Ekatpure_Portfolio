// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ["lucide-react"],
//   },
//   base: "/Arati_Ekatpure_Portfolio",
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Arati_Ekatpure_Portfolio/", // 👈 must be your repo name
});
