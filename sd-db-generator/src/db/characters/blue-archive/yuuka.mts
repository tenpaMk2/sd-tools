import type { CharacterDefine } from "../characters.mjs";

type Variation = `gym-ibukimakisiko` | `ibukimakisiko`;

const lora = {
  "gym-ibukimakisiko": {
    loraName: `yuuka_blue archive_PONY_last`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "ibukimakisiko": {
    loraName: `yuuka_blue archive_PONY_last`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "gym-ibukimakisiko": [`yuuka \\(blue archive\\)`],
  "ibukimakisiko": [`yuuka \\(blue archive\\)`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterNameEntries = {
  "gym-ibukimakisiko": [
    `yuuka \\(blue archive\\)`,
    `yuuka \\(track\\) \\(blue archive\\)`,
  ],
  "ibukimakisiko": [`yuuka \\(blue archive\\)`],
} as const satisfies Record<Variation, CharacterDefine[`characterNameEntries`]>;

const characterFeatureEntries = {
  hair: {
    "gym-ibukimakisiko": [`ponytail`],
    "ibukimakisiko": [`two side up`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine[`characterFeatureEntries`]>
>;

export const blueArchiveYuuka = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`blue archive`],
    characterNameEntries: characterNameEntries[variation],
    characterFeatureEntries: [
      `halo`,
      `purple eyes`,
      `purple hair`,
      `long hair`,
      ...characterFeatureEntries.hair[variation],
      `thick thighs`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
