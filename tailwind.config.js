module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        customGray:'#e6e6e6',
        brightYellow:'#ffe400',
        transparentBlack: 'rgba(0, 0, 0, 0)',
        solidBlack: 'rgba(0, 0, 0, 1)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        custom: "0px 3px 8px rgba(0, 0, 0, 0.25)", // Define the custom shadow
      },
    },
  },
  plugins: [],
};
