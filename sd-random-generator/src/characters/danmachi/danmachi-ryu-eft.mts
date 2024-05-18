import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const danmachiRyuEft = () =>
  ({
    lora: {
      tag: `ryuu-danmachi`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`ryuu lion`],
    seriesNameEntries: [
      `dungeon ni deai wo motomeru no wa machigatteiru darou ka`,
    ],
    characterNameEntries: [`ryu lion`],
    characterFeatureEntries: [
      `blue eyes`,
      `tsurime`,
      `blonde hair`,
      `short hair`,
      `wavy hair`,
      `hair between eyes`,
      `sidelocks`,
      `ahoge`,
      `pointy ears`,
      `elf`,
      `thick thighs`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.uptight,
  }) as const satisfies CharacterDefine;
