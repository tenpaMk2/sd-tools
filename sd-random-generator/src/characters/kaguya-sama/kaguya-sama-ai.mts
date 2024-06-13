import { CharacterDefine } from "../characters.mjs";

/**
 * No Lora version of the character.
 * Use it with pre-trained checkmodel such as Pony.
 */
export const kaguyaSamaAi = () =>
  ({
    lora: null,
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [
      `kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~`,
    ],
    characterNameEntries: [`hayasaka ai`],
    characterFeatureEntries: [
      `blue eyes`,
      `tsurime`,
      `eyelashes`,
      `blonde hair`,
      `medium hair`,
      `ponytail`,
      `side ponytail`,
      `hair between eyes`,
      `sidelocks`,
      `hair ornament`,
      `hair scrunchie`,
      // TODO: `blue haad scrunchie` .
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `emotionless`,
  }) as const satisfies CharacterDefine;
