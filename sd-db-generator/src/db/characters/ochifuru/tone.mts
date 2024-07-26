import type { CharacterDefine } from "../characters.mjs";

type Variation = `enter`;

const lora = {
  enter: {
    loraName: `honmachi_tone_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  enter: [`honmachi_tone`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const ochifuruTone = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`ochikobore fruit tart`],
    characterNameEntries: [`honmachi tone`],
    characterFeatureEntries: [
      `blue eyes`,
      `brown hair`,
      `short hair`,
      `flipped hair`,
      `parted bangs`,
      `hairband`,
      `yellow hairband`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
