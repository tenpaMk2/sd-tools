import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const isLauraNochekaiser = () =>
  ({
    lora: {
      tag: `laura-bodewig-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [
        { probability: 1, weight: 0.8 },
        { probability: 1, weight: 0.6 },
      ],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`infinite stratos`],
    characterNameEntries: [`laura bodewig`],
    characterFeatureEntries: [
      `red eyes`,
      `eyepatch`,
      `grey hair`,
      `long hair`,
      `straight hair`,
      `swept bangs`,
      `sidelocks`,
      `cowlick`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.serious,
  }) as const satisfies CharacterDefine;