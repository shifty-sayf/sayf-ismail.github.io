/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '440px',
      // => @media (min-width: 640px) { ... }
      
      'md': '547px',
      // => @media (min-width: 768px) { ... }
      
      'lg': '768px',
      // => @media (min-width: 1024px) { ... }
      
      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }
      
      '2xl': '1680px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
