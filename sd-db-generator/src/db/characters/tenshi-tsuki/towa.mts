import type { CharacterDefine } from "../characters.mjs";

type Variation = `eternal2kpp`;

const lora = {
  eternal2kpp: {
    loraName: `Towa`,
    probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  eternal2kpp: [`Towa`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const tenshiTsukiTowa = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`one room hiatari futsuu tenshi-tsuki`],
    characterNameEntries: [`towa \\(tenshi-tsuki\\)`],
    characterFeatureEntries: [
      `blue eyes`,
      `grey hair`,
      `long hair`,
      `very long hair`,
      `hair between eyes`,
      `hair intakes`,
      `sidelocks`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
