import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const kagejitsuBetaNochekaiser = () =>
  ({
    lora: {
      tag: `shadow-beta-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [`beta`],
    seriesNameEntries: [`kage no jitsuryokusha ni naritakute!`],
    characterNameEntries: [`beta \\(kage no jitsuryokusha ni naritakute!\\)`],
    characterFeatureEntries: [
      `blue eyes`,
      `tareme`,
      `grey hair`,
      `short hair`,
      `braid`,
      `side braid`,
      `pointy ears`,
      `elf`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
