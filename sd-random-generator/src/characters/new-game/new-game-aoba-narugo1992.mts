import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const newGameAobaNarugo1992 = () =>
  ({
    lora: {
      tag: `suzukaze_aoba_newgame`,
      probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
    },
    loraCharacterTriggerWordEntries: [`suzukaze_aoba_newgame`],
    seriesNameEntries: [`new game!`],
    characterNameEntries: [`suzukaze aoba`],
    characterFeatureEntries: [
      `purple eyes`,
      `purple hair`,
      `long hair`,
      `twintails`,
      `blunt bangs`,
      `blunt ends`,
      `hair ornament`,
      `hair flower`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
