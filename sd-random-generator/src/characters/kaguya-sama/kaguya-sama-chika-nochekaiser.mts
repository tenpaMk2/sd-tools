import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const kaguyaSamaChikaNochekaiser = () =>
  ({
    lora: {
      tag: `chika-fujiwara-s3-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [`chika fujiwara`],
    seriesNameEntries: [
      `kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~`,
    ],
    characterNameEntries: [`fujiwara chika`],
    characterFeatureEntries: [
      `blue eyes`,
      `tareme`,
      `pink hair`,
      `long hair`,
      `straight hair`,
      `blunt bangs`,
      `hair bow`,
      `black hair bow`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
