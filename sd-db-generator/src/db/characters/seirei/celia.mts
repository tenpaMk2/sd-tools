import type { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko`;

const lora = {
  ibukimakisiko: {
    loraName: `celia claire_PONY_epoch-000016`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  ibukimakisiko: [`celia claire`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const seireiCelia = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`seirei gensouki`],
    characterNameEntries: [`celia claire`],
    characterFeatureEntries: [
      `blue eyes`,
      `grey hair`,
      `long hair`,
      `two side up`,
      `hair between eyes`,
      `sidelocks`,
      `hair ribbon`,
      `black hair ribbon -> black ribbon`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
