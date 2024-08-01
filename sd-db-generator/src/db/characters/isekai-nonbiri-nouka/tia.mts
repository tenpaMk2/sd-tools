import type { CharacterDefine } from "../characters.mjs";

type Variation = `little-jelly`;

const lora = {
  "little-jelly": {
    loraName: `IsekaiNonbiriNouka_TiaXL`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "little-jelly": [`TiaINN`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const isekaiNonbiriNoukaTia = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`isekai nonbiri nouka`],
    characterNameEntries: [`tia \\(isekai nonbiri nouka\\)`],
    characterFeatureEntries: [
      `yellow eyes`,
      `blonde hair`,
      `medium hair`,
      `swept bangs`,
      `hair ornament`,
      `hair ribbon`,
      `blue hair ribbon -> blue ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
