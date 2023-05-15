/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      neutral: {
        100: "hsl(0, 0%, 100%)",
        200: "hsl(225, 100%, 98%)",
        300: "hsl(227, 47%, 96%)",
        400: "hsl(228, 34%, 66%)",
        500: "hsl(228, 12%, 44%)",
        600: "hsl(228, 28%, 20%)",
        700: "hsl(232, 19%, 15%)",
        800: "hsl(230, 17%, 14%)",
      },
      red: "hsl(356, 69%, 56%)",
      green: "hsl(163, 72%, 41%)",
      facebook: "hsl(208, 92%, 53%)",
      twitter: "hsl(203, 89%, 53%)",
      // instagram: ["hsl(37, 97%, 70%)", "hsl(329, 70%, 58%)"],
      instagram: "hsl(37, 97%, 70%)",
      youtube: "hsl(348, 97%, 39%)",
    },
    container: {
      center: true,
    },
    extend: {
      // colors: {
      //   red: "hsl(356, 69%, 56%)",
      // },
    },
  },
  plugins: [],
};
