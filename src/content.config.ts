import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	loader: glob({ pattern: "*", base: "./src/posts" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		publishedDate: z.date(),
	}),
});

export const collections = { blog };
