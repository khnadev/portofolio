/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Sesuaikan dengan struktur proyekmu
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'delay-200': 'fadeInUp 0.8s ease-out 0.2s both',
        'delay-300': 'fadeInUp 0.8s ease-out 0.3s both',
        'delay-500': 'fadeInUp 0.8s ease-out 0.5s both',
      }
    }
  },
  plugins: [],
}
