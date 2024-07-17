import type { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko`;

const lora = {
  ibukimakisiko: {
    loraName: `hinatsuru ai_PONY_epoch-000015`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  ibukimakisiko: [`hinatsuru ai`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const ryuuouHinatsuruAi = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`ryuuou no oshigoto!`],
    characterNameEntries: [`hinatsuru ai`],
    characterFeatureEntries: [
      `blue eyes`,
      `brown hair`,
      `long hair`,
      `twintails`,
      `low twintails`,
      `ahoge`,
      `loli`,
    ],
    breastSize: `flat chest`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
