import { CharacterKey, characterTable } from "../characters/characters.mjs";
import { getKeys } from "../libs/utility.mjs";
import { CharacterSetting } from "../setting-define.mjs";

const monoCharacterPresetsMap = Object.fromEntries(
  getKeys(characterTable).reduce(
    (acc, key) => acc.set(key, [{ key }]),
    new Map<CharacterKey, CharacterSetting[]>(),
  ),
) as Record<CharacterKey, CharacterSetting[]>;

const defaultKeys = [
  // `amaburi-isuzu-h-madoka`,
  `amaburi-isuzu-nochekaiser`,
  `blend-s-kaho-ibukimakisiko-double-bun`, // TODO: Support probability.
  `blend-s-kaho-ibukimakisiko`,
  `danmachi-aiz-eternal2kpp`,
  `danmachi-eina-eternal2kpp`,
  `danmachi-haruhime-eternal2kpp`,
  `danmachi-hestia-eternal2kpp`,
  `danmachi-hestia`,
  `danmachi-lili-eternal2kpp`,
  `danmachi-ryu-eternal2kpp`,
  `eromanga-sensei-elf-eternal2kpp`,
  `eromanga-sensei-megumi-eternal2kpp`,
  `eromanga-sensei-sagiri-eternal2kpp`,
  `fate-rin-little-jelly`,
  `futoku-no-guild-tokishikko`,
  `higehiro-sayu`,
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
  `kaguya-sama-chika-eternal2kpp`,
  `kaguya-sama-kaguya-eternal2kpp`,
  `kaguya-sama-miko`,
  `konosuba-megumin`,
  `konosuba-yunyun`,
  `lycoris-recoil-chisato-nochekaiser`,
  `lycoris-recoil-chisato`,
  `lycoris-recoil-takina-nochekaiser`,
  `mahoako-matama-notekaga`,
  `mushoku-tensei-sylphiette-little-jelly`,
  "new-game-aoba-eternal2kpp",
  "new-game-hajime-eternal2kpp",
  "new-game-hifumi-eternal2kpp",
  "new-game-kou-eternal2kpp",
  "new-game-nene-eternal2kpp",
  "new-game-rin-eternal2kpp",
  "new-game-yun-eternal2kpp",
  `non-non-biyori-hotaru-notekaga`,
  `prisma-illya-illya`,
  `re-zero-emilia-eternal2kpp`,
  `re-zero-ram-eternal2kpp`,
  `re-zero-rem-eternal2kpp`,
  `sasuoni-shiba-honoka-nochekaiser`,
  `sasuoni-shiba-mizuki-nochekaiser`,
  `spy-family-yor`,
  `tenshi-sama-mahiru`,
  `tenshi-tsuki-noel`,
  `to-love-ru-momo-lancelot`,
  `working-popura`,
] as const satisfies CharacterKey[];

export const charactersPreset = {
  ...monoCharacterPresetsMap,

  default: defaultKeys.map((key) => ({ key })),

  all: getKeys(characterTable).map((key) => ({ key })),
} as const satisfies Record<
  CharacterKey | `default` | `all`,
  CharacterSetting[]
>;

// TODO: If there is a character-specific pose, define like below.
//
// ```
// [
//   {keys: ["A"]},
//   {keys: ["A"], outfits: [{key: "B", backgrounds: [{key: "C", poses: [{key: "specific-pose"}]}]},
// ]
// ```
