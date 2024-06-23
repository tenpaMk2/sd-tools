import type { CharacterDefine } from "../characters.mjs";

type Variation = `zedotasco`;

const lora = {
  zedotasco: {
    loraName: `Izumi Noel`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  zedotasco: [],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const tenshiTsukiNoel = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`one room hiatari futsuu tenshi`],
    characterNameEntries: [`izumi noel`],
    characterFeatureEntries: [
      `green eyes`,
      `blonde hair`,
      `long hair`,
      `straight hair`,
      `sidelocks`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
