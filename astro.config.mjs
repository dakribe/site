// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "one-light",
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},

	output: "server",
	adapter: vercel(),
});

