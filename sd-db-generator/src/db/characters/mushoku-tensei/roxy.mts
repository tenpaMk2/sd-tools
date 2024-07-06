import type { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko-pajamas`;

const lora = {
  "ibukimakisiko-pajamas": {
    loraName: `roxy_pajamas_PONY_last`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "ibukimakisiko-pajamas": [`roxy migurdia`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
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
      `long hair`,
      `hair flaps`,
      `braid`,
      `twin braids`,
      `crossed bangs`,
      `sidelocks`,
      `ahoge`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
