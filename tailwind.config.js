module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace"],
      },
      colors: {
            yellow: {
              "50": "#FDFEEC",
              "100": "#FBFDDD",
              "200": "#F7FCBB",
              "300": "#F4FA99",
              "400": "#F0F977",
              "500": "#EBF754",
              "600": "#E5F415",
              "700": "#B2BE09",
              "800": "#777F06",
              "900": "#3B3F03"
            },
        }
    },
  },
  plugins: [],
}