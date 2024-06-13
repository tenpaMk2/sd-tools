import { CharacterDefine } from "../characters.mjs";

export const isCeciliaNochekaiser = () =>
  ({
    lora: {
      tag: `cecilia-alcott-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [
        { probability: 1, weight: 0.8 },
        { probability: 1, weight: 0.6 },
      ],
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
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
