import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
      },
      colors: {
        primary: "#18181B",
        white: "#ffffff",
        black: "#000000",
        brand: "#07529E",
        bordersolid: "#f4f4f4",
        red: "#FF0000",
      },
    },
  },
  plugins: [],
};
export default config;
