import { oldOnes } from "~/sequences";
import "./SequencesTable.css";
import { useTranslation } from "~/shared/useTranslation";


export function SequencesTable() {
	const {t} = useTranslation("sequences");
	return (
		<table class="w-72 border-separate border-spacing-1 sequences-table mx-auto">
			<thead class="bg-background *:*:p-2">
			<tr>
				<th colspan={2} class="text-amber-800 dark:text-amber-700">Ніхто</th>
				<th colspan={2} class="text-slate-500 dark:text-slate-300">Майстер</th>
				<th colspan={2} class="text-slate-500 dark:text-slate-300">Лицар</th>
				<th class="text-yellow-600 dark:text-yellow-400">Святий</th>
				<th class="text-yellow-600 dark:text-yellow-400">Ангел</th>
				<th class="text-yellow-600 dark:text-yellow-400">Герой</th>
				<th class="text-sky-600 dark:text-sky-400">Правдивий Бог</th>
				<th class="text-red-700 dark:text-red-600" rowspan={2}>Великий Давній</th>
			</tr>
			<tr>
				<th class="text-amber-800 dark:text-amber-700">9</th>
				<th class="text-amber-800 dark:text-amber-700">8</th>
				<th class="text-slate-500 dark:text-slate-300">7</th>
				<th class="text-slate-500 dark:text-slate-300">6</th>
				<th class="text-slate-500 dark:text-slate-300">5</th>
				<th class="text-slate-500 dark:text-slate-300">4</th>
				<th class="text-yellow-600 dark:text-yellow-400">3</th>
				<th class="text-yellow-600 dark:text-yellow-400">2</th>
				<th class="text-yellow-600 dark:text-yellow-400">1</th>
				<th class="text-sky-600 dark:text-sky-400">0</th>
			</tr>
			</thead>
			<tbody class="bg-background">
			{oldOnes.map(oldOne =>
				oldOne.pathways.map((pathway, i) => <tr class={oldOne.class}>
					{pathway.sequences.map(sequence => <td>{sequence.name}</td>)}
					{i === 0 ? <td rowspan={oldOne.pathways.length}>{oldOne.name}</td> : null}
				</tr>),
			)}
			</tbody>
		</table>
	);
}
