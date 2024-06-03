import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `nochekaiser`;

export const newGameAoba = (variation: Variation) =>
  ({
    lora: {
      tag: `aoba-suzukaze-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [`aoba suzukaze`],
    seriesNameEntries: [`new game!`],
    characterNameEntries: [`suzukaze aoba`],
    characterFeatureEntries: [
      `eyebrows`,
      `purple eyes`,
      `long hair`,
      `purple hair`,
      `hair ornament`,
      `twintails`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
