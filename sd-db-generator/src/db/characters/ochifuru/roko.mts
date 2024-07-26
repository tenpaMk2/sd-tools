import type { CharacterDefine } from "../characters.mjs";

type Variation = `enter` | `idol-ribbon-enter`;

const lora = {
  "enter": {
    loraName: `sekino_roko_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
  "idol-ribbon-enter": {
    loraName: `sekino_roko_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "enter": [`sekino_roko`],
  "idol-ribbon-enter": [`sekino_roko`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  "hair-ornament": {
    "enter": [`hair ornament`, `heart hair ornament`],
    "idol-ribbon-enter": [
      `hair ornament`,
      `heart hair ornament`,
      `hair ribbon`,
      `blue hair ribbon -> blue ribbon`,
    ],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine[`characterFeatureEntries`]>
>;

export const ochifuruRoko = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`ochikobore fruit tart`],
    characterNameEntries: [`sekino roko`],
    characterFeatureEntries: [
      `purple eyes`,
      `purple hair`,
      `long hair`,
      `hair bun`,
      `double bun`,
      `parted bangs`,
      `sidelocks`,
      `hair ornament`,
      `heart hair ornament`,
      ...characterFeatureEntries["hair-ornament"][variation],
    ],
    breastSize: `flat chest`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
