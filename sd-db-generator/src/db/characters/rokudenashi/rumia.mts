import type { CharacterDefine } from "../characters.mjs";

type Variation = `little-jelly`;

const lora = {
  "little-jelly": {
    loraName: `Rokuaka_RumiaTingelXL`,
    probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "little-jelly": [`RumiaTingel`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const rokudenashiRumia = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`rokudenashi majutsu koushi to akashic record`],
    characterNameEntries: [`rumia tingel`],
    characterFeatureEntries: [
      `blue eyes`,
      `blonde hair`,
      `medium hair`,
      `hair ornament`,
      `x hair ornament`,
      `hair ribbon`,
      `green hair ribbon -> green ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
