import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const dumbbellSatomiWiz = () =>
  ({
    lora: {
      tag: `eft_dumbell_short`,
      probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
    },
    loraCharacterTriggerWordEntries: [`eft_dumbbell_short`],
    seriesNameEntries: [`dumbbell nan kilo moteru?`],
    characterNameEntries: [`tachibana satomi`],
    characterFeatureEntries: [
      `brown eyes`,
      `tareme`,
      `mole under eye`,
      `black hair`,
      `short hair`,
      `bob cut`,
      `parted bangs`,
      `sidelocks`,
      `mature female`,
      `thick thighs`,
      `wide hips`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
