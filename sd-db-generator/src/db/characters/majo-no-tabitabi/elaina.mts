import type { CharacterDefine } from "../characters.mjs";

type Variation = `ibukimakisiko` | `no-ahoge-ibukimakisiko`;

const lora = {
  "ibukimakisiko": {
    loraName: `elaina_majo no tabitabi_PONY_last`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "no-ahoge-ibukimakisiko": {
    loraName: `elaina_majo no tabitabi_PONY_last`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "ibukimakisiko": [`elaina \\(majo no tabitabi\\)`],
  "no-ahoge-ibukimakisiko": [`elaina \\(majo no tabitabi\\)`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  ahoge: {
    "ibukimakisiko": [`ahoge`],
    "no-ahoge-ibukimakisiko": [],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine[`characterFeatureEntries`]>
>;

export const majoNoTabitabiElaina = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`majo no tabitabi`],
    characterNameEntries: [`elaina \\(majo no tabitabi\\)`],
    characterFeatureEntries: [
      `purple eyes`,
      `grey hair`,
      `white hair`,
      `long hair`,
      `hair between eyes`,
      `sidelocks`,
      `braid`,
      `side braid`,
      `single braid`,
      ...characterFeatureEntries.ahoge[variation],
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
