import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        xl: "3rem"
      },
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        brand: {
          light: "#F5C4CC",
          DEFAULT: "#E7658B",
          dark: "#A63B5C"
        },
        champagne: "#F8EFE6",
        charcoal: "#1F1F1F"
      },
      fontFamily: {
        serif: ["\"Playfair Display\"", "serif"],
        sans: ["\"Inter\"", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 15px 45px rgba(231, 101, 139, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
