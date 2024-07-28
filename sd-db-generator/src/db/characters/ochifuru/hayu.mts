import type { CharacterDefine } from "../characters.mjs";

type Variation = `enter` | `idol-ribbon-enter`;

const lora = {
  "enter": {
    loraName: `nukui_hayu_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
  "idol-ribbon-enter": {
    loraName: `nukui_hayu_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "enter": [`nukui_hayu`],
  "idol-ribbon-enter": [`nukui_hayu`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  "hair-ornament": {
    "enter": [
      `hair ornament`,
      `hairpin`,
      `hair ribbon`,
      `black hair ribbon -> black ribbon`,
    ],
    "idol-ribbon-enter": [
      `hair ornament`,
      `hairpin`,
      `hair ribbon`,
      `red hair ribbon -> red ribbon`,
    ],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine[`characterFeatureEntries`]>
>;

export const ochifuruHayu = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`ochikobore fruit tart`],
    characterNameEntries: [`nukui hayu`],
    characterFeatureEntries: [
      `blue eyes`,
      `blonde hair`,
      `long hair`,
      `ponytail`,
      `side ponytail`,
      ...characterFeatureEntries["hair-ornament"][variation],
    ],
    breastSize: `small breasts`,
    fang: true,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
