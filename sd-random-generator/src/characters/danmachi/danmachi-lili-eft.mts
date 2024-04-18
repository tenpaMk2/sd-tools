import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const danmachiLiliEft = () =>
  ({
    lora: {
      tag: `lili-danmachi`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [
      `dungeon ni deai wo motomeru no wa machigatteiru darou ka`,
    ],
    characterNameEntries: [`liliruca arde`],
    characterFeatureEntries: [
      `brown eyes`,
      `brown hair`,
      `medium hair`,
      `messy hair`,
      `hair between eyes`,
      `sidelocks`,
      `ahoge`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
