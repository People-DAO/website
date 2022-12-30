const typography = require('@tailwindcss/typography');
const fontsConfig = require('./src/util/tailwind/fonts.config.cjs');
const colorsConfig = require('./src/util/tailwind/colors.config.cjs');
const typographyConfig = require('./src/util/tailwind/typography.config.cjs');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: fontsConfig,
		extend: {
			colors: colorsConfig,
			typography: typographyConfig
		}
	},
	plugins: [
		typography({
			className: 'formatted-content'
		})
	],
	purge: {
		enabled: true
	}
};

module.exports = config;
