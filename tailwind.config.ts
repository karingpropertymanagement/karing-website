import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D2D6A",
          50: "#EDF0F8",
          100: "#D3DAE9",
          200: "#A7B5D3",
          300: "#7B90BD",
          400: "#4F6BA7",
          500: "#2E4E8A",
          600: "#1E3A72",
          700: "#14305D",
          800: "#0D2D6A",
          900: "#071A42",
        },
        accent: {
          DEFAULT: "#2D8CFF",
          50: "#EBF5FF",
          100: "#D6EBFF",
          200: "#ADD6FF",
          300: "#85C2FF",
          400: "#5CADFF",
          500: "#2D8CFF",
          600: "#0070F3",
          700: "#005BC4",
        },
        offwhite: "#F8FAFB",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
