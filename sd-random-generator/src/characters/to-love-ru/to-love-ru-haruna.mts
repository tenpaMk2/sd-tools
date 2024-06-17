import { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    tag: `haruna-sairenji-darkness-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine["lora"]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`haruna sairenji`],
} as const satisfies Record<
  Variation,
  CharacterDefine["loraCharacterTriggerWordEntries"]
>;

export const toLoveRuHaruna = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`to love-ru`, `to love-ru darkness`],
    characterNameEntries: [`sairenji haruna`],
    characterFeatureEntries: [
      `purple eyes`,
      `purple hair`,
      `short hair`,
      `bob cut`,
      // `swept bangs`,
      `forehead`,
      `hair ornament`,
      `hairclip`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
