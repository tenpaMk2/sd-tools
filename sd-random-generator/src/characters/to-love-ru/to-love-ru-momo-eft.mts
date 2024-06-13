import { CharacterDefine } from "../characters.mjs";

export const toLoveRuMomoEft = () =>
  ({
    lora: {
      tag: `momo-loveru`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`momo belia deviluke`],
    seriesNameEntries: [`to love-ru`, `to love-ru darkness`],
    characterNameEntries: [`momo velia deviluke`],
    characterFeatureEntries: [
      `purple eyes`,
      `pink hair`,
      `short hair`,
      `bob cut`,
      `hair between eyes`,
      `hair ornament`,
      `hair flower`,
      `tail`,
      `demon tail`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
