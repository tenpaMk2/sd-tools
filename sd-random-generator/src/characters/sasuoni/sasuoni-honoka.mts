import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `nochekaiser`;

export const sasuoniHonoka = (variation: Variation) =>
  ({
    lora: {
      tag: `honoka-mitsui-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`honoka mitsui`],
    seriesNameEntries: [`mahouka koukou no rettousei`],
    characterNameEntries: [`mitsui honoka`],
    characterFeatureEntries: [
      `purple eyes`,
      `brown hair`,
      `medium hair`,
      `twintails`,
      `low twintails`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
