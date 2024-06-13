import { CharacterDefine } from "../characters.mjs";

export const mushokuTenseiSylphietteLittleJelly = () =>
  ({
    lora: {
      tag: `MushokuTensei_SylphietteXL`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`Sylphiette`],
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
