import type { CharacterDefine } from "../characters.mjs";

type Variation = `chenkin`;

const lora = {
  chenkin: {
    loraName: `chitanda_eru_pony`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  chenkin: [`chitanda_eru`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const hyoukaEru = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`hyouka`],
    characterNameEntries: [`chitanda eru`],
    characterFeatureEntries: [
      `purple eyes`,
      `tareme`,
      `black hair`,
      `long hair`,
      `hime cut`,
      `straight hair`,
      `blunt bangs`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
