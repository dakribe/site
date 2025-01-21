import { For } from "solid-js";

const socialLinks = [
	{
		label: "GitHub",
		href: "https://github.com/dakribe",
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com/in/dakribe",
	},
];

export default function Socials() {
	return (
		<div class="flex gap-4">
			<For each={socialLinks}>
				{(link) => <a href={link.href}>{link.label}</a>}
			</For>
		</div>
	);
}
