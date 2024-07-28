import type { CharacterDefine } from "../characters.mjs";

type Variation = `no-lora` | `eternal2kpp`;

const lora = {
  "no-lora": null,
  "eternal2kpp": {
    loraName: `Hestia`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
  "eternal2kpp": [`Hestia`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const danmachiHestia = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [
      `dungeon ni deai wo motomeru no wa machigatteiru darou ka`,
    ],
    characterNameEntries: [`hestia \\(danmachi\\)`],
    characterFeatureEntries: [
      `blue eyes`,
      `black hair`,
      `long hair`,
      `twintails`,
      `blunt bangs`,
      `ahoge`,
      `hair bow`,
      `white hair bow -> white bow`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
