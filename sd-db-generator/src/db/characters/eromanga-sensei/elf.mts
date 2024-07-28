import type { CharacterDefine } from "../characters.mjs";

type Variation = `eternal2kpp`;

const lora = {
  eternal2kpp: {
    loraName: `Elf_Yamada`,
    probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  eternal2kpp: [`Elf Yamada`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const eromangaSenseiElf = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`eromanga sensei`],
    characterNameEntries: [`yamada elf`],
    characterFeatureEntries: [
      `brown eyes`,
      `blonde hair`,
      `long hair`,
      `drill hair`,
      // `twin drills`,
      `parted bangs`,
      `sidelocks`,
      `drill sidelocks`,
      `hair bow`,
      `red hair bow -> red bow`,
      `hairband`,
      `red hairband`,
      `pointy ears`,
      `elf`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `tsundere`,
  }) as const satisfies CharacterDefine;
