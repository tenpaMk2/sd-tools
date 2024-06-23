import type { CharacterDefine } from "../characters.mjs";

type Variation = `lancelot` | `nochekaiser`;

const lora = {
  lancelot: {
    loraName: `nanadevilXLPonyV1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
  },
  nochekaiser: {
    loraName: `nana-deviluke-darkness-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine["lora"]>;

const loraCharacterTriggerWordEntries = {
  lancelot: [`nanadevil`],
  nochekaiser: [`nana asta deviluke`],
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
      `tail`,
      `demon tail`,
    ],
    breastSize: `small breasts`,
    fang: true,
    emotionType: `mesugaki`,
  }) as const satisfies CharacterDefine;
