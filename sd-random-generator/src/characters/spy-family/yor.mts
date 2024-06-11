import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `eternal2kpp` | `eternal2kpp-thorn-princess`;

const lora = {
  "eternal2kpp": {
    tag: `Yor_Forger`,
    probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
  },
  "eternal2kpp-thorn-princess": {
    tag: `Yor_Forger`,
    probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "eternal2kpp": [`Yor Forger`],
  "eternal2kpp-thorn-princess": [`yor briar`, `Thorn Princess`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  hairband: {
    "eternal2kpp": [`white hairband`],
    "eternal2kpp-thorn-princess": [`gold hairband`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine[`characterFeatureEntries`]>
>;

export const spyFamilyYor = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`spy x family`],
    characterNameEntries: [], // Don't specity this because character trigger words are already specified.
    characterFeatureEntries: [
      `red eyes`,
      `tsurime`,
      `black hair`,
      `short hair with long locks`,
      `hair between eyes`,
      `sidelocks`,
      `hairband`,
      ...characterFeatureEntries.hairband[variation],
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
