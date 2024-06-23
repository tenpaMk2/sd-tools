import type { CharacterDefine } from "../characters.mjs";

type Variation = `eternal2kpp`;

const lora = {
  eternal2kpp: {
    loraName: `Sagiri_Izumi`,
    probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  eternal2kpp: [`Sagiri Izumi`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const eromangaSenseiSagiri = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`eromanga sensei`],
    characterNameEntries: [`izumi sagiri`],
    characterFeatureEntries: [
      `blue eyes`,
      `grey hair`,
      `long hair`,
      `low-tied long hair`,
      `sidelocks`,
      `low-tied sidelocks`,
      `hair bow`,
      `pink hair bow -> pink bow`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
