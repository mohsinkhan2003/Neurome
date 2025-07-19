/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cricpb': {
          'primary': '#1e40af',
          'secondary': '#f97316',
          'accent': '#16a34a',
        }
      },
      fontFamily: {
        'cricpb': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
