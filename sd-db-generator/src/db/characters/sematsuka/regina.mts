import type { CharacterDefine } from "../characters.mjs";

type Variation = `judge-naegi`;

const lora = {
  "judge-naegi": {
    loraName: `JN_Regina_Mercedes`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "judge-naegi": [`Mercedes`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  "eyes": {
    "judge-naegi": [`green eyes`],
  },
  "hair": {
    "judge-naegi": [`blonde hair`, `long hair`],
  },
  "tie": {
    "judge-naegi": [`twintails`],
  },
  "bangs": {
    "judge-naegi": [`curtained bangs`],
  },
  "sidelocks": {
    "judge-naegi": [],
  },
  "hair-ornament": {
    "judge-naegi": [`hair bow`, `black hair bow -> black bow`],
  },
  "body-feature": {
    "judge-naegi": [`thick thighs`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine["characterFeatureEntries"]>
>;

export const sematsukaRegina = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`seiken gakuin no maken tsukai`],
    characterNameEntries: [`regina mercedes`],
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
