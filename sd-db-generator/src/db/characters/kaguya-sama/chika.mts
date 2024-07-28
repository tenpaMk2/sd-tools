import type { CharacterDefine } from "../characters.mjs";

type Variation = `no-lora` | `eternal2kpp`;

const lora = {
  "no-lora": null,
  "eternal2kpp": {
    loraName: `Chika_Fujiwara`,
    probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
  "eternal2kpp": [`Chika Fujiwara`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const kaguyaSamaChika = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [
      `kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~`,
    ],
    characterNameEntries: [`fujiwara chika`],
    characterFeatureEntries: [
      `blue eyes`,
      `tareme`,
      `pink hair`,
      `long hair`,
      `straight hair`,
      `blunt bangs`,
      `hair bow`,
      `black hair bow -> black bow`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
