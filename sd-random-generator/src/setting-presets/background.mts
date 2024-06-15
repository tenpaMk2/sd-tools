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
  "harem-outfit": [
    ...defaultPreset,
    {
      key: `red-curtains-bed`,
      probability: defaultPreset.length,
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
  "nun": [
    ...defaultPreset,
    // TODO: church
    // { key: `onsen-standing`, probability: defaultPreset.length },
    // { key: `onsen-near-clean-floor`, probability: defaultPreset.length },
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
  "sports-bikini": [
    ...defaultPreset,
    {
      key: `grass-blue-sky`,
      probability: defaultPreset.length,
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
  "tennis-uniform": [
    ...defaultPreset,
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
      key: `volleyball-gym-near-clean-floor`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `volleyball-gym-standing`,
      probability: defaultPreset.length / 2,
    },
  ],
  "sundress": [
    // TODO: sun-flower
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
  "amaburi-red-uniform-isuzu-h-madoka": [
    ...defaultPreset,
    {
      key: `cafe`,
      probability: defaultPreset.length / 1,
    },
    {
      key: `grass-blue-sky`,
      probability: defaultPreset.length / 1,
    },
  ],
  "amaburi-red-uniform-isuzu-no-lora": [
    ...defaultPreset,
    {
      key: `cafe`,
      probability: defaultPreset.length / 1,
    },
    {
      key: `grass-blue-sky`,
      probability: defaultPreset.length / 1,
    },
  ],
  "amaburi-red-uniform-isuzu-nochekaiser": [
    ...defaultPreset,
    {
      key: `cafe`,
      probability: defaultPreset.length / 1,
    },
    {
      key: `grass-blue-sky`,
      probability: defaultPreset.length / 1,
    },
  ],
  "blend-s-school-uniform-kaho-ibukimakisiko": [
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
  "blend-s-swimsuit-kaho-ibukimakisiko": [
    ...defaultPreset,
    { key: `ocean`, probability: defaultPreset.length / 3 },
    { key: `beach-standing`, probability: defaultPreset.length / 3 },
    { key: `beach-near-clean-floor`, probability: defaultPreset.length / 3 },
  ],
  "blend-s-waitress-kaho-ibukimakisiko": [
    ...defaultPreset,
    {
      key: `cafe`,
      probability: defaultPreset.length / 1,
    },
  ],
  "blend-s-waitress-mafuyu-ibukimakisiko": [
    ...defaultPreset,
    {
      key: `cafe`,
      probability: defaultPreset.length / 1,
    },
  ],
  "danmachi-white-dress-hestia-eternal2kpp": defaultPreset,
  "danmachi-white-dress-hestia-no-lora": defaultPreset,
  "fate-red-sweater-rin-little-jelly": [
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
  "futoku-no-guild-outfit-tokishikko-ibukimakisiko": [
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
  "higehiro-school-uniform-sayu-nochekaiser": [
    ...defaultPreset,
    {
      key: `city`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
    {
      key: `classroom-chalkboard`,
      probability: defaultPreset.length / 2,
    },
  ],
  "hyouka-school-uniform-eru-chenkin": [
    ...defaultPreset,
    { key: `ocean`, probability: defaultPreset.length },
    { key: `beach-standing`, probability: defaultPreset.length },
    { key: `beach-near-clean-floor`, probability: defaultPreset.length },
  ],
  "hyouka-white-bikini-eru-chenkin": [
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
  "is-infinite-stratos-academy-school-uniform-cecilia-nochekaiser": [
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
  "is-infinite-stratos-academy-school-uniform-charlotte-nochekaiser": [
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
  "is-infinite-stratos-academy-school-uniform-houki-nochekaiser": [
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
  "is-infinite-stratos-academy-school-uniform-laura-nochekaiser": [
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
  "is-infinite-stratos-academy-school-uniform-lingyin-nochekaiser": [
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
  "is-infinite-stratos-academy-school-uniform-tatenashi-nochekaiser": [
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
  "is-pilot-suit-cecilia-nochekaiser": [
    ...defaultPreset,
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-pilot-suit-charlotte-nochekaiser": [
    ...defaultPreset,
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-pilot-suit-houki-nochekaiser": [
    ...defaultPreset,
    {
      key: `sun-sky`,
      probability: defaultPreset.length / 2,
    },
  ],
  "is-yellow-dress-maya-nochekaiser": [
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
  "isekai-ojisan-outfit-alicia-nochekaiser": [
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
  "isekai-ojisan-outfit-mabel-nochekaiser": [
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
  "isekai-ojisan-outfit-sui-nochekaiser": [
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
  "isekai-ojisan-outfit-sumika-nochekaiser": defaultPreset,
  "kagejitsu-shadow-garden-alpha-nochekaiser": [
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
  "kagejitsu-shadow-garden-beta-nochekaiser": [
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
  "kaguya-sama-shuuchiin-academy-school-uniform-ai-no-lora": [
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
  "kaguya-sama-shuuchiin-academy-school-uniform-chika-eternal2kpp": [
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
  "kaguya-sama-shuuchiin-academy-school-uniform-chika-no-lora": [
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
  "kaguya-sama-shuuchiin-academy-school-uniform-kaguya-eternal2kpp": [
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
  "kaguya-sama-shuuchiin-academy-school-uniform-kaguya-no-lora": [
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
  "kaguya-sama-shuuchiin-academy-school-uniform-miko-no-lora": [
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
  "konosuba-outfit-megumin-adventurer-no-lora": [
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
  "konosuba-outfit-megumin-light-no-lora": [
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
  "konosuba-outfit-yunyun-no-lora": [
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
  "lycoris-recoil-lycoris-uniform-chisato-nochekaiser": [
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
  "lycoris-recoil-lycoris-uniform-takina-nochekaiser": [
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
  "mahoako-outfit-locomusica-notekaga": [
    ...defaultPreset,
    { key: `city`, probability: defaultPreset.length },
  ],
  "new-game-outfit-aoba-eternal2kpp": [
    ...defaultPreset,
    { key: `city`, probability: defaultPreset.length },
    { key: `office`, probability: defaultPreset.length },
  ],
  "new-game-outfit-aoba-nochekaiser": [
    ...defaultPreset,
    { key: `city`, probability: defaultPreset.length },
    { key: `office`, probability: defaultPreset.length },
  ],
  "new-game-outfit-hifumi-eternal2kpp": [
    ...defaultPreset,
    { key: `city`, probability: defaultPreset.length },
    { key: `office`, probability: defaultPreset.length },
  ],
  "new-game-outfit-hifumi-nochekaiser": [
    ...defaultPreset,
    { key: `city`, probability: defaultPreset.length },
    { key: `office`, probability: defaultPreset.length },
  ],
  "prisma-illya-beast-chloe-am7coffeelove": defaultPreset,
  "prisma-illya-beast-illya-am7coffeelove": defaultPreset,
  "prisma-illya-beast-miyu-am7coffeelove": defaultPreset,
  "prisma-illya-magical-girl-illya-flujoru": [
    ...defaultPreset,
    { key: `night-moon`, probability: defaultPreset.length / 2 },
    { key: `night-rooftop`, probability: defaultPreset.length / 2 },
    { key: `grass-blue-sky`, probability: defaultPreset.length / 2 },
    { key: `garden`, probability: defaultPreset.length / 2 },
  ],
  "pso2-bikini-gene-overnerd": [
    ...defaultPreset,
    { key: `ocean`, probability: defaultPreset.length / 3 },
    { key: `beach-standing`, probability: defaultPreset.length / 3 },
    { key: `beach-near-clean-floor`, probability: defaultPreset.length / 3 },
  ],
  "rokudenashi-bikini-rumia-little-jelly": [
    ...defaultPreset,
    { key: `ocean`, probability: defaultPreset.length },
    { key: `beach-standing`, probability: defaultPreset.length },
    { key: `beach-near-clean-floor`, probability: defaultPreset.length },
  ],
  "rokudenashi-school-uniform-summer-little-jelly": [
    ...defaultPreset,
    { key: `garden`, probability: defaultPreset.length },
  ],
  "rokudenashi-school-uniform-winter-little-jelly": [
    ...defaultPreset,
    { key: `garden`, probability: defaultPreset.length },
  ],
  "sasuoni-first-high-school-uniform-nochekaiser": [
    ...defaultPreset,
    { key: `garden`, probability: defaultPreset.length / 2 },
    { key: `city`, probability: defaultPreset.length / 2 },
  ],
  "slow-loop-school-uniform-hiyori-ibukimakisiko": [
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
  "slow-loop-school-uniform-koharu-ibukimakisiko": [
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
  "slow-loop-school-uniform-koi-ibukimakisiko": [
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
  "spy-family-red-sweater-eternal2kpp": [
    ...defaultPreset,
    {
      key: `bedroom-near-clean-floor`,
      probability: defaultPreset.length,
    },
    {
      key: `bedroom-standing`,
      probability: defaultPreset.length,
    },
  ],
  "spy-family-thorn-princess-eternal2kpp": [
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
  "tenshi-sama-blazer-jibunsagasinotabi": [
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
  "to-love-ru-school-uniform-nana-lancelot": [
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
