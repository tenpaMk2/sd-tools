import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const mahoakoMatamaNotekaga = () =>
  ({
    lora: {
      tag: `akoya_matama-pony-v1`,
      probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
    },
    loraCharacterTriggerWordEntries: [`akoya matama`],
    seriesNameEntries: [`mahou shoujo ni akogarete`],
    characterNameEntries: [`akoya matama`, `loco musica`],
    characterFeatureEntries: [
      `aqua eyes`,
      `eyelashes`,
      `multicolored hair`,
      `streaked hair`,
      `brown hair`,
      `aqua hair`,
      `two side up`,
      `hair between eyes`,
    ],
    breastSize: `large breasts`,
    fang: true,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
