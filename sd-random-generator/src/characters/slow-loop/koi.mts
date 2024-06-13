import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `ibukimakisiko`;

const lora = {
  ibukimakisiko: {
    tag: `yoshinaga koi_PONY_last`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  ibukimakisiko: [`yoshinaga koi`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const slowLoopKoi = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`slow loop`],
    characterNameEntries: [`yoshinaga koi`],
    characterFeatureEntries: [
      `purple eyes`,
      `tareme`,
      `light brown hair`,
      `medium hair`,
      `twintails`,
      `short twintails`,
      `hair between eyes`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionEntries: emotionPreset.deadpanned,
  }) as const satisfies CharacterDefine;
