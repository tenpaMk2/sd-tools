import { BackgroundKey, backgroundTable } from "../backgrounds/resolver.mjs";
import { getKeys } from "../libs/utility.mjs";
import { OutfitKey } from "../outfits/resolver.mjs";
import { BackgroundSetting } from "../setting-define.mjs";

const monoBackgroundPresetsMap = Object.fromEntries(
  getKeys(backgroundTable).reduce(
    (acc, key) => acc.set(key, [{ key }]),
    new Map<BackgroundKey, BackgroundSetting[]>(),
  ),
) as { [k in BackgroundKey]: BackgroundSetting[] };

export const backgroundsPreset = {
  ...monoBackgroundPresetsMap,
  "default": [{ key: `ocean` }], // TODO: Consider `default`
  "test-outfit": [
    { key: `cafe` },
    { key: `ocean` },
    { key: `steaming-bed-sheet` },
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-ai": [
    { key: `cafe` },
    { key: `ocean` },
    { key: `steaming-bed-sheet` },
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-chika": [
    { key: `cafe` },
    { key: `ocean` },
    { key: `steaming-bed-sheet` },
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-kaguya": [
    { key: `cafe` },
    { key: `ocean` },
    { key: `steaming-bed-sheet` },
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-miko": [
    { key: `cafe` },
    { key: `ocean` },
    { key: `steaming-bed-sheet` },
  ],
} as const satisfies {
  [k in BackgroundKey | `default` | OutfitKey]: BackgroundSetting[];
};
