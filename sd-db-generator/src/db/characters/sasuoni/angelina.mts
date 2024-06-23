import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    loraName: `angelina-kudou-shields-s2-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const sasuoniAngelina = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
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
      `black hair ribbon -> black ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
