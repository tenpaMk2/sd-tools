import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

/**
 * No Lora version of the character.
 * Use it with pre-trained checkmodel such as Pony.
 */
export const kaguyaSamaKaguya = () =>
  ({
    lora: null,
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [
      `kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~`,
    ],
    characterNameEntries: [`shinomiya kaguya`],
    characterFeatureEntries: [
      `red eyes`,
      `tsurime`,
      `eyelashes`,
      `black hair`,
      `short hair`,
      `folded ponytail`,
      `parted bangs`,
      `sidelocks`,
      `hair ribbon`,
      `red hair ribbon`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionEntries: emotionPreset.serious,
  }) as const satisfies CharacterDefine;
