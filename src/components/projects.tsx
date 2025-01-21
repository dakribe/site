import { A } from "@solidjs/router";
import { For } from "solid-js";
import { ExternalLink } from "lucide-solid";

type Project = {
	name: string;
	description: string;
	link: string;
	stack?: string[];
};

const projects: Project[] = [
	{
		name: "Dalt",
		description: "Database migration tool",
		link: "https://github.com/dakribe/dalt",
		stack: ["Zig", "Postgres"],
	},
	{
		name: "Monoqa",
		description: "Personal finance insights",
		link: "https://github.com/dakribe/monoqa",
		stack: ["Golang", "React"],
	},
	{
		name: "Kend",
		description: "Job application tracking",
		link: "https://github.com/dakribe/kend",
		stack: ["Ocaml", "Dream", "Melange", "React"],
	},
	{
		name: "Memo",
		description: "Twitter/X clone",
		link: "https://github.com/dakribe/memo",
		stack: ["TypeScript", "Remix", "Drizzle", "Neon"],
	},
];

export function ProjectList() {
	return (
		<div class="w-min">
			<For each={projects}>
				{(project) => (
					<div class="py-0">
						<A
							href={project.link}
							class="flex items-center gap-2 mt-6 w-min hover:text-indigo-500"
						>
							<h3 class="m-0">{project.name}</h3>
							<ExternalLink size={20} />
						</A>
						<p>{project.description}</p>
						<div class="flex gap-2">
							<For each={project.stack}>
								{(stack) => <p class="m-0">{stack}</p>}
							</For>
						</div>
					</div>
				)}
			</For>
		</div>
	);
}
