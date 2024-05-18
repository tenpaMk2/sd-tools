import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const madomagiMamiEft = () =>
  ({
    lora: {
      tag: `mami-madomagi-01`,
      probabilityAndWeights: [
        { probability: 1, weight: 0.8 },
        { probability: 1, weight: 0.6 },
      ],
    },
    loraCharacterTriggerWordEntries: [`mami tomoe`],
    seriesNameEntries: [`mahou shoujo madoka magica`],
    characterNameEntries: [`tomoe mami`],
    characterFeatureEntries: [
      `yellow eyes`,
      `tareme`,
      `blonde hair`,
      `long hair`,
      `drill hair`,
      `twin drills`,
      `parted bangs`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
