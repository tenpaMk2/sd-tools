import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `lancelot`;

export const toLoveRuNana = (variation: Variation) =>
  ({
    lora: {
      tag: `nanadevilXLPonyV1`,
      probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
    },
    loraCharacterTriggerWordEntries: [`nanadevil`],
    seriesNameEntries: [`to love-ru`, `to love-ru darkness`],
    characterNameEntries: [`nana asta deviluke`],
    characterFeatureEntries: [
      `purple eyes`,
      `pink hair`,
      `long hair`,
      `twintails`,
      `hair between eyes`,
    ],
    breastSize: `small breasts`,
    fang: true,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
