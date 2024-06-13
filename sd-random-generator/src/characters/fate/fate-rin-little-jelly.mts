import { CharacterDefine } from "../characters.mjs";

export const fateRinLittleJelly = () =>
  ({
    lora: {
      tag: `FateStayNightUBW_TohsakaRin`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`tohsakarin`],
    seriesNameEntries: [`fate/stay night`, `fate/unlimited blade works`],
    characterNameEntries: [`tohsaka rin`],
    characterFeatureEntries: [
      `blue eyes`,
      `tsurime`,
      `brown hair`,
      `long hair`,
      `two side up`,
      `parted bangs`,
      `hair bow`,
      `black hair bow`,
      `hair ribbon`, // LittleJelly specified.
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
