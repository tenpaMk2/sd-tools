import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const sasuoniMiyukiEft = () =>
  ({
    lora: {
      tag: `miyuki-mahouka`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`miyuki shiba`],
    seriesNameEntries: [`mahouka koukou no rettousei`],
    characterNameEntries: [`shiba miyuki`],
    characterFeatureEntries: [
      `black eyes`,
      `blue eyes`,
      `tsurime`,
      `eyelashes`,
      `black hair`,
      `long hair`,
      `hime cut`,
      `straight hair`,
      `blunt bangs`,
      `blunt ends`,
      `sidelocks`,
      `hair ornament`,
      `snowflake hair ornament`,
      `tress ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
