import type { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko`;

const lora = {
  ibukimakisiko: {
    loraName: `arona_blue archive_PONY_last`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  ibukimakisiko: [`arona \\(blue archive\\)`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterNameEntries = {
  ibukimakisiko: [`arona \\(blue archive\\)`],
} as const satisfies Record<Variation, CharacterDefine[`characterNameEntries`]>;

// const characterFeatureEntries = {
//   hair: {
//     ibukimakisiko: [`two side up`],
//   },
// } as const satisfies Record<
//   string,
//   Record<Variation, CharacterDefine[`characterFeatureEntries`]>
// >;

export const blueArchiveArona = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`blue archive`],
    characterNameEntries: characterNameEntries[variation],
    characterFeatureEntries: [
      `halo`,
      `blue eyes`,
      `blue hair`,
      `light blue hair`,
      `short hair`,
      `braid`,
      `side braid`,
      `hair over one eye`,
      `hair bow`,
      `white hair bow -> white bow`,
      `hairband`,
      `white hairband`,
      `bow hairband`,
    ],
    breastSize: `flat chest`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
