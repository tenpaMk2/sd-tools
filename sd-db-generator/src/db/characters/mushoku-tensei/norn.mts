import type { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko`;

const lora = {
  ibukimakisiko: {
    loraName: `norn-greyrat_PONY_epoch-000025`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  ibukimakisiko: [`norn greyrat`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const mushokuTenseiNorn = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`mushoku tensei`],
    characterNameEntries: [`norn greyrat`],
    characterFeatureEntries: [
      `green eyes`,
      `blonde hair`,
      `long hair`,
      `hair flaps`,
      `ponytail`,
      `low ponytail`,
      `sidelocks`,
      `ahoge`,
      `cowlick`,
      `loli`,
    ],
    breastSize: `flat chest`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
