import { CharacterDefine } from "../characters.mjs";

type Variation = `no-lora` | `h_madoka` | `nochekaiser`;

const lora = {
  "no-lora": null,
  "h_madoka": {
    tag: `sento_isuzu_xl_pony_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
  },
  "nochekaiser": {
    tag: `isuzu-sento-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine["lora"]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
  "h_madoka": [`aaisuzu`],
  "nochekaiser": [`isuzu sento`],
} as const satisfies Record<
  Variation,
  CharacterDefine["loraCharacterTriggerWordEntries"]
>;

const characterFeatureEntries = {
  ahoge: {
    "no-lora": [`antenna hair`],
    "h_madoka": [`antenna hair`],
    "nochekaiser": [`ahoge`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine["characterFeatureEntries"]>
>;

export const amaburiIsuzu = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`amagi brilliant park`],
    characterNameEntries: [`sento isuzu`],
    characterFeatureEntries: [
      `brown eyes`,
      `brown hair`,
      `light brown hair`,
      `long hair`,
      `ponytail`,
      `hair between eyes`,
      `hair intakes`,
      `sidelocks`,
      ...characterFeatureEntries.ahoge[variation],
      `hair bow`,
      `white hair bow`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
