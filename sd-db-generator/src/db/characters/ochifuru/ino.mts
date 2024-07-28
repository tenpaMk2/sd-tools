import type { CharacterDefine } from "../characters.mjs";

type Variation = `enter` | `idol-ribbon-enter`;

const lora = {
  "enter": {
    loraName: `sakura_ino_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
  "idol-ribbon-enter": {
    loraName: `sakura_ino_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "enter": [`sakura_ino`],
  "idol-ribbon-enter": [`sakura_ino`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  "hair-ornament": {
    "enter": [`hair ornament`, `hair scrunchie`],
    "idol-ribbon-enter": [`hair ornament`, `hair ribbon`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine[`characterFeatureEntries`]>
>;

export const ochifuruIno = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`ochikobore fruit tart`],
    characterNameEntries: [`sakura ino`],
    characterFeatureEntries: [
      `blue eyes`,
      `pink hair`,
      `long hair`,
      `twintails`,
      `low twintails`,
      `hair between eyes`,
      `sidelocks`,
      ...characterFeatureEntries["hair-ornament"][variation],
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
