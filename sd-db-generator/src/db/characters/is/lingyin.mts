import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    loraName: `lingyin-huang-s2-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [
      { probability: 1, weight: 0.8 },
      { probability: 1, weight: 0.6 },
    ],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`lingyin huang`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const isLingyin = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`infinite stratos`],
    characterNameEntries: [`huang lingyin`],
    characterFeatureEntries: [
      `green eyes`,
      `brown hair`,
      `long hair`,
      `twintails`,
      `hair between eyes`,
      `sidelocks`,
      `hair ribbon`,
      `yellow hair ribbon -> yellow ribbon`,
      `cowlick`,
    ],
    breastSize: `small breasts`,
    fang: true,
    emotionType: `mesugaki`,
  }) as const satisfies CharacterDefine;
