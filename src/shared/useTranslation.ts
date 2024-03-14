import * as i18n from "@solid-primitives/i18n";
import { useLocation } from "@solidjs/router";
import { createResource } from "solid-js";
import {dict as sequencesDict} from "~/locales/uk/sequences"

export type Lang = "uk" | "en"
type Modules = {
	common: typeof sequencesDict;
	sequences: typeof sequencesDict;
};

async function fetchDictionary<T extends keyof Modules>({
  lang,
  module,
}: {
	lang: Lang;
	module: T;
}): Promise<i18n.Flatten<Modules[T]>> {
	const {dict} = (await import(`../locales/${lang}/${module}.ts`)) as {
		dict: Modules[T];
	};
	return i18n.flatten(dict);
}

const asd = i18n.flatten(sequencesDict);


export const useTranslation = <T extends keyof Modules = "common">(
	module = "common" as T,
) => {
	const lang = () => (useLocation().pathname.split("/")[1] ==="en" ? "en" : "uk") as Lang;
	const [dict] = createResource(
		() => ({lang: lang(), module}),
		fetchDictionary,
	);
	const t = i18n.translator<i18n.Flatten<Modules[T]>>(
		dict,
		i18n.resolveTemplate,
	);
	return {t, lang};
};
