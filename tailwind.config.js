/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        span: "#4F4F4F",
        button: " #333333",
        buttonText: "#FFFFFF",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        spaceMono: ["Space Mono"],
        inconsolata: ["Inconsolata"],
      },
    },
  },
  plugins: [],
};
