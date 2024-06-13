import { CharacterDefine } from "../characters.mjs";

type Variation = `no-lora` | `eternal2kpp`;

const lora = {
  "no-lora": null,
  "eternal2kpp": {
    tag: `Hestia`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine["lora"]>;

export const danmachiHestia = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: [`Hestia`],
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
      `white hair bow`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
