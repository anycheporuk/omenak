import { A, createAsync } from "@solidjs/router";
import { For } from "solid-js";
import { getChapters } from "~/getChapters";


export default function Contents() {
	const chapters = createAsync(() => getChapters());
	return (
		<div>
			<h1>Contents</h1>
			<ol class='list-decimal pl-5'>
				<For each={chapters()} children={chapter => <li><A href={chapter.path}>{chapter.title}</A></li>} />
			</ol>
		</div>
	);
}