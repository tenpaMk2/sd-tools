import { CharacterDefine } from "../characters.mjs";

type Variation = `gwess` | `witch-gwess`;

const lora = {
  "gwess": {
    loraName: `Miyafuji_PonyXL`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "witch-gwess": {
    loraName: `Miyafuji_PonyXL`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "gwess": [`aimiyafuji`],
  "witch-gwess": [`aimiyafuji`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  animal: {
    "gwess": [],
    "witch-gwess": [`animal ears`, `tail`, `animal ear fluff`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine[`characterFeatureEntries`]>
>;

export const strikeWitchesYoshika = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`world witches series`, `strike witches`],
    characterNameEntries: [`miyafuji yoshika`],
    characterFeatureEntries: [
      `brown eyes`,
      `brown hair`,
      `short hair`,
      `hair flaps`,
      `hair between eyes`,
      ...characterFeatureEntries.animal[variation],
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
