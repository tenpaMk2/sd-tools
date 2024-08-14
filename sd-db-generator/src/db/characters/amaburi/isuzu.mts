import type { CharacterDefine } from "../characters.mjs";

type Variation =
  | `h-madoka`
  | `little-jelly`
  | `no-lora`
  | `nochekaiser`
  | `pirate-little-jelly`;

const lora = {
  "h-madoka": {
    loraName: `sento_isuzu_xl_pony_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
  },
  "little-jelly": {
    loraName: `AmagiBrilliantPark_SentoIsuzuXL`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
  "no-lora": null,
  "nochekaiser": {
    loraName: `isuzu-sento-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "pirate-little-jelly": {
    loraName: `AmagiBrilliantPark_SentoIsuzuXL`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const seriesNameEntries = {
  "h-madoka": [`amagi brilliant park`],
  "little-jelly": [],
  "no-lora": [`amagi brilliant park`],
  "nochekaiser": [`amagi brilliant park`],
  "pirate-little-jelly": [], // Do not specify series name for Littye Jelly LoRA because it mixes Isuzu into this character.
} as const satisfies Record<Variation, CharacterDefine[`seriesNameEntries`]>;

const characterNameEntries = {
  "h-madoka": [`sento isuzu`],
  "little-jelly": [],
  "no-lora": [`sento isuzu`],
  "nochekaiser": [`sento isuzu`],
  "pirate-little-jelly": [], // Do not specify series name for Littye Jelly LoRA because it mixes Isuzu into this character.
} as const satisfies Record<Variation, CharacterDefine[`characterNameEntries`]>;

const loraCharacterTriggerWordEntries = {
  "h-madoka": [`aaisuzu`],
  "little-jelly": [],
  "no-lora": [],
  "nochekaiser": [`isuzu sento`],
  "pirate-little-jelly": [],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  tie: {
    "h-madoka": [`ponytail`],
    "little-jelly": [`ponytail`],
    "no-lora": [`ponytail`],
    "nochekaiser": [`ponytail`],
    "pirate-little-jelly": [],
  },
  ahoge: {
    "h-madoka": [`hair intakes`, `antenna hair`],
    "little-jelly": [`hair intakes`, `antenna hair`],
    "no-lora": [`hair intakes`, `antenna hair`],
    "nochekaiser": [`hair intakes`, `ahoge`],
    "pirate-little-jelly": [],
  },
  ornament: {
    "h-madoka": [`hair bow`, `white hair bow -> white bow`],
    "little-jelly": [`hair bow`, `white hair bow -> white bow`],
    "no-lora": [`hair bow`, `white hair bow -> white bow`],
    "nochekaiser": [`hair bow`, `white hair bow -> white bow`],
    "pirate-little-jelly": [`eyepatch`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine["characterFeatureEntries"]>
>;

export const amaburiIsuzu = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: seriesNameEntries[variation],
    characterNameEntries: characterNameEntries[variation],
    characterFeatureEntries: [
      `brown eyes`,
      `brown hair`,
      `light brown hair`,
      `long hair`,
      ...characterFeatureEntries.tie[variation],
      `hair between eyes`,
      ...characterFeatureEntries.ahoge[variation],
      ...characterFeatureEntries.ornament[variation],
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
