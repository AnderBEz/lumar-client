/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md: "50px"
        }
      },
      fontFamily: {
        //agregar fuente
        'principal': ['Baskervville', 'serif']
      },
      colors: {
        'gold-highlight' : "#BA7712",
        'yellow-focus' : "#E6AF2E",
        'blue-footer' : "#020F23",
      },
    }
  },
  plugins: []
};