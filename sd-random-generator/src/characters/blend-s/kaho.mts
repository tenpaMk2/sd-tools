import { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko` | `ibukimakisiko-double-bun`;

const characterFeatureEntries = {
  "hair-style": {
    "ibukimakisiko": [`long hair`, `twintails`],
    "ibukimakisiko-double-bun": [`short hair`, `double bun`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine["characterFeatureEntries"]>
>;

export const blendSKaho = (variation: Variation) =>
  ({
    lora: {
      tag: `hinata kaho_PONY_epoch-000020`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [],
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
