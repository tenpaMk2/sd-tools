import { CharacterDefine } from "../characters.mjs";

export const isHoukiNochekaiser = () =>
  ({
    lora: {
      tag: `houki-shinonono-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [
        { probability: 1, weight: 0.8 },
        { probability: 1, weight: 0.6 },
      ],
    },
    loraCharacterTriggerWordEntries: [`houki shinonono`],
    seriesNameEntries: [`infinite stratos`],
    characterNameEntries: [`shinonono houki`],
    characterFeatureEntries: [
      `blue eyes`,
      `black hair`,
      `long hair`,
      `ponytail`,
      `hair ribbon`,
      `white hair ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `tsundere`,
  }) as const satisfies CharacterDefine;
