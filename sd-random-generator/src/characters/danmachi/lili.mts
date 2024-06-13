import { CharacterDefine } from "../characters.mjs";

type Variation = `eternal2kpp`;

export const danmachiLili = (variation: Variation) =>
  ({
    lora: {
      tag: `Liliruca_Arde`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [
      `dungeon ni deai wo motomeru no wa machigatteiru darou ka`,
    ],
    characterNameEntries: [`liliruca arde`],
    characterFeatureEntries: [
      `brown eyes`,
      `brown hair`,
      `medium hair`,
      `messy hair`,
      `hair between eyes`,
      `ahoge`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
