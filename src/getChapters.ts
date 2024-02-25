import { cache } from "@solidjs/router";

type Frontmatter = {
	title: string;
}

export const getChapters = cache(async () => {
	"use server";
	const imports: Record<string, Frontmatter> = import.meta.glob("./routes/chapters/*.{md,mdx}", {
		eager: true,
		import: "frontmatter",
	});

	return Object.entries(imports).map(([key, value]) => ({
		path: key.slice(key.indexOf("/chapters"), key.lastIndexOf(".")),
		...value,
	}));
}, "chapters");