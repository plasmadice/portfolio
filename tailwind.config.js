/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-kaisei)"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      colors: {
        "space": {
          50: "#E3E4ED",
          100: "#C4C7D9",
          200: "#888FB4",
          300: "#575E8A",
          400: "#31364E",
          500: "#0C0D13",
          600: "#0A0B10",
          700: "#08090D",
          800: "#040406",
          900: "#020203",
          950: "#020203"
        },
        "imperial": {
          50: "#FFEBEC",
          100: "#FFD6D8",
          200: "#FFADB1",
          300: "#FF8A90",
          400: "#FF6169",
          500: "#FF3942",
          600: "#FA000C",
          700: "#BD0009",
          800: "#7A0006",
          900: "#3D0003",
          950: "#1F0002"
        },
        "royal": {
          50: "#EFE9FB",
          100: "#DDCFF7",
          200: "#BEA3F0",
          300: "#9C72E9",
          400: "#7D46E2",
          500: "#5E21CF",
          600: "#4C1BA7",
          700: "#38147B",
          800: "#260D54",
          900: "#120628",
          950: "#0A0416"
        }
    
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["lofi", "business"],
    darkTheme: "business",
  }
}
