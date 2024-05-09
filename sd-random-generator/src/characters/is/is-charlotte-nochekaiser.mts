import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const isCharlotteNochekaiser = () =>
  ({
    lora: {
      tag: `charlotte-dunois-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [
        { probability: 1, weight: 0.8 },
        { probability: 1, weight: 0.6 },
      ],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`infinite stratos`],
    characterNameEntries: [`charlotte dunois`],
    characterFeatureEntries: [
      `purple eyes`,
      `tareme`,
      `eyelashes`,
      `blonde hair`,
      `long hair`,
      `ponytail`,
      `low ponytail`,
      `hair between eyes`,
      `hair bow`,
      `pink hair bow`,
      `hair ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
