import { OutfitKey } from "../outfits/resolver.mjs";
import { PoseKey } from "../poses/resolver.mjs";
import { OutfitSetting } from "../setting-define.mjs";
import { backgroundsPreset } from "./background.mjs";

const adjustProbabilityOfPose = (
  backgrounds: OutfitSetting["backgrounds"],
  pose:
    | PoseKey["from-above"]
    | PoseKey["from-below"]
    | PoseKey["from-horizontal"],
  probabilityBaseMultiplier: number,
) =>
  backgrounds.map(
    (background) =>
      ({
        ...background,
        poses: background.poses.map((p) => {
          if (p.key !== pose) return p;

          const totalProbability = background.poses.reduce(
            (acc, p) => acc + (p.probability ?? 1),
            0,
          );

          return {
            ...p,
            probability: totalProbability * probabilityBaseMultiplier,
          };
        }),
      }) as typeof background,
  );

const testOutfit = {
  key: `test-outfit`,
  backgrounds: [
    {
      type: `from-horizontal`,
      key: `ocean`,
      poses: [{ key: `arms-up` }, { key: `portrait` }],
    },
    {
      type: `from-below`,
      key: `blue-sky`,
      poses: [{ key: `upper-body` }],
    },
    {
      type: `from-above`,
      key: `bed-sheet`,
      poses: [{ key: `on-bed-lying` }, { key: `on-bed-lying-on-stomach` }],
    },
  ],
} as const satisfies OutfitSetting;

const babydoll = {
  key: `babydoll`,
  backgrounds: [
    ...backgroundsPreset.bedroom,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
  ],
} as const satisfies OutfitSetting;

const bikini = {
  key: `bikini`,
  backgrounds: [
    ...backgroundsPreset.oceanBeach,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
  ],
} as const satisfies OutfitSetting;

const bridalLingerie = {
  key: `bridal-lingerie`,
  backgrounds: [
    ...backgroundsPreset.wedding,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
  ],
} as const satisfies OutfitSetting;

const camisoleDenimShorts = {
  key: `camisole-denim-shorts`,
  backgrounds: [
    ...backgroundsPreset.city,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
    ...backgroundsPreset["karaoke-box"],
  ],
} as const satisfies OutfitSetting;

const casualMiniskirt = {
  key: `casual-miniskirt`,
  backgrounds: [
    ...backgroundsPreset.city,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
    ...backgroundsPreset["karaoke-box"],
  ],
} as const satisfies OutfitSetting;

const cheerleader = {
  key: `cheerleader`,
  backgrounds: [
    ...backgroundsPreset.blueSkyConfettiCheering.map((x) => ({
      ...x,
      probability: 3,
    })),
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
  ],
} as const satisfies OutfitSetting;

const chinaDress = {
  key: `china-dress`,
  backgrounds: [
    ...backgroundsPreset.blueSky,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
  ],
} as const satisfies OutfitSetting;

const cowPrintBikini = {
  key: `cow-print-bikini`,
  backgrounds: [
    ...backgroundsPreset.blueSky,
    ...backgroundsPreset.grass,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
  ],
} as const satisfies OutfitSetting;

const gymUniform = {
  key: `gym-uniform`,
  backgrounds: [
    ...backgroundsPreset.blueSky,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
    // TODO: `sweat, wet`
  ],
} as const satisfies OutfitSetting;

const maidBikini = {
  key: `maid-bikini`,
  backgrounds: [
    ...backgroundsPreset.cafe,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
  ],
} as const satisfies OutfitSetting;

const microBikini = {
  key: `micro-bikini`,
  backgrounds: [
    ...backgroundsPreset.oceanBeach,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
    ...backgroundsPreset["karaoke-box"],
  ],
} as const satisfies OutfitSetting;

const playboyBunny = {
  key: `playboy-bunny`,
  backgrounds: [
    ...backgroundsPreset.casino,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
    ...backgroundsPreset["karaoke-box"],
  ],
} as const satisfies OutfitSetting;

const revealingMiko = {
  key: `revealing-miko`,
  backgrounds: [
    ...backgroundsPreset.blueSky,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
  ],
} as const satisfies OutfitSetting;

const santaBikini = {
  key: `santa-bikini`,
  backgrounds: [
    ...backgroundsPreset.christmas,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
  ],
} as const satisfies OutfitSetting;

const sukumizuThighhighs = {
  key: `sukumizu-thighhighs`,
  backgrounds: [
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
  ],
} as const satisfies OutfitSetting;

