/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     './Pages/**/*.{cshtml,html,js}',
     './Views/**/*.{cshtml,html,js}'
],
  theme: {
      extend: {
        fontFamily: {
          inter: [
            'Inter',
          ],
        },
      },
  },
  plugins: [
    require( 'tailwindcss' ),
    require( 'autoprefixer' ),
  ],
}