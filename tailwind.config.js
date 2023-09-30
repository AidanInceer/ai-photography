/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#28CAFF",
        secondary: "#C0E4FF",
        accent: "#FF7575",
      },
    },
  },
  plugins: [],
}

