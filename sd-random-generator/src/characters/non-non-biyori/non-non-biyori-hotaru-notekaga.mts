import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const nonNonBiyoriHotaruNotekaga = () =>
  ({
    lora: {
      tag: `ichijou_hotaru-pony-v1`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [`ichijou hotaru`],
    seriesNameEntries: [`non non biyori`],
    characterNameEntries: [`ichijou hotaru`],
    characterFeatureEntries: [
      `brown eyes`,
      `black hair`,
      `long hair`,
      `hair between eyes`,
      `swept bangs`,
      `sidelocks`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
