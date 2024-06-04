import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `no-lora` | `h_madoka`;

export const amaburiIsuzu = (variation: Variation) =>
  ({
    lora:
      variation === `h_madoka`
        ? {
            tag: `sento_isuzu_xl_pony_v1`,
            probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
          }
        : null,
    loraCharacterTriggerWordEntries: [
      ...(variation === `h_madoka` ? ([`aaisuzu`] as const) : []),
    ],
    seriesNameEntries: [`amagi brilliant park`],
    characterNameEntries: [`sento isuzu`],
    characterFeatureEntries: [
      `brown eyes`,
      `brown hair`,
      `long hair`,
      `ponytail`,
      `hair between eyes`,
      `hair intakes`,
      `sidelocks`,
      `antenna hair`,
      `hair bow`,
      `white hair bow`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.serious,
  }) as const satisfies CharacterDefine;
