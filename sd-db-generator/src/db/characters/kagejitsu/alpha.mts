import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser` | `novowels`;

const lora = {
  nochekaiser: {
    loraName: `shadow-alpha-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  novowels: {
    loraName: `alpha-pdxl-nvwls-v1`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`alpha`],
  novowels: [`alpha`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const kagejitsuAlpha = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
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
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
