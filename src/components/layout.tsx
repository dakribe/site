import { Title } from "@solidjs/meta";
import { JSX } from "solid-js";

interface LayoutProps {
	title: string;
	children: JSX.Element;
}

export default function Layout(props: LayoutProps) {
	return (
		<>
			<Title>{props.title}</Title>
			{props.children}
		</>
	);
}
