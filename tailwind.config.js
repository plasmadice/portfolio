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
        // DEFAULT: {
        //   css: {
        //     color: "inherit",
        //     h1: {
        //       color: "inherit",
        //     },
        //     h2: {
        //       color: "inherit",
        //     },
        //     h3: {
        //       color: "inherit",
        //     },
        //     a: {
        //       color: "inherit",
        //     },
        //   },
        // },
        // invert: {
        //   css: {
        //     color: "inherit",
        //   },
        // },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["dark", "light"],
  },
}
