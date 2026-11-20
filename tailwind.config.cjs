// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        primary: "#9b5de5",
        accent: "#00b4d8",
        cyan: "#00f5d4",
        dark: "#0a0a0a",
      },
    },
  },
  plugins: [],
};
