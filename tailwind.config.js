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
      screens: {
        'phone': '300px'
      },
      backgroundImage: {
        'lavenderbottom': "url('/public/bg/lavenderbottom.svg')",
        'minttop': "url('/public/bg/minttop.svg')",
        'yellowtop': "url('/public/bg/yellowtop.svg')",
        'bluebottom': "url('/public/bg/bluebottom.svg')",
        'pinkblob': "url('/public/bg/pinkblob.svg')",
        'lines': "url('/public/bg/bglines.svg')"
      },
      textColor: {
        'yellow': "#fcf6bd",
        'mint': "#d0f4de",
        'blue': "#a9def9",
        'lavender': "#E8BAE3",
        'pink': "#ff99c8"
      },
      backgroundColor: {
        'yellow': "#fcf6bd",
        'mint': "#d0f4de",
        'blue': "#a9def9",
        'lavender': "#E8BAE3",
        'pink': "#FAC9DE",
        'cream': "#ffeaea",
        'lightPink': "#ffdede",
        'beige': "#FFCCB6"
      },
    },
  },
  plugins: [],
})
