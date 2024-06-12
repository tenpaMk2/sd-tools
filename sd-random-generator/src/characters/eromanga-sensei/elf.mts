import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `eternal2kpp`;

const lora = {
  eternal2kpp: {
    tag: `Elf_Yamada`,
    probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  eternal2kpp: [`Elf Yamada`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const eromangaSenseiElf = (variation: Variation) =>
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
      `red hair bow`,
      `hairband`,
      `red hairband`,
      `pointy ears`,
      `elf`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionEntries: emotionPreset.uptight,
  }) as const satisfies CharacterDefine;
