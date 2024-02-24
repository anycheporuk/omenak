import { RouteSectionProps } from "@solidjs/router";
import "../styles/index.css"

export default function Chapter(props: RouteSectionProps){

	return (
		<article class="bg-background bg-opacity-80 p-6 rounded">
			{props.children}
		</article>
	)
}