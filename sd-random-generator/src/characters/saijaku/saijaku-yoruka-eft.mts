import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const saijakuYorukaEft = () =>
  ({
    lora: {
      tag: `yoruka-bahamut-01`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`yoruka kirihime`],
    seriesNameEntries: [`saijaku muhai no bahamut`],
    characterNameEntries: [`kirihime yoruka`],
    characterFeatureEntries: [
      `blue eyes`,
      `purple eyes`,
      `heterocromia`,
      `tsurime`,
      `black hair`,
      `long hair`,
      `hair over shoulder`,
      `hair between eyes`,
      `sidelocks`,
      `low-tied sidelocks`,
      `hair ribbon`,
      `red hair ribbon`,
      `thick thighs`,
      `wide hips`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
