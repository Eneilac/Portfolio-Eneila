/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '0': '0',
        'full': '100%',
        'screen': '100vh',
        '200': '200px',
        '500': '500px',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
    },
  },
  variants: {
    extend: {
      maxHeight: ['responsive', 'hover', 'focus'],
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
};
