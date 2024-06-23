import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    loraName: `shizuku-kitayama-s2-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`shizuku kitayama`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const sasuoniShizuku = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`mahouka koukou no rettousei`],
    characterNameEntries: [`kitayama shizuku`],
    characterFeatureEntries: [
      `grey eyes`,
      `jitome`,
      `black hair`,
      `short hair`,
      `messy hair`,
      `short hair with long locks`,
      `sidelocks`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `emotionless`,
  }) as const satisfies CharacterDefine;
