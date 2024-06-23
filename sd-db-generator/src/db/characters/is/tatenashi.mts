import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    loraName: `tatenashi-sarashiki-s2-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [
      { probability: 1, weight: 0.8 },
      { probability: 1, weight: 0.6 },
    ],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`tatenashi sarashiki`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const isTatenashi = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`infinite stratos`],
    characterNameEntries: [`sarashiki tatenashi`],
    characterFeatureEntries: [
      `red eyes`,
      `blue hair`,
      `light blue hair`,
      `short hair`,
      `messy hair`,
      `cowlick`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
