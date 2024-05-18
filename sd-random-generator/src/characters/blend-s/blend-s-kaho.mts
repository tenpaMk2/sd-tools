import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `ibukimakisiko` | `ibukimakisiko-double-bun`;

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
      variation === `ibukimakisiko-double-bun` ? `short hair` : `long hair`,
      variation === `ibukimakisiko-double-bun` ? `double bun` : `twintails`,
      `hair between eyes`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
