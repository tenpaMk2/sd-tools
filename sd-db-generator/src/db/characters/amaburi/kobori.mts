import type { CharacterDefine } from "../characters.mjs";

type Variation = `little-jelly`;

const lora = {
  "little-jelly": {
    loraName: `AmagiBrilliantPark_KoboriXL`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "little-jelly": [`KoboriABP`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const amaburiKobori = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [], // Do not specify series name for Littye Jelly LoRA because it mixes Isuzu into this character.
    characterNameEntries: [], // Do not specify character name for Little Jelly LoRA because it mix Isuzu into this character.
    characterFeatureEntries: [
      `brown eyes`,
      `brown hair`,
      `long hair`,
      `hime cut`,
      `blunt bangs`,
      `sidelocks`,
      `hair ornament`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `emotionless`,
  }) as const satisfies CharacterDefine;
