import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `eternal2kpp`;

export const danmachiHaruhime = (variation: Variation) =>
  ({
    lora: {
      tag: `Haruhime_Sanjouno`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`Haruhime Sanjouno`],
    seriesNameEntries: [
      `dungeon ni deai wo motomeru no wa machigatteiru darou ka`,
    ],
    characterNameEntries: [`sanjouno haruhime`],
    characterFeatureEntries: [
      `green eyes`,
      `eyelashes`,
      `blonde hair`,
      `long hair`,
      `straight hair`,
      `arched bangs`,
      `ahoge`,
      `animal ears`,
      `fox girl`,
      `fox ears`,
      `tail`,
      `fox tail`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.serious,
  }) as const satisfies CharacterDefine;
