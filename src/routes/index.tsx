import { createFileRoute, Link } from "@tanstack/react-router";
import { allPosts } from "content-collections";

export const Route = createFileRoute("/")({
  component: Home,
  loader: () => allPosts,
});

function Home() {
  const posts = Route.useLoaderData();

  return (
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
  );
}
