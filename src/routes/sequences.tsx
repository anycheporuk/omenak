import { SequencesTable } from "~/components/SequencesTable";


export default function Home() {
	return (
		<>
			<h1 class="max-6-xs text-6xl text-text font-bold uppercase my-16">Sequences</h1>
			<SequencesTable />
		</>
	);
}
