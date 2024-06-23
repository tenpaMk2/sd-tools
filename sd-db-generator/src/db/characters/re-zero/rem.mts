import type { CharacterDefine } from "../characters.mjs";

type Variation = `no-lora` | `eternal2kpp`;

const lora = {
  "no-lora": null,
  "eternal2kpp": {
    loraName: `Rem`,
    probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
  "eternal2kpp": [`Rem`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const reZeroRem = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`re:zero kara hajimeru isekai seikatsu`],
    characterNameEntries: [`rem \\(re:zero\\)`],
    characterFeatureEntries: [
      `blue eyes`,
      `tareme`,
      `blue hair`,
      `short hair`,
      `hair over one eye`,
      `hair ornament`,
      `x hair ornament`,
      `flower knot`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
