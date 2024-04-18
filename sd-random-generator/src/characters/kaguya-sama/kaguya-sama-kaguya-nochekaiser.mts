import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const kaguyaSamaKaguyaNochekaiser = () =>
  ({
    lora: {
      tag: `kaguya-shinomiya-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [`kaguya shinomiya`],
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
