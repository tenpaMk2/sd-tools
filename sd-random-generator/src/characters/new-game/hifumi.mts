import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `nochekaiser`;

export const newGameHifumi = (variation: Variation) =>
  ({
    lora: {
      tag: `hifumi-takimoto-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`hifumi takemoto`],
    seriesNameEntries: [`new game!`],
    characterNameEntries: [`takimoto hifumi`],
    characterFeatureEntries: [
      `blue eyes`,
      `purple hair`,
      `long hair`,
      `ponytail`,
      `blunt bangs`,
      `sidelocks`,
      `hair bow`,
      `red hair bow`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.serious,
  }) as const satisfies CharacterDefine;
