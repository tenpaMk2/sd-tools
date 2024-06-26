import type { CharacterDefine } from "../characters.mjs";

type Variation = `shadowxart`;

const lora = {
  shadowxart: {
    loraName: `Maika_Sakuranomiya_Pony`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  shadowxart: [`Sakuranomiya_Maika`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const blendSMaika = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`blend s`],
    characterNameEntries: [`sakuranomiya maika`],
    characterFeatureEntries: [
      `purple eyes`,
      `black hair`,
      `long hair`,
      `twintails`,
      `low twintails`,
      `blunt bangs`,
      `sidelocks`,
      `hair ornament`,
      `hair bobbles`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
