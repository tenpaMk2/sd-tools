import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `eternal2kpp`;

export const danmachiAiz = (variation: Variation) =>
  ({
    lora: {
      tag: `Ais_Wallenstein`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`Ais Wallenstein`],
    seriesNameEntries: [
      `dungeon ni deai wo motomeru no wa machigatteiru darou ka`,
    ],
    characterNameEntries: [`aiz wallenstein`],
    characterFeatureEntries: [
      `yellow eyes`,
      `blonde hair`,
      `long hair`,
      `straight hair`,
      `hair between eyes`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.deadpanned,
  }) as const satisfies CharacterDefine;
