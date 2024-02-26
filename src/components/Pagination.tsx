import { createAsync, useLocation,useNavigate } from "@solidjs/router";

import { getChapters } from "~/getChapters";


interface PaginationProps {
	chapters: string[];
	currentChapter: number;
}


export function Pagination() {
	const location = useLocation();
	const navigate = useNavigate();
	const chapters = createAsync(() => getChapters());
	const currentChapterIndex = () => chapters()?.findIndex((chapter) => chapter.path === location.pathname) ?? -10;
	const prevChapterPath = () => chapters()?.[currentChapterIndex() - 1]?.path;
	const nextChapterPath = () => chapters()?.[currentChapterIndex() + 1]?.path;
	function onChapterChange(event: Event) {
		const select = event.target as HTMLSelectElement;
		navigate(select.value);
	}
	return (
		<div class="flex justify-between mb-4">
			<a class=" px-8 py-1 rounded bg-primary" href={prevChapterPath() ?? ""}>Prev</a>
			<select class=" px-8 py-1 rounded bg-primary" onChange={onChapterChange}>
				{chapters() && chapters()?.map((chapter, index) => <option
					value={chapter.path} selected={index === currentChapterIndex()}
				>{chapter.title}</option>)}
			</select>
			<a class=" px-8 py-1 rounded bg-primary" href={nextChapterPath() ?? ""}>Next</a>
		</div>
	);
}