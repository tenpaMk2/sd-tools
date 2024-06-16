import { CharacterDefine } from "../characters.mjs";

type Variation = `jibunsagasinotabi`;

const lora = {
  jibunsagasinotabi: {
    loraName: `MahiruShiinaXLpony001`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  jibunsagasinotabi: [`MahiruShiina`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const tenshiSamaMahiru = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [
      `otonari no tenshi-sama ni itsu no mani ka dame ningen ni sarete ita ken`,
    ],
    characterNameEntries: [`shiina mahiru \\(otonari no tenshi-sama\\)`],
    characterFeatureEntries: [
      `yellow eyes`,
      `blonde hair`,
      `long hair`,
      `straight hair`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
