/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#DE547D",
          100: "#d64974",
          200: "#c8465e",
        },
        secondary: "#710146",
        "secondary-100": "#5d073b",
        "text-dark": "#1C1C1E",
        "text-muted": "#66758A",
        success: "#16A34A",
        error: "#DC2626",
        warning: "#FACC15",
        background: "#F9FAFB",
        foreground: "#171717",
        lightgrey: "#E5E7EB",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
