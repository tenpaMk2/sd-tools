import { CharacterKey } from "../characters/resolver.mjs";
import { getKeys } from "../libs/utility.mjs";
import {
  OutfitKey,
  commonOutfitTable,
  outfitTable,
} from "../outfits/resolver.mjs";
import { OutfitSetting } from "../setting-define.mjs";

const monoOutfitPresetsMap = Object.fromEntries(
  getKeys(outfitTable).reduce(
    (acc, key) => acc.set(key, [{ key }]),
    new Map<OutfitKey, OutfitSetting[]>(),
  ),
) as { [k in OutfitKey]: OutfitSetting[] };

const defaultPreset = getKeys(commonOutfitTable).map((key) => ({
  key,
})) satisfies OutfitSetting[];

export const outfitsPreset = {
  ...monoOutfitPresetsMap,

  "default": defaultPreset,

  "amaburi-isuzu-little-jelly": defaultPreset,
  "amaburi-isuzu": defaultPreset,
  "danmachi-aiz-eft": defaultPreset,
  "danmachi-eina-eft": defaultPreset,
  "danmachi-haruhime-eft": defaultPreset,
  "danmachi-hestia-eft": defaultPreset,
  "danmachi-hestia-nochekaiser": defaultPreset,
  "danmachi-hestia": [
    ...defaultPreset,
    { key: `danmachi-nochekaiser-hestia`, probability: defaultPreset.length },
  ],
  "danmachi-lili-eft": defaultPreset,
  "danmachi-ryu-eft": defaultPreset,
  "dumbbell-akemi-wiz": defaultPreset,
  "dumbbell-ayaka-wiz": defaultPreset,
  "dumbbell-gina-wiz": defaultPreset,
  "dumbbell-hibiki-wiz": defaultPreset,
  "dumbbell-satomi-wiz": defaultPreset,
  "fate-rin-little-jelly": [
    ...defaultPreset,
    { key: `fate-little-jelly-rin-sweater`, probability: defaultPreset.length },
  ],
  "is-cecilia-nochekaiser": [
    ...defaultPreset,
    {
      key: `is-infinite-stratos-academy-school-uniform-cecilia`,
      probability: defaultPreset.length / 4,
    },
    {
      key: `is-pilot-suit-cecilia`,
      probability: defaultPreset.length / 4,
    },
  ],
  "is-charlotte-nochekaiser": [
    ...defaultPreset,
    {
      key: `is-infinite-stratos-academy-school-uniform-charlotte`,
      probability: defaultPreset.length / 4,
    },
    {
      key: `is-pilot-suit-charlotte`,
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
      key: `is-infinite-stratos-academy-school-uniform-houki`,
      probability: defaultPreset.length / 4,
    },
    {
      key: `is-pilot-suit-houki`,
      probability: defaultPreset.length / 4,
    },
  ],
  "is-laura-nochekaiser": [
    ...defaultPreset,
    {
      key: `is-infinite-stratos-academy-school-uniform-laura`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-lingyin-nochekaiser": [
    ...defaultPreset,
    {
      key: `is-infinite-stratos-academy-school-uniform-lingyin`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-maya-nochekaiser": [
    ...defaultPreset,
    {
      key: `is-yellow-dress-maya`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-tatenashi-nochekaiser": [
    ...defaultPreset,
    {
      key: `is-infinite-stratos-academy-school-uniform-tatenashi`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-cecilia-og-turles": defaultPreset,
  "isekai-ojisan-alicia-nochekaiser": [
    ...defaultPreset,
    {
      key: `isekai-ojisan-nochekaiser-alicia`,
      probability: defaultPreset.length,
    },
  ],
  "isekai-ojisan-mabel-nochekaiser": [
    ...defaultPreset,
    {
      key: `isekai-ojisan-nochekaiser-mabel`,
      probability: defaultPreset.length,
    },
  ],
  "isekai-ojisan-sui-nochekaiser": [
    ...defaultPreset,
    { key: `isekai-ojisan-nochekaiser-sui`, probability: defaultPreset.length },
  ],
  "isekai-ojisan-sumika-nochekaiser": [
    ...defaultPreset,
    {
      key: `isekai-ojisan-nochekaiser-sumika`,
      probability: defaultPreset.length,
    },
  ],
  "kagejitsu-alpha-nochekaiser": [
    ...defaultPreset,
    {
      key: `kagejitsu-nochekaiser-shadow-garden-alpha`,
      probability: defaultPreset.length,
    },
  ],
  "kagejitsu-beta-nochekaiser": [
    ...defaultPreset,
    {
      key: `kagejitsu-nochekaiser-shadow-garden-beta`,
      probability: defaultPreset.length,
    },
  ],
  "kaguya-sama-ai-nochekaiser": [
    ...defaultPreset,
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-ai-nochekaiser`,
      probability: defaultPreset.length,
    },
  ],
  "kaguya-sama-ai": [
    ...defaultPreset,
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-ai`,
      probability: defaultPreset.length,
    },
  ],
  "kaguya-sama-chika-nochekaiser": [
    ...defaultPreset,
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-chika-nochekaiser`,
      probability: defaultPreset.length,
    },
  ],
  "kaguya-sama-chika": [
    ...defaultPreset,
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-chika`,
      probability: defaultPreset.length,
    },
  ],
  "kaguya-sama-kaguya-nochekaiser": [
    ...defaultPreset,
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-kaguya-nochekaiser`,
      probability: defaultPreset.length,
    },
  ],
  "kaguya-sama-kaguya": [
    ...defaultPreset,
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-kaguya`,
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
  "kaguya-sama-miko": [
    ...defaultPreset,
    {
      key: `kaguya-sama-shuuchiin-academy-school-uniform-miko`,
      probability: defaultPreset.length,
    },
  ],
  "konosuba-megumin": [
    ...defaultPreset,
    {
      key: `konosuba-megumin-dress-adventurer`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `konosuba-megumin-dress-light`,
      probability: defaultPreset.length / 2,
    },
  ],
  "konosuba-yunyun": [
    ...defaultPreset,
    {
      key: `konosuba-yunyun-shirt`,
      probability: defaultPreset.length,
    },
  ],
  "lycoris-recoil-chisato-eft": defaultPreset,
  "lycoris-recoil-chisato-nochekaiser": [
    ...defaultPreset,
    {
      key: `lycoris-recoil-lycoris-uniform-chisato`,
      probability: defaultPreset.length,
    },
  ],
  "lycoris-recoil-chisato": defaultPreset,
  "lycoris-recoil-takina-eft": defaultPreset,
  "lycoris-recoil-takina-nochekaiser": [
    ...defaultPreset,
    {
      key: `lycoris-recoil-lycoris-uniform-takina`,
      probability: defaultPreset.length,
    },
  ],
  "madomagi-homura-eft": defaultPreset,
  "madomagi-iroha-eft": defaultPreset,
  "madomagi-kyouko-eft": defaultPreset,
  "madomagi-mami-eft": defaultPreset,
  "madomagi-sayaka-eft": defaultPreset,
  "madomagi-yachiyo-eft": defaultPreset,
  "mahoako-matama-notekaga": [
    ...defaultPreset,
    {
      key: `mahoako-notekaga-locomusica`,
      probability: defaultPreset.length,
    },
  ],
  "mushoku-tensei-sylphiette-little-jelly": defaultPreset,
  "new-game-aoba-narugo1992": defaultPreset,
  "new-game-hifumi-narugo1992": defaultPreset,
  "non-non-biyori-hotaru-notekaga": defaultPreset,
  "prisma-illya-chloe-beast-am7coffeelove": [
    ...defaultPreset,
    {
      key: `prisma-illya-chloe-beast`,
      probability: defaultPreset.length,
    },
  ],
  "prisma-illya-illya-beast-am7coffeelove": [
    ...defaultPreset,
    {
      key: `prisma-illya-illya-beast`,
      probability: defaultPreset.length,
    },
  ],
  "prisma-illya-miyu-beast-am7coffeelove": [
    ...defaultPreset,
    {
      key: `prisma-illya-miyu-beast`,
      probability: defaultPreset.length,
    },
  ],
  "pso2-gene-overnerd": [
    ...defaultPreset,
    {
      key: `pso2-bikini-gene`,
      probability: defaultPreset.length,
    },
  ],
  "re-zero-emilia-eft": defaultPreset,
  "re-zero-emilia": defaultPreset,
  "re-zero-ram-eft": defaultPreset,
  "re-zero-ram": defaultPreset,
  "re-zero-rem-eft": defaultPreset,
  "re-zero-rem": defaultPreset,
  "saijaku-celistia-eft": defaultPreset,
  "saijaku-krulcifer-eft": defaultPreset,
  "saijaku-lisesharte-eft": defaultPreset,
  "saijaku-philuffy-eft": defaultPreset,
  "saijaku-yoruka-eft": defaultPreset,
  "sasuoni-shiba-miyuki-eft": [
    ...defaultPreset,
    {
      key: `sasuoni-eft-first-high-school-uniform-pantyhose`,
      probability: defaultPreset.length,
    },
  ],
  "sasuoni-saegusa-mayumi-eft": [
    ...defaultPreset,
    {
      key: `sasuoni-eft-first-high-school-uniform-pantyhose`,
      probability: defaultPreset.length,
    },
  ],
  "sasuoni-mitsui-honoka-eft": [
    ...defaultPreset,
    {
      key: `sasuoni-eft-first-high-school-uniform-thighhighs`,
      probability: defaultPreset.length,
    },
  ],
  "to-love-ru-haruna-eft": defaultPreset,
  "to-love-ru-lala-eft": defaultPreset,
  "to-love-ru-mea-eft": defaultPreset,
  "to-love-ru-momo-eft": defaultPreset,
  "to-love-ru-momo-lancelot": defaultPreset,
  "to-love-ru-nana-eft": defaultPreset,
  "to-love-ru-yami-eft": defaultPreset,
  "to-love-ru-yui-eft": defaultPreset,
} as const satisfies {
  [k in OutfitKey | `default` | CharacterKey]: OutfitSetting[];
};
