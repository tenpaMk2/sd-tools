import type { CharacterDefine } from "../characters.mjs";

type Variation = `eternal2kpp`;

const lora = {
  eternal2kpp: {
    loraName: `Ais_Wallenstein`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  eternal2kpp: [`Ais Wallenstein`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const danmachiAiz = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
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
    emotionType: `emotionless`,
  }) as const satisfies CharacterDefine;
