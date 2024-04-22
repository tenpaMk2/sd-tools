import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const isekaiOjisanMabelNochekaiser = () =>
  ({
    lora: {
      tag: `mabel-ravveil-s1-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [`mabel rayveil`],
    seriesNameEntries: [`isekai ojisan`],
    characterNameEntries: [`mabel raybert`],
    characterFeatureEntries: [
      `blue eyes`,
      `tsurime`,
      `eyelashes`,
      `blue hair`,
      `long hair`,
      `hime cut`,
      `blunt bangs`,
      `blunt ends`,
      `sidelocks`,
      `hair ornament`,
      `hair flower`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
