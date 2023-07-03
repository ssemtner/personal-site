/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["[data-theme=light]"],
					"primary": "#7c3aed",
					"primary-content": "#ffffff"
				},
				dark: {
					...require("daisyui/src/theming/themes")["[data-theme=dark]"],
					"primary": "#7c3aed",
					"primary-content": "#ffffff"
				}
			}
		]
	}
}
