import { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

export const sasuoniAngelina = (variation: Variation) =>
  ({
    lora: {
      tag: `angelina-kudou-shields-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`mahouka koukou no rettousei`],
    characterNameEntries: [`angelina kudou shields`],
    characterFeatureEntries: [
      `blue eyes`,
      `blonde hair`,
      `long hair`,
      `drill hair`,
      `twin drills`,
      `twintails`,
      `hair between eyes`,
      `hair ribbon`,
      `blue hair ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
