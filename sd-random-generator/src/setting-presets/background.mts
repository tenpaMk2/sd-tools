import { BackgroundKey, backgroundTable } from "../backgrounds/backgrounds.mjs";
import { getKeys } from "../libs/utility.mjs";
import { OutfitKey } from "../outfits/outfits.mjs";
import { BackgroundSetting } from "../setting-define.mjs";

const monoBackgroundPresetsMap = Object.fromEntries(
  getKeys(backgroundTable).reduce(
    (acc, key) => acc.set(key, [{ key }]),
    new Map<BackgroundKey, BackgroundSetting[]>(),
  ),
) as Record<BackgroundKey, BackgroundSetting[]>;

const defaultPreset = [
  { key: `colorful-backgrounds-standing` },
  { key: `colorful-heart-backgrounds-standing` },
  { key: `colorful-backgrounds-near-clean-floor` },
  { key: `colorful-heart-backgrounds-near-clean-floor` },
  { key: `steaming-bed-sheet`, probability: 3 },
  { key: `karaoke-box-sitting-on`, probability: 0.2 },
  { key: `karaoke-box-standing`, probability: 0.2 },
] as const satisfies BackgroundSetting[];

export const backgroundsPreset = {
  ...monoBackgroundPresetsMap,

  "default": defaultPreset,

  "test-outfit": defaultPreset,
  "babydoll": defaultPreset,
  "bikini": [
    ...defaultPreset,
    { key: `ocean`, probability: defaultPreset.length },
    { key: `beach-standing`, probability: defaultPreset.length },
    { key: `beach-near-clean-floor`, probability: defaultPreset.length },
  ],
  "bridal-lingerie": [
    ...defaultPreset,
    { key: `wedding-near-clean-floor`, probability: defaultPreset.length / 2 },
    { key: `wedding-standing`, probability: defaultPreset.length / 2 },
  ],
  "camisole-denim-shorts": [
    ...defaultPreset,
    { key: `city`, probability: defaultPreset.length },
  ],
  "casual-miniskirt": [
    ...defaultPreset,
    { key: `city`, probability: defaultPreset.length },
  ],
  "cheerleader": [
    ...defaultPreset,
    {
      key: `blue-sky-confetti-for-cheering`,
      probability: defaultPreset.length,
    },
  ],
  "china-dress": defaultPreset,
  "cow-print-bikini": [
    ...defaultPreset,
    {
      key: `grass`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `grass-blue-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "denim-bikini": [
    ...defaultPreset,
    { key: `ocean`, probability: (defaultPreset.length / 3) * 2 },
    { key: `beach-standing`, probability: (defaultPreset.length / 3) * 2 },
    {
      key: `beach-near-clean-floor`,
      probability: (defaultPreset.length / 3) * 2,
    },
  ],
  "formal-suit": [
    ...defaultPreset,
    {
      key: `classroom-chalkboard`,
      probability: (defaultPreset.length / 2) * 2,
    },
    { key: `classroom-window`, probability: (defaultPreset.length / 2) * 2 },
  ],
  "gym-uniform": [
    ...defaultPreset,
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 3,
    },
    {
      key: `gym-storeroom-near-clean-floor`,
      probability: defaultPreset.length / 3,
    },
    {
      key: `gym-storeroom-standing`,
      probability: defaultPreset.length / 3,
    },
  ],
  "maid-bikini": [
    ...defaultPreset,
    {
      key: `cafe`,
      probability: defaultPreset.length,
    },
  ],
  "micro-bikini": [
    ...defaultPreset,
    { key: `ocean`, probability: defaultPreset.length / 3 },
    { key: `beach-standing`, probability: defaultPreset.length / 3 },
    { key: `beach-near-clean-floor`, probability: defaultPreset.length / 3 },
  ],
  "naked-towel": [
    ...defaultPreset,
    { key: `onsen-standing`, probability: defaultPreset.length },
    { key: `onsen-near-clean-floor`, probability: defaultPreset.length },
  ],
  "o-ring-bikini": [
    ...defaultPreset,
    { key: `ocean`, probability: defaultPreset.length / 3 },
    { key: `beach-standing`, probability: defaultPreset.length / 3 },
    { key: `beach-near-clean-floor`, probability: defaultPreset.length / 3 },
  ],
  "open-chest-sweater": defaultPreset,
  "playboy-bunny": [
    ...defaultPreset,
    {
      key: `casino`,
      probability: defaultPreset.length,
    },
  ],
  "race-queen": [
    ...defaultPreset,
    {
      key: `race-confetti`,
      probability: defaultPreset.length,
    },
  ],
  "revealing-miko": defaultPreset,
  "santa-bikini": [
    ...defaultPreset,
    {
      key: `christmas-near-clean-floor`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `christmas-standing`,
      probability: defaultPreset.length / 2,
    },
  ],
  "school-uniform-bowtie": [
    ...defaultPreset,
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
  ],
  "sukumizu-thighhighs": defaultPreset,
  "sukumizu": [
    ...defaultPreset,
    {
      key: `poolside-standing`,
      probability: defaultPreset.length,
    },
    {
      key: `poolside-near-clean-floor`,
      probability: defaultPreset.length,
    },
  ],
  "tank-top-dolphin-shorts": [
    ...defaultPreset,
    {
      key: `bedroom-near-clean-floor`,
      probability: defaultPreset.length,
    },
    {
      key: `bedroom-standing`,
      probability: defaultPreset.length,
    },
    // {
    //   key: `bedroom-sitting-on`,
    //   probability: defaultPreset.length,
    // },
  ],
  "volleyball-uniform": [
    ...defaultPreset,
    {
      key: `volleyball-gym-near-clean-floor`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `volleyball-gym-standing`,
      probability: defaultPreset.length / 2,
    },
  ],
  "white-dress": [
    ...defaultPreset,
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 1,
    },
    {
      key: `grass-blue-sky`,
      probability: defaultPreset.length / 1,
    },
  ],
  "blend-s-school-uniform-kaho": [
    ...defaultPreset,
    {
      key: `cafe`,
      probability: defaultPreset.length / 1,
    },
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 1,
    },
    {
      key: `classroom-window`,
      probability: defaultPreset.length / 1,
    },
  ],
  "blend-s-swimsuit-kaho": [
    ...defaultPreset,
    { key: `ocean`, probability: defaultPreset.length / 3 },
    { key: `beach-standing`, probability: defaultPreset.length / 3 },
    { key: `beach-near-clean-floor`, probability: defaultPreset.length / 3 },
  ],
  "blend-s-waitress-kaho": [
    ...defaultPreset,
    {
      key: `cafe`,
      probability: defaultPreset.length / 1,
    },
  ],
  "blend-s-waitress-mafuyu": [
    ...defaultPreset,
    {
      key: `cafe`,
      probability: defaultPreset.length / 1,
    },
  ],
  "danmachi-nochekaiser-hestia": defaultPreset,
  "fate-little-jelly-rin-sweater": [
    ...defaultPreset,
    {
      key: `city`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `night-rooftop`,
      probability: defaultPreset.length / 2,
    },
  ],
  "futoku-no-guild-tokishikko-dress": [
    ...defaultPreset,
    {
      key: `grass`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `grass-blue-sky`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-pilot-suit-cecilia": [
    ...defaultPreset,
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-pilot-suit-charlotte": [
    ...defaultPreset,
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-pilot-suit-houki": [
    ...defaultPreset,
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-infinite-stratos-academy-school-uniform-cecilia": [
    ...defaultPreset,
    {
      key: `city`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-infinite-stratos-academy-school-uniform-charlotte": [
    ...defaultPreset,
    {
      key: `city`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-infinite-stratos-academy-school-uniform-houki": [
    ...defaultPreset,
    {
      key: `city`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-infinite-stratos-academy-school-uniform-laura": [
    ...defaultPreset,
    {
      key: `city`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-infinite-stratos-academy-school-uniform-lingyin": [
    ...defaultPreset,
    {
      key: `city`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-infinite-stratos-academy-school-uniform-tatenashi": [
    ...defaultPreset,
    {
      key: `city`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-yellow-dress-maya": [
    ...defaultPreset,
    {
      key: `city`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "isekai-ojisan-nochekaiser-alicia": [
    ...defaultPreset,
    {
      key: `grass`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `grass-blue-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "isekai-ojisan-nochekaiser-mabel": [
    ...defaultPreset,
    {
      key: `grass`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `grass-blue-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "isekai-ojisan-nochekaiser-sui": [
    ...defaultPreset,
    {
      key: `grass`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `grass-blue-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "isekai-ojisan-nochekaiser-sumika": defaultPreset,
  "kagejitsu-nochekaiser-shadow-garden-alpha": [
    ...defaultPreset,
    {
      key: `night-moon`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `night-rooftop`,
      probability: defaultPreset.length / 2,
    },
  ],
  "kagejitsu-nochekaiser-shadow-garden-beta": [
    ...defaultPreset,
    {
      key: `night-moon`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `night-rooftop`,
      probability: defaultPreset.length / 2,
    },
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-ai-nochekaiser": [
    ...defaultPreset,
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-ai": [
    ...defaultPreset,
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-chika-nochekaiser": [
    ...defaultPreset,
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-chika": [
    ...defaultPreset,
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-kaguya-nochekaiser": [
    ...defaultPreset,
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-kaguya": [
    ...defaultPreset,
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-miko-nochekaiser": [
    ...defaultPreset,
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-miko": [
    ...defaultPreset,
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
  ],
  "konosuba-megumin-dress-adventurer": [
    ...defaultPreset,
    {
      key: `grass`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `grass-blue-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "konosuba-megumin-dress-light": [
    ...defaultPreset,
    {
      key: `grass`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `grass-blue-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "konosuba-yunyun-shirt": [
    ...defaultPreset,
    {
      key: `grass`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `grass-blue-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "lycoris-recoil-lycoris-uniform-chisato": [
    ...defaultPreset,
    {
      key: `city`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `cafe`,
      probability: defaultPreset.length / 2,
    },
  ],
  "lycoris-recoil-lycoris-uniform-takina": [
    ...defaultPreset,
    {
      key: `city`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `cafe`,
      probability: defaultPreset.length / 2,
    },
  ],
  "mahoako-notekaga-locomusica": [
    ...defaultPreset,
    { key: `city`, probability: defaultPreset.length },
  ],
  "prisma-illya-chloe-beast": defaultPreset,
  "prisma-illya-illya-beast": defaultPreset,
  "prisma-illya-magical-girl-illya": [
    ...defaultPreset,
    { key: `night-moon`, probability: defaultPreset.length / 2 },
    { key: `night-rooftop`, probability: defaultPreset.length / 2 },
    { key: `grass-blue-sky`, probability: defaultPreset.length / 2 },
    { key: `garden`, probability: defaultPreset.length / 2 },
  ],
  "prisma-illya-miyu-beast": defaultPreset,
  "pso2-bikini-gene": [
    ...defaultPreset,
    { key: `ocean`, probability: defaultPreset.length / 3 },
    { key: `beach-standing`, probability: defaultPreset.length / 3 },
    { key: `beach-near-clean-floor`, probability: defaultPreset.length / 3 },
  ],
  "rokudenashi-bikini-rumia": [
    ...defaultPreset,
    { key: `ocean`, probability: defaultPreset.length },
    { key: `beach-standing`, probability: defaultPreset.length },
    { key: `beach-near-clean-floor`, probability: defaultPreset.length },
  ],
  "rokudenashi-school-uniform-summer": [
    ...defaultPreset,
    { key: `garden`, probability: defaultPreset.length },
  ],
  "rokudenashi-school-uniform-winter": [
    ...defaultPreset,
    { key: `garden`, probability: defaultPreset.length },
  ],
  "sasuoni-first-high-school-uniform-nochekaiser": [
    ...defaultPreset,
    { key: `garden`, probability: defaultPreset.length / 2 },
    { key: `city`, probability: defaultPreset.length / 2 },
  ],
  "sasuoni-eft-first-high-school-uniform-pantyhose": defaultPreset,
  "sasuoni-eft-first-high-school-uniform-thighhighs": defaultPreset,
  "tenshi-sama-blazer": [
    ...defaultPreset,
    {
      key: `cafe`,
      probability: defaultPreset.length / 1,
    },
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 1,
    },
    {
      key: `classroom-window`,
      probability: defaultPreset.length / 1,
    },
  ],
  "to-love-ru-school-uniform-nana": [
    ...defaultPreset,
    {
      key: `cafe`,
      probability: defaultPreset.length / 1,
    },
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 1,
    },
    {
      key: `classroom-window`,
      probability: defaultPreset.length / 1,
    },
  ],
} as const satisfies Record<
  BackgroundKey | `default` | OutfitKey,
  BackgroundSetting[]
>;
