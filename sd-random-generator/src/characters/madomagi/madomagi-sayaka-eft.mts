import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const madomagiSayakaEft = () =>
  ({
    lora: {
      tag: `sayaka-madomagi-01`,
      probabilityAndWeights: [
        { probability: 1, weight: 0.8 },
        { probability: 1, weight: 0.6 },
      ],
    },
    loraCharacterTriggerWordEntries: [`sayaka miki`],
    seriesNameEntries: [`mahou shoujo madoka magica`],
    characterNameEntries: [`miki sayaka`],
    characterFeatureEntries: [
      `blue eyes`,
      `tareme`,
      `blue hair`,
      `short hair`,
      `bob cut`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
