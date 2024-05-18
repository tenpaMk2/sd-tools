import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const dumbbellAkemiWiz = () =>
  ({
    lora: {
      tag: `eft_dumbell_black`,
      probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
    },
    loraCharacterTriggerWordEntries: [`eft_dumbbell_black`],
    seriesNameEntries: [`dumbbell nan kilo moteru?`],
    characterNameEntries: [`souryuuin akemi`],
    characterFeatureEntries: [
      `aqua eyes`,
      `eyelashes`,
      `black hair`,
      `long hair`,
      `hime cut`,
      `blunt bangs`,
      `blunt ends`,
      `thick thighs`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
