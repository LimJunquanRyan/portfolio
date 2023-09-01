import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				linen: "#F7ECE1",
				moonstone: "#66999B",
				africanViolet: "#B58DB6",
				delftBlue: "#3A405A",
				redwood: "#AD6A6C",
			},
		},
	},
	plugins: [],
};
export default config;
