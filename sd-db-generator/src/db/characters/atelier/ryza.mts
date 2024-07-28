import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    loraName: `reisalin-stout-s1-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 0.5 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`reisalin stout`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const atelierRyza = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`atelier \\(series\\)`, `atelier ryza`],
    characterNameEntries: [`reisalin stout`],
    characterFeatureEntries: [
      `brown eyes`,
      `brown hair`,
      `short hair`,
      `hair ornament`,
      `hairclip`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
