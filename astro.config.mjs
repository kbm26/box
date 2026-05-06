import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  plugins: [daisyui],
  daisyui: {
    themes: ['light'],
  },
  theme: {
    extend: {
      fontFamily: {
        display: ['DM Serif Display', 'serif'],
      },
    },
  },
}