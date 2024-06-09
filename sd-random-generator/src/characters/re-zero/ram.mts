import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `no-lora` | `eternal2kpp`;

const lora = {
  "no-lora": null,
  "eternal2kpp": {
    tag: `Ram`,
    probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
  },
} as const satisfies Record<Variation, CharacterDefine["lora"]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
  "eternal2kpp": [`Ram`],
} as const satisfies Record<
  Variation,
  CharacterDefine["loraCharacterTriggerWordEntries"]
>;

export const reZeroRam = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`re:zero kara hajimeru isekai seikatsu`],
    characterNameEntries: [`ram \\(re:zero\\)`],
    characterFeatureEntries: [
      `red eyes`,
      `tsurime`,
      `pink hair`,
      `short hair`,
      `hair over one eye`,
      `hair ornament`,
      `x hair ornament`,
      `flower knot`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionEntries: emotionPreset.serious,
  }) as const satisfies CharacterDefine;
