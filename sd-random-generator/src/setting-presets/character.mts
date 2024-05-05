import { CharacterKey, characterTable } from "../characters/resolver.mjs";
import { getKeys } from "../libs/utility.mjs";
import { CharacterSetting } from "../setting-define.mjs";

const monoCharacterPresetsMap = Object.fromEntries(
  getKeys(characterTable).reduce(
    (acc, key) => acc.set(key, [{ keys: [key] }]),
    new Map<CharacterKey, CharacterSetting[]>(),
  ),
) as { [k in CharacterKey]: CharacterSetting[] };

const defaultKeys = [
  `danmachi-hestia`,
  `fate-rin-little-jelly`,
  `isekai-ojisan-alicia-nochekaiser`,
  `isekai-ojisan-mabel-nochekaiser`,
  `isekai-ojisan-sui-nochekaiser`,
  `isekai-ojisan-sumika-nochekaiser`,
  `kagejitsu-alpha-nochekaiser`,
  `kagejitsu-beta-nochekaiser`,
  `kaguya-sama-ai`,
  `kaguya-sama-chika`,
  `kaguya-sama-kaguya`,
  `kaguya-sama-miko`,
  `konosuba-megumin`,
  `lycoris-recoil-chisato`,
  `mushoku-tensei-sylphiette-little-jelly`,
  `non-non-biyori-hotaru-notekaga`,
  `re-zero-emilia`,
  `re-zero-ram`,
  `re-zero-rem`,
  `to-love-ru-momo-lancelot`,
] as const satisfies CharacterSetting["keys"];

export const charactersPreset = {
  ...monoCharacterPresetsMap,

  "default": [{ keys: defaultKeys }],

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
