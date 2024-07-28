import type { CharacterDefine } from "../characters.mjs";

type Variation = `notekaga`;

const lora = {
  notekaga: {
    loraName: `ichijou_hotaru-pony-v1`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  notekaga: [`ichijou hotaru`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const nonNonBiyoriHotaru = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`non non biyori`],
    characterNameEntries: [`ichijou hotaru`],
    characterFeatureEntries: [
      `brown eyes`,
      `black hair`,
      `long hair`,
      `hair between eyes`,
      `swept bangs`,
      `sidelocks`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
