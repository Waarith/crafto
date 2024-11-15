/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/images/footer-bg.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
        marquee: 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
}