const colorsConfig = require('./colors.config.cjs');
const fontsConfig = require('./fonts.config.cjs');

/** @type {import('tailwindcss').Config['theme']['extend']['typography']['DEFAULT']['css']} */
module.exports = {
	xl: {
		css: {
			color: colorsConfig.black.primary,
			borderColor: colorsConfig.navy.tertiary,
			h1: {
				fontFamily: fontsConfig.secondary.join(','),
				fontWeight: 400,
				color: colorsConfig.navy.primary
			},
			h2: {
				fontFamily: fontsConfig.secondary.join(','),
				fontWeight: 400,
				color: colorsConfig.navy.primary
			},
			h3: {
				fontFamily: fontsConfig.secondary.join(','),
				fontWeight: 400,
				color: colorsConfig.navy.primary
			},
			h4: {
				fontFamily: fontsConfig.secondary.join(','),
				fontSize: '1.5rem',
				fontWeight: 400,
				color: colorsConfig.navy.primary
			},
			h5: {
				fontFamily: fontsConfig.secondary.join(','),
				fontWeight: 400,
				color: colorsConfig.navy.primary
			},
			h6: {
				fontFamily: fontsConfig.secondary.join(','),
				fontWeight: 400,
				color: colorsConfig.navy.primary
			},
			a: {
				'&:hover': {
					color: colorsConfig.bronze.primary
				}
			},
			blockquote: {
				fontFamily: fontsConfig.secondary.join(',')
			},
			code: {
				fontWeight: 400,
				backgroundColor: 'rgba(0,0,0,0.1)',
				'&:before': {
					display: 'none'
				},
				'&:after': {
					display: 'none'
				}
			},
			mark: {
				backgroundColor: colorsConfig.gold.primary
			},
			'--tw-prose-counters': colorsConfig.navy.primary,
			'--tw-prose-bullets': colorsConfig.navy.primary,
			'--tw-prose-th-borders': colorsConfig.black.tertiary
		}
	}
};
