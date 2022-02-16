module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				'primary': '#5B6CFF',
				'secondary': '#E9EBFF',
				'ternary': '#F2F4FF',
        'title-color': '#2E3A59',
        'content-color': '#767676',
        'nav-color': '#F7F8FA',
        'app-bg': '#FFFFFF',

				'primary-dark': '#5B6CFF',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',
        'title-color-dark': '#FFFFFF',
        'content-color-dark': '#BFBFBF',
        'nav-color-dark': '#151B28',
        'app-bg-dark': '#0B111E',
			},
    },
    fontFamily: {
      'poppins': ['Poppins'],
    },
  },
  plugins: [],
}
