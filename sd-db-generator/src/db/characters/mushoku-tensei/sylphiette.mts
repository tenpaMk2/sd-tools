import type { CharacterDefine } from "../characters.mjs";

type Variation = `little-jelly`;

const lora = {
  "little-jelly": {
    loraName: `MushokuTensei_SylphietteXL`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "little-jelly": [`Sylphiette`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const mushokuTenseiSylphiette = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`mushoku tensei`],
    characterNameEntries: [`sylphiette \\(mushoku tensei\\)`],
    characterFeatureEntries: [
      `red eyes`,
      `eyelashes`,
      `short hair`,
      `white hair`,
      `parted bangs`,
      `ahoge`,
      `pointy ears`,
      `elf`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
