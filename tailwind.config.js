/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}', './src/assets/fonts'],
  theme: {
    extend: {
      colors: {
        activeText: '#6E57E0',
      },
      fill: {
        instagram: '#9a3412',
        github: '#000',
        linkedin: '#1d4ed8',
      },
      fontFamily: {
        geistMono: 'GeistMono',
        permanentMarker: 'Permanent Marker',
      },
      keyframes: {
        'open-menu': {
          '0%': {
            transform: 'scaleY(0)',
          },
          '80%': {
            transform: 'scaleY(1.2)',
          },
          '100%': {
            transform: 'scaleY(1)',
          },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
