import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const reZeroRemEft = () =>
  ({
    lora: {
      tag: `rem-rezero-01`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`rem`],
    seriesNameEntries: [`re:zero kara hajimeru isekai seikatsu`],
    characterNameEntries: [`rem \\(re:zero\\)`],
    characterFeatureEntries: [
      `blue eyes`,
      `tareme`,
      `blue hair`,
      `short hair`,
      `hair over one eye`,
      `hair ornament`,
      `x hair ornament`,
      `flower knot`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
