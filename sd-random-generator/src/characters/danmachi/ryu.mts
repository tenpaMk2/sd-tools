import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `eternal2kpp`;

export const danmachiRyu = (variation: Variation) =>
  ({
    lora: {
      tag: `Ryuu_Lion`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`Ryuu Lion`],
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
      `ahoge`,
      `pointy ears`,
      `elf`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.uptight,
  }) as const satisfies CharacterDefine;
