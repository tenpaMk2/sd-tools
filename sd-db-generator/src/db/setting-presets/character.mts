import { getKeys } from "../../libs/utility.mjs";
import type { CharacterSetting } from "../../setting-define.mjs";
import {
  characterTable,
  type CharacterKey,
} from "../characters/characters.mjs";

export type CharactersPresetKey = `default` | CharacterKey;

export type CharactersPreset = Record<CharactersPresetKey, CharacterSetting[]>;

const monoCharacterPresetsMap = Object.fromEntries(
  getKeys(characterTable).reduce(
    (acc, key) => acc.set(key, [{ key }]),
    new Map<CharacterKey, CharacterSetting[]>(),
  ),
) as Record<CharacterKey, CharacterSetting[]>;

const defaultPreset = [
  // // `amaburi-isuzu-h-madoka`,
  // `amaburi-isuzu-nochekaiser`,
  // { key: `atelier-ryza-nochekaiser` },
  { key: `blend-s-kaho-ibukimakisiko-double-bun`, probability: 0.2 },
  { key: `blend-s-kaho-ibukimakisiko` },
  // { key: `blend-s-maika-shadowxart` },
  { key: `boufuri-sally-king-dong` },
  { key: `danmachi-aiz-eternal2kpp` },
  { key: `danmachi-eina-eternal2kpp` },
  { key: `danmachi-haruhime-eternal2kpp` },
  { key: `danmachi-hestia-eternal2kpp` },
  { key: `danmachi-lili-eternal2kpp` },
  { key: `danmachi-ryu-eternal2kpp` },
  { key: `eromanga-sensei-elf-eternal2kpp` },
  { key: `eromanga-sensei-megumi-eternal2kpp` },
  { key: `eromanga-sensei-sagiri-eternal2kpp` },
  { key: `fate-rin-little-jelly` },
  { key: `futoku-no-guild-enome-zedotasco` },
  { key: `futoku-no-guild-tokishikko-ibukimakisiko` },
  { key: `goblin-slayer-cow-girl-eternal2kpp` },
  { key: `goblin-slayer-priestess-eternal2kpp` },
  { key: `higehiro-sayu-nochekaiser` },
  { key: `hyouka-eru-chenkin` },
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
  // { key: `kagejitsu-alpha-novowels` },
  { key: `kagejitsu-beta-nochekaiser` },
  // { key: `kagejitsu-beta-novowels` },
  // { key: `kaguya-sama-ai-no-lora` },
  { key: `kaguya-sama-ai-nochekaiser` },
  { key: `kaguya-sama-chika-eternal2kpp` },
  { key: `kaguya-sama-kaguya-eternal2kpp` },
  { key: `kaguya-sama-miko-nochekaiser` },
  // `kaguya-sama-miko`,
  { key: `konosuba-megumin-no-lora` },
  { key: `konosuba-yunyun-no-lora` },
  { key: `lycoris-recoil-chisato-nochekaiser` },
  { key: `lycoris-recoil-chisato-no-lora` },
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
  { key: `prisma-illya-illya-flujoru` },
  { key: `re-zero-emilia-eternal2kpp` },
  { key: `re-zero-ram-eternal2kpp` },
  { key: `re-zero-rem-eternal2kpp` },
  { key: `rokudenashi-rumia-little-jelly` },
  { key: `sasuoni-honoka-nochekaiser` },
  { key: `sasuoni-mizuki-nochekaiser` },
  { key: `seirei-celia-ibukimakisiko` },
  { key: `slow-loop-hiyori-ibukimakisiko` },
  { key: `slow-loop-koharu-ibukimakisiko` },
  { key: `slow-loop-koi-ibukimakisiko` },
  { key: `spy-family-yor-eternal2kpp-thorn-princess`, probability: 0.2 },
  { key: `spy-family-yor-eternal2kpp` },
  { key: `strike-witches-yoshika-gwess`, probability: 0.8 },
  { key: `strike-witches-yoshika-witch-gwess`, probability: 0.2 },
  { key: `tenshi-sama-mahiru-jibunsagasinotabi` },
  // { key: `tenshi-tsuki-noel-duongve` },
  { key: `tenshi-tsuki-noel-eternal2kpp` },
  // { key: `tenshi-tsuki-noel-zedotasco` },
  { key: `tenshi-tsuki-towa-eternal2kpp` },
  // { key: `tenshi-tsuki-tsumugi-duongve` },
  { key: `tenshi-tsuki-tsumugi-eternal2kpp` },
  { key: `to-love-ru-haruna-nochekaiser` },
  { key: `to-love-ru-lala-nochekaiser` },
  { key: `to-love-ru-momo-lancelot` },
  { key: `to-love-ru-momo-nochekaiser` },
  { key: `to-love-ru-nana-lancelot` },
  { key: `to-love-ru-nana-nochekaiser` },
  { key: `working-popura-ibukimakisiko` },
] as const satisfies CharacterSetting[];

export const charactersPreset: CharactersPreset = {
  ...monoCharacterPresetsMap,

  default: defaultPreset,
} as const;
