import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const madomagiKyoukoEft = () =>
  ({
    lora: {
      tag: `kyouko-madomagi-01`,
      probabilityAndWeights: [
        { probability: 1, weight: 0.8 },
        { probability: 1, weight: 0.6 },
      ],
    },
    loraCharacterTriggerWordEntries: [`kyouko sakura`],
    seriesNameEntries: [`mahou shoujo madoka magica`],
    characterNameEntries: [`sakura kyouko`, `sakura kyoko`],
    characterFeatureEntries: [
      `red eyes`,
      `tsurime`,
      `red hair`,
      `long hair`,
      `ponytail`,
      `hair bow`,
      `black hair bow`,
    ],
    breastSize: `small breasts`,
    fang: true,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
