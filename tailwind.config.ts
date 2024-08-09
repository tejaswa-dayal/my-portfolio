import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%,0%) 50%)",
        "hover-gradient":
          "linear-gradient(to bottom right, hsla(45, 100%, 72%, 30%) 0%, hsla(0, 0%, 25%,0%) 50%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#121212",
        secondary: "hsl(240, 2%, 12%)",
        "primary-border": "hsl(0, 0%, 22%)",
        "light-grey": "hsla(0, 0%, 84%, 0.7)",
        "dark-grey": "#383839",
        "primary-icon": "hsl(45, 100%, 72%)",
        separator: "hsl(0, 0%, 22%)",
        "primary-white": "hsl(0, 0%, 98%)",
        "secondary-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
