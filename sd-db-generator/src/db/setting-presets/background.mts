import type { OutfitKey } from "../../index.mjs";
import { getKeys } from "../../libs/utility.mjs";
import type { BackgroundSetting } from "../../setting-define.mjs";
import {
  backgroundTable,
  type BackgroundKey,
} from "../backgrounds/backgrounds.mjs";

export type BackgroundsPresetKey = `default` | OutfitKey;

export type BackgroundsPreset = Record<
  BackgroundsPresetKey,
  BackgroundSetting[]
>;

const monoBackgroundPresetsMap = Object.fromEntries(
  getKeys(backgroundTable).reduce(
    (acc, key) => acc.set(key, [{ key }]),
    new Map<BackgroundKey, BackgroundSetting[]>(),
  ),
) as Record<BackgroundKey, BackgroundSetting[]>;

const defaultPreset = [
  { key: `colorful-background-standing` },
  { key: `colorful-heart-background-standing` },
  { key: `colorful-background-near-clean-floor` },
  { key: `colorful-heart-background-near-clean-floor` },
  { key: `bed-sheet-steaming-near-clean-floor`, probability: 3 },
  // TODO: ↓
  // { key: `karaoke-box-sitting-on`, probability: 0.2 },
  // { key: `karaoke-box-standing`, probability: 0.2 },
] as const satisfies BackgroundSetting[];

const ocean = [
  { key: `bed-sheet-steaming-near-clean-floor` },
  { key: `ocean-standing` },
  { key: `beach-standing` },
  { key: `beach-near-clean-floor` },
  { key: `beach-sitting-on` },
] as const satisfies BackgroundSetting[];

const casual = [
  ...defaultPreset,
  { key: `city-sitting-on`, probability: defaultPreset.length },
  { key: `city-standing`, probability: defaultPreset.length },
  { key: `cafe-standing`, probability: defaultPreset.length },
] as const satisfies BackgroundSetting[];

const student = [
  { key: `classroom-chalkboard-sitting-on` },
  { key: `classroom-chalkboard-standing` },
  { key: `classroom-window-sitting-on` },
  { key: `classroom-window-standing` },
  { key: `bed-sheet-steaming-near-clean-floor`, probability: 2 },
  { key: `city-sitting-on`, probability: 0.5 },
  { key: `city-standing` },
  { key: `cafe-standing` },
  { key: `karaoke-box-sitting-on`, probability: 0.2 },
  { key: `karaoke-box-standing`, probability: 0.2 },
] as const satisfies BackgroundSetting[];

const nearFeatureStudent = [
  { key: `bed-sheet-steaming-near-clean-floor`, probability: 2 },
  { key: `city-sitting-on`, probability: 0.5 },
  { key: `city-standing` },
  { key: `cafe-standing` },
  { key: `karaoke-box-sitting-on`, probability: 0.2 },
  { key: `karaoke-box-standing`, probability: 0.2 },
] as const satisfies BackgroundSetting[];

const officeLady = [
  ...defaultPreset,
  { key: `city-sitting-on`, probability: defaultPreset.length },
  { key: `city-standing`, probability: defaultPreset.length },
  { key: `cafe-standing`, probability: defaultPreset.length },
  { key: `karaoke-box-sitting-on`, probability: defaultPreset.length / 3 },
  { key: `karaoke-box-standing`, probability: defaultPreset.length / 3 },
  { key: `office-sitting-on`, probability: defaultPreset.length * 3 },
  { key: `office-standing`, probability: defaultPreset.length * 3 },
] as const satisfies BackgroundSetting[];

const cafe = [
  ...defaultPreset,
  { key: `cafe-standing`, probability: defaultPreset.length },
] as const satisfies BackgroundSetting[];

const grass = [
  ...defaultPreset,
  { key: `grass-sitting-on`, probability: defaultPreset.length },
  { key: `grass-near-clean-floor`, probability: defaultPreset.length },
  { key: `grass-standing`, probability: defaultPreset.length },
] as const satisfies BackgroundSetting[];

const bedroom = [
  {
    key: `bedroom-near-clean-floor`,
  },
  {
    key: `bedroom-sitting-on`,
    probability: 0.3,
  },
  {
    key: `bedroom-standing`,
  },
] as const satisfies BackgroundSetting[];

