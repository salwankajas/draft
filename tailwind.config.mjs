/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: {
        green: {
          400: "#012A1E",
          500: "#025239",
          600: "#60895A",
          700: "#628C5B",
          800: "#638D5C",
          900: "#1A2517"
        },
        blue: {
          100: "#01000B"
        }
      },
      secondary: {
        white: {
          100: "#E5EADC",
          200: "#FCFBFD",
          300: "#FFFFFF",
          400: "#FBFFF5",
          500: "#F6F6F6"
        },
        gray: {
          50: "#364038",
          100: "#676A67",
          200: "#686868",
          300: "#1A1A18",
          400: "#555555",
          500: "#6F6F6E",
          600: "#C0C0C0",
          700: "#DBDFDC",
          800: "#2C2C2A",
          900: "#191918"
        }
      }
    },
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"]
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none"
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none"
        }
      };
      addUtilities(newUtilities);
    }
  ]
};
