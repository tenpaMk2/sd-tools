import { CharacterDefine } from "../characters.mjs";

type Variation = `no-lora` | `eternal2kpp`;

const lora = {
  "no-lora": null,
  "eternal2kpp": {
    loraName: `Kaguya_Shinomiya`,
    probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
  "eternal2kpp": [`Kaguya Shinomiya`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const kaguyaSamaKaguya = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [
      `kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~`,
    ],
    characterNameEntries: [`shinomiya kaguya`],
    characterFeatureEntries: [
      `red eyes`,
      `tsurime`,
      `eyelashes`,
      `black hair`,
      `short hair`,
      `folded ponytail`,
      `parted bangs`,
      `sidelocks`,
      `hair bow`,
      `red hair bow -> red bow`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
