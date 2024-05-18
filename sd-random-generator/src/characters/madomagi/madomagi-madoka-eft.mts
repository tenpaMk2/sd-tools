import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const madomagiMadokaEft = () =>
  ({
    lora: {
      tag: `madoka-madomagi-01`,
      probabilityAndWeights: [
        { probability: 1, weight: 0.8 },
        { probability: 1, weight: 0.6 },
      ],
    },
    loraCharacterTriggerWordEntries: [`homura akemi`],
    seriesNameEntries: [`mahou shoujo madoka magica`],
    characterNameEntries: [`akemi homura`],
    characterFeatureEntries: [
      `pink eyes`,
      `tareme`,
      `pink hair`,
      `short hair`,
      `twintails`,
      `short twintails`,
      `hair ribbon`,
      `red hair ribbon`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
