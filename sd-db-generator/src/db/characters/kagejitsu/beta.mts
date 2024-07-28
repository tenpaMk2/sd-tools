import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser` | `novowels`;

const lora = {
  nochekaiser: {
    loraName: `shadow-beta-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  novowels: {
    loraName: `beta-pdxl-nvwls-v1`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`beta`],
  novowels: [`beta`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const kagejitsuBeta = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
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
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
