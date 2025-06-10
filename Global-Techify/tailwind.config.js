// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      Arial: 'Arial',
      Verdana: 'Verdana',
      poppins: ['Poppins'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    backgroundImage: {
      hero: "url('src/assets/Home/Home1.png')",
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        "dark": '#232A3C',
        "medium": '#293245',
      },
      
    },
  },
    // ...
  plugins: [
    

  ],
  variants: {
    extend: {
      opacity: ['disabled'],
      bg: ['disabled'],
      // add any tailwind classes you wish to enable disabled: on here  
    }
  },
}


