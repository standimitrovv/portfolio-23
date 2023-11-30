/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}', './src/assets/fonts'],
  theme: {
    extend: {
      fontFamily: {
        geistMono: 'GeistMono',
        permanentMarker: 'Permanent Marker',
      },
    },
  },
  plugins: [],
};
