import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `nochekaiser`;

export const sasuoniShizuku = (variation: Variation) =>
  ({
    lora: {
      tag: `shizuku-kitayama-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`shizuku kitayama`],
    seriesNameEntries: [`mahouka koukou no rettousei`],
    characterNameEntries: [`kitayama shizuku`],
    characterFeatureEntries: [
      `grey eyes`,
      `jitome`,
      `black hair`,
      `short hair`,
      `messy hair`,
      `short hair with long locks`,
      `sidelocks`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionEntries: emotionPreset.deadpanned,
  }) as const satisfies CharacterDefine;
