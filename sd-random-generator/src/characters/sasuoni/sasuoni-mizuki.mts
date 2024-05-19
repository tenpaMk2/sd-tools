import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `nochekaiser`;

export const sasuoniMizuki = (variation: Variation) =>
  ({
    lora: {
      tag: `mizuki-shibata-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [`mizuki shibata`],
    seriesNameEntries: [`mahouka koukou no rettousei`],
    characterNameEntries: [`shibata mizuki`],
    characterFeatureEntries: [
      `yellow eyes`,
      `glasses`,
      `semi-rimless eyewear`,
      `under-rim eyewear`,
      `black hair`,
      `medium hair`,
      `hair ornament`,
      `tassel hair ornament`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
