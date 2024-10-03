/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    colors: {
      primary: {
        green: {
      
          200:"#8dceb3",
          300:"#00a65e3f",
          400: "#012A1E",
          500: "#004A0F",
          600: "#0e7b5c",
          700: "#203f32",
          800: "#006f50",
          900: "#e3f7ee",
          950:"#00b7651c",
          1000: "#a4f3d2",
          1050:"#00ffa21e"
        },
        blue: {
          100: "#01000B"
        }
      },
      secondary: {
        white: {
          100: "#E5EADC",
          200: "#FCFBFD",
          300: "#f4fbf8",
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
          600: "#475467",
          700: "#F9FAFB",
          800: "#2C2C2A",
          900: "#191918",
          1000:"#747e7b",
        },
        black:{
        50: "#000000",
        }
      }
    },
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"]
      },
      backgroundImage: {
        'svg-pattern': "url('/src/style/background-image/background-pattern.svg')", 
        
      },
      
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
          display: "none",
        
        }
      };
      addUtilities(newUtilities);
    }
  ]
};
