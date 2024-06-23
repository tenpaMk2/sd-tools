import type { CharacterDefine } from "../characters.mjs";

type Variation = `little-jelly`;

const lora = {
  "little-jelly": {
    loraName: `FateStayNightUBW_TohsakaRin`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "little-jelly": [`tohsakarin`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const fateRin = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
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
      `black hair bow -> black bow`,
      `hair ribbon`, // LittleJelly specified.
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
