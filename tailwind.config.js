/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#18222f",
        page: "#2b3441",
        card: "#475661",
        "card-hover": "#4f5e74",
        "default-text": "#f1f2f5",
        "blue-accent": "#0083d4",
        "blue-accent-hover": "#0099fff",
      },
    },
  },
  plugins: [],
};
