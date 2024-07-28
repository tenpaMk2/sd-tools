import type { CharacterDefine } from "../characters.mjs";

type Variation = `eternal2kpp`;

const lora = {
  eternal2kpp: {
    loraName: `Ryuu_Lion`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  eternal2kpp: [`Ryuu Lion`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const danmachiRyu = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [
      `dungeon ni deai wo motomeru no wa machigatteiru darou ka`,
    ],
    characterNameEntries: [`ryu lion`],
    characterFeatureEntries: [
      `blue eyes`,
      `tsurime`,
      `blonde hair`,
      `short hair`,
      `wavy hair`,
      `hair between eyes`,
      `ahoge`,
      `pointy ears`,
      `elf`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `tsundere`,
  }) as const satisfies CharacterDefine;
