import { CharacterKey, characterTable } from "../characters/characters.mjs";
import { getKeys } from "../libs/utility.mjs";
import { CharacterSetting } from "../setting-define.mjs";

const monoCharacterPresetsMap = Object.fromEntries(
  getKeys(characterTable).reduce(
    (acc, key) => acc.set(key, [{ keys: [key] }]),
    new Map<CharacterKey, CharacterSetting[]>(),
  ),
) as { [k in CharacterKey]: CharacterSetting[] };

const defaultKeys = [
  `blend-s-kaho-ibukimakisiko-double-bun`, // TODO: Support probability.
  `blend-s-kaho-ibukimakisiko`,
  `blend-s-mafuyu-ibukimakisiko`,
  `danmachi-hestia`,
  `fate-rin-little-jelly`,
  `is-cecilia-nochekaiser`,
  `is-charlotte-nochekaiser`,
  `is-houki-nochekaiser`,
  `is-laura-nochekaiser`,
  `is-lingyin-nochekaiser`,
  `is-tatenashi-nochekaiser`,
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
  `konosuba-yunyun`,
  `lycoris-recoil-chisato-nochekaiser`,
  `lycoris-recoil-chisato`,
  `lycoris-recoil-takina-nochekaiser`,
  `mushoku-tensei-sylphiette-little-jelly`,
  `non-non-biyori-hotaru-notekaga`,
  `re-zero-emilia`,
  `re-zero-ram`,
  `re-zero-rem`,
  `sasuoni-shiba-angelina-nochekaiser`,
  `sasuoni-shiba-honoka-nochekaiser`,
  `sasuoni-shiba-mayumi-nochekaiser`,
  `sasuoni-shiba-miyuki-nochekaiser`,
  `sasuoni-shiba-mizuki-nochekaiser`,
  `sasuoni-shiba-shizuku-nochekaiser`,
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
