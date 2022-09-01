const withMT = require("@material-tailwind/react/utils/withMT");
 
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { 
      fontFamily: {
        aboreto: ['Aboreto', 'cursive'],
        lora: ['Lora', 'serif']
      },
      backgroundImage: {
        'lavenderbottom': "url('/public/bg/lavenderbottom.svg')",
        'minttop': "url('/public/bg/minttop.svg')",
        'yellowtop': "url('/public/bg/yellowtop.svg')",
        'bluebottom': "url('/public/bg/bluebottom.svg')",
        'pinkblob': "url('/public/bg/pinkblob.svg')"
      },
      textColor: {
        'yellow': "#fcf6bd",
        'mint': "#d0f4de",
        'blue': "#a9def9",
        'lavender': "#e4c1f9",
        'pink': "#ff99c8"
      },
      backgroundColor: {
        'yellow': "#fcf6bd",
        'mint': "#d0f4de",
        'blue': "#a9def9",
        'lavender': "#e4c1f9",
        'pink': "#ff99c8",
        'cream': "#ffeaea",
        'lightPink': "#ffdede"
      }
    },
  },
  plugins: [],
})
