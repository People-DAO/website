module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '1440px',
      // => @media (min-width: 960px) { ... }
    },
    colors: {
      'brown': '#89685F',
      'brown-light': '#BD866A',
      'black': '#4F494C',
      'pink': '#FD72AD',
      'orange': '#FCCE9E',
      'blue-light': '#CFE3FF',
      'yellow-light': '#FCCE9E',
      'purple-light': '#A561FF',
      'gray-light': '#F4ECDC',
    },
    extend: {},
  },
  plugins: [],
}
