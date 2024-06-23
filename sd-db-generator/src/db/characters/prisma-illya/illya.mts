import type { CharacterDefine } from "../characters.mjs";

type Variation = `beast-am7coffeelove` | `flujoru`;

const lora = {
  "beast-am7coffeelove": {
    loraName: `illyabeasts_Ponyv2`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "flujoru": {
    loraName: `illya.pony`,
    probabilityAndWeights: [{ probability: 1, weight: 0.6 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "beast-am7coffeelove": [],
  "flujoru": [`illya`],
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
} as const satisfies Record<Variation, CharacterDefine["characterNameEntries"]>;

const characterFeatureEntries = {
  "eyelashes": {
    "beast-am7coffeelove": [`eyelashes`],
    "flujoru": [`eyelashes`, `long eyelashes`],
  },
  "hair-color": {
    "beast-am7coffeelove": [`white hair`],
    "flujoru": [`blonde hair`, `white hair`],
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
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine["characterFeatureEntries"]>
>;

export const prismaIllyaIllya = (variation: Variation) =>
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
      ...characterFeatureEntries.beast[variation],
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
