/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'vgreen': {
					'50': '#f5f8f6',
					'100': '#dfe8e4',
					'200': '#bed1c9',
					'300': '#96b2a8',
					'400': '#709186',
					'500': '#5e8276',
					'600': '#435e56',
					'700': '#384d46',
					'800': '#303f3b',
					'900': '#2b3634',
					'950': '#151e1c',
			},
			'santa-fe': {
				'50': '#f8f5f2',
				'100': '#ebe2da',
				'200': '#d6c3b1',
				'300': '#c1a188',
				'400': '#b2896d',
				'500': '#a57059',
				'600': '#925c4d',
				'700': '#7a4943',
				'800': '#653d3b',
				'900': '#553432',
				'950': '#2f1a19',
		},
		'mongoose': {
			'50': '#f8f7f4',
			'100': '#efece5',
			'200': '#ddd8cb',
			'300': '#c8bda9',
			'400': '#af9d83',
			'500': '#a18a6e',
			'600': '#947a62',
			'700': '#7b6453',
			'800': '#655247',
			'900': '#53443b',
			'950': '#2c231e',
	}					
			}
		},
	}
}