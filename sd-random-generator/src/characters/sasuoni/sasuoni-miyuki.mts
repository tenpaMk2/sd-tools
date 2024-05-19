import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `nochekaiser`;

export const sasuoniMiyuki = (variation: Variation) =>
  ({
    lora: {
      tag: `miyuki-shiba-s2-ponyxl-lora-nochekaiser`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [`miyuki shiba`],
    seriesNameEntries: [`mahouka koukou no rettousei`],
    characterNameEntries: [`shiba miyuki`],
    characterFeatureEntries: [
      `blue eyes`,
      `black hair`,
      `long hair`,
      `hime cut`,
      `straight hair`,
      `blunt bangs`,
      `sidelocks`,
      `hair ornament`,
      `snowflake hair ornament`,
      `hair ribbon`,
      `tress ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.serious,
  }) as const satisfies CharacterDefine;
