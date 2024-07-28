import type { CharacterDefine } from "../characters.mjs";

type Variation = `duongve` | `eternal2kpp` | `zedotasco`;

const lora = {
  duongve: {
    loraName: `Noel_Izumi`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
  eternal2kpp: {
    loraName: `Noeru_Izumi`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
  zedotasco: {
    loraName: `Izumi Noel`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  duongve: [`noel izumi`],
  eternal2kpp: [`Noeru Izumi`],
  zedotasco: [],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const tenshiTsukiNoel = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`one room hiatari futsuu tenshi-tsuki`],
    characterNameEntries: [`izumi noel`],
    characterFeatureEntries: [
      `green eyes`,
      `blonde hair`,
      `long hair`,
      `straight hair`,
      `sidelocks`,
      `blunt bangs`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
