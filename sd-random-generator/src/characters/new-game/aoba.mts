import { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser` | `eternal2kpp`;

const lora = {
  nochekaiser: {
    tag: `aoba-suzukaze-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  eternal2kpp: {
    tag: `Aoba_Suzukaze`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine["lora"]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`aoba suzukaze`],
  eternal2kpp: [`Aoba Suzukaze`],
} as const satisfies Record<
  Variation,
  CharacterDefine["loraCharacterTriggerWordEntries"]
>;

const parts = {
  eyebrows: {
    nochekaiser: [`eyebrows`],
    eternal2kpp: [],
  },
  hairOrnament: {
    nochekaiser: [`hair ornament`],
    eternal2kpp: [`hair ornament`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine["characterFeatureEntries"]>
>;

export const newGameAoba = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`new game!`],
    characterNameEntries: [`suzukaze aoba`],
    characterFeatureEntries: [
      ...parts.eyebrows[variation],
      `purple eyes`,
      `long hair`,
      `purple hair`,
      ...parts.hairOrnament[variation],
      `twintails`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
