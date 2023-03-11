/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        prmlight: '#252945',
        primary: '#1f213a',
        secondary: '#141625',
        prp: '#7c5df9',
        grn: '#1ddfa0',
        grndark: '#1f2c3f',
        org: '#cb7f1e',
        orgdark: '#2b2735',
        gra: '#cccde1',
        gradark: '#2a2c43'
      }
    },
  },
  plugins: [],
}
