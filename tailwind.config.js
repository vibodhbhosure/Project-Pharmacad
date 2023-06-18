/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    // screens: {
    //   // 'xxs': '280px',
    //   'xs': '345px',
    //   'sm': '576px',
    //   // => @media (min-width: 576px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '992px',
    //   // => @media (min-width: 992px) { ... }

    //   'xl': '1200px',
    //   // => @media (min-width: 1200px) { ... }
    // },
    extend: {
      colors: {
        bestchoice: '#F2FFF0',
        bluishgreen: '#1CFFF1',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
