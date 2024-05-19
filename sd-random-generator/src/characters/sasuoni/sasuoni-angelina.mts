import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `nochekaiser`;

export const sasuoniAngelina = (variation: Variation) =>
  ({
    lora: {
      tag: `angelina-kudou-shields-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
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
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
