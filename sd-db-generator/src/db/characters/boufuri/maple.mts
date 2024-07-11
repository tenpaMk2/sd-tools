import type { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko`;

const lora = {
  ibukimakisiko: {
    loraName: `maple_bofuri_PONY_last`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  ibukimakisiko: [`maple \\(bofuri\\)`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const boufuriMaple = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [
      `itai no wa iya nano de bougyoryoku ni kyokufuri shitai to omoimasu`,
    ],
    characterNameEntries: [`maple \\(bofuri\\)`],
    characterFeatureEntries: [
      `purple eyes`,
      `black hair`,
      `short hair`,
      `hair between eyes`,
      `ahoge`,
      `hair ornament`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
