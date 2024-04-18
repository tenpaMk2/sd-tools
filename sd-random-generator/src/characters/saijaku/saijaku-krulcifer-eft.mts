import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const saijakuKrulciferEft = () =>
  ({
    lora: {
      tag: `krulcifer-bahamut-01`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`saijaku muhai no bahamut`],
    characterNameEntries: [`krulcifer einfolk`],
    characterFeatureEntries: [
      `blue eyes`,
      `tsurime`,
      `blue hair`,
      `light blue hair`,
      `long hair`,
      `straight hair`,
      `hair between eyes`,
      `sidelocks`,
      `hair ribbon`,
      `black hair ribbon`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
