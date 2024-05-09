import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const isLingyinNochekaiser = () =>
  ({
    lora: {
      tag: `lingyin-huang-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [
        { probability: 1, weight: 0.8 },
        { probability: 1, weight: 0.6 },
      ],
    },
    loraCharacterTriggerWordEntries: [`lingyin huang`],
    seriesNameEntries: [`infinite stratos`],
    characterNameEntries: [`huang lingyin`],
    characterFeatureEntries: [
      `green eyes`,
      `brown hair`,
      `long hair`,
      `twintails`,
      `hair between eyes`,
      `sidelocks`,
      `hair ribbon`,
      `yellow hair ribbon`,
      `cowlick`,
    ],
    breastSize: `small breasts`,
    fang: true,
    emotionEntries: emotionPreset.mesugaki,
  }) as const satisfies CharacterDefine;
