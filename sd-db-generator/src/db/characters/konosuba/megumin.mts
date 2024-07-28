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

export const konosubaMegumin = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`kono subarashii sekai ni shukufuku wo!`],
    characterNameEntries: [`megumin`],
    characterFeatureEntries: [
      `red eyes`,
      `tsurime`,
      `brown hair`,
      `short hair`,
      `short hair with long locks`,
      `sidelocks`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `mesugaki`,
  }) as const satisfies CharacterDefine;
