/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#FC4747",
        "dark-blue": "#10141E",
        gray: "#5A698F",
        blue: "#161D2F",
      },
      width: {
        screenModlg: "calc(100svw - 164px)",
        screenModmd: "calc(100svw - 25px)",
        screenModsm: "calc(100svw - 16px)"
      },
    },
  },
  plugins: [],
};
