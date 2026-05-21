import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
      850: "#1e1c1a",
    },
        brand: {
          DEFAULT: '#79644d',
          light: '#a68b6a',
          dark: '#4e3f31',
          pale: '#f0e8df',
          cream: '#faf6f1',
        },
        gold: {
          DEFAULT: '#c9a96e',
          light: '#e8d5b0',
          dark: '#9c7a42',
        },
        charcoal: '#1a1714',
        'warm-white': '#fdfaf6',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        headline: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
