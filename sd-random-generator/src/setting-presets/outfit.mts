import { CharacterKey } from "../characters/resolver.mjs";
import { getKeys } from "../libs/utility.mjs";
import { OutfitKey, outfitTable } from "../outfits/resolver.mjs";
import { OutfitSetting } from "../setting-define.mjs";

const defaultPreset = [
  { key: `babydoll` },
  { key: `bikini` },
  { key: `bridal-lingerie` },
] satisfies OutfitSetting[];

const monoOutfitPresetsMap = Object.fromEntries(
  getKeys(outfitTable).reduce(
    (acc, key) => acc.set(key, [{ key }]),
    new Map<OutfitKey, OutfitSetting[]>(),
  ),
) as { [k in OutfitKey]: OutfitSetting[] };

export const outfitsPreset = {
  ...monoOutfitPresetsMap,
  "default": defaultPreset,
  "kaguya-sama-ai": [
    ...defaultPreset,
    { key: `kaguya-sama-shuuchiin-academy-school-uniform-ai` },
  ],
  "kaguya-sama-chika-nochekaiser": [
    ...defaultPreset,
    { key: `kaguya-sama-shuuchiin-academy-school-uniform-chika` },
  ],
  "kaguya-sama-chika": [
    ...defaultPreset,
    { key: `kaguya-sama-shuuchiin-academy-school-uniform-chika` },
  ],
  "kaguya-sama-kaguya": [
    ...defaultPreset,
    { key: `kaguya-sama-shuuchiin-academy-school-uniform-kaguya` },
  ],
  "kaguya-sama-miko": [
    ...defaultPreset,
    { key: `kaguya-sama-shuuchiin-academy-school-uniform-miko` },
  ],
} as const satisfies {
  [k in OutfitKey | `default` | CharacterKey]: OutfitSetting[];
};
