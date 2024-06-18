import { CharacterDefine } from "../characters.mjs";

type Variation = `eternal2kpp`;

export const goblinSlayerCowGirl = (variation: Variation) =>
  ({
    lora: {
      tag: `Ushikai_Musume`,
      probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
    },
    loraCharacterTriggerWordEntries: [`Ushikai Musume`],
    seriesNameEntries: [`goblin slayer!`],
    characterNameEntries: [`cow girl \\(goblin slayer!\\)`],
    characterFeatureEntries: [
      `pink eyes`,
      `eyelashes`,
      `red hair`,
      `short hair`,
      `parted bangs`,
      `curtained bangs`,
      `ahoge`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
