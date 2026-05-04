/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'hud-bg': '#0a192f',
        'hud-panel': '#112240',
        'hud-border': '#1e293b',
        'hud-accent': '#3b82f6',
      },
    },
  },
  plugins: [],
}
