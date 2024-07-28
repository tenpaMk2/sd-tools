import type { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko`;

const lora = {
  ibukimakisiko: {
    loraName: `aisha-greyrat_PONY_epoch-000020`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  ibukimakisiko: [`aisha greyrat`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const mushokuTenseiAisha = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`mushoku tensei`],
    characterNameEntries: [`aisha greyrat`],
    characterFeatureEntries: [
      `green eyes`,
      `red hair`,
      `hair flaps`,
      `ponytail`,
      `short ponytail`,
      `parted bangs`,
      `loli`,
    ],
    breastSize: `flat chest`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
