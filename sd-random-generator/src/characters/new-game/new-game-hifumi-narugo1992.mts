import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const newGameHifumiNarugo1992 = () =>
  ({
    lora: {
      tag: `takimoto_hifumi_newgame`,
      probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
    },
    loraCharacterTriggerWordEntries: [`mayumi saegusa`],
    seriesNameEntries: [`new game!`],
    characterNameEntries: [`takimoto hifumi`],
    characterFeatureEntries: [
      `blue eyes`,
      `tsurime`,
      `brown hair`,
      `long hair`,
      `ponytail`,
      `blunt bangs`,
      `sidelocks`,
      `hair bow`,
      `red hair bow`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.serious,
  }) as const satisfies CharacterDefine;
