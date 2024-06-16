import { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko`;

const lora = {
  ibukimakisiko: {
    loraName: `hoshikawa mafuyu_PONY_epoch-000020`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  ibukimakisiko: [],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const blendSMafuyu = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`blend s`],
    characterNameEntries: [`hoshikawa mafuyu`],
    characterFeatureEntries: [
      `purple eyes`,
      `brown hair`,
      `medium hair`,
      `wavy hair`,
      `hair between eyes`,
      `sidelocks`,
      `hair ribbon`,
      `black hair ribbon -> black ribbon`,
    ],
    breastSize: `flat chest`,
    fang: false,
    emotionType: `emotionless`,
  }) as const satisfies CharacterDefine;
