import { CharacterDefine } from "../characters.mjs";

type Variation = `no-lora`;

const lora = {
  "no-lora": null,
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const kaguyaSamaAi = (variation: Variation) =>
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
