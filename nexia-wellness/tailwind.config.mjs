/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nexiaButton: "var(--nexia-button)",
        nexiaBackground: "var(--nexia-background)",
      },
      fontFamily: {
        nunito: "var(--font-nunito-sans)",
      },
    },
  },
  plugins: [],
};
