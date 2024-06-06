import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `zedotasco`;

export const tenshiTsukiNoel = (variation: Variation) =>
  ({
    lora: {
      tag: `Izumi Noel`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`one room hiatari futsuu tenshi`],
    characterNameEntries: [`izumi noel`],
    characterFeatureEntries: [
      `green eyes`,
      `blonde hair`,
      `long hair`,
      `straight hair`,
      `sidelocks`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;