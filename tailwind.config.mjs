/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
                primary_bg: 'var(--primary-bg-color)',
				secondary_dark_bg: 'var(--secondary-bg-color)',
				paragraph_primary : 'var(--primary-para-color)',
				third_bg:'var(--third-color)',
				card:'var(--card-color)',
            },
		},
	},
	darkMode: 'class',
	plugins: [],
}
