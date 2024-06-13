import { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko`;

export const workingPopura = (variation: Variation) =>
  ({
    lora: {
      tag: `taneshima popura_PONY_last`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`working!!`],
    characterNameEntries: [`taneshima popura`],
    characterFeatureEntries: [
      `brown eyes`,
      `brown hair`,
      `long hair`,
      `ponytail`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
