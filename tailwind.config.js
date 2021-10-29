module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        raleway: "'Raleway', sans-serif",
        openSans: "'Open Sans', sans-serif",
      },

      backgroundColor: {
        primary: {
          emailBg: "hsl(217, 28%, 15%)",
          mainBg: "hsl(218, 28%, 13%)",
          footerBg: "hsl(216, 53%, 9%)",
          testiBg: "hsl(219, 30%, 18%)",
        },
      },
      gradientColorStops: {
        cyanGr: "hsl(176, 68%, 64%)",
        blueGr: "hsl(198, 60%, 50%)",
      },
      textColor: {
        cyan: "hsl(176, 68%, 64%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
