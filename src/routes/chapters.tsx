import { RouteSectionProps } from "@solidjs/router";
import "../styles/chapters.css"
import { Pagination } from "~/components/Pagination";

export default function Chapter(props: RouteSectionProps){

	return (
		<article class="bg-background bg-opacity-80 p-6 rounded">
			<Pagination />
			{props.children}
			<Pagination />
		</article>
	)
}