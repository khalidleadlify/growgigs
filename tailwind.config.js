/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
  "bg-blue-100",
  "text-blue-800",
  "text-xs",
  "font-semibold",
  "px-3",
  "py-1",
  "rounded-full",
  "border",
  "border-blue-300",
  "shadow-sm",
  "inline-flex",
  "items-center",
  "flex",
  "flex-wrap",
  "gap-2",
  "mt-4",
  "mb-4",
],
  theme: {
    extend: {},
  },
  plugins: [],
}
