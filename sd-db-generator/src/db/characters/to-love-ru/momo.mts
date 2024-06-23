import type { CharacterDefine } from "../characters.mjs";

type Variation = `lancelot` | `nochekaiser`;

const lora = {
  lancelot: {
    loraName: `momodevilvXLPonyV1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
  },
  nochekaiser: {
    loraName: `momo-deviluke-darkness-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine["lora"]>;

const loraCharacterTriggerWordEntries = {
  lancelot: [`momodevil`],
  nochekaiser: [`momo deviluke`],
} as const satisfies Record<
  Variation,
  CharacterDefine["loraCharacterTriggerWordEntries"]
>;

export const toLoveRuMomo = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`to love-ru`, `to love-ru darkness`],
    characterNameEntries: [`momo velia deviluke`],
    characterFeatureEntries: [
      `purple eyes`,
      `pink hair`,
      `short hair`,
      `bob cut`,
      `hair between eyes`,
      `hair ornament`,
      `hair flower`,
      `tail`,
      `demon tail`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
