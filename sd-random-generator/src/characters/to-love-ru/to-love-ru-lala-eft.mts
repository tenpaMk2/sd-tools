import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const toLoveRuLalaEft = () =>
  ({
    lora: {
      tag: `lala-loveru`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`to love-ru`, `to love-ru darkness`],
    characterNameEntries: [`lala satalin deviluke`],
    characterFeatureEntries: [
      `green eyes`,
      `eyelashes`,
      `pink hair`,
      `long hair`,
      `straight hair`,
      `ahoge`,
      `hair ornament`,
      `thick thighs`,
      `tail`,
      `demon tail`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
