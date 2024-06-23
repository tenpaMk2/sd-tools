import type { CharacterDefine } from "../characters.mjs";

type Variation = `no-lora`;

const lora = {
  "no-lora": null,
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const kaguyaSamaMiko = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [
      `kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~`,
    ],
    characterNameEntries: [`iino miko`],
    characterFeatureEntries: [
      `brown eyes`,
      `tsurime`,
      `brown hair`,
      `long hair`,
      `hair over shoulder`,
      `twintails`,
      `low twintails`,
      `blunt bangs`,
      `hair tie`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `tsundere`,
  }) as const satisfies CharacterDefine;
