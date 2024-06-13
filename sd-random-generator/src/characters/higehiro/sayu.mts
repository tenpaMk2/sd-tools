import { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

export const higehiroSayu = (variation: Variation) =>
  ({
    lora: {
      tag: `sayu-ogiwara-s1-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [`sayu ogiwara`],
    seriesNameEntries: [`hige wo soru\\. soshite joshikousei wo hirou\\.`],
    characterNameEntries: [`ogiwara sayu`],
    characterFeatureEntries: [
      `yellow eyes`,
      `brown hair`,
      `long hair`,
      `straight hair`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
