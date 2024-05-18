import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const reZeroEmilia = () =>
  ({
    lora: null,
    loraCharacterTriggerWordEntries: [],
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
