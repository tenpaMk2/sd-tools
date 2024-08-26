import type { OutfitKey } from "../../index.mjs";
import type { BackgroundSetting } from "../../setting-define.mjs";

export type BackgroundsPresetKey = `default` | OutfitKey;

export type BackgroundsPreset = Record<
  BackgroundsPresetKey,
  BackgroundSetting[]
>;

// TODO: Consider naming rule for distinguish each background-part and background-sets.

const colorfulBackground = [
  { key: `colorful-background-standing` },
  { key: `colorful-heart-background-standing` },
  { key: `colorful-background-near-clean-floor` },
  { key: `colorful-heart-background-near-clean-floor` },
] as const satisfies BackgroundSetting[];

const bedSheetSteaming = [
  { key: `bed-sheet-steaming-near-clean-floor` },
] as const satisfies BackgroundSetting[];

const defaultPreset = [
  ...colorfulBackground,
  ...bedSheetSteaming.map((x) => ({ ...x, probability: 3 })),
] as const satisfies BackgroundSetting[];

const ocean = [
  { key: `ocean-standing` },
  { key: `beach-standing` },
  { key: `beach-near-clean-floor` },
  { key: `beach-sitting-on` },
] as const satisfies BackgroundSetting[];

const city = [
  { key: `city-sitting-on`, probability: 0.3 },
  { key: `city-standing` },
] as const satisfies BackgroundSetting[];

const cafe = [{ key: `cafe-standing` }] as const satisfies BackgroundSetting[];

const casual = [...city, ...cafe] as const satisfies BackgroundSetting[];

const classroom = [
  { key: `classroom-chalkboard-sitting-on`, probability: 0.3 },
  { key: `classroom-chalkboard-standing` },
  { key: `classroom-window-sitting-on`, probability: 0.3 },
  { key: `classroom-window-standing` },
] as const satisfies BackgroundSetting[];

const karaokeBox = [
  { key: `karaoke-box-sitting-on` },
  { key: `karaoke-box-standing` },
] as const satisfies BackgroundSetting[];

const student = [
  ...classroom,
  ...bedSheetSteaming.map((x) => ({ ...x, probability: 2 })),
  ...city,
  ...cafe,
  ...karaokeBox.map((x) => ({ ...x, probability: 0.2 })),
] as const satisfies BackgroundSetting[];

const nearFeatureStudent = [
  ...bedSheetSteaming.map((x) => ({ ...x, probability: 2 })),
  ...city,
  ...cafe,
  ...karaokeBox.map((x) => ({ ...x, probability: 0.2 })),
] as const satisfies BackgroundSetting[];

const office = [
  { key: `office-sitting-on`, probability: 0.3 },
  { key: `office-standing` },
] as const satisfies BackgroundSetting[];

const officeLady = [
  ...office,
  ...bedSheetSteaming.map((x) => ({ ...x, probability: 2 })),
  ...city,
  ...cafe,
  ...karaokeBox.map((x) => ({ ...x, probability: 0.2 })),
] as const satisfies BackgroundSetting[];

const grass = [
  { key: `grass-sitting-on`, probability: 0.3 },
  { key: `grass-near-clean-floor` },
  { key: `grass-standing` },
] as const satisfies BackgroundSetting[];

const bedroom = [
  { key: `bedroom-near-clean-floor` },
  {
    key: `bedroom-sitting-on`,
    probability: 0.3,
  },
  { key: `bedroom-standing` },
] as const satisfies BackgroundSetting[];

const sports = [
  { key: `sky-blue-sky-standing` },
  { key: `sky-orange-sky-standing`, probability: 0.5 },
  { key: `gym-storeroom-near-clean-floor` },
  { key: `gym-storeroom-standing` },
] as const satisfies BackgroundSetting[];

const blueSky = [
  { key: `sky-blue-sky-standing`, probability: defaultPreset.length },
] as const satisfies BackgroundSetting[];

const isekai = [
  { key: `bed-sheet-steaming-near-clean-floor` },
  ...grass,
  ...blueSky,
  // TODO: mountains, forest
] as const satisfies BackgroundSetting[];

const nightCity = [
  { key: `night-moon-sitting-on`, probability: 0.3 },
  { key: `night-moon-standing` },
  { key: `night-rooftop-standing` },
] as const satisfies BackgroundSetting[];

const garden = [
  { key: `garden-sitting-on`, probability: 0.3 },
  { key: `garden-standing` },
] as const satisfies BackgroundSetting[];

