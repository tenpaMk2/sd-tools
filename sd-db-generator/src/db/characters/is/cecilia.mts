import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    loraName: `cecilia-alcott-s2-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [
      { probability: 1, weight: 0.8 },
      { probability: 1, weight: 0.6 },
    ],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const isCecilia = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`infinite stratos`],
    characterNameEntries: [`cecilia alcott`],
    characterFeatureEntries: [
      `blue eyes`,
      `tareme`,
      `eyelashes`,
      `long eyelashes`,
      `blonde hair`,
      `long hair`,
      `curly hair`,
      `drill hair`,
      `twin drills`,
      `hair between eyes`,
      `sidelocks`,
      `drill sidelocks`,
      `hairband`,
      `blue hairband`,
      `lace-trimmed hairband`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
