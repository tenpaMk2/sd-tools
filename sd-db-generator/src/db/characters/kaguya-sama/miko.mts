import type { CharacterDefine } from "../characters.mjs";

type Variation = `no-lora` | `nochekaiser`;

const lora = {
  "no-lora": null,
  "nochekaiser": {
    loraName: `miko-iino-s3-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
  "nochekaiser": [`miko iino`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const kaguyaSamaMiko = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [
      `kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~`,
    ],
    characterNameEntries: [`iino miko`],
    characterFeatureEntries: [
      `brown eyes`,
      `tsurime`,
      `brown hair`,
      `long hair`,
      `hair over shoulder`,
      `twintails`,
      `low twintails`,
      `blunt bangs`,
      `hair tie`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `tsundere`,
  }) as const satisfies CharacterDefine;
