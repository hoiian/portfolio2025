/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["PP Editorial New", "serif"],
        sans: ["Avenir Next", "Inter", "sans-serif"],
        serifTC: ['"Noto Serif TC"', "serif"],
        // xanh: ['Xanh Mono', 'monospace'],
      },
      animation: {
        "gradient-x": "gradient-x 5s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
