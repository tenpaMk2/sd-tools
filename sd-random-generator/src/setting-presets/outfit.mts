import { CharacterKey } from "../characters/resolver.mjs";
import { getKeys } from "../libs/utility.mjs";
import { OutfitKey, outfitTable } from "../outfits/resolver.mjs";
import { OutfitSetting } from "../setting-define.mjs";

const monoOutfitPresetsMap = Object.fromEntries(
  getKeys(outfitTable).reduce(
    (acc, key) => acc.set(key, [{ key }]),
    new Map<OutfitKey, OutfitSetting[]>(),
  ),
) as { [k in OutfitKey]: OutfitSetting[] };

export const outfitsPreset = {
  ...monoOutfitPresetsMap,
  "default": [{ key: `test-outfit` }], // TODO: Consider `default`
  "kaguya-sama-ai": [
    { key: `kaguya-sama-shuuchiin-academy-school-uniform-ai` },
  ],
  "kaguya-sama-chika-nochekaiser": [
    { key: `kaguya-sama-shuuchiin-academy-school-uniform-chika` },
  ],
  "kaguya-sama-chika": [
    { key: `kaguya-sama-shuuchiin-academy-school-uniform-chika` },
  ],
  "kaguya-sama-kaguya": [
    { key: `kaguya-sama-shuuchiin-academy-school-uniform-kaguya` },
  ],
  "kaguya-sama-miko": [
    { key: `kaguya-sama-shuuchiin-academy-school-uniform-miko` },
  ],
} as const satisfies {
  [k in OutfitKey | `default` | CharacterKey]: OutfitSetting[];
};
