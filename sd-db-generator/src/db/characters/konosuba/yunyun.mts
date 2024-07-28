import type { CharacterDefine } from "../characters.mjs";

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

export const konosubaYunyun = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`kono subarashii sekai ni shukufuku wo!`],
    characterNameEntries: [`yunyun \\(konosuba\\)`],
    characterFeatureEntries: [
      `red eyes`,
      `eyelashes`,
      `brown hair`,
      `long hair`,
      `braid`,
      `crown braid`,
      `hair between eyes`,
      `sidelocks`,
      `hair over shoulder`,
      `hair ornament`,
      `hair bow`,
      `red hair bow -> red bow`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
