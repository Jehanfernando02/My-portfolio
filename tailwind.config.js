/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          purple: {
            400: '#a35cff',
            500: '#8a2be2',
            600: '#6a1cb0',
          },
        },
        keyframes: {
          float: {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
            '100%': { transform: 'translateY(0px)' },
          },
          pulse: {
            '0%': { opacity: '0.6' },
            '50%': { opacity: '1' },
            '100%': { opacity: '0.6' },
          },
        },
        animation: {
          float: 'float 4s ease-in-out infinite',
          'pulse-slow': 'pulse 3s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  }