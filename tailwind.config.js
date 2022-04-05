module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tw-elements/dist/plugin'),
  ],
  ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
};
