module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container : {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        aqua: {
          50: "#36ffff",
          100: "#2cfafa",
          200: "#22f0f0",
          300: "#18e6e6",
          400: "#0edcdc",
          500: "#04d2d2",
          600: "#00c8c8",
          700: "#00bebe",
          800: "#00b4b4",
          900: "#00aaaa",
        },
        blues: {
          50: "#5898ff",
          100: "#4e8eff",
          200: "#4484ff",
          300: "#3a7aff",
          400: "#3070f8",
          500: "#2666ee",
          600: "#1c5ce4",
          700: "#1252da",
          800: "#0848d0",
          900: "#003ec6",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        mono: ["Heebo", "ui-monospace"],
      },
      screen: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
};
