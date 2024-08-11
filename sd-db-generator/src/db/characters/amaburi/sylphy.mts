import type { CharacterDefine } from "../characters.mjs";

type Variation = `little-jelly`;

const lora = {
  "little-jelly": {
    loraName: `AmagiBrilliantPark_SylphyXL`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "little-jelly": [`SylphyABP`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const amaburiSylphy = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [], // Do not specify series name for Littye Jelly LoRA because it mixes Isuzu into this character.
    characterNameEntries: [], // Do not specify character name for Little Jelly LoRA because it mix Isuzu into this character.
    characterFeatureEntries: [
      `blue eyes`,
      `blonde hair`,
      `long hair`,
      `two side up`,
      `hair ribbon`,
      `blue hair ribbon -> blue ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
