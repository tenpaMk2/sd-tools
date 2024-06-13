import { CharacterDefine } from "../characters.mjs";

type Variation = `little-jelly`;

export const rokudenashiRumia = (variation: Variation) =>
  ({
    lora: {
      tag: `Rokuaka_RumiaTingelXL`,
      probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
    },
    loraCharacterTriggerWordEntries: [`RumiaTingel`],
    seriesNameEntries: [`rokudenashi majutsu koushi to akashic record`],
    characterNameEntries: [`rumia tingel`],
    characterFeatureEntries: [
      `blue eyes`,
      `blonde hair`,
      `medium hair`,
      `hair ornament`,
      `x hair ornament`,
      `hair ribbon`,
      `green hair ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
