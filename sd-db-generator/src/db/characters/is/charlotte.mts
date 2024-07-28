import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    loraName: `charlotte-dunois-s2-ponyxl-lora-nochekaiser`,
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

export const isCharlotte = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`infinite stratos`],
    characterNameEntries: [`charlotte dunois`],
    characterFeatureEntries: [
      `purple eyes`,
      `tareme`,
      `eyelashes`,
      `blonde hair`,
      `long hair`,
      `ponytail`,
      `low ponytail`,
      `hair between eyes`,
      `hair bow`,
      `pink hair bow -> pink bow`,
      `hair ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