const danmachiNochekaiserHestia = {
  key: `danmachi-nochekaiser-hestia`,
  backgrounds: [
    ...backgroundsPreset.blueSky,
    ...backgroundsPreset.grass,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
    ...backgroundsPreset["karaoke-box"],
  ],
} as const satisfies OutfitSetting;

const kagejitsuNochekaiserShadowGardenAlpha = {
  key: `kagejitsu-nochekaiser-shadow-garden-alpha`,
  backgrounds: [
    ...backgroundsPreset.nightRooftop,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
    ...backgroundsPreset["karaoke-box"],
  ],
} as const satisfies OutfitSetting;

const kagejitsuNochekaiserShadowGardenBeta = {
  ...kagejitsuNochekaiserShadowGardenAlpha,
  key: `kagejitsu-nochekaiser-shadow-garden-beta`,
} as const satisfies OutfitSetting;

const kaguyaSamaShuuchiinAcademySchoolUniformAiNochekaiser = {
  key: `kaguya-sama-shuuchiin-academy-school-uniform-ai-nochekaiser`,
  backgrounds: [
    ...backgroundsPreset.classroom,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
    ...backgroundsPreset["karaoke-box"],
  ],
} as const satisfies OutfitSetting;

const kaguyaSamaShuuchiinAcademySchoolUniformAi = {
  ...kaguyaSamaShuuchiinAcademySchoolUniformAiNochekaiser,
  key: `kaguya-sama-shuuchiin-academy-school-uniform-ai`,
} as const satisfies OutfitSetting;

const kaguyaSamaShuuchiinAcademySchoolUniformChikaNochekaiser = {
  ...kaguyaSamaShuuchiinAcademySchoolUniformAiNochekaiser,
  key: `kaguya-sama-shuuchiin-academy-school-uniform-chika-nochekaiser`,
} as const satisfies OutfitSetting;

const kaguyaSamaShuuchiinAcademySchoolUniformChika = {
  ...kaguyaSamaShuuchiinAcademySchoolUniformAiNochekaiser,
  key: `kaguya-sama-shuuchiin-academy-school-uniform-chika`,
} as const satisfies OutfitSetting;

const kaguyaSamaShuuchiinAcademySchoolUniformKaguyaNochekaiser = {
  ...kaguyaSamaShuuchiinAcademySchoolUniformAiNochekaiser,
  key: `kaguya-sama-shuuchiin-academy-school-uniform-kaguya-nochekaiser`,
} as const satisfies OutfitSetting;

const kaguyaSamaShuuchiinAcademySchoolUniformKaguya = {
  ...kaguyaSamaShuuchiinAcademySchoolUniformAiNochekaiser,
  key: `kaguya-sama-shuuchiin-academy-school-uniform-kaguya`,
} as const satisfies OutfitSetting;

const kaguyaSamaShuuchiinAcademySchoolUniformMikoNochekaiser = {
  ...kaguyaSamaShuuchiinAcademySchoolUniformAiNochekaiser,
  key: `kaguya-sama-shuuchiin-academy-school-uniform-miko-nochekaiser`,
} as const satisfies OutfitSetting;

const kaguyaSamaShuuchiinAcademySchoolUniformMiko = {
  ...kaguyaSamaShuuchiinAcademySchoolUniformAiNochekaiser,
  key: `kaguya-sama-shuuchiin-academy-school-uniform-miko`,
} as const satisfies OutfitSetting;

const mahoakoNotekagaLocomusica = {
  key: `mahoako-notekaga-locomusica`,
  backgrounds: [
    ...backgroundsPreset.city,
    ...backgroundsPreset.blueSky,
    ...backgroundsPreset.grass,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
    ...backgroundsPreset["karaoke-box"],
  ],
} as const satisfies OutfitSetting;

const prismaIllyaAm7CoffeeloveChloeBeast = {
  key: `prisma-illya-chloe-beast`,
  backgrounds: [
    ...adjustProbabilityOfPose(backgroundsPreset.blueSky, `paw-pose`, 0.5),
    ...adjustProbabilityOfPose(
      backgroundsPreset.steamingBedSheetSpokenHeart,
      `paw-pose`,
      0.5,
    ),
    ...adjustProbabilityOfPose(
      backgroundsPreset.bedSheetWindow,
      `paw-pose`,
      0.5,
    ),
    ...adjustProbabilityOfPose(
      backgroundsPreset.colorfulHeartBackgrounds,
      `paw-pose`,
      0.5,
    ),
  ],
} as const satisfies OutfitSetting;

const prismaIllyaAm7CoffeeloveIllyaBeast = {
  key: `prisma-illya-illya-beast`,
  backgrounds: prismaIllyaAm7CoffeeloveChloeBeast.backgrounds,
} as const satisfies OutfitSetting;

