const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				info: {
					DEFAULT: "hsl(var(--info))",
					foreground: "hsl(var(--info-foreground))",
				},
				success: {
					DEFAULT: "hsl(var(--success))",
					foreground: "hsl(var(--success-foreground))",
				},
				warning: {
					DEFAULT: "hsl(var(--warning))",
					foreground: "hsl(var(--warning-foreground))",
				},
				error: {
					DEFAULT: "hsl(var(--error))",
					foreground: "hsl(var(--error-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["Inter", ...fontFamily.sans],
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--kb-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--kb-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		// plugin(function ({ addUtilities, addComponents, e, config }) {
		// 	// Add your custom styles here
		// 	addComponents({
		// 		".global-loader": {
		// 			// background: dodgerblue;
		// 			height: "2px",
		// 			width: "100%",
		// 			display: "flex",
		// 			"flex-shrink": "0",
		// 			position: "absolute",
		// 			overflow: "hidden",
		// 			top: "0",
		// 			left: "0",
		// 			"z-index": "9999",

		// 			".global-loader-fill": {
		// 				display: "block",
		// 				position: "absolute",
		// 				top: "0",
		// 				left: 0,
		// 				bottom: 0,
		// 				width: "200%",
		// 				transform: "translateX(0)",
		// 				opacity: "0",
		// 				transition: "transform 2s ease, opacity 1s ease",
		// 				background: `linear-gradient(
		// 		to right,
		// 		rgba(52, 82, 255, 0.93) 0%,
		// 		rgba(255, 16, 83, 0.92) 99%,
		// 		rgba(255, 255, 255, 1) 100%
		// 	)`,
		// 			},

		// 			"&::after": {
		// 				display: "block",
		// 				content: " ",
		// 				position: "absolute",
		// 				bottom: "0",
		// 				left: "0",
		// 				right: "0",
		// 				height: "1px",
		// 				background: "rgba(0, 0, 0, 0.2)",
		// 			},

		// 			"&.is-initing": {
		// 				".global-loader-fill": {
		// 					transition: "none",
		// 					opacity: "1",
		// 					animation: "Indeterminate 5s ease-out",
		// 					"animation-fill-mode": "forwards",
		// 				},
		// 			},

		// 			"&.is-loading": {
		// 				".global-loader-fill": {
		// 					transition: "none",
		// 					opacity: "1",
		// 					animation: "Indeterminate 10s ease-out",
		// 					"animation-fill-mode": "forwards",
		// 				},
		// 			},

		// 			"@keyframes Indeterminate": {
		// 				"0%": {
		// 					transform: "translateX(-100%)",
		// 				},
		// 				"20%": {
		// 					transform: "translateX(-10%)",
		// 				},
		// 				"100%": {
		// 					transform: "translateX(0)",
		// 				},
		// 			},
		// 		},
		// 	});
		// }),
		require("tailwindcss-animate"),
		require("tailwindcss/nesting"),
	],
};
