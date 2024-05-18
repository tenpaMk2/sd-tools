import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const toLoveRuHarunaEft = () =>
  ({
    lora: {
      tag: `nana-loveru`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`nana astar deviluke`],
    seriesNameEntries: [`to love-ru`, `to love-ru darkness`],
    characterNameEntries: [`nana asta deviluke`],
    characterFeatureEntries: [
      `purple eyes`,
      `tsurime`,
      `pink hair`,
      `medium hair`,
      `twintails`,
    ],
    breastSize: `flat chest`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
