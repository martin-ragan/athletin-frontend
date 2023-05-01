/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#CC274F',
        'white': '#FFFFFF',
        'black': '#000000',
        'pink': '#F9C2CF',
        'gray': '#D9D9D9',
      },
      backgroundImage: {
        'hero-image': "url('/assets/images/hero-image.jpg')",
        'login-image': "url('/assets/images/log-in.jpg')",
        'trainers-image': "url('/assets/images/trainers.png')",
      },
    },
  },
  plugins: [],
}