const bookshelf = [
  { key: `bookshelf-near-clean-floor` },
  { key: `bookshelf-sitting-on`, probability: 0.3 },
  { key: `bookshelf-standing` },
] as const satisfies BackgroundSetting[];

const tatami = [
  { key: `tatami-near-clean-floor` },
  { key: `tatami-sitting-on`, probability: 0.3 },
] as const satisfies BackgroundSetting[];

const armpitsVisible = [
  { key: `sweat-white-background-standing-for-armpit` },
] as const satisfies BackgroundSetting[];

const bar = [
  { key: `bar-sitting-on` },
  { key: `bar-standing` },
] as const satisfies BackgroundSetting[];

const amusementPark = [
  { key: `amusement-park-standing` },
] as const satisfies BackgroundSetting[];

export const backgroundsPreset = {
  "default": [
    { key: `colorful-background-near-clean-floor` },
    { key: `colorful-background-sitting-on` },
    { key: `colorful-background-standing` },
  ],

  /**
   * Common outfits.
   */
  "babydoll": [...defaultPreset, ...armpitsVisible],
  "bandeau-o-ring-bikini": [...bedSheetSteaming, ...ocean, ...armpitsVisible],
  "bikini-frill": [...bedSheetSteaming, ...ocean, ...armpitsVisible],
  "bikini-o-ring": [...bedSheetSteaming, ...ocean, ...armpitsVisible],
  "bikini-tie": [...bedSheetSteaming, ...ocean, ...armpitsVisible],
  "bridal-lingerie": [
    ...defaultPreset,
    { key: `wedding-near-clean-floor`, probability: defaultPreset.length / 2 },
    { key: `wedding-standing`, probability: defaultPreset.length / 2 },
    ...armpitsVisible,
  ],
  "camisole-denim-shorts": [...casual, ...armpitsVisible],
  "casual-miniskirt": [...casual, ...bedSheetSteaming],
  "cat-lingerie": [...bedroom, ...bedSheetSteaming, ...armpitsVisible],
  "cheerleader": [
    {
      key: `blue-sky-confetti-standing-for-cheering`,
      probability: 3,
    },
    { key: `blue-sky-confetti-standing` },
    { key: `bed-sheet-steaming-near-clean-floor` },
    ...armpitsVisible,
  ],
  "china-dress": [...defaultPreset, ...armpitsVisible],
  "cow-print-bikini": [...grass, ...armpitsVisible],
  "denim-bikini": [...bedSheetSteaming, ...ocean, ...armpitsVisible],
  "dirndl": [...bar],
  "floral-print-bikini-frill": [
    ...bedSheetSteaming,
    ...ocean,
    ...armpitsVisible,
  ],
  "floral-print-bikini-o-ring": [
    ...bedSheetSteaming,
    ...ocean,
    ...armpitsVisible,
  ],
  "floral-print-bikini-tie": [...bedSheetSteaming, ...ocean, ...armpitsVisible],
  "formal-suit": student,
  "gyaru": [...student],
  "gym-uniform": sports,
  "harem-outfit": [
    ...defaultPreset,
    {
      key: `bed-sheet-red-curtains-near-clean-floor`,
      probability: defaultPreset.length,
    },
    ...armpitsVisible,
  ],
  "maid-bikini": [...cafe, ...armpitsVisible],
  "micro-bikini": [...bedSheetSteaming, ...ocean, ...armpitsVisible],
  "naked-ribbon": [...defaultPreset, ...armpitsVisible],
  "naked-shirt": [...defaultPreset, ...bedroom],
  "naked-towel": [
    ...defaultPreset,
    { key: `onsen-standing`, probability: defaultPreset.length },
    { key: `onsen-near-clean-floor`, probability: defaultPreset.length },
    ...armpitsVisible,
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
    ...armpitsVisible,
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
  "revealing-miko": [...defaultPreset, ...armpitsVisible], // TODO: shrine
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
    ...armpitsVisible,
  ],
  "school-uniform-bowtie": student,
  "sports-bikini": [...sports, ...armpitsVisible],
  "sukumizu-thighhighs": [...defaultPreset, ...armpitsVisible],
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
    ...armpitsVisible,
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
    ...armpitsVisible,
  ],
  "tank-top-dolphin-shorts": [...bedroom, ...armpitsVisible],
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
  "undressing-shirt": [{ key: `bedroom-for-undressing` }],
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
  "white-bikini": [...bedSheetSteaming, ...ocean, ...armpitsVisible],

  /**
   * Character specific outfits.
   */
  "amaburi-bikini-isuzu-little-jelly": [
    ...bedSheetSteaming,
    ...ocean,
    ...amusementPark,
    ...armpitsVisible,
    {
      key: `blue-sky-confetti-standing-for-cheering`,
      probability: 3,
    },
  ],
  "amaburi-bikini-kobori-little-jelly": [
    ...bedSheetSteaming,
    ...ocean,
    ...amusementPark,
    ...armpitsVisible,
    {
      key: `blue-sky-confetti-standing-for-cheering`,
      probability: 3,
    },
  ],
  "amaburi-bikini-latifa-little-jelly": [
    ...bedSheetSteaming,
    ...ocean,
    ...amusementPark,
    ...armpitsVisible,
    {
      key: `blue-sky-confetti-standing-for-cheering`,
      probability: 3,
    },
  ],
  "amaburi-bikini-muse-little-jelly": [
    ...bedSheetSteaming,
    ...ocean,
    ...amusementPark,
    ...armpitsVisible,
    {
      key: `blue-sky-confetti-standing-for-cheering`,
      probability: 3,
    },
  ],
  "amaburi-bikini-salama-little-jelly": [
    ...bedSheetSteaming,
    ...ocean,
    ...amusementPark,
    ...armpitsVisible,
    {
      key: `blue-sky-confetti-standing-for-cheering`,
      probability: 3,
    },
  ],
  "amaburi-bikini-sylphy-little-jelly": [
    ...bedSheetSteaming,
    ...ocean,
    ...amusementPark,
    ...armpitsVisible,
    {
      key: `blue-sky-confetti-standing-for-cheering`,
      probability: 3,
    },
  ],
  "amaburi-dress-latifa-little-jelly": [
    ...bedSheetSteaming,
    ...amusementPark,
    ...armpitsVisible,
  ],
  "amaburi-elementario-kobori-little-jelly": [
    ...bedSheetSteaming,
    ...ocean,
    ...amusementPark,
    ...casual,
  ],
  "amaburi-elementario-muse-little-jelly": [
    ...bedSheetSteaming,
    ...ocean,
    ...amusementPark,
    ...casual,
    ...armpitsVisible,
  ],
  "amaburi-elementario-salama-little-jelly": [
    ...bedSheetSteaming,
    ...ocean,
    ...amusementPark,
    ...casual,
    ...armpitsVisible,
  ],
  "amaburi-elementario-sylphy-little-jelly": [
    ...bedSheetSteaming,
    ...ocean,
    ...amusementPark,
    ...casual,
    ...armpitsVisible,
  ],
  "amaburi-pirate-isuzu-little-jelly": [...amusementPark, ...bedSheetSteaming],
  "amaburi-red-uniform-isuzu-h-madoka": [...amusementPark, ...bedSheetSteaming],
  "amaburi-red-uniform-isuzu-little-jelly": [
    ...amusementPark,
    ...bedSheetSteaming,
  ],
  "amaburi-red-uniform-isuzu-no-lora": [...amusementPark, ...bedSheetSteaming],
  "amaburi-red-uniform-isuzu-nochekaiser": [
    ...amusementPark,
    ...bedSheetSteaming,
  ],
  "amaburi-red-uniform-isuzu-sleeveless-little-jelly": [
    ...amusementPark,
    ...bedSheetSteaming,
    ...armpitsVisible,
  ],
  "amaburi-school-uniform-isuzu-little-jelly": [...student],
  "amaburi-suit-isuzu-little-jelly": [
    ...bedSheetSteaming,
    ...cafe,
    ...amusementPark,
    ...office,
  ],
  "blend-s-school-uniform-kaho-ibukimakisiko": student,
  "blend-s-swimsuit-kaho-ibukimakisiko": [
    ...bedSheetSteaming,
    ...ocean,
    ...armpitsVisible,
  ],
  "blend-s-waitress-kaho-ibukimakisiko": [...cafe, ...armpitsVisible],
  "blend-s-waitress-maika-shadowxart": cafe,
  "blend-s-waitress-mafuyu-ibukimakisiko": cafe,
  "blue-archive-gym-uniform-yuuka-ibukimakisiko": sports,
  "blue-archive-school-uniform-arona-ibukimakisiko": nearFeatureStudent,
  "blue-archive-school-uniform-yuuka-ibukimakisiko": nearFeatureStudent,
  "blue-archive-school-uniform-yuuka-shirt-ibukimakisiko": nearFeatureStudent,
  "boufuri-outfit-maple-ibukimakisiko": [...isekai, ...armpitsVisible],
  "boufuri-outfit-sally-ibukimakisiko": isekai,
  "boufuri-outfit-sally-king-dong": isekai,
  "boufuri-school-uniform-maple-ibukimakisiko": student,
  "boufuri-school-uniform-sally-ibukimakisiko": student,
  "danmachi-white-dress-hestia-eternal2kpp": [
    ...defaultPreset,
    ...armpitsVisible,
  ],
  "danmachi-white-dress-hestia-no-lora": [...defaultPreset, ...armpitsVisible],
  "eromanga-sensei-bikini-muramasa-little-jelly": [
    ...bedSheetSteaming,
    ...ocean,
    ...armpitsVisible,
  ],
  "eromanga-sensei-bookseller-tomoe-little-jelly": [...bedroom, ...bookshelf],
  "eromanga-sensei-kimono-muramasa-little-jelly": [
    ...bedSheetSteaming,
    ...bedroom, // TODO: Reconsider
  ],
  "eromanga-sensei-serafuku-muramasa-little-jelly": [
    ...bedSheetSteaming,
    ...student,
    ...bedroom,
  ],
  "eromanga-sensei-sundress-muramasa-little-jelly": [
    ...bedSheetSteaming,
    ...ocean,
    ...armpitsVisible,
  ],
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
  "hyouka-white-bikini-eru-chenkin": [
    ...bedSheetSteaming,
    ...ocean,
    ...armpitsVisible,
  ],
  "is-infinite-stratos-academy-school-uniform-cecilia-nochekaiser": [
    ...casual,
    ...bedSheetSteaming,
  ],
  "is-infinite-stratos-academy-school-uniform-charlotte-nochekaiser": [
    ...casual,
    ...bedSheetSteaming,
  ],
  "is-infinite-stratos-academy-school-uniform-houki-nochekaiser": [
    ...casual,
    ...bedSheetSteaming,
  ],
  "is-infinite-stratos-academy-school-uniform-laura-nochekaiser": [
    ...casual,
    ...bedSheetSteaming,
  ],
  "is-infinite-stratos-academy-school-uniform-lingyin-nochekaiser": [
    ...casual,
    ...armpitsVisible,
  ],
  "is-infinite-stratos-academy-school-uniform-tatenashi-nochekaiser": [
    ...casual,
    ...bedSheetSteaming,
  ],
  "is-pilot-suit-cecilia-nochekaiser": [...blueSky, ...armpitsVisible],
  "is-pilot-suit-charlotte-nochekaiser": [...blueSky, ...armpitsVisible],
  "is-pilot-suit-houki-nochekaiser": [...blueSky, ...armpitsVisible],
  "is-yellow-dress-maya-nochekaiser": [...casual, ...bedSheetSteaming],
  "isekai-nonbiri-nouka-maid-ann-little-jelly": [...isekai],
  "isekai-nonbiri-nouka-outfit-hakuren-little-jelly": [
    ...isekai,
    ...armpitsVisible,
  ],
  "isekai-nonbiri-nouka-outfit-ria-little-jelly": [
    ...isekai,
    ...armpitsVisible,
  ],
  "isekai-nonbiri-nouka-outfit-rurushi-little-jelly": isekai,
  "isekai-nonbiri-nouka-outfit-tia-little-jelly": [
    ...isekai,
    ...armpitsVisible,
  ],
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
  "konosuba-outfit-megumin-light-no-lora": [...isekai, ...armpitsVisible],
  "konosuba-outfit-yunyun-no-lora": isekai,
  "lycoris-recoil-lycoris-uniform-chisato-nochekaiser": [
    ...casual,
    ...bedSheetSteaming,
  ],
  "lycoris-recoil-lycoris-uniform-takina-nochekaiser": [
    ...casual,
    ...bedSheetSteaming,
  ],
  "machikado-mazoku-crisis-management-form-ibukimakisiko": [
    ...casual,
    ...armpitsVisible,
  ],
  "machikado-mazoku-gym-uniform-shamiko-ibukimakisiko": [
    ...sports,
    ...armpitsVisible,
  ],
  "machikado-mazoku-school-uniform-shamiko-ibukimakisiko": [
    ...student,
    ...bedSheetSteaming,
  ],
  "mahoako-outfit-locomusica-notekaga": [...casual, ...bedSheetSteaming],
  "majo-no-tabitabi-witch-elaina-ibukimakisiko": isekai,
  "majo-no-tabitabi-witch-elaina-inner-ibukimakisiko": [
    ...isekai,
    ...armpitsVisible,
  ],
  "mushoku-tensei-maid-aisha-ibukimakisiko": garden, // TODO: Reconsider.
  "mushoku-tensei-outfit-norn-ibukimakisiko": bookshelf,
  "mushoku-tensei-outfit-roxy-adventurer-indoors-ibukimakisiko": bookshelf,
  "mushoku-tensei-outfit-roxy-adventurer-outdoors-ibukimakisiko": isekai,
  "mushoku-tensei-outfit-roxy-indoors-ibukimakisiko": bookshelf,
  "mushoku-tensei-outfit-roxy-outdoors-ibukimakisiko": isekai,
  "mushoku-tensei-school-uniform-norn-ibukimakisiko": bookshelf,
  "mushoku-tensei-oversized-shirt-roxy-ibukimakisiko": [
    { key: `bed-sheet-steaming-near-clean-floor`, probability: 3 },
    ...bedroom,
    ...armpitsVisible,
  ],
  "mushoku-tensei-pajamas-roxy-ibukimakisiko": [
    { key: `bed-sheet-steaming-near-clean-floor`, probability: 3 },
    ...bedroom,
  ],
  "new-game-outfit-aoba-eternal2kpp": officeLady,
  "new-game-outfit-aoba-nochekaiser": officeLady,
  "new-game-outfit-hifumi-eternal2kpp": officeLady,
  "new-game-outfit-hifumi-nochekaiser": officeLady,
  "ochifuru-idol-jacket-hayu-enter": [...casual, ...bedSheetSteaming],
  "ochifuru-idol-jacket-hemo-enter": [...casual, ...bedSheetSteaming],
  "ochifuru-idol-jacket-ino-enter": [...casual, ...bedSheetSteaming],
  "ochifuru-idol-jacket-nina-enter": [...casual, ...bedSheetSteaming],
  "ochifuru-idol-jacket-roko-enter": [...casual, ...bedSheetSteaming],
  "ochifuru-idol-sleeveless-hayu-enter": [
    ...casual,
    ...bedSheetSteaming,
    ...armpitsVisible,
  ],
  "ochifuru-idol-sleeveless-hemo-enter": [
    ...casual,
    ...bedSheetSteaming,
    ...armpitsVisible,
  ],
  "ochifuru-idol-sleeveless-ino-enter": [
    ...casual,
    ...bedSheetSteaming,
    ...armpitsVisible,
  ],
  "ochifuru-idol-sleeveless-nina-enter": [
    ...casual,
    ...bedSheetSteaming,
    ...armpitsVisible,
  ],
  "ochifuru-idol-sleeveless-roko-enter": [
    ...casual,
    ...bedSheetSteaming,
    ...armpitsVisible,
  ],
  "ochifuru-school-uniform-hayu-enter": [...student],
  "ochifuru-school-uniform-hemo-enter": [...student],
  "ochifuru-school-uniform-ino-enter": [...student],
  "ochifuru-school-uniform-nina-enter": [...student],
  "ochifuru-school-uniform-roko-enter": [...student],
  "ochifuru-school-uniform-tone-enter": [...student],
  "prisma-illya-beast-chloe-am7coffeelove": [
    ...defaultPreset,
    ...armpitsVisible,
  ],
  "prisma-illya-beast-chloe-h-madoka": [...defaultPreset, ...armpitsVisible],
  "prisma-illya-beast-illya-am7coffeelove": [
    ...defaultPreset,
    ...armpitsVisible,
  ],
  "prisma-illya-beast-illya-h-madoka": [...defaultPreset, ...armpitsVisible],
  "prisma-illya-beast-miyu-am7coffeelove": [
    ...defaultPreset,
    ...armpitsVisible,
  ],
  "prisma-illya-beast-miyu-h-madoka": [...defaultPreset, ...armpitsVisible],
  "prisma-illya-camisole-chloe-h-madoka": [
    ...bedSheetSteaming,
    ...casual,
    ...armpitsVisible,
  ],
  "prisma-illya-magical-girl-chloe-h-madoka": [
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
    ...armpitsVisible,
  ],
  "prisma-illya-magical-girl-illya-h-madoka": [
    ...defaultPreset,
    { key: `night-moon-sitting-on`, probability: defaultPreset.length / 2 },
    { key: `night-moon-standing`, probability: defaultPreset.length / 2 },
    { key: `night-rooftop-standing`, probability: defaultPreset.length / 2 },
    { key: `grass-near-clean-floor`, probability: defaultPreset.length / 2 },
    { key: `grass-sitting-on`, probability: defaultPreset.length / 2 },
    { key: `grass-standing`, probability: defaultPreset.length / 2 },
    { key: `garden-sitting-on`, probability: defaultPreset.length / 2 },
    { key: `garden-standing`, probability: defaultPreset.length / 2 },
    ...armpitsVisible,
  ],
  "prisma-illya-magical-girl-miyu-h-madoka": [
    ...defaultPreset,
    { key: `night-moon-sitting-on`, probability: defaultPreset.length / 2 },
    { key: `night-moon-standing`, probability: defaultPreset.length / 2 },
    { key: `night-rooftop-standing`, probability: defaultPreset.length / 2 },
    { key: `grass-near-clean-floor`, probability: defaultPreset.length / 2 },
    { key: `grass-sitting-on`, probability: defaultPreset.length / 2 },
    { key: `grass-standing`, probability: defaultPreset.length / 2 },
    { key: `garden-sitting-on`, probability: defaultPreset.length / 2 },
    { key: `garden-standing`, probability: defaultPreset.length / 2 },
    ...armpitsVisible,
  ],
  "prisma-illya-maid-miyu-h-madoka": [...garden, ...bookshelf],
  "prisma-illya-school-uniform-chloe-h-madoka": [...student],
  "prisma-illya-school-uniform-illya-h-madoka": [...student],
  "prisma-illya-school-uniform-miyu-h-madoka": [...student],
  "pso2-bikini-gene-overnerd": [
    ...bedSheetSteaming,
    ...ocean,
    ...armpitsVisible,
  ],
  "rokudenashi-bikini-rumia-little-jelly": [
    ...bedSheetSteaming,
    ...ocean,
    ...armpitsVisible,
  ],
  "rokudenashi-school-uniform-summer-little-jelly": garden,
  "rokudenashi-school-uniform-winter-little-jelly": garden,
  "ryuuou-outfit-hinatsuru-ai-ibukimakisiko": [...bedroom, ...tatami],
  "ryuuou-outfit-yashajin-ai-ibukimakisiko": [...bedroom, ...tatami],
  "sasuoni-first-high-school-uniform-nochekaiser": nearFeatureStudent,
  "seirei-outfit-celia-ibukimakisiko": [...isekai, ...garden], // TODO: Reconsider
  "sematsuka-school-uniform-regina-judge-naegi": [
    ...nearFeatureStudent,
    ...garden,
  ],
  "sematsuka-school-uniform-riselia-judge-naegi": [
    ...nearFeatureStudent,
    ...garden,
  ],
  "slow-loop-school-uniform-hiyori-ibukimakisiko": student,
  "slow-loop-school-uniform-koharu-ibukimakisiko": student,
  "slow-loop-school-uniform-koi-ibukimakisiko": student,
  "spy-family-red-sweater-eternal2kpp": bedroom,
  "spy-family-thorn-princess-eternal2kpp": [...nightCity, ...armpitsVisible],
  "strike-witches-outfit-yoshika-gwess": blueSky,
  "tenshi-sama-blazer-jibunsagasinotabi": student,
  "tenshi-tsuki-outfit-towa-eternal2kpp": bedroom,
  "tenshi-tsuki-school-uniform-noel-duongve": student,
  "tenshi-tsuki-school-uniform-noel-eternal2kpp": student,
  "tenshi-tsuki-school-uniform-tsumugi-duongve": student,
  "tenshi-tsuki-school-uniform-tsumugi-eternal2kpp": student,
  "to-love-ru-bikini-tearju-nochekaiser": [
    ...bedSheetSteaming,
    ...ocean,
    ...armpitsVisible,
  ],
  "to-love-ru-school-uniform-haruna-nochekaiser": student,
  "to-love-ru-school-uniform-lala-nochekaiser": student,
  "to-love-ru-school-uniform-momo-lancelot": student,
  "to-love-ru-school-uniform-momo-nochekaiser": student,
  "to-love-ru-school-uniform-nana-lancelot": student,
  "to-love-ru-school-uniform-nana-nochekaiser": student,
  "to-love-ru-school-uniform-yami-nochekaiser": student,
  "to-love-ru-school-uniform-yui-nochekaiser": student,
  "to-love-ru-suit-tearju-nochekaiser": student,
  "to-love-ru-trans-yami-nochekaiser": [...bedSheetSteaming, ...nightCity],
} as const satisfies BackgroundsPreset;
