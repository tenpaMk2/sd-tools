import { CharacterDefine } from "../characters.mjs";

export const sasuoniHonokaEft = () =>
  ({
    lora: {
      tag: `honoka-mahouka`,
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
      `short twintails`,
      `swept bangs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
