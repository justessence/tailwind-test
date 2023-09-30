/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html, js}'],
  theme: {
    extend: {
        margin: {
            13 : "2.5rem"
        },
        animation: {
            spinSlow : 'spin 2s linear infinite',
        },
        colors: {
            'cofee' : '##ffc82c'
        }
    }
  },
  plugins: [],
}

