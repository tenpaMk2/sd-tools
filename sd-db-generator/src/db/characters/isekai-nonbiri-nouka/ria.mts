import type { CharacterDefine } from "../characters.mjs";

type Variation = `little-jelly`;

const lora = {
  "little-jelly": {
    loraName: `IsekaiNonbiriNouka_RiaXL`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "little-jelly": [`RiaINN`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const isekaiNonbiriNoukaRia = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`isekai nonbiri nouka`],
    characterNameEntries: [`ria \\(isekai nonbiri nouka\\)`],
    characterFeatureEntries: [
      `blue eyes`,
      `light purple hair`,
      `long hair`,
      `braid`,
      `side braid`,
      `single braid`,
      `half updo`,
      `double-parted bangs`,
      `sidelocks`,
      `hair ornament`,
      `hairclip`,
      `pointy ears`,
      `elf`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
