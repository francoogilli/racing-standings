import type { Config } from "tailwindcss";

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
      },
      fontFamily: {
        geist: ["var(--font-geist-sans)", "sans-serif"],
        clash: ['Clash', 'system-ui', 'sans-serif'],
        inter: ["var(--font-inter)", "sans-serif"],
        train: ["var(--font-train-one)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
