import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const amaburiIsuzu = () =>
  ({
    lora: null,
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`amagi brilliant park`],
    characterNameEntries: [`sento isuzu`],
    characterFeatureEntries: [
      `brown eyes`,
      `brown hair`,
      `long hair`,
      `ponytail`,
      `hair between eyes`,
      `hair intakes`,
      `sidelocks`,
      `antenna hair`,
      `hair bow`,
      `white hair bow`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.serious,
  }) as const satisfies CharacterDefine;
