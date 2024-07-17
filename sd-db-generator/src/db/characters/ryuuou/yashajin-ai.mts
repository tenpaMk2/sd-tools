import type { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko`;

const lora = {
  ibukimakisiko: {
    loraName: `yashajin ai_PONY_last`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  ibukimakisiko: [`yashajin ai`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const ryuuouYashajinAi = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`ryuuou no oshigoto!`],
    characterNameEntries: [`yashajin ai`],
    characterFeatureEntries: [
      `red eyes`,
      `tsurime`,
      `black hair`,
      `long hair`,
      `one side up`,
      `parted bangs`,
      `sidelocks`,
      `loli`,
      // `curtained bangs` // TODO: Fix `curtained bangs` to `curtained hair` .
    ],
    breastSize: `flat chest`,
    fang: false,
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
