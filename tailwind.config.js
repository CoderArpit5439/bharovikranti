/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ]
  ,
  theme: {
    extend: {},
  },
  plugins: [
    require('taos/plugin'),
    require('flowbite/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

