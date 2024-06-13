import { CharacterDefine } from "../characters.mjs";

type Variation = `eternal2kpp`;

export const danmachiEina = (variation: Variation) =>
  ({
    lora: {
      tag: `Eina_Tulle`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [
      `dungeon ni deai wo motomeru no wa machigatteiru darou ka`,
    ],
    characterNameEntries: [`eina tulle`],
    characterFeatureEntries: [
      `green eyes`,
      `tareme`,
      `glasses`,
      `rimless eyewear`,
      `brown hair`,
      `short hair`,
      `bob cut`,
      `blunt bangs`,
      `blunt ends`,
      `sidelocks`,
      `pointy ears`,
      `elf`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
