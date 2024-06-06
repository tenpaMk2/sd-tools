import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `eternal2kpp`;

const lora = {
  eternal2kpp: {
    tag: `Nene_Sakura`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine["lora"]>;

const loraCharacterTriggerWordEntries = {
  eternal2kpp: [`Nene Sakura`],
} as const satisfies Record<
  Variation,
  CharacterDefine["loraCharacterTriggerWordEntries"]
>;

export const newGameNene = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`new game!`],
    characterNameEntries: [`sakura nene`],
    characterFeatureEntries: [
      `blue eyes`,
      `blonde hair`,
      `medium hair`,
      `hair flaps`,
      `twintails`,
      `low twintails`,
      `arched bangs`,
      `hair ornament`,
      `hair bobbles`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;