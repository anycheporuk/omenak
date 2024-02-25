import { useLocation } from "@solidjs/router";


export default function Header() {
	const location = useLocation();
	const active = (path: string) =>
		path == location.pathname ? "border-primary" : "border-transparent hover:border-primary";
	return (
		<header class="bg-background bg-opacity-80 w-full">
			<nav class="max-w-4xl mx-auto">
				<ul class="container flex items-center p-3 gap-8">
					<li class={`border-b-2 ${active("/")}`}>
						<a href="/">Home</a>
					</li>
					<li class={`border-b-2 ${active("/about")} `}>
						<a href="/about">About</a>
					</li>
					<li class={`border-b-2 ${active("/sequences")} `}>
						<a href="/sequences">Sequences</a>
					</li>

				</ul>
			</nav>
		</header>
	);
}
