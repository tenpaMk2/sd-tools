import type { CharacterDefine } from "../characters.mjs";

type Variation = `judge-naegi`;

const lora = {
  "judge-naegi": {
    loraName: `JN_Riselia_Ray_Crystalia`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "judge-naegi": [`Crystalia`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  "eyes": {
    "judge-naegi": [`blue eyes`],
  },
  "hair": {
    "judge-naegi": [`white hair`, `long hair`],
  },
  "tie": {
    "judge-naegi": [`straight hair`],
  },
  "bangs": {
    "judge-naegi": [`braid`, `braided bangs`],
  },
  "sidelocks": {
    "judge-naegi": [],
  },
  "hair-ornament": {
    "judge-naegi": [`hair bow`, `red hair bow -> red bow`, `earrings`],
  },
  "body-feature": {
    "judge-naegi": [`thick thighs`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine["characterFeatureEntries"]>
>;

export const sematsukaRiselia = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`seiken gakuin no maken tsukai`],
    characterNameEntries: [`riselia ray crystalia`],
    characterFeatureEntries: [
      ...characterFeatureEntries["eyes"][variation],
      ...characterFeatureEntries["hair"][variation],
      ...characterFeatureEntries["tie"][variation],
      ...characterFeatureEntries["bangs"][variation],
      ...characterFeatureEntries["sidelocks"][variation],
      ...characterFeatureEntries["hair-ornament"][variation],
      ...characterFeatureEntries["body-feature"][variation],
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
