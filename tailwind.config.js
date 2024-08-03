/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#fcfcfc",
          "200": "#978668",
          "300": "#222",
          "400": "rgba(255, 255, 255, 0.8)",
          "500": "rgba(151, 134, 104, 0.8)",
        },
        gainsboro: "#dedede",
        darkslategray: {
          "100": "#2a2e2f",
          "200": "#0b2838",
        },
        black: "#000",
        darkgray: "#999",
        midnightblue: "#041e85",
        steelblue: "#5771a1",
        whitesmoke: "#eeeeec",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "open-sans": "'Open Sans'",
        "aoboshi-one": "'Aoboshi One'",
        roboto: "Roboto",
        "antic-didone": "'Antic Didone'",
        rufina: "Rufina",
      },
      borderRadius: {
        "10xs": "3px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      smi: "13px",
      mini: "15px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      xl: "20px",
      lgi: "19px",
      "7xl": "26px",
      lg: "18px",
      "28xl": "47px",
      "9xl": "28px",
      "19xl": "38px",
      "31xl": "50px",
      "11xl": "30px",
      "29xl": "48px",
      "10xl": "29px",
      "30xl": "49px",
      "20xl": "39px",
      "36xl": "55px",
      "14xl": "33px",
      "25xl": "44px",
      "47xl": "66px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
