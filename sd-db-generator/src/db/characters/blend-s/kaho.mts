import type { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko-double-bun` | `ibukimakisiko`;

const lora = {
  "ibukimakisiko-double-bun": {
    loraName: `hinata kaho_PONY_epoch-000020`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "ibukimakisiko": {
    loraName: `hinata kaho_PONY_epoch-000020`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "ibukimakisiko-double-bun": [],
  "ibukimakisiko": [],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  "hair-style": {
    "ibukimakisiko": [`long hair`, `twintails`],
    "ibukimakisiko-double-bun": [`short hair`, `double bun`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine["characterFeatureEntries"]>
>;

export const blendSKaho = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`blend s`],
    characterNameEntries: [`hinata kaho`],
    characterFeatureEntries: [
      `blue eyes`,
      `blonde hair`,
      ...characterFeatureEntries["hair-style"][variation],
      `hair between eyes`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
