import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `no-lora` | `eternal2kpp`;

const lora = {
  "no-lora": null,
  "eternal2kpp": {
    tag: `Emilia`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine["lora"]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
  "eternal2kpp": [`Emilia`],
} as const satisfies Record<
  Variation,
  CharacterDefine["loraCharacterTriggerWordEntries"]
>;

export const reZeroEmilia = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`re:zero kara hajimeru isekai seikatsu`],
    characterNameEntries: [`emilia \\(re:zero\\)`],
    characterFeatureEntries: [
      `purple eyes`,
      `tsurime`,
      `grey hair`,
      `white hair`,
      `long hair`,
      `braid`,
      `crown braid`,
      `blunt bangs`,
      `sidelocks`,
      `hair ornament`,
      `x hair ornament`,
      `hair flower`,
      `hair ribbon`,
      `purple hair ribbon`,
      `pointy ears`,
      `elf`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
