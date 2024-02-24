import { A, cache, createAsync } from "@solidjs/router";
import { For } from "solid-js";


type Frontmatter = {
	title: string;
}


const getChapters = cache(async () => {
	"use server";
	const imports: Record<string, Frontmatter> = import.meta.glob("./chapters/*.{md,mdx}", {
		eager: true,
		import: "frontmatter",
	});

	return Object.entries(imports).map(([key, value]) => ({
		path: key.slice(2, key.lastIndexOf(".")),
		...value,
	}));
}, "chapters")

export default function Contents() {
	const chapters = createAsync(() => getChapters());
	return (
		<div>
			<h1>Contents</h1>
			<ol>
				<For each={chapters()} children={chapter => <li><A href={chapter.path}>{chapter.title}</A></li>} />
			</ol>
		</div>
	);
}