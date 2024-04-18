import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const sasuoniMayumiEft = () =>
  ({
    lora: {
      tag: `mayumi-mahouka`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`mayumi saegusa`],
    seriesNameEntries: [`mahouka koukou no rettousei`],
    characterNameEntries: [`saegusa mayumi`],
    characterFeatureEntries: [
      `red eyes`,
      `tareme`,
      `black hair`,
      `long hair`,
      `wavy hair`,
      `curtained bangs`,
      `sidelocks`,
      `hair bow`,
      `white hair bow`,
      `forehead`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
