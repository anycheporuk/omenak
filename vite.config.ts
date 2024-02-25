import { defineConfig } from "@solidjs/start/config";
// @ts-ignore
import { default as mdx } from "@vinxi/plugin-mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig({
	start: {
		extensions: ["mdx", "md"],
		server: {
			prerender: {
				crawlLinks: true
			}
		}
	},
	plugins: [
		mdx.withImports({})({
			jsx: true,
			jsxImportSource: "solid-js",
			providerImportSource: "solid-mdx",
			remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
		}),
		ViteImageOptimizer({
			webp:{
				quality: 75
			}
		})
	],
});
