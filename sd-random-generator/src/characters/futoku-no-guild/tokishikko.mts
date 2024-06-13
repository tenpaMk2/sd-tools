import { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko`;

export const futokuNoGuildTokishikko = (variation: Variation) =>
  ({
    lora: {
      tag: `tokishikko dana_PONY_epoch-000020`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [],
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
