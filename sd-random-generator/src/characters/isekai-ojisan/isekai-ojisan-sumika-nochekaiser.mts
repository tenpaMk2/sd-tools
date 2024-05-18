import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const isekaiOjisanSumikaNochekaiser = () =>
  ({
    lora: {
      tag: `sumika-fujimiya-s1-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [`sumika fujimiya`],
    seriesNameEntries: [`isekai ojisan`],
    characterNameEntries: [`fujimiya sumika \\(isekai ojisan\\)`],
    characterFeatureEntries: [
      `brown eyes`,
      `tsurime`,
      `eyelashes`,
      `glasses`,
      `black-framed eyewear`,
      `semi-rimless eyewear`,
      `under-rim eyewear`,
      `purple hair`,
      `medium hair`,
      `braid`,
      `side braid`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.uptight,
  }) as const satisfies CharacterDefine;
