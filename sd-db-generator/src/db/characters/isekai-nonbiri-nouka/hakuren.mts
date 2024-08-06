import type { CharacterDefine } from "../characters.mjs";

type Variation = `little-jelly`;

const lora = {
  "little-jelly": {
    loraName: `IsekaiNonbiriNouka_HakurenXL`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "little-jelly": [`HakurenINN`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const isekaiNonbiriNoukaHakuren = (
  variation: Variation,
): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`isekai nonbiri nouka`],
    characterNameEntries: [`hakuren \\(isekai nonbiri nouka\\)`],
    characterFeatureEntries: [
      `blue eyes`,
      `white hair`,
      `medium hair`,
      `braid`,
      `frentch braid`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
