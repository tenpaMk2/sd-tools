import { CharacterDefine } from "../characters.mjs";

type Variation = `eternal2kpp`;

export const goblinSlayerPriestess = (variation: Variation) =>
  ({
    lora: {
      tag: `Onna_Shinkan`,
      probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
    },
    loraCharacterTriggerWordEntries: [`Onna Shinkan`],
    seriesNameEntries: [`goblin slayer!`],
    characterNameEntries: [`priestess \\(goblin_slayer!\\)`],
    characterFeatureEntries: [
      `blue eyes`,
      `eyelashes`,
      `blonde hair`,
      `long hair`,
      `crossed bangs`,
      `sidelocks`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
