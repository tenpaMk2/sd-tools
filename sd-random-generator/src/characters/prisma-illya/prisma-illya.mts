import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `flujoru`;

export const prismaIllyaIllya = (variation: Variation) =>
  ({
    lora: {
      tag: `illya.pony`,
      probabilityAndWeights: [
        // { probability: 1, weight: 1.0 },
        // { probability: 1, weight: 0.8 },
        { probability: 1, weight: 0.5 },
      ],
    },
    loraCharacterTriggerWordEntries: [`illya`],
    seriesNameEntries: [`fate/kaleid liner prisma illya`],
    characterNameEntries: [`illyasviel von einzbern`],
    characterFeatureEntries: [
      `red eyes`,
      `eyelashes`,
      `long eyelashes`,
      `blonde hair`,
      `white hair`,
      `long hair`,
      `curtained bangs`,
      `sidelocks`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
