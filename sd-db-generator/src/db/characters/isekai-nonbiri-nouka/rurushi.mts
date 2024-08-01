import type { CharacterDefine } from "../characters.mjs";

type Variation = `little-jelly`;

const lora = {
  "little-jelly": {
    loraName: `IsekaiNonbiriNouka_RuuRurushiXL`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "little-jelly": [`RurushiINN`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  hair: {
    "little-jelly": [
      `two side up`,
      `hair ribbon`,
      `black hair ribbon -> black ribbon`,
      `hairband`,
      `black hairband`,
    ],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine[`characterFeatureEntries`]>
>;

export const isekaiNonbiriNoukaRurushi = (
  variation: Variation,
): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`isekai nonbiri nouka`],
    characterNameEntries: [`rurushi ru`],
    characterFeatureEntries: [
      `blue eyes`,
      `grey hair`,
      `long hair`,
      `blunt bangs`,
      `arched bangs`,
      `sidelocks`,
      ...characterFeatureEntries.hair[variation],
      `pointy ears`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