const sports = [
  ...defaultPreset,
  {
    key: `sky-blue-sky-standing`,
    probability: defaultPreset.length / 3,
  },
  {
    key: `sky-orange-sky-standing`,
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
] as const satisfies BackgroundSetting[];

const isekai = [
  { key: `bed-sheet-steaming-near-clean-floor` },
  { key: `grass-sitting-on` },
  { key: `grass-near-clean-floor` },
  { key: `grass-standing` },
  { key: `sky-blue-sky-standing` },
  // TODO: mountains, forest
] as const satisfies BackgroundSetting[];

const blueSky = [
  ...defaultPreset,
  { key: `sky-blue-sky-standing`, probability: defaultPreset.length },
] as const satisfies BackgroundSetting[];

const nightCity = [
  ...defaultPreset,
  {
    key: `night-moon-sitting-on`,
    probability: defaultPreset.length / 3,
  },
  {
    key: `night-moon-standing`,
    probability: defaultPreset.length / 3,
  },
  {
    key: `night-rooftop-standing`,
    probability: defaultPreset.length / 3,
  },
] as const satisfies BackgroundSetting[];

const garden = [
  ...defaultPreset,
  {
    key: `garden-sitting-on`,
    probability: defaultPreset.length / 3,
  },
  {
    key: `garden-standing`,
    probability: defaultPreset.length / 3,
  },
] as const satisfies BackgroundSetting[];

const bookshelf = [
  { key: `bookshelf-near-clean-floor` },
  { key: `bookshelf-sitting-on`, probability: 0.3 },
  { key: `bookshelf-standing` },
] as const satisfies BackgroundSetting[];

export const backgroundsPreset = {
  "default": [
    { key: `colorful-background-standing` },
    { key: `colorful-background-near-clean-floor` },
  ],

  /**
   * Common outfits.
   */
  "babydoll": defaultPreset,
  "bikini-frill": ocean,
  "bikini-o-ring": ocean,
  "bikini-tie": ocean,
  "bridal-lingerie": [
    ...defaultPreset,
    { key: `wedding-near-clean-floor`, probability: defaultPreset.length / 2 },
    { key: `wedding-standing`, probability: defaultPreset.length / 2 },
  ],
  "camisole-denim-shorts": casual,
  "casual-miniskirt": casual,
  "cheerleader": [
    {
      key: `blue-sky-confetti-standing-for-cheering`,
      probability: 3,
    },
    {
      key: `blue-sky-confetti-standing`,
      probability: 1,
    },
    {
      key: `bed-sheet-steaming-near-clean-floor`,
      probability: 1,
    },
  ],
  "china-dress": defaultPreset,
  "cow-print-bikini": grass,
  "denim-bikini": ocean,
  "formal-suit": student,
  "gym-uniform": sports,
  "harem-outfit": [
    ...defaultPreset,
    {
      key: `bed-sheet-red-curtains-near-clean-floor`,
      probability: defaultPreset.length,
    },
  ],
  "maid-bikini": cafe,
  "micro-bikini": ocean,
  "naked-towel": [
    ...defaultPreset,
    { key: `onsen-standing`, probability: defaultPreset.length },
    { key: `onsen-near-clean-floor`, probability: defaultPreset.length },
  ],
  "nun": [
    ...defaultPreset,
    // TODO: church
    // { key: `onsen-standing`, probability: defaultPreset.length },
    // { key: `onsen-near-clean-floor`, probability: defaultPreset.length },
  ],
  "open-chest-sweater": bedroom,
  "playboy-bunny": [
    ...defaultPreset,
    {
      key: `casino-sitting-on`,
      probability: defaultPreset.length,
    },
    {
      key: `casino-standing`,
      probability: defaultPreset.length,
    },
  ],
  "race-queen": [
    ...defaultPreset,
    {
      key: `racing-circuit-sitting-on`,
      probability: defaultPreset.length,
    },
    {
      key: `racing-circuit-standing`,
      probability: defaultPreset.length,
    },
  ],
  "revealing-miko": defaultPreset, // TODO: shrine
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
  "school-uniform-bowtie": student,
  "sports-bikini": sports,
  "sukumizu-thighhighs": defaultPreset,
  "sukumizu": [
    ...defaultPreset,
    {
      key: `poolside-near-clean-floor`,
      probability: defaultPreset.length,
    },
    {
      key: `poolside-sitting-on`,
      probability: defaultPreset.length,
    },
    {
      key: `poolside-standing`,
      probability: defaultPreset.length,
    },
  ],
  "tank-top-dolphin-shorts": bedroom,
  "tennis-uniform": [
    ...defaultPreset,
    {
      key: `tennis-court-sitting-on`,
      probability: defaultPreset.length,
    },
    {
      key: `tennis-court-near-clean-floor`,
      probability: defaultPreset.length,
    },
    {
      key: `tennis-court-standing`,
      probability: defaultPreset.length,
    },
  ],
  "volleyball-uniform": [
    ...defaultPreset,
    {
      key: `gym-volleyball-near-clean-floor`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `gym-volleyball-standing`,
      probability: defaultPreset.length / 2,
    },
  ],
  "sundress": [
    // TODO: sun-flower
    ...defaultPreset,
    {
      key: `sky-blue-sky-standing`,
      probability: defaultPreset.length / 1,
    },
    {
      key: `grass-sitting-on`,
      probability: defaultPreset.length / 1,
    },
    {
      key: `grass-near-clean-floor`,
      probability: defaultPreset.length / 1,
    },
  ],

  /**
   * Character specific outfits.
   */
  "amaburi-red-uniform-isuzu-h-madoka": casual,
  "amaburi-red-uniform-isuzu-no-lora": casual,
  "amaburi-red-uniform-isuzu-nochekaiser": casual, // TODO: `amusement park`
  "blend-s-school-uniform-kaho-ibukimakisiko": student,
  "blend-s-swimsuit-kaho-ibukimakisiko": ocean,
  "blend-s-waitress-kaho-ibukimakisiko": cafe,
  "blend-s-waitress-maika-shadowxart": cafe,
  "blend-s-waitress-mafuyu-ibukimakisiko": cafe,
  "blue-archive-gym-uniform-yuuka-ibukimakisiko": sports,
  "blue-archive-school-uniform-arona-ibukimakisiko": nearFeatureStudent,
  "blue-archive-school-uniform-yuuka-ibukimakisiko": nearFeatureStudent,
  "blue-archive-school-uniform-yuuka-shirt-ibukimakisiko": nearFeatureStudent,
  "boufuri-outfit-maple-ibukimakisiko": isekai,
  "boufuri-outfit-sally-ibukimakisiko": isekai,
  "boufuri-outfit-sally-king-dong": isekai,
  "boufuri-school-uniform-maple-ibukimakisiko": student,
  "boufuri-school-uniform-sally-ibukimakisiko": student,
  "danmachi-white-dress-hestia-eternal2kpp": defaultPreset,
  "danmachi-white-dress-hestia-no-lora": defaultPreset,
  "fate-red-sweater-rin-little-jelly": [
    ...casual,
    {
      key: `night-rooftop-standing`,
      probability: defaultPreset.length / 2,
    },
  ],
  "futoku-no-guild-outfit-enome-zedotasco": isekai,
  "futoku-no-guild-outfit-tokishikko-ibukimakisiko": isekai,
  "goblin-slayer-outfit-cow-girl-eternal2kpp": isekai,
  "goblin-slayer-outfit-priestess-eternal2kpp": isekai,
  "higehiro-school-uniform-sayu-nochekaiser": student,
  "hyouka-school-uniform-eru-chenkin": student,
  "hyouka-white-bikini-eru-chenkin": ocean,
  "is-infinite-stratos-academy-school-uniform-cecilia-nochekaiser": casual,
  "is-infinite-stratos-academy-school-uniform-charlotte-nochekaiser": casual,
  "is-infinite-stratos-academy-school-uniform-houki-nochekaiser": casual,
  "is-infinite-stratos-academy-school-uniform-laura-nochekaiser": casual,
  "is-infinite-stratos-academy-school-uniform-lingyin-nochekaiser": casual,
  "is-infinite-stratos-academy-school-uniform-tatenashi-nochekaiser": casual,
  "is-pilot-suit-cecilia-nochekaiser": blueSky,
  "is-pilot-suit-charlotte-nochekaiser": blueSky,
  "is-pilot-suit-houki-nochekaiser": blueSky,
  "is-yellow-dress-maya-nochekaiser": casual,
  "isekai-ojisan-outfit-alicia-nochekaiser": isekai,
  "isekai-ojisan-outfit-mabel-nochekaiser": isekai,
  "isekai-ojisan-outfit-sui-nochekaiser": isekai,
  "isekai-ojisan-outfit-sumika-nochekaiser": bedroom,
  "kagejitsu-shadow-garden-alpha-nochekaiser": nightCity,
  "kagejitsu-shadow-garden-alpha-novowels": nightCity,
  "kagejitsu-shadow-garden-beta-nochekaiser": nightCity,
  "kagejitsu-shadow-garden-beta-novowels": nightCity,
  "kaguya-sama-maid-hayasaka-nochekaiser": student, // TODO
  "kaguya-sama-shuuchiin-academy-school-uniform-ai-no-lora": student,
  "kaguya-sama-shuuchiin-academy-school-uniform-ai-nochekaiser": student,
  "kaguya-sama-shuuchiin-academy-school-uniform-chika-eternal2kpp": student,
  "kaguya-sama-shuuchiin-academy-school-uniform-chika-no-lora": student,
  "kaguya-sama-shuuchiin-academy-school-uniform-chika-nochekaiser": student,
  "kaguya-sama-shuuchiin-academy-school-uniform-kaguya-eternal2kpp": student,
  "kaguya-sama-shuuchiin-academy-school-uniform-kaguya-no-lora": student,
  "kaguya-sama-shuuchiin-academy-school-uniform-kaguya-nochekaiser": student,
  "kaguya-sama-shuuchiin-academy-school-uniform-miko-no-lora": student,
  "kaguya-sama-shuuchiin-academy-school-uniform-miko-nochekaiser": student,
  "konosuba-outfit-megumin-adventurer-no-lora": isekai,
  "konosuba-outfit-megumin-light-no-lora": isekai,
  "konosuba-outfit-yunyun-no-lora": isekai,
  "lycoris-recoil-lycoris-uniform-chisato-nochekaiser": casual,
  "lycoris-recoil-lycoris-uniform-takina-nochekaiser": casual,
  "machikado-mazoku-crisis-management-form-ibukimakisiko": casual,
  "machikado-mazoku-gym-uniform-shamiko-ibukimakisiko": sports,
  "machikado-mazoku-school-uniform-shamiko-ibukimakisiko": student,
  "mahoako-outfit-locomusica-notekaga": casual,
  "mushoku-tensei-outfit-roxy-adventurer-indoors-ibukimakisiko": bookshelf,
  "mushoku-tensei-outfit-roxy-adventurer-outdoors-ibukimakisiko": isekai,
  "mushoku-tensei-outfit-roxy-indoors-ibukimakisiko": bookshelf,
  "mushoku-tensei-outfit-roxy-outdoors-ibukimakisiko": isekai,
  "mushoku-tensei-oversized-shirt-roxy-ibukimakisiko": [
    { key: `bed-sheet-steaming-near-clean-floor`, probability: 3 },
    ...bedroom,
  ],
  "mushoku-tensei-pajamas-roxy-ibukimakisiko": [
    { key: `bed-sheet-steaming-near-clean-floor`, probability: 3 },
    ...bedroom,
  ],
  "new-game-outfit-aoba-eternal2kpp": officeLady,
  "new-game-outfit-aoba-nochekaiser": officeLady,
  "new-game-outfit-hifumi-eternal2kpp": officeLady,
  "new-game-outfit-hifumi-nochekaiser": officeLady,
  "prisma-illya-beast-chloe-am7coffeelove": defaultPreset,
  "prisma-illya-beast-illya-am7coffeelove": defaultPreset,
  "prisma-illya-beast-miyu-am7coffeelove": defaultPreset,
  "prisma-illya-magical-girl-illya-flujoru": [
    ...defaultPreset,
    { key: `night-moon-sitting-on`, probability: defaultPreset.length / 2 },
    { key: `night-moon-standing`, probability: defaultPreset.length / 2 },
    { key: `night-rooftop-standing`, probability: defaultPreset.length / 2 },
    { key: `grass-near-clean-floor`, probability: defaultPreset.length / 2 },
    { key: `grass-sitting-on`, probability: defaultPreset.length / 2 },
    { key: `grass-standing`, probability: defaultPreset.length / 2 },
    { key: `garden-sitting-on`, probability: defaultPreset.length / 2 },
    { key: `garden-standing`, probability: defaultPreset.length / 2 },
  ],
  "pso2-bikini-gene-overnerd": ocean,
  "rokudenashi-bikini-rumia-little-jelly": ocean,
  "rokudenashi-school-uniform-summer-little-jelly": garden,
  "rokudenashi-school-uniform-winter-little-jelly": garden,
  "sasuoni-first-high-school-uniform-nochekaiser": nearFeatureStudent,
  "seirei-outfit-celia-ibukimakisiko": [
    ...isekai,
    {
      key: `garden-sitting-on`,
    },
    {
      key: `garden-standing`,
    },
  ], // TODO: Reconsider
  "slow-loop-school-uniform-hiyori-ibukimakisiko": student,
  "slow-loop-school-uniform-koharu-ibukimakisiko": student,
  "slow-loop-school-uniform-koi-ibukimakisiko": student,
  "spy-family-red-sweater-eternal2kpp": bedroom,
  "spy-family-thorn-princess-eternal2kpp": nightCity,
  "strike-witches-outfit-yoshika-gwess": blueSky,
  "tenshi-sama-blazer-jibunsagasinotabi": student,
  "tenshi-tsuki-outfit-towa-eternal2kpp": bedroom,
  "tenshi-tsuki-school-uniform-noel-duongve": student,
  "tenshi-tsuki-school-uniform-noel-eternal2kpp": student,
  "tenshi-tsuki-school-uniform-tsumugi-duongve": student,
  "tenshi-tsuki-school-uniform-tsumugi-eternal2kpp": student,
  "to-love-ru-school-uniform-haruna-nochekaiser": student,
  "to-love-ru-school-uniform-lala-nochekaiser": student,
  "to-love-ru-school-uniform-momo-lancelot": student,
  "to-love-ru-school-uniform-momo-nochekaiser": student,
  "to-love-ru-school-uniform-nana-lancelot": student,
  "to-love-ru-school-uniform-nana-nochekaiser": student,
} as const satisfies BackgroundsPreset;
