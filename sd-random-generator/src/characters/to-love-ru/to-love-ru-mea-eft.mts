import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const toLoveRuMeaEft = () =>
  ({
    lora: {
      tag: `mea-loveru`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`mea kurosaki`],
    seriesNameEntries: [`to love-ru`, `to love-ru darkness`],
    characterNameEntries: [`kurosaki mea`],
    characterFeatureEntries: [
      `blue eyes`,
      `red hair`,
      `long hair`,
      `braid`,
      `single braid`,
      `ahoge`,
      `hair ornament`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
