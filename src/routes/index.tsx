import { SequencesTable } from "~/components/SequencesTable";


export default function Home() {
	return (
		<main class="text-center mx-auto text-gray-900 p-4">
			<h1 class="max-6-xs text-6xl text-slate-100 font-bold uppercase my-16">Sequences</h1>
			<SequencesTable />
		</main>
	);
}
