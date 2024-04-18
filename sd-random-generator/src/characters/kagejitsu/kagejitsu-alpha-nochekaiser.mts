import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const kagejitsuAlphaNochekaiser = () =>
  ({
    lora: {
      tag: `shadow-alpha-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [`alpha`],
    seriesNameEntries: [`kage no jitsuryokusha ni naritakute!`],
    characterNameEntries: [`alpha \\(kage no jitsuryokusha ni naritakute!\\)`],
    characterFeatureEntries: [
      `blue eyes`,
      `tsurime`,
      `eyelashes`,
      `blonde hair`,
      `long hair`,
      `straight hair`,
      `parted bangs`,
      `curtained bangs`,
      `sidelocks`,
      `pointy ears`,
      `elf`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.serious,
  }) as const satisfies CharacterDefine;
