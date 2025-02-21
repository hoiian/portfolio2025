/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['PP Editorial New', 'serif'],
        sans: ['Avenir Next', 'Inter', 'sans-serif'],
        serifTC: ['"Noto Serif TC"', 'serif'],
        // xanh: ['Xanh Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
