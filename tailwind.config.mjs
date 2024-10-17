/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
                primary_bg: 'var(--primary-bg-color)',
            },
		},
	},
	darkMode: 'class',
	plugins: [],
}
