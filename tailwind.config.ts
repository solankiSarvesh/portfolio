import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#080d18",
          card: "rgba(13, 21, 38, 0.5)",
          border: "rgba(255, 255, 255, 0.04)",
          accent: "#f8fafc",
          emerald: "#10b981",
          teal: "#06b6d4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
      backgroundImage: {
        "carbon-grid": "linear-gradient(to right, rgba(16, 185, 129, 0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.015) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "soft-float": "softFloat 8s ease-in-out infinite",
        "kinetic-spin": "kineticSpin 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        softFloat: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(1.015)" },
        },
        kineticSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      boxShadow: {
        "premium": "0 25px 50px -20px rgba(3, 7, 18, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.03)",
        "hover-premium": "0 35px 70px -25px rgba(3, 7, 18, 0.95), 0 0 30px -10px rgba(16, 185, 129, 0.2), 0 0 0 1px rgba(16, 185, 129, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
