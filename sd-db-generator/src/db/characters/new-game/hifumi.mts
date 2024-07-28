import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser` | `eternal2kpp`;

const lora = {
  nochekaiser: {
    loraName: `hifumi-takimoto-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  eternal2kpp: {
    loraName: `Hifumi_Takimoto`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`hifumi takemoto`],
  eternal2kpp: [`Hifumi Takimoto`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  "hair-color": {
    nochekaiser: [`purple hair`],
    eternal2kpp: [`brown hair`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine["characterFeatureEntries"]>
>;

export const newGameHifumi = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`new game!`],
    characterNameEntries: [`takimoto hifumi`],
    characterFeatureEntries: [
      `blue eyes`,
      ...characterFeatureEntries["hair-color"][variation],
      `long hair`,
      `ponytail`,
      `blunt bangs`,
      `sidelocks`,
      `hair bow`,
      `red hair bow -> red bow`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
