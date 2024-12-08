/** @type {import("tailwindcss").Config} */

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "warm-beige": "#d3c5bd",
        "soft-cream": "#efe8dc",
        "golden-tan": "#b68e6d",
        "muted-sand": "#d8c5a2",
        "warm-orange": "#b68e6d",
        "earthy-brown": "#4e3b31",
        "deeper-brown": "#6f4f32"
      },
      spacing: {
        "nav-height": "64px",
        "nav-ul-height": "56px",
        "border-left-right": "9px",
        "border-bottom-width": "3px",
        "10": "10"
      },
      rotate: {
        "6": "6deg"
      },
    },
  },
  plugins: [],
};
