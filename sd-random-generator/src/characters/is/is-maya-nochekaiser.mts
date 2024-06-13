import { CharacterDefine } from "../characters.mjs";

export const isMayaNochekaiser = () =>
  ({
    lora: {
      tag: `maya-yamada-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [
        { probability: 1, weight: 0.8 },
        { probability: 1, weight: 0.6 },
      ],
    },
    loraCharacterTriggerWordEntries: [`maya yamada`],
    seriesNameEntries: [`infinite stratos`],
    characterNameEntries: [`yamada maya \\(infinite stratos\\)`],
    characterFeatureEntries: [
      `green eyes`,
      `tareme`,
      `glasses`,
      `white-framed eyewear`,
      `semi-rimless eyewear`,
      `under-rim eyewear`,
      `green hair`,
      `short hair`,
      `crossed bangs`,
      `mature female`,
      `curvy`,
      `thick thighs`,
      `wide hips`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
