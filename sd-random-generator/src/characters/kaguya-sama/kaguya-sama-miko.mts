import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

/**
 * No Lora version of the character.
 * Use it with pre-trained checkmodel such as Pony.
 */
export const kaguyaSamaMiko = () =>
  ({
    lora: null,
    loraCharacterTriggerWordEntries: [],
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
    emotionEntries: emotionPreset.uptight,
  }) as const satisfies CharacterDefine;
