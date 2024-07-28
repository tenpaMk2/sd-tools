import type { CharacterDefine } from "../characters.mjs";

type Variation = `notekaga`;

const lora = {
  notekaga: {
    loraName: `akoya_matama-pony-v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  notekaga: [`akoya matama`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const mahoakoMatama = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
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
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
