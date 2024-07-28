import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    loraName: `sumika-fujimiya-s1-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`sumika fujimiya`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const isekaiOjisanSumika = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`isekai ojisan`],
    characterNameEntries: [`fujimiya sumika \\(isekai ojisan\\)`],
    characterFeatureEntries: [
      `brown eyes`,
      `tsurime`,
      `eyelashes`,
      `glasses`,
      `black-framed eyewear`,
      `semi-rimless eyewear`,
      `under-rim eyewear`,
      `purple hair`,
      `medium hair`,
      `braid`,
      `side braid`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `tsundere`,
  }) as const satisfies CharacterDefine;
