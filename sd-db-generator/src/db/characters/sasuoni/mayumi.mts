import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    loraName: `mayumi-saegusa-s2-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`mayumi saegusa`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const sasuoniMayumi = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
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
      `white hair bow -> white bow`,
      `hair ribbon`, // Nochekaiser specify.
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
