import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ['Rogue Hero', "sans-serif"],
      },
      colors: {
        customRed: "#890116",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        custom: ["Inter", "sans-serif"],
        rogueFont: ["Rogue Hero", "sans-serif"],
      },
      screens: {
        "2xs": "360px",
        xs: "480px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        tablet: "810px",
        md: "1024px",
        // => @media (min-width: 1024px) { ... }

        lg: "1280px",
        
        xl: "1920px"
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
