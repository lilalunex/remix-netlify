/** @type {import("tailwindcss").Config} */

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "warm-beige": "#d3c5bd",
        "soft-cream": "#efe8dc",
        "muted-sand": "#d8c5a2",
        "golden-tan": "#b68e6d",
        "earthy-brown": "#4e3b31",
        "deeper-brown": "#6f4f32",
        "light-fleshy-pink": "#e5b9b4",
        "muted-blood-red": "#d97a7a",
        "dusky-pink": "#D979B3",
        "soft-gold": "#F5CC84"
      },
      spacing: {
        "nav-height": "64px",
        "nav-ul-height": "56px",
        "border-left-right": "9px",
        "border-bottom-width": "3px",
        "21": "5.25rem"
      },
      rotate: {
        "6": "6deg",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        ".min-h-screen-hero": {
          minHeight: `calc(100vh - ${theme("spacing.nav-height")})`,
        },
        ".btn": {
          color: theme("colors.deeper-brown"),
          borderColor: theme("colors.deeper-brown"),
          backgroundColor: theme("colors.muted-sand"),
          display: "block",
          textAlign: "center",
          width: "300px",
          // 'margin-left': "120px"
        },
        ".btn:hover": {
          backgroundColor: theme("colors.soft-cream"),
          color: theme("colors.earthy-brown"),
        }
      });
    },
  ],
};
