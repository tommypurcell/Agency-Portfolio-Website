module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'red-800': '0 4px 6px -1px rgba(185, 28, 28, 0.1), 0 2px 4px -1px rgba(185, 28, 28, 0.06)',
      },
      fontFamily: {
        kufam: ["Kufam"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        89: "22.25rem",
        100: "25rem",
        130: "32.5rem",
      },
      width: {
        mc: "max-content",
      },
      borderRadius: {
        "5xl": "2.5rem",
        "10xl": "5rem",
        "20xl": "10rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
