import type { CharacterDefine } from "../characters.mjs";

type Variation = `little-jelly`;

const lora = {
  "little-jelly": {
    loraName: `AmagiBrilliantPark_LatifaFleuranzaXL`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "little-jelly": [`LatifaFleuranza`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const amaburiLatifa = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [], // Do not specify series name for Littye Jelly LoRA because it mixes Isuzu into this character.
    characterNameEntries: [], // Do not specify character name for Little Jelly LoRA because it mix Isuzu into this character.
    characterFeatureEntries: [
      `blue eyes`,
      `blonde hair`,
      `long hair`,
      `drill hair`,
      `wavy hair`,
      `sidelocks`,
      `drill sidelocks`,
    ],
    breastSize: `flat chest`,
    fang: false,
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
