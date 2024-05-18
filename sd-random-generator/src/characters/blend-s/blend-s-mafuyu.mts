import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `ibukimakisiko`;

export const blendSMafuyu = (variation: Variation) =>
  ({
    lora: {
      tag: `hoshikawa mafuyu_PONY_epoch-000020`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [],
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
      `black hair ribbon`,
    ],
    breastSize: `flat chest`,
    fang: false,
    emotionEntries: emotionPreset.deadpanned,
  }) as const satisfies CharacterDefine;
