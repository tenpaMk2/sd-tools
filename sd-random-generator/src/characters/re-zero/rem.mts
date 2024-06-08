import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `no-lora` | `eternal2kpp`;

const lora = {
  "no-lora": null,
  "eternal2kpp": {
    tag: `Rem`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine["lora"]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
  "eternal2kpp": [`Rem`],
} as const satisfies Record<
  Variation,
  CharacterDefine["loraCharacterTriggerWordEntries"]
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
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
