/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        surface: "#121214",
        line: "rgba(237, 235, 230, 0.09)",
        paper: "#EDEBE6",
        muted: "#9C998F",
        signal: "#C8F169",
        pulse: "#7DD3FC",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        page: "76rem",
      },
    },
  },
  plugins: [],
};
