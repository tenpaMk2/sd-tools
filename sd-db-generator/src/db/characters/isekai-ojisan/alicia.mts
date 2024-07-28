import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    loraName: `alicia-edelsia-s1-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`alicia edelsia`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const isekaiOjisanAlicia = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`isekai ojisan`],
    characterNameEntries: [`alicia edelcia`],
    characterFeatureEntries: [
      `purple eyes`,
      `tareme`,
      `eyelashes`,
      `brown hair`,
      `short hair`, // Nochekaiser specified.
      `medium hair`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
