import type { CharacterKey, OutfitKey } from "../../index.mjs";
import { getKeys } from "../../libs/utility.mjs";
import type { OutfitSetting } from "../../setting-define.mjs";
import { commonOutfitTable, outfitTable } from "../outfits/outfits.mjs";

export type OutfitsPresetKey = `default` | CharacterKey;

export type OutfitsPreset = Record<OutfitsPresetKey, OutfitSetting[]>;

const monoOutfitPresetsMap = Object.fromEntries(
  getKeys(outfitTable).reduce(
    (acc, key) => acc.set(key, [{ key }]),
    new Map<OutfitKey, OutfitSetting[]>(),
  ),
) as Record<OutfitKey, OutfitSetting[]>;

const defaultPreset = getKeys(commonOutfitTable).map((key) => ({
  key,
})) satisfies OutfitSetting[];

// TODO: Separate each type of presets into files.

export const outfitsPreset: OutfitsPreset = {
  ...monoOutfitPresetsMap,

  "default": defaultPreset,

  "amaburi-isuzu-h-madoka": [
    ...defaultPreset,
    {
      key: `amaburi-red-uniform-isuzu-h-madoka`,
      probability: defaultPreset.length / 1,
    },
  ],
  "amaburi-isuzu-no-lora": defaultPreset,
  "amaburi-isuzu-nochekaiser": [
    ...defaultPreset,
    {
      key: `amaburi-red-uniform-isuzu-nochekaiser`,
      probability: defaultPreset.length / 1,
    },
  ],
  "atelier-ryza-nochekaiser": [
    ...defaultPreset,
    // TODO: Add others.
  ],
  "blend-s-kaho-ibukimakisiko-double-bun": [
    {
      key: `blend-s-swimsuit-kaho-ibukimakisiko`,
    },
  ],
  "blend-s-kaho-ibukimakisiko": [
    ...defaultPreset,
    {
      key: `blend-s-school-uniform-kaho-ibukimakisiko`,
      probability: defaultPreset.length / 4,
    },
    {
      key: `blend-s-waitress-kaho-ibukimakisiko`,
      probability: defaultPreset.length / 4,
    },
  ],
  "blend-s-mafuyu-ibukimakisiko": [
    ...defaultPreset,
    {
      key: `blend-s-waitress-mafuyu-ibukimakisiko`,
      probability: defaultPreset.length / 2,
    },
  ],
  "blend-s-maika-shadowxart": [
    ...defaultPreset,
    {
      key: `blend-s-waitress-maika-shadowxart`,
      probability: defaultPreset.length / 2,
    },
  ],
  "boufuri-sally-king-dong": [
    ...defaultPreset,
    {
      key: `boufuri-outfit-sally-king-dong`,
      probability: defaultPreset.length * 2,
    },
  ],
  "danmachi-aiz-eternal2kpp": [...defaultPreset],
  "danmachi-eina-eternal2kpp": [...defaultPreset],
  "danmachi-haruhime-eternal2kpp": [...defaultPreset],
  "danmachi-hestia-eternal2kpp": [
    ...defaultPreset,
    {
      key: `danmachi-white-dress-hestia-eternal2kpp`,
      probability: defaultPreset.length,
    },
  ],
  "danmachi-hestia-no-lora": [
    ...defaultPreset,
    {
      key: `danmachi-white-dress-hestia-no-lora`,
      probability: defaultPreset.length,
    },
  ],
  "danmachi-lili-eternal2kpp": [...defaultPreset],
  "danmachi-ryu-eternal2kpp": [...defaultPreset],
  "eromanga-sensei-elf-eternal2kpp": defaultPreset,
  "eromanga-sensei-megumi-eternal2kpp": defaultPreset,
  "eromanga-sensei-sagiri-eternal2kpp": defaultPreset,
  "fate-rin-little-jelly": [
    ...defaultPreset,
    {
      key: `fate-red-sweater-rin-little-jelly`,
      probability: defaultPreset.length,
    },
  ],
  "futoku-no-guild-enome-zedotasco": [
    ...defaultPreset,
    {
      key: `futoku-no-guild-outfit-enome-zedotasco`,
      probability: defaultPreset.length / 2,
    },
  ],
  "futoku-no-guild-tokishikko-ibukimakisiko": [
    ...defaultPreset,
    {
      key: `futoku-no-guild-outfit-tokishikko-ibukimakisiko`,
      probability: defaultPreset.length / 2,
    },
  ],
  "goblin-slayer-cow-girl-eternal2kpp": [
    ...defaultPreset,
    {
      key: `goblin-slayer-outfit-cow-girl-eternal2kpp`,
      probability: defaultPreset.length / 2,
    },
  ],
  "goblin-slayer-priestess-eternal2kpp": [
    ...defaultPreset,
    {
      key: `goblin-slayer-outfit-priestess-eternal2kpp`,
      probability: defaultPreset.length / 2,
    },
  ],
  "higehiro-sayu-nochekaiser": [
    ...defaultPreset,
    {
      key: `higehiro-school-uniform-sayu-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
  ],
  "hyouka-eru-chenkin": [
    ...defaultPreset,
    {
      key: `hyouka-school-uniform-eru-chenkin`,
      probability: defaultPreset.length / 0.5,
    },
    {
      key: `hyouka-white-bikini-eru-chenkin`,
      probability: defaultPreset.length / 0.5,
    },
  ],
  "is-cecilia-nochekaiser": [
    ...defaultPreset,
    {
      key: `is-infinite-stratos-academy-school-uniform-cecilia-nochekaiser`,
      probability: defaultPreset.length / 4,
    },
    {
      key: `is-pilot-suit-cecilia-nochekaiser`,
      probability: defaultPreset.length / 4,
    },
  ],
  "is-charlotte-nochekaiser": [
    ...defaultPreset,
    {
      key: `is-infinite-stratos-academy-school-uniform-charlotte-nochekaiser`,
      probability: defaultPreset.length / 4,
    },
    {
      key: `is-pilot-suit-charlotte-nochekaiser`,
      probability: defaultPreset.length / 4,
    },
  ],
  "is-chifuyu-nochekaiser": [
    ...defaultPreset,
    {
      key: `formal-suit`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-houki-nochekaiser": [
    ...defaultPreset,
    {
      key: `is-infinite-stratos-academy-school-uniform-houki-nochekaiser`,
      probability: defaultPreset.length / 4,
    },
    {
      key: `is-pilot-suit-houki-nochekaiser`,
      probability: defaultPreset.length / 4,
    },
  ],
  "is-laura-nochekaiser": [
    ...defaultPreset,
    {
      key: `is-infinite-stratos-academy-school-uniform-laura-nochekaiser`,
      probability: defaultPreset.length / 4,
    },
  ],
  "is-lingyin-nochekaiser": [
    ...defaultPreset,
    {
      key: `is-infinite-stratos-academy-school-uniform-lingyin-nochekaiser`,
      probability: defaultPreset.length / 4,
    },
  ],
  "is-maya-nochekaiser": [
    ...defaultPreset,
    {
      key: `is-yellow-dress-maya-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-tatenashi-nochekaiser": [
    ...defaultPreset,
    {
      key: `is-infinite-stratos-academy-school-uniform-tatenashi-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
  ],
  "isekai-ojisan-alicia-nochekaiser": [
    ...defaultPreset,
    {
      key: `isekai-ojisan-outfit-alicia-nochekaiser`,
      probability: defaultPreset.length,
    },
  ],
  "isekai-ojisan-mabel-nochekaiser": [
    ...defaultPreset,
    {
      key: `isekai-ojisan-outfit-mabel-nochekaiser`,
      probability: defaultPreset.length,
    },
  ],
  "isekai-ojisan-sui-nochekaiser": [
    ...defaultPreset,
    {
      key: `isekai-ojisan-outfit-sui-nochekaiser`,
      probability: defaultPreset.length,
    },
  ],
  "isekai-ojisan-sumika-nochekaiser": [
    ...defaultPreset,
    {
      key: `isekai-ojisan-outfit-sumika-nochekaiser`,
      probability: defaultPreset.length,
    },
  ],
  "kagejitsu-alpha-nochekaiser": [
    ...defaultPreset,
    {
      key: `kagejitsu-shadow-garden-alpha-nochekaiser`,
      probability: defaultPreset.length,
    },
  ],
  "kagejitsu-alpha-novowels": [
    ...defaultPreset,
    {
      key: `kagejitsu-shadow-garden-alpha-novowels`,
      probability: defaultPreset.length,
    },
  ],
  "kagejitsu-beta-nochekaiser": [
    ...defaultPreset,
    {
      key: `kagejitsu-shadow-garden-beta-nochekaiser`,
      probability: defaultPreset.length,
    },
  ],
  "kagejitsu-beta-novowels": [
    ...defaultPreset,
    {
      key: `kagejitsu-shadow-garden-beta-novowels`,
      probability: defaultPreset.length,
    },
  ],
  "kaguya-sama-ai-no-lora": [
    ...defaultPreset,
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-ai-no-lora`,
      probability: defaultPreset.length,
    },
  ],
  "kaguya-sama-ai-nochekaiser": [
    ...defaultPreset,
    {
      key: `kaguya-sama-maid-hayasaka-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-ai-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
  ],
  "kaguya-sama-chika-eternal2kpp": [
    ...defaultPreset,
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-chika-eternal2kpp`,
      probability: defaultPreset.length / 2,
    },
  ],
  "kaguya-sama-chika-no-lora": [
    ...defaultPreset,
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-chika-no-lora`,
      probability: defaultPreset.length,
    },
  ],
  "kaguya-sama-kaguya-eternal2kpp": [
    ...defaultPreset,
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-kaguya-eternal2kpp`,
      probability: defaultPreset.length / 2,
    },
  ],
  "kaguya-sama-kaguya-no-lora": [
    ...defaultPreset,
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-kaguya-no-lora`,
      probability: defaultPreset.length,
    },
  ],
  "kaguya-sama-miko-no-lora": [
    ...defaultPreset,
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-miko-no-lora`,
      probability: defaultPreset.length,
    },
  ],
  "kaguya-sama-miko-nochekaiser": [
    ...defaultPreset,
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-miko-nochekaiser`,
      probability: defaultPreset.length,
    },
  ],
  "konosuba-megumin-no-lora": [
    ...defaultPreset,
    {
      key: `konosuba-outfit-megumin-adventurer-no-lora`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `konosuba-outfit-megumin-light-no-lora`,
      probability: defaultPreset.length / 2,
    },
  ],
  "konosuba-yunyun-no-lora": [
    ...defaultPreset,
    {
      key: `konosuba-outfit-yunyun-no-lora`,
      probability: defaultPreset.length,
    },
  ],
  "lycoris-recoil-chisato-nochekaiser": [
    ...defaultPreset,
    {
      key: `lycoris-recoil-lycoris-uniform-chisato-nochekaiser`,
      probability: defaultPreset.length,
    },
  ],
  "lycoris-recoil-chisato-no-lora": defaultPreset,
  "lycoris-recoil-takina-nochekaiser-booru": [
    ...defaultPreset,
    {
      key: `lycoris-recoil-lycoris-uniform-takina-nochekaiser`,
      probability: defaultPreset.length,
    },
  ],
  "lycoris-recoil-takina-nochekaiser": [
    ...defaultPreset,
    {
      key: `lycoris-recoil-lycoris-uniform-takina-nochekaiser`,
      probability: defaultPreset.length,
    },
  ],
  "mahoako-matama-notekaga": [
    ...defaultPreset,
    {
      key: `mahoako-outfit-locomusica-notekaga`,
      probability: defaultPreset.length,
    },
  ],
  "mushoku-tensei-roxy-adventurer-ibukimakisiko": [
    { key: `mushoku-tensei-outfit-roxy-adventurer-indoors-ibukimakisiko` },
  ],
  "mushoku-tensei-roxy-adventurer-no-ahoge-ibukimakisiko": [
    { key: `mushoku-tensei-outfit-roxy-adventurer-outdoors-ibukimakisiko` },
  ],
  "mushoku-tensei-roxy-hair-down-ibukimakisiko": [
    { key: `mushoku-tensei-oversized-shirt-roxy-ibukimakisiko` },
  ],
  "mushoku-tensei-roxy-ibukimakisiko": [
    ...defaultPreset,
    {
      key: `mushoku-tensei-outfit-roxy-indoors-ibukimakisiko`,
      probability: defaultPreset.length,
    },
  ],
  "mushoku-tensei-roxy-no-ahoge-ibukimakisiko": [
    { key: `mushoku-tensei-outfit-roxy-outdoors-ibukimakisiko` },
  ],
  "mushoku-tensei-roxy-pajamas-ibukimakisiko": [
    { key: `mushoku-tensei-pajamas-roxy-ibukimakisiko` },
  ],
  "mushoku-tensei-sylphiette-little-jelly": defaultPreset,
  "new-game-aoba-eternal2kpp": [
    ...defaultPreset,
    {
      key: `new-game-outfit-aoba-eternal2kpp`,
      probability: defaultPreset.length / 2,
    },
  ],
  "new-game-aoba-nochekaiser": [
    ...defaultPreset,
    {
      key: `new-game-outfit-aoba-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
  ],
  "new-game-hajime-eternal2kpp": [...defaultPreset],
  "new-game-hifumi-eternal2kpp": [
    ...defaultPreset,
    {
      key: `new-game-outfit-hifumi-eternal2kpp`,
      probability: defaultPreset.length / 2,
    },
  ],
  "new-game-hifumi-nochekaiser": [
    ...defaultPreset,
    {
      key: `new-game-outfit-hifumi-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
  ],
  "new-game-kou-eternal2kpp": [...defaultPreset],
  "new-game-nene-eternal2kpp": [...defaultPreset],
  "new-game-rin-eternal2kpp": [...defaultPreset],
  "new-game-yun-eternal2kpp": [...defaultPreset],
  "non-non-biyori-hotaru-notekaga": defaultPreset,
  "prisma-illya-chloe-beast-am7coffeelove": [
    ...defaultPreset,
    {
      key: `prisma-illya-beast-chloe-am7coffeelove`,
      probability: defaultPreset.length,
    },
  ],
  "prisma-illya-illya-beast-am7coffeelove": [
    ...defaultPreset,
    {
      key: `prisma-illya-beast-illya-am7coffeelove`,
      probability: defaultPreset.length,
    },
  ],
  "prisma-illya-miyu-beast-am7coffeelove": [
    ...defaultPreset,
    {
      key: `prisma-illya-beast-miyu-am7coffeelove`,
      probability: defaultPreset.length,
    },
  ],
  "prisma-illya-illya-flujoru": [
    ...defaultPreset,
    {
      key: `prisma-illya-magical-girl-illya-flujoru`,
      probability: defaultPreset.length,
    },
  ],
  "pso2-gene-bikini-overnerd": [
    ...defaultPreset,
    {
      key: `pso2-bikini-gene-overnerd`,
      probability: defaultPreset.length,
    },
  ],
  "re-zero-emilia-eternal2kpp": defaultPreset,
  "re-zero-emilia-no-lora": defaultPreset,
  "re-zero-ram-eternal2kpp": defaultPreset,
  "re-zero-ram-no-lora": defaultPreset,
  "re-zero-rem-eternal2kpp": defaultPreset,
  "re-zero-rem-no-lora": defaultPreset,
  "rokudenashi-rumia-little-jelly": [
    ...defaultPreset,
    {
      key: `rokudenashi-bikini-rumia-little-jelly`,
      probability: defaultPreset.length,
    },
    {
      key: `rokudenashi-school-uniform-summer-little-jelly`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `rokudenashi-school-uniform-winter-little-jelly`,
      probability: defaultPreset.length / 2,
    },
  ],
  "sasuoni-angelina-nochekaiser": [
    ...defaultPreset,
    {
      key: `sasuoni-first-high-school-uniform-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
  ],
  "sasuoni-honoka-nochekaiser": [
    ...defaultPreset,
    {
      key: `sasuoni-first-high-school-uniform-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
  ],
  "sasuoni-mayumi-nochekaiser": [
    ...defaultPreset,
    {
      key: `sasuoni-first-high-school-uniform-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
  ],
  "sasuoni-miyuki-nochekaiser": [
    ...defaultPreset,
    {
      key: `sasuoni-first-high-school-uniform-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
  ],
  "sasuoni-mizuki-nochekaiser": [
    ...defaultPreset,
    {
      key: `sasuoni-first-high-school-uniform-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
  ],
  "sasuoni-shizuku-nochekaiser": [
    ...defaultPreset,
    {
      key: `sasuoni-first-high-school-uniform-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
  ],
  "seirei-celia-ibukimakisiko": [
    ...defaultPreset,
    {
      key: `seirei-outfit-celia-ibukimakisiko`,
      probability: defaultPreset.length,
    },
  ],
  "slow-loop-hiyori-ibukimakisiko": [
    ...defaultPreset,
    {
      key: `slow-loop-school-uniform-hiyori-ibukimakisiko`,
      probability: defaultPreset.length / 2,
    },
    // TODO: Add others.
  ],
  "slow-loop-koharu-ibukimakisiko": [
    ...defaultPreset,
    {
      key: `slow-loop-school-uniform-koharu-ibukimakisiko`,
      probability: defaultPreset.length / 2,
    },
    // TODO: Add others.
  ],
  "slow-loop-koi-ibukimakisiko": [
    ...defaultPreset,
    {
      key: `slow-loop-school-uniform-koi-ibukimakisiko`,
      probability: defaultPreset.length / 2,
    },
    // TODO: Add others.
  ],
  "spy-family-yor-eternal2kpp-thorn-princess": [
    {
      key: `spy-family-thorn-princess-eternal2kpp`,
    },
  ],
  "spy-family-yor-eternal2kpp": [
    ...defaultPreset,
    {
      key: `spy-family-red-sweater-eternal2kpp`,
      probability: defaultPreset.length / 2,
    },
  ],
  "strike-witches-yoshika-gwess": [...defaultPreset],
  "strike-witches-yoshika-witch-gwess": [
    {
      key: `strike-witches-outfit-yoshika-gwess`,
    },
  ],
  "tenshi-sama-mahiru-jibunsagasinotabi": [
    ...defaultPreset,
    {
      key: `tenshi-sama-blazer-jibunsagasinotabi`,
      probability: defaultPreset.length / 2,
    },
  ],
  "tenshi-tsuki-noel-duongve": [
    ...defaultPreset,
    {
      key: `tenshi-tsuki-school-uniform-noel-duongve`,
      probability: defaultPreset.length,
    },
  ],
  "tenshi-tsuki-noel-eternal2kpp": [
    ...defaultPreset,
    {
      key: `tenshi-tsuki-school-uniform-noel-eternal2kpp`,
      probability: defaultPreset.length,
    },
  ],
  "tenshi-tsuki-noel-zedotasco": [
    ...defaultPreset,
    // TODO: other outfits
  ],
  "tenshi-tsuki-towa-eternal2kpp": [
    ...defaultPreset,
    {
      key: `tenshi-tsuki-outfit-towa-eternal2kpp`,
      probability: defaultPreset.length,
    },
  ],
  "tenshi-tsuki-tsumugi-duongve": [
    ...defaultPreset,
    {
      key: `tenshi-tsuki-school-uniform-tsumugi-duongve`,
      probability: defaultPreset.length,
    },
  ],
  "tenshi-tsuki-tsumugi-eternal2kpp": [
    ...defaultPreset,
    {
      key: `tenshi-tsuki-school-uniform-tsumugi-eternal2kpp`,
      probability: defaultPreset.length,
    },
  ],
  "to-love-ru-haruna-nochekaiser": [
    ...defaultPreset,
    {
      key: `to-love-ru-school-uniform-haruna-nochekaiser`,
      probability: defaultPreset.length,
    },
  ],
  "to-love-ru-lala-nochekaiser": [
    ...defaultPreset,
    {
      key: `to-love-ru-school-uniform-lala-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
  ],
  "to-love-ru-momo-lancelot": [
    ...defaultPreset,
    {
      key: `to-love-ru-school-uniform-momo-lancelot`,
      probability: defaultPreset.length / 2,
    },
  ],
  "to-love-ru-momo-nochekaiser": [
    ...defaultPreset,
    {
      key: `to-love-ru-school-uniform-momo-nochekaiser`,
      probability: defaultPreset.length / 2,
    },
  ],
  "to-love-ru-nana-lancelot": [
    ...defaultPreset,
    {
      key: `to-love-ru-school-uniform-nana-lancelot`,
      probability: defaultPreset.length,
    },
  ],
  "to-love-ru-nana-nochekaiser": [
    ...defaultPreset,
    {
      key: `to-love-ru-school-uniform-nana-lancelot`,
      probability: defaultPreset.length,
    },
  ],
  "working-popura-ibukimakisiko": defaultPreset,
} as const satisfies OutfitsPreset;