const prismaIllyaAm7CoffeeloveMiyuBeast = {
  key: `prisma-illya-miyu-beast`,
  backgrounds: prismaIllyaAm7CoffeeloveChloeBeast.backgrounds,
} as const satisfies OutfitSetting;

const pso2BikiniGene = {
  key: `pso2-bikini-gene`,
  backgrounds: [
    ...backgroundsPreset.oceanBeach,
    ...backgroundsPreset.steamingBedSheetSpokenHeart,
    ...backgroundsPreset.bedSheetWindow,
    ...backgroundsPreset.colorfulHeartBackgrounds,
  ],
} as const satisfies OutfitSetting;

const sasuoniFirstHighSchoolUniform = (variation: `pantyhose` | `thighhighs`) =>
  ({
    key:
      variation === `pantyhose`
        ? `sasuoni-eft-first-high-school-uniform-pantyhose`
        : `sasuoni-eft-first-high-school-uniform-thighhighs`,
    backgrounds: [
      ...backgroundsPreset.blueSky,
      ...backgroundsPreset.steamingBedSheetSpokenHeart,
      ...backgroundsPreset.bedSheetWindow,
      ...backgroundsPreset.colorfulHeartBackgrounds,
    ],
  }) as const satisfies OutfitSetting;

export const outfitsPreset = {
  "test-outfit": [testOutfit],
  babydoll: [babydoll],
  bikini: [bikini],
  "bridal-lingerie": [bridalLingerie],
  "camisole-denim-shorts": [camisoleDenimShorts],
  "casual-miniskirt": [casualMiniskirt],
  cheerleader: [cheerleader],
  "china-dress": [chinaDress],
  "cow-print-bikini": [cowPrintBikini],
  "gym-uniform": [gymUniform],
  "maid-bikini": [maidBikini],
  "micro-bikini": [microBikini],
  "playboy-bunny": [playboyBunny],
  "revealing-miko": [revealingMiko],
  "santa-bikini": [santaBikini],
  "sukumizu-thighhighs": [sukumizuThighhighs],
  "danmachi-nochekaiser-hestia": [danmachiNochekaiserHestia],
  "kagejitsu-nochekaiser-shadow-garden-alpha": [
    kagejitsuNochekaiserShadowGardenAlpha,
  ],
  "kagejitsu-nochekaiser-shadow-garden-beta": [
    kagejitsuNochekaiserShadowGardenBeta,
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-ai-nochekaiser": [
    kaguyaSamaShuuchiinAcademySchoolUniformAiNochekaiser,
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-ai": [
    kaguyaSamaShuuchiinAcademySchoolUniformAi,
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-chika-nochekaiser": [
    kaguyaSamaShuuchiinAcademySchoolUniformChikaNochekaiser,
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-chika": [
    kaguyaSamaShuuchiinAcademySchoolUniformChika,
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-kaguya-nochekaiser": [
    kaguyaSamaShuuchiinAcademySchoolUniformKaguyaNochekaiser,
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-kaguya": [
    kaguyaSamaShuuchiinAcademySchoolUniformKaguya,
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-miko-nochekaiser": [
    kaguyaSamaShuuchiinAcademySchoolUniformMikoNochekaiser,
  ],
  "kaguya-sama-shuuchiin-academy-school-uniform-miko": [
    kaguyaSamaShuuchiinAcademySchoolUniformMiko,
  ],
  "mahoako-notekaga-locomusica": [mahoakoNotekagaLocomusica],
  "prisma-illya-chloe-beast": [prismaIllyaAm7CoffeeloveChloeBeast],
  "prisma-illya-illya-beast": [prismaIllyaAm7CoffeeloveIllyaBeast],
  "prisma-illya-miyu-beast": [prismaIllyaAm7CoffeeloveMiyuBeast],
  "pso2-bikini-gene": [pso2BikiniGene],
  "sasuoni-eft-first-high-school-uniform-pantyhose": [
    sasuoniFirstHighSchoolUniform(`pantyhose`),
  ],
  "sasuoni-eft-first-high-school-uniform-thighhighs": [
    sasuoniFirstHighSchoolUniform(`thighhighs`),
  ],
  cosplay: [
    bikini,
    bridalLingerie,
    camisoleDenimShorts,
    casualMiniskirt,
    cheerleader,
    chinaDress,
    cowPrintBikini,
    maidBikini,
    microBikini,
    playboyBunny,
    revealingMiko,
    santaBikini,
    sukumizuThighhighs,
  ],
} as const satisfies {
  [k in OutfitKey | `cosplay`]: OutfitSetting[];
};
