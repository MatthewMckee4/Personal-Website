module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-text": "var(--text)",
        "custom-background": "var(--background)",
        "custom-primary": "var(--primary)",
        "custom-secondary": "var(--secondary)",
        "custom-accent": "var(--accent)",
      },
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  variants: {
    extend: {},
  },
  extend: {
    extend: {
      mixBlendMode: {
        multiply: "mix-blend-mode: multiply;",
      },
    },
  },
  plugins: [],
};
