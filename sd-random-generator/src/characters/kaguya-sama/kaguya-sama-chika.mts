import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

/**
 * No Lora version of the character.
 * Use it with pre-trained checkmodel such as Pony.
 */
export const kaguyaSamaChika = () =>
  ({
    lora: null,
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [
      `kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~`,
    ],
    characterNameEntries: [`fujiwara chika`],
    characterFeatureEntries: [
      `blue eyes`,
      `tareme`,
      `pink hair`,
      `long hair`,
      `straight hair`,
      `blunt bangs`,
      `hair bow`,
      `black hair bow`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
