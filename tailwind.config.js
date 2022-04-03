module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
  ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
};
