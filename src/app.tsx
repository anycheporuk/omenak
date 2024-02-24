// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import Header from "~/components/Header";
import "./styles/index.css";


export default function App() {
	return (
		<Router
			root={props => (
				<>
					<Header />
					<main class="max-w-4xl w-full mx-auto p-3">
						<Suspense>{props.children}</Suspense>
					</main>
				</>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
