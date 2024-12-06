/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-white",
    "shadow-lg",
    "fixed",
    "w-full",
    "top-0",
    "z-50",
    "container",
    "mx-auto",
    "px-4",
    "py-3",
    "flex",
    "justify-between",
    "items-center",
    "text-2xl",
    "font-bold",
    "text-blue-600",
    "hidden",
    "md:flex",
    "space-x-6",
    "text-gray-600",
    "hover:text-blue-600",
    "transition-colors",
    "duration-300",
    "text-blue",
    {
      pattern: /bg-(red|blue|green|gray)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /text-(red|blue|green|gray)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
