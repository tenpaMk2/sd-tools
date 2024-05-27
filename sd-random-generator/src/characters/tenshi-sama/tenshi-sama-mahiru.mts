import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `jibunsagasinotabi`;

export const tenshiSamaMahiru = (variation: Variation) =>
  ({
    lora: {
      tag: `MahiruShiinaXLpony001`,
      probabilityAndWeights: [
        { probability: 1, weight: 1.0 },
        // { probability: 1, weight: 0.8 },
        // { probability: 1, weight: 0.6 },
      ],
    },
    loraCharacterTriggerWordEntries: [`MahiruShiina`],
    seriesNameEntries: [
      `otonari no tenshi-sama ni itsu no mani ka dame ningen ni sarete ita ken`,
    ],
    characterNameEntries: [`shiina mahiru \\(otonari no tenshi-sama\\)`],
    characterFeatureEntries: [
      `yellow eyes`,
      `blonde hair`,
      `long hair`,
      `straight hair`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
