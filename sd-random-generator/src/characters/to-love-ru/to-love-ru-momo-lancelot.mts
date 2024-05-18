import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const toLoveRuMomoLancelot = () =>
  ({
    lora: {
      tag: `momodevilvXLPonyV1`,
      probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
    },
    loraCharacterTriggerWordEntries: [`momodevil`],
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
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
