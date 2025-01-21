import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { Navbar } from "./components/nav";
import Prose from "./components/prose";
import { MetaProvider } from "@solidjs/meta";

export default function App() {
	return (
		<MetaProvider>
			<Router
				root={(props) => (
					<main>
						<Navbar />
						<Suspense>
							<Prose>{props.children}</Prose>
						</Suspense>
					</main>
				)}
			>
				<FileRoutes />
			</Router>
		</MetaProvider>
	);
}
