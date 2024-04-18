import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const toLoveRuNanaEft = () =>
  ({
    lora: {
      tag: `haruna-loveru`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`haruna sairenji`],
    seriesNameEntries: [`to love-ru`, `to love-ru darkness`],
    characterNameEntries: [`sairenji haruna`],
    characterFeatureEntries: [
      `purple eyes`,
      `blue hair`,
      `purple hair`,
      `short hair`,
      `bob cut`,
      `forehead`,
      `hair ornament`,
      `hairclip`,
    ],
    breastSize: `medium breasts`,
    fang: true,
    emotionEntries: emotionPreset.mesugaki,
  }) as const satisfies CharacterDefine;
