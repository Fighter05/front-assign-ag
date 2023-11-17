/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
      },
      width: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        176: "44rem",
      },
      rotate: {
        17: "17deg",
        22: "22deg",
      },
    },
  },
  plugins: [],
};
