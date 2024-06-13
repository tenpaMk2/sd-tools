import { CharacterDefine } from "../characters.mjs";

export const isTatenashiNochekaiser = () =>
  ({
    lora: {
      tag: `tatenashi-sarashiki-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [
        { probability: 1, weight: 0.8 },
        { probability: 1, weight: 0.6 },
      ],
    },
    loraCharacterTriggerWordEntries: [`tatenashi sarashiki`],
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
