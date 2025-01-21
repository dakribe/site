import { For } from "solid-js";
import { posts } from "~/data/posts";

export default function BlogPosts() {
	return (
		<div>
			<For each={posts}>
				{(post) => (
					<div class="not-prose">
						<p>{post.date}</p>
						<a href={`/posts/${post.slug}`}>{post.title}</a>
					</div>
				)}
			</For>
		</div>
	);
}
