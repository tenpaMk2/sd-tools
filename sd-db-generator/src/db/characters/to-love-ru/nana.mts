import { CharacterDefine } from "../characters.mjs";

type Variation = `lancelot`;

const lora = {
  lancelot: {
    loraName: `nanadevilXLPonyV1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
  },
} as const satisfies Record<Variation, CharacterDefine["lora"]>;

const loraCharacterTriggerWordEntries = {
  lancelot: [`nanadevil`],
} as const satisfies Record<
  Variation,
  CharacterDefine["loraCharacterTriggerWordEntries"]
>;

export const toLoveRuNana = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`to love-ru`, `to love-ru darkness`],
    characterNameEntries: [`nana asta deviluke`],
    characterFeatureEntries: [
      `purple eyes`,
      `pink hair`,
      `long hair`,
      `twintails`,
      `hair between eyes`,
    ],
    breastSize: `small breasts`,
    fang: true,
    emotionType: `mesugaki`,
  }) as const satisfies CharacterDefine;
