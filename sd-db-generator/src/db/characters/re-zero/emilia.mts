import type { CharacterDefine } from "../characters.mjs";

type Variation = `no-lora` | `eternal2kpp`;

const lora = {
  "no-lora": null,
  "eternal2kpp": {
    loraName: `Emilia`,
    probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
  "eternal2kpp": [`Emilia`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const reZeroEmilia = (variation: Variation): CharacterDefine =>
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
      `purple hair ribbon -> purple ribbon`,
      `pointy ears`,
      `elf`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
