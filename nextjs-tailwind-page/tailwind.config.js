module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'azul-padrao': '#303841',
        'azul-escuro': '#2A3038'
      }
    },
  },
  plugins: [],
  variants: {
    // ...
     flexDirection: ['responsive', 'hover', 'focus'],
  }
}