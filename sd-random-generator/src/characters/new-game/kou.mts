import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `eternal2kpp`;

const lora = {
  eternal2kpp: {
    tag: `Kou_Yagami`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine["lora"]>;

const loraCharacterTriggerWordEntries = {
  eternal2kpp: [`Kou Yagami`],
} as const satisfies Record<
  Variation,
  CharacterDefine["loraCharacterTriggerWordEntries"]
>;

export const newGameKou = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`new game!`],
    characterNameEntries: [`yagami kou`],
    characterFeatureEntries: [
      `blue eyes`,
      `blonde hair`,
      `long hair`,
      `hair between eyes`,
      `ahoge`,
      `mature female`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
