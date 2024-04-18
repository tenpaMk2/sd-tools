import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const reZeroEmiliaEft = () =>
  ({
    lora: {
      tag: `emilia-rezero-01`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`emilia`],
    seriesNameEntries: [`re:zero kara hajimeru isekai seikatsu`],
    characterNameEntries: [`emilia \\(re:zero\\)`],
    characterFeatureEntries: [
      `purple eyes`,
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
      `purple hair ribbon`,
      `pointy ears`,
      `elf`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
