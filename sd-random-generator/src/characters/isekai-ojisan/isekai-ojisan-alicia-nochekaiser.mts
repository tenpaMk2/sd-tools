import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const isekaiOjisanAliciaNochekaiser = () =>
  ({
    lora: {
      tag: `alicia-edelsia-s1-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [`alicia edelsia`],
    seriesNameEntries: [`isekai ojisan`],
    characterNameEntries: [`alicia edelcia`],
    characterFeatureEntries: [
      `purple eyes`,
      `tareme`,
      `eyelashes`,
      `brown hair`,
      `short hair`, // Nochekaiser specified.
      `medium hair`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
