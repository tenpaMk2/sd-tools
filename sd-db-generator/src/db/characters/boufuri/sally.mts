import { CharacterDefine } from "../characters.mjs";

type Variation = `king-dong`;

const lora = {
  "king-dong": {
    loraName: `Sally(bofuri)-Pony`,
    probabilityAndWeights: [{ probability: 1, weight: 1.2 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "king-dong": [`Sally`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const boufuriSally = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [
      `itai no wa iya nano de bougyoryoku ni kyokufuri shitai to omoimasu`,
    ],
    characterNameEntries: [`sally \\(bofuri\\)`],
    characterFeatureEntries: [
      `brown eyes`,
      `tsurime`,
      `brown hair`,
      `long hair`,
      `ponytail`,
      `high ponytail`,
      `hair between eyes`,
      `sidelocks`,
      `hair bow`,
      `white hair bow -> white bow`,
      `hair ribbon`,
      `white hair ribbon -> white ribbon`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
