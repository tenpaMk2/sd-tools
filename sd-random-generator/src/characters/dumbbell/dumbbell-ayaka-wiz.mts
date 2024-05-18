import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const dumbbellAyakaWiz = () =>
  ({
    lora: {
      tag: `eft_dumbell_bun`,
      probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
    },
    loraCharacterTriggerWordEntries: [`eft_dumbbell_bun`],
    seriesNameEntries: [`dumbbell nan kilo moteru?`],
    characterNameEntries: [`uehara ayaka`],
    characterFeatureEntries: [
      `brown eyes`,
      `tsurime`,
      `brown hair`,
      `short hair`,
      `hair bun`,
      `single hair bun`,
      `parted bangs`,
      `sidelocks`,
      `asymmetrical sidelocks`,
      `asymmetrical hair`,
      `hair ornament`,
      `hairpin`,
      `gyaru`,
      `tan`,
      `toned`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
