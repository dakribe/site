import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import { z } from "zod";

// for more information on configuration, visit:
// https://www.content-collections.dev/docs/configuration

const posts = defineCollection({
  name: "posts",
  directory: "./src/posts/",
  include: "*.md",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      id: document._meta.path,
      html,
    };
  },
});

export default defineConfig({
  content: [posts],
});
