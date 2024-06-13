import { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

export const sasuoniMayumi = (variation: Variation) =>
  ({
    lora: {
      tag: `mayumi-saegusa-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`mayumi saegusa`],
    seriesNameEntries: [`mahouka koukou no rettousei`],
    characterNameEntries: [`saegusa mayumi`],
    characterFeatureEntries: [
      `red eyes`,
      `black hair`,
      `long hair`,
      `wavy hair`,
      `curtained bangs`,
      `forehead`,
      `sidelocks`,
      `hair bow`,
      `white hair bow`,
      `hair ribbon`, // Nochekaiser specify.
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
