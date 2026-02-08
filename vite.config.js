import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
// import path from "path";


// https://vite.dev/config/
export default defineConfig(({ mode }) =>({

  // base: "/react-tailwind-personal-portfolio/",
  base: mode === "gh" ? "/react-tailwind-personal-portfolio/" : "/",
  plugins: [react(), tailwindcss()],

  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   }
  // }


}));
