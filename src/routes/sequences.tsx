import { SequencesTable } from "~/components/SequencesTable";
import { useTranslation } from "~/shared/useTranslation";


export default function Home() {
	const {t} = useTranslation("sequences")
	return (
		<>
			<h1 class="max-6-xs text-6xl text-text font-bold uppercase my-16">{t("title")}</h1>
			<SequencesTable />
		</>
	);
}
