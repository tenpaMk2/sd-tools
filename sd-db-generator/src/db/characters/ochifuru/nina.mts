import type { CharacterDefine } from "../characters.mjs";

type Variation = `enter` | `idol-ribbon-enter`;

const lora = {
  "enter": {
    loraName: `maehara_nina_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
  "idol-ribbon-enter": {
    loraName: `maehara_nina_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "enter": [`maehara_nina`],
  "idol-ribbon-enter": [`maehara_nina`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  "hair-ornament": {
    "enter": [`hair ribbon`, `black hair ribbon -> black ribbon`],
    "idol-ribbon-enter": [`hair ribbon`, `yellow hair ribbon -> yellow ribbon`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine[`characterFeatureEntries`]>
>;

export const ochifuruNina = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`ochikobore fruit tart`],
    characterNameEntries: [`maehara nina`],
    characterFeatureEntries: [
      `purple eyes`,
      `brown hair`,
      `short hair`,
      `bob cut`,
      ...characterFeatureEntries["hair-ornament"][variation],
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
