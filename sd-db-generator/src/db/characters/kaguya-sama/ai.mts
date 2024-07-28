import type { CharacterDefine } from "../characters.mjs";

type Variation = `no-lora` | `nochekaiser`;

const lora = {
  "no-lora": null,
  "nochekaiser": {
    loraName: `ai-hayasaka-s3-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
  "nochekaiser": [`ai hayasaka`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const kaguyaSamaAi = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [
      `kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~`,
    ],
    characterNameEntries: [`hayasaka ai`],
    characterFeatureEntries: [
      `blue eyes`,
      `tsurime`,
      `eyelashes`,
      `blonde hair`,
      `medium hair`,
      `ponytail`,
      `side ponytail`,
      `hair between eyes`,
      `sidelocks`,
      `hair ornament`,
      `hair scrunchie`,
      // TODO: `blue haad scrunchie` .
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `emotionless`,
  }) as const satisfies CharacterDefine;
