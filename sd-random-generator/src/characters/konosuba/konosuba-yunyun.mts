import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const konosubaYunyun = () =>
  ({
    lora: null,
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`kono subarashii sekai ni shukufuku wo!`],
    characterNameEntries: [`yunyun \\(konosuba\\)`],
    characterFeatureEntries: [
      `red eyes`,
      `eyelashes`,
      `brown hair`,
      `long hair`,
      `braid`,
      `crown braid`,
      `hair between eyes`,
      `sidelocks`,
      `hair over shoulder`,
      `hair ornament`,
      `hair bow`,
      `red hair bow`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
