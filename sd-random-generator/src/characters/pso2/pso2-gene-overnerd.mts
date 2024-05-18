import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const pso2GeneOvernerd = () =>
  ({
    lora: {
      tag: `gene_bikini`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`phantasy star online 2`],
    characterNameEntries: [`gene \\(pso2\\)`],
    characterFeatureEntries: [
      `aqua eyes`,
      `multicolored hair`,
      `two-tone hair`,
      `blonde hair`,
      `green hair`,
      `long hair`,
      `twintails`,
      `hair between eyes`,
      `streaked hair`,
    ],
    breastSize: `large breasts`,
    fang: true,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
