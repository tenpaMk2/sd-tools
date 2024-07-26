import type { CharacterDefine } from "../characters.mjs";

type Variation = `enter` | `idol-ribbon-enter`;

const lora = {
  "enter": {
    loraName: `midori_hemo_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
  "idol-ribbon-enter": {
    loraName: `midori_hemo_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "enter": [`midori_hemo`],
  "idol-ribbon-enter": [`midori_hemo`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  "hair-ornament": {
    "enter": [`hairband`, `red hairband`, `bow hairband`],
    "idol-ribbon-enter": [`hairband`, `green hairband`, `bow hairband`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine[`characterFeatureEntries`]>
>;

export const ochifuruHemo = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`ochikobore fruit tart`],
    characterNameEntries: [`midori hemo`],
    characterFeatureEntries: [
      `purple eyes`,
      `black hair`,
      `very long hair`,
      `twintails`,
      `hair between eyes`,
      ...characterFeatureEntries["hair-ornament"][variation],
      `heart-shaped pupils`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
