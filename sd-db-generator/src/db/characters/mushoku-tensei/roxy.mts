import type { CharacterDefine } from "../characters.mjs";

type Variation =
  | `pajamas-ibukimakisiko`
  | `adventurer-ibukimakisiko`
  | `adventurer-no-ahoge-ibukimakisiko`
  | `ibukimakisiko`
  | `no-ahoge-ibukimakisiko`
  | `hair-down-ibukimakisiko`;

const lora = {
  "pajamas-ibukimakisiko": {
    loraName: `roxy_pajamas_PONY_last`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "adventurer-ibukimakisiko": {
    loraName: `roxy_outfit2_PONY_epoch-000020`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "adventurer-no-ahoge-ibukimakisiko": {
    loraName: `roxy_outfit2_PONY_epoch-000020`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "ibukimakisiko": {
    loraName: `roxy_outfit1_PONY_epoch-000020`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "no-ahoge-ibukimakisiko": {
    loraName: `roxy_outfit1_PONY_epoch-000020`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "hair-down-ibukimakisiko": {
    loraName: `roxy_outfit1_PONY_epoch-000020`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "pajamas-ibukimakisiko": [`roxy migurdia`],
  "adventurer-ibukimakisiko": [`roxy migurdia`],
  "adventurer-no-ahoge-ibukimakisiko": [`roxy migurdia`],
  "ibukimakisiko": [`roxy migurdia`],
  "no-ahoge-ibukimakisiko": [`roxy migurdia`],
  "hair-down-ibukimakisiko": [`roxy migurdia`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  ahoge: {
    "pajamas-ibukimakisiko": [`ahoge`],
    "adventurer-ibukimakisiko": [`ahoge`],
    "adventurer-no-ahoge-ibukimakisiko": [],
    "ibukimakisiko": [`ahoge`],
    "no-ahoge-ibukimakisiko": [],
    "hair-down-ibukimakisiko": [`ahoge`],
  },
  hair: {
    "pajamas-ibukimakisiko": [`long hair`, `braid`, `twin braids`],
    "adventurer-ibukimakisiko": [`long hair`, `braid`, `twin braids`],
    "adventurer-no-ahoge-ibukimakisiko": [`long hair`, `braid`, `twin braids`],
    "ibukimakisiko": [`long hair`, `braid`, `twin braids`],
    "no-ahoge-ibukimakisiko": [`long hair`, `braid`, `twin braids`],
    "hair-down-ibukimakisiko": [
      `alternate hairstyle`,
      `very long hair`,
      `straight hair`,
      `hair down`,
    ],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine[`characterFeatureEntries`]>
>;

export const mushokuTenseiRoxy = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`mushoku tensei`],
    characterNameEntries: [`roxy migurdia`],
    characterFeatureEntries: [
      `blue eyes`,
      `blue hair`,
      ...characterFeatureEntries.hair[variation],
      `hair flaps`,
      `crossed bangs`,
      `sidelocks`,
      ...characterFeatureEntries.ahoge[variation],
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
