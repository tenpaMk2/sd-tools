import type { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko` | `ponytail-ibukimakisiko`;

const lora = {
  "ibukimakisiko": {
    loraName: `shamiko_machikado mazoku_PONY_epoch-000020`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "ponytail-ibukimakisiko": {
    loraName: `shamiko_machikado mazoku_PONY_epoch-000020`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "ibukimakisiko": [`yoshida yuuko \\(machikado mazoku\\)`],
  "ponytail-ibukimakisiko": [`yoshida yuuko \\(machikado mazoku\\)`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  hair: {
    "ibukimakisiko": [`long hair`],
    "ponytail-ibukimakisiko": [`ponytail`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine[`characterFeatureEntries`]>
>;

export const machikadoMazokuShamiko = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`machikado mazoku`],
    characterNameEntries: [`yoshida yuuko \\(machikado mazoku\\)`],
    characterFeatureEntries: [
      `brown eyes`,
      `red hair`,
      ...characterFeatureEntries.hair[variation],
      `hair between eyes`,
      `sidelocks`,
      `ahoge`,
      `horns`,
      `demon tail`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
