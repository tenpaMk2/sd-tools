import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    loraName: `houki-shinonono-s2-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [
      { probability: 1, weight: 0.8 },
      { probability: 1, weight: 0.6 },
    ],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`houki shinonono`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const isHouki = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`infinite stratos`],
    characterNameEntries: [`shinonono houki`],
    characterFeatureEntries: [
      `blue eyes`,
      `black hair`,
      `long hair`,
      `ponytail`,
      `hair ribbon`,
      `white hair ribbon -> white ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `tsundere`,
  }) as const satisfies CharacterDefine;
