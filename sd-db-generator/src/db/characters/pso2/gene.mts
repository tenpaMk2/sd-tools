import type { CharacterDefine } from "../characters.mjs";

type Variation = `bikini-overnerd`;

const lora = {
  "bikini-overnerd": {
    loraName: `gene_bikini`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "bikini-overnerd": [],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const pso2Gene = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
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
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
