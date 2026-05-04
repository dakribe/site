import { Markdown } from "#/components/markdown";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { allPosts } from "content-collections";

export const Route = createFileRoute("/post/$id")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const post = allPosts.find((p) => p.id === params.id);

    if (!post) {
      throw notFound();
    }

    return post;
  },
});

function RouteComponent() {
  const post = Route.useLoaderData();
  return (
    <div>
      <div className="prose">
        <div>
          <h1>{post.title}</h1>
          <p>{post.date.toDateString()}</p>
        </div>
        <Markdown content={post.content} />
      </div>
    </div>
  );
}
