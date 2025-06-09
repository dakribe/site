// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "night-owl",
		},
	},
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	vite: {
		plugins: [tailwindcss()],
	},
});

