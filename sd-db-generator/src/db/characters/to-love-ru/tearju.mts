import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser` | `low-tied-long-hair-nochekaiser`;

const lora = {
  "nochekaiser": {
    loraName: `tearju-lunatique-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "low-tied-long-hair-nochekaiser": {
    loraName: `tearju-lunatique-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "nochekaiser": [`tearju lunatique`],
  "low-tied-long-hair-nochekaiser": [`tearju lunatique`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  hair: {
    "nochekaiser": [`straight hair`],
    "low-tied-long-hair-nochekaiser": [`low-tied long hair`, `hair bow`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine[`characterFeatureEntries`]>
>;

export const toLoveRuTearju = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`to love-ru`, `to love-ru darkness`],
    characterNameEntries: [`tearju lunatique`],
    characterFeatureEntries: [
      `green eyes`,
      `glasses`,
      `rimless eyewear`,
      `blonde hair`,
      `long hair`,
      ...characterFeatureEntries.hair[variation],
      `hair intakes`,
      `sidelocks`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const;
