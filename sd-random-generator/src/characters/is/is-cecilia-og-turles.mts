import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const isCeciliaOgTurles = () =>
  ({
    lora: {
      tag: `OGT_Cecilia_Alcott-v1`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`infinite stratos`],
    characterNameEntries: [`cecilia alcott`],
    characterFeatureEntries: [
      `blue eyes`,
      `tareme`,
      `eyelashes`,
      `long eyelashes`,
      `blonde hair`,
      `long hair`,
      `curly hair`,
      `drill hair`,
      `twin drills`,
      `hair between eyes`,
      `sidelocks`,
      `drill sidelocks`,
      `hairband`,
      `blue hairband`,
      `lace-trimmed hairband`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
