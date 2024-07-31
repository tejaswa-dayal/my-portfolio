import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary": "#121212",
        "secondary": "hsl(240, 2%, 12%)",
        "primary-border": "hsl(0, 0%, 22%)",
        "light-grey": "hsla(0, 0%, 84%, 0.7)",
        "dark-grey": "#383839",
        "primary-icon": "hsl(45, 100%, 72%)",
        "separator": "hsl(0, 0%, 22%)",
        "primary-white": "hsl(0, 0%, 98%)",
        "secondary-white": "hsl(0, 0%, 100%)",
      },
      
    },
  },
  plugins: [],
};
export default config;
