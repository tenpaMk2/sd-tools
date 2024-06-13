import { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser` | `eternal2kpp`;

const lora = {
  nochekaiser: {
    tag: `hifumi-takimoto-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  eternal2kpp: {
    tag: `Hifumi_Takimoto`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine["lora"]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`hifumi takemoto`],
  eternal2kpp: [`Hifumi Takimoto`],
} as const satisfies Record<
  Variation,
  CharacterDefine["loraCharacterTriggerWordEntries"]
>;

const parts = {
  hairColor: {
    nochekaiser: [`purple hair`],
    eternal2kpp: [`brown hair`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine["characterFeatureEntries"]>
>;

export const newGameHifumi = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`new game!`],
    characterNameEntries: [`takimoto hifumi`],
    characterFeatureEntries: [
      `blue eyes`,
      ...parts.hairColor[variation],
      `long hair`,
      `ponytail`,
      `blunt bangs`,
      `sidelocks`,
      `hair bow`,
      `red hair bow`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
