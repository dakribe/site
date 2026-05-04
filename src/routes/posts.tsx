import { createFileRoute, Link } from "@tanstack/react-router";
import { allPosts } from "content-collections";

export const Route = createFileRoute("/posts")({
  component: RouteComponent,
  loader: () => allPosts,
});

function RouteComponent() {
  const posts = Route.useLoaderData();
  return (
    <div>
      <div>
        {posts.map((post) => (
          <Link to="/post/$id" params={{ id: post.id }} key={post.title}>
            <div>
              <p>{post.title}</p>
              <p>{post.date.toDateString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
