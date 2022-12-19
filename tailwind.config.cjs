/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./*.html', './src/**/*.{html,js,svelte,ts}'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			xs: '450px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			keyframes: {
				'fade-in-down': {
					'0%': {
						opacity: '0',

						transform: 'translateY(-10px)'
					},
					'100%': {
						opacity: '1',

						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'fade-in-down': 'fade-in-down 0.5s ease-out'
			},
			gridTemplateRows: {
				new3: 'repeat(3, minmax(100px, 200px))' //width, height
			},
			gridTemplateColumns: {
				nav1: 'repeat(1, minmax(0, 0.5fr) 1fr)',
				login1: 'repeat(1, minmax(0, 1fr) 0.5fr)'
			}
		}
	},
	plugins: [require('daisyui')]
};
