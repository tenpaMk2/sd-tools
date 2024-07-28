import type { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko`;

const lora = {
  ibukimakisiko: {
    loraName: `minagi_hiyori_PONY_epoch-000020`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  ibukimakisiko: [`minagi hiyori`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const slowLoopHiyori = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`slow loop`],
    characterNameEntries: [`minagi hiyori`],
    characterFeatureEntries: [
      `blue eyes`,
      `blue hair`,
      `dark blue hair`,
      `medium hair`,
      `blunt bangs`,
      `sidelocks`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
