import { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    tag: `tsundere-elf-s1-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`tsundere elf`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const isekaiOjisanSui = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
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
