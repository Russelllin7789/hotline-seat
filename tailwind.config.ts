import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mantou: ["MANTOU", "system-ui", "sans-serif"],
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        hotline: {
          light: "#e0f4fc",
          DEFAULT: "#00AEEF",
          dark: "#0090C8",
        },
        cream: "#F7F5F0",
      },
    },
  },
  plugins: [],
};

export default config;
