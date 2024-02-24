import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "rgb(var(--primary-color) / <alpha-value>)",
				text: "rgb(var(--text-color) / <alpha-value>)",
				background: "rgb(var(--background-color) / <alpha-value>)",
			},
		},
	},
	plugins: [],
} satisfies Config;
