import type { CharacterDefine } from "../characters.mjs";

type Variation = `king-dong` | `ibukimakisiko`;

const lora = {
  "king-dong": {
    loraName: `Sally(bofuri)-Pony`,
    probabilityAndWeights: [{ probability: 1, weight: 1.2 }],
  },
  "ibukimakisiko": {
    loraName: `sally_bofuri_PONY_last`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "king-dong": [`Sally`],
  "ibukimakisiko": [`sally \\(bofuri\\)`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const boufuriSally = (variation: Variation): CharacterDefine =>
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
