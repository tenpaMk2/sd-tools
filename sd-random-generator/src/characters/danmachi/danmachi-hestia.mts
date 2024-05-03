import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const danmachiHestia = () =>
  ({
    lora: null,
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [
      `dungeon ni deai wo motomeru no wa machigatteiru darou ka`,
    ],
    characterNameEntries: [`hestia \\(danmachi\\)`],
    characterFeatureEntries: [
      `blue eyes`,
      `black hair`,
      `long hair`,
      `twintails`,
      `blunt bangs`,
      `sidelocks`,
      `ahoge`,
      `hair bow`,
      `white hair bow`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;