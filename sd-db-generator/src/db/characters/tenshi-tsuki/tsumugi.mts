import type { CharacterDefine } from "../characters.mjs";

type Variation = `duongve` | `eternal2kpp`;

const lora = {
  duongve: {
    loraName: `Tsumugi_Tsutsumi-58`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
  eternal2kpp: {
    loraName: `Tsumugi_Tsutsumi`,
    probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  duongve: [`tsumugi tsutsumi`],
  eternal2kpp: [`Tsumugi Tsutsumi`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const tenshiTsukiTsumugi = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`one room hiatari futsuu tenshi-tsuki`],
    characterNameEntries: [`tsutsumi tsumugi`],
    characterFeatureEntries: [
      `brown eyes`,
      `brown hair`,
      `short hair`,
      `bob cut`,
      `swept bangs`,
      `hair bow`,
      `black hair bow -> black bow`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
