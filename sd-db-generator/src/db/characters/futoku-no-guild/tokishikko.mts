import type { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko`;

const lora = {
  ibukimakisiko: {
    loraName: `tokishikko dana_PONY_epoch-000020`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  ibukimakisiko: [],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const futokuNoGuildTokishikko = (
  variation: Variation,
): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`futoku no guild`],
    characterNameEntries: [`tokishikko dana`],
    characterFeatureEntries: [
      `blue eyes`,
      `thick eyebrows`,
      `short eyebrows`,
      `hikimayu`,
      `black hair`,
      `medium hair`,
      `twintails`,
      `parted bangs`,
      `forehead`,
      `sidelocks`,
      `hair ornament`,
      `hair bobbles`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
