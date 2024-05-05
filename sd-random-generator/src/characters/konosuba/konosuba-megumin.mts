import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const konosubaMegumin = () =>
  ({
    lora: null,
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`kono subarashii sekai ni shukufuku wo!`],
    characterNameEntries: [`megumin`],
    characterFeatureEntries: [
      `red eyes`,
      `tsurime`,
      `brown hair`,
      `short hair`,
      `short hair with long locks`,
      `sidelocks`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
