/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
import tailwindcss from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
};
