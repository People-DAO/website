const typography = require('@tailwindcss/typography');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			primary: ['Montserrat', 'sans-serif'],
			secondary: ['Sorts Mill Goudy', 'serif'],
			tertiary: ['Questrial', 'sans-serif']
		},
		extend: {
			colors: {
				navy: {
					primary: '#0b3451',
					secondary: '#547285',
					tertiary: '#b6c2ca'
				},
				bronze: {
					primary: '#887237',
					secondary: '#ab9d73',
					tertiary: '#dbd4c3'
				},
				gold: {
					primary: '#d1aa4e',
					secondary: '#dfc383',
					tertiary: '#f1e5cb'
				},
				champagne: {
					primary: '#f3eaaf',
					secondary: '#f7f1c7',
					tertiary: '#fbf9e7'
				},
				beige: {
					primary: '#bfb384',
					secondary: '#d2caa9',
					tertiary: '#ece8da'
				},
				black: {
					primary: '#191919',
					secondary: '#4c4c4c',
					tertiary: '#b2b2b2'
				}
			}
		}
	},
	plugins: [typography],
	purge: {
		enabled: true
	}
};

module.exports = config;
