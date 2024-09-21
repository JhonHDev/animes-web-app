/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				night: "url('/images/auth-bg/color-bg.jpg')",
				loader: "url('/images/loader-bg.png')",
			},
		},
	},
	plugins: [],
};
