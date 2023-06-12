module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: 'Readex Pro',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
      //xxl: '1300px',
 
    },
    extend: {
      colors: {
        dark: '#292830',
        light: '#BDBDBD',
        accent: '#4cab94',
        accentHover: '#388d8f',
        grey: '#F5F5F5',
      },
      backgroundImage: {
        overview: "url('/assets/images/bg.svg')",
        //hero: "url('/src/assets/img/hero/wavesOpacity.svg')",
        cta: "url('/assets/images/bg.svg')",
        quiz: "url('/assets/images/bg.svg')",
      },
    },
  },
  plugins: [],
};
