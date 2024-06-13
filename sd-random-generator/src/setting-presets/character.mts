import { CharacterKey, characterTable } from "../characters/characters.mjs";
import { getKeys } from "../libs/utility.mjs";
import { CharacterSetting } from "../setting-define.mjs";

const monoCharacterPresetsMap = Object.fromEntries(
  getKeys(characterTable).reduce(
    (acc, key) => acc.set(key, [{ key }]),
    new Map<CharacterKey, CharacterSetting[]>(),
  ),
) as Record<CharacterKey, CharacterSetting[]>;

const defaultPreset = [
  // // `amaburi-isuzu-h-madoka`,
  // `amaburi-isuzu-nochekaiser`,
  { key: `blend-s-kaho-ibukimakisiko-double-bun`, probability: 0.2 },
  { key: `blend-s-kaho-ibukimakisiko` },
  { key: `danmachi-aiz-eternal2kpp` },
  { key: `danmachi-eina-eternal2kpp` },
  { key: `danmachi-haruhime-eternal2kpp` },
  { key: `danmachi-hestia-eternal2kpp` },
  { key: `danmachi-hestia` },
  { key: `danmachi-lili-eternal2kpp` },
  { key: `danmachi-ryu-eternal2kpp` },
  { key: `eromanga-sensei-elf-eternal2kpp` },
  { key: `eromanga-sensei-megumi-eternal2kpp` },
  { key: `eromanga-sensei-sagiri-eternal2kpp` },
  { key: `fate-rin-little-jelly` },
  { key: `futoku-no-guild-tokishikko` },
  { key: `higehiro-sayu` },
  { key: `is-cecilia-nochekaiser` },
  { key: `is-charlotte-nochekaiser` },
  { key: `is-houki-nochekaiser` },
  { key: `is-laura-nochekaiser` },
  { key: `is-lingyin-nochekaiser` },
  { key: `is-tatenashi-nochekaiser` },
  { key: `isekai-ojisan-alicia-nochekaiser` },
  { key: `isekai-ojisan-mabel-nochekaiser` },
  { key: `isekai-ojisan-sui-nochekaiser` },
  { key: `isekai-ojisan-sumika-nochekaiser` },
  { key: `kagejitsu-alpha-nochekaiser` },
  { key: `kagejitsu-beta-nochekaiser` },
  { key: `kaguya-sama-ai` },
  { key: `kaguya-sama-chika-eternal2kpp` },
  { key: `kaguya-sama-kaguya-eternal2kpp` },
  // `kaguya-sama-miko`,
  { key: `konosuba-megumin` },
  { key: `konosuba-yunyun` },
  { key: `lycoris-recoil-chisato-nochekaiser` },
  { key: `lycoris-recoil-chisato` },
  { key: `lycoris-recoil-takina-nochekaiser` },
  { key: `mahoako-matama-notekaga` },
  { key: `mushoku-tensei-sylphiette-little-jelly` },
  { key: "new-game-aoba-eternal2kpp" },
  { key: "new-game-hajime-eternal2kpp" },
  { key: "new-game-hifumi-eternal2kpp" },
  { key: "new-game-kou-eternal2kpp" },
  { key: "new-game-nene-eternal2kpp" },
  { key: "new-game-rin-eternal2kpp" },
  { key: "new-game-yun-eternal2kpp" },
  { key: `non-non-biyori-hotaru-notekaga` },
  { key: `prisma-illya-illya` },
  { key: `re-zero-emilia-eternal2kpp` },
  { key: `re-zero-ram-eternal2kpp` },
  { key: `re-zero-rem-eternal2kpp` },
  { key: `sasuoni-shiba-honoka-nochekaiser` },
  { key: `sasuoni-shiba-mizuki-nochekaiser` },
  { key: `slow-loop-hiyori-ibukimakisiko` },
  { key: `slow-loop-koharu-ibukimakisiko` },
  { key: `slow-loop-koi-ibukimakisiko` },
  { key: `spy-family-yor` },
  { key: `tenshi-sama-mahiru` },
  { key: `tenshi-tsuki-noel` },
  { key: `to-love-ru-momo-lancelot` },
  { key: `working-popura` },
] as const satisfies CharacterSetting[];

export const charactersPreset = {
  ...monoCharacterPresetsMap,

  default: defaultPreset,

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
