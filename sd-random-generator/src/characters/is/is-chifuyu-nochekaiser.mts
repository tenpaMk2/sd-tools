import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const isChifuyuNochekaiser = () =>
  ({
    lora: {
      tag: `chifuyu-orimura-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [
        { probability: 1, weight: 0.8 },
        { probability: 1, weight: 0.6 },
      ],
    },
    loraCharacterTriggerWordEntries: [`chifuyu orimura`],
    seriesNameEntries: [`infinite stratos`],
    characterNameEntries: [`orimura chifuyu`],
    characterFeatureEntries: [
      `brown eyes`,
      `tareme`,
      `black hair`,
      `long hair`,
      `ponytail`,
      `low ponytail`,
      `hair between eyes`,
      `sidelocks`,
      `mature female`,
      `toned`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.serious,
  }) as const satisfies CharacterDefine;
