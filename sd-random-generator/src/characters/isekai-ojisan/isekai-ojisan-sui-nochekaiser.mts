import { CharacterDefine } from "../characters.mjs";

export const isekaiOjisanSuiNochekaiser = () =>
  ({
    lora: {
      tag: `tsundere-elf-s1-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [`tsundere elf`],
    seriesNameEntries: [`isekai ojisan`],
    characterNameEntries: [`sui \\(isekai ojisan\\)`],
    characterFeatureEntries: [
      `green eyes`,
      `tsurime`,
      `eyelashes`,
      `blonde hair`,
      `orange hair`,
      `gradient hair`,
      `multicolored hair`,
      `long hair`,
      `braid`,
      `frentch braid`,
      `low-tied long hair`,
      `parted bangs`,
      `pointy ears`,
      `elf`,
      `forehead jewel`,
      `red forehead gemstone`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `tsundere`,
  }) as const satisfies CharacterDefine;
