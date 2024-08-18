import type { CharacterDefine } from "../characters.mjs";

type Variation =
  | `beast-am7coffeelove`
  | `flujoru`
  | `h-madoka`
  | `two-side-up-h-madoka`;

const lora = {
  "beast-am7coffeelove": {
    loraName: `illyabeasts_Ponyv2`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "flujoru": {
    loraName: `illya.pony`,
    probabilityAndWeights: [{ probability: 1, weight: 0.6 }],
  },
  "h-madoka": {
    loraName: `illyasviel_von_einzbern_ponyxl_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
  },
  "two-side-up-h-madoka": {
    loraName: `illyasviel_von_einzbern_ponyxl_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "beast-am7coffeelove": [],
  "flujoru": [`illya`],
  "h-madoka": [`aaillya`],
  "two-side-up-h-madoka": [`aaillya`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterNameEntries = {
  "beast-am7coffeelove": [
    `illyasviel von einzbern`,
    `illyasviel von einzbern \\(beast style\\)`,
  ],
  "flujoru": [`illyasviel von einzbern`],
  "h-madoka": [`illyasviel von einzbern`],
  "two-side-up-h-madoka": [`illyasviel von einzbern`],
} as const satisfies Record<Variation, CharacterDefine["characterNameEntries"]>;

const characterFeatureEntries = {
  "eyelashes": {
    "beast-am7coffeelove": [`eyelashes`],
    "flujoru": [`eyelashes`, `long eyelashes`],
    "h-madoka": [`eyelashes`],
    "two-side-up-h-madoka": [`eyelashes`],
  },
  "hair-color": {
    "beast-am7coffeelove": [`white hair`],
    "flujoru": [`blonde hair`, `white hair`],
    "h-madoka": [`blonde hair`],
    "two-side-up-h-madoka": [`blonde hair`],
  },
  "tie": {
    "beast-am7coffeelove": [],
    "flujoru": [],
    "h-madoka": [],
    "two-side-up-h-madoka": [`two side up`, `hair ornament`],
  },
  "beast": {
    "beast-am7coffeelove": [
      `hair ribbon`,
      `red hair bow -> red bow`,
      `jingle bell hair ornament -> jingle bell`,
      `fake animal ears`,
      `animal ears`,
      `cat ears`,
      `animal ear fluff`,
      `cat tail`,
      `black long tail -> black tail`,
    ],
    "flujoru": [],
    "h-madoka": [],
    "two-side-up-h-madoka": [],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine["characterFeatureEntries"]>
>;

export const prismaIllyaIllya = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`fate/kaleid liner prisma illya`],
    characterNameEntries: characterNameEntries[variation],
    characterFeatureEntries: [
      `red eyes`,
      ...characterFeatureEntries.eyelashes[variation],
      ...characterFeatureEntries["hair-color"][variation],
      `long hair`,
      `curtained bangs`,
      `sidelocks`,
      ...characterFeatureEntries.tie[variation],
      ...characterFeatureEntries.beast[variation],
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
