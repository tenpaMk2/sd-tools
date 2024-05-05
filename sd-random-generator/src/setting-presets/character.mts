import { CharacterKey, characterTable } from "../characters/resolver.mjs";
import { getKeys } from "../libs/utility.mjs";
import { CharacterSetting } from "../setting-define.mjs";

const monoCharacterPresetsMap = Object.fromEntries(
  getKeys(characterTable).reduce(
    (acc, key) => acc.set(key, [{ keys: [key] }]),
    new Map<CharacterKey, CharacterSetting[]>(),
  ),
) as { [k in CharacterKey]: CharacterSetting[] };

const defaultPreset = [
  {
    keys: [
      `kaguya-sama-ai`,
      `kaguya-sama-chika`,
      `kaguya-sama-kaguya`,
      `kaguya-sama-miko`,
    ],
  },
] as const satisfies CharacterSetting[];

export const charactersPreset = {
  ...monoCharacterPresetsMap,

  "default": defaultPreset,

  "all": [
    {
      keys: getKeys(characterTable),
    },
  ],
  "kaguya-sama": [
    {
      keys: [
        `kaguya-sama-ai`,
        `kaguya-sama-chika`,
        `kaguya-sama-kaguya`,
        `kaguya-sama-miko`,
      ],
    },
  ],
} as const satisfies {
  [k in CharacterKey | `default` | `all` | `kaguya-sama`]: CharacterSetting[];
};

// TODO: If there is a character-specific pose, define like below.
//
// ```
// [
//   {keys: ["A"]},
//   {keys: ["A"], outfits: [{key: "B", backgrounds: [{key: "C", poses: [{key: "specific-pose"}]}]},
// ]
// ```
