import type { CharacterDefine } from "../characters.mjs";

type Variation =
  | `beast-am7coffeelove`
  | `h-madoka`
  | `half-updo-h-madoka`
  | `ponytail-h-madoka`;

const lora = {
  "beast-am7coffeelove": {
    loraName: `clobeasts_pony`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "h-madoka": {
    loraName: `chloe_von_einzbern_ponyxl_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
  },
  "half-updo-h-madoka": {
    loraName: `chloe_von_einzbern_ponyxl_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
  },
  "ponytail-h-madoka": {
    loraName: `chloe_von_einzbern_ponyxl_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "beast-am7coffeelove": [],
  "h-madoka": [`aachloe`],
  "half-updo-h-madoka": [`aachloe`],
  "ponytail-h-madoka": [`aachloe`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterNameEntries = {
  "beast-am7coffeelove": [
    `chloe von einzbern`,
    `chloe von einzbern \\(beast style\\)`,
  ],
  "h-madoka": [`chloe von einzbern`],
  "half-updo-h-madoka": [`chloe von einzbern`],
  "ponytail-h-madoka": [`chloe von einzbern`],
} as const satisfies Record<Variation, CharacterDefine["characterNameEntries"]>;

const characterFeatureEntries = {
  "eyes": {
    "beast-am7coffeelove": [`orange eyes`, `eyelashes`, `long eyelashes`],
    "h-madoka": [`orange eyes`, `eyelashes`, `long eyelashes`],
    "half-updo-h-madoka": [`orange eyes`, `eyelashes`, `long eyelashes`],
    "ponytail-h-madoka": [`orange eyes`, `eyelashes`, `long eyelashes`],
  },
  "hair": {
    "beast-am7coffeelove": [`pink hair`, `long hair`],
    "h-madoka": [`pink hair`, `long hair`],
    "half-updo-h-madoka": [`pink hair`, `long hair`],
    "ponytail-h-madoka": [`pink hair`, `long hair`],
  },
  "tie": {
    "beast-am7coffeelove": [`ponytail`],
    "h-madoka": [`one side up`],
    "half-updo-h-madoka": [`half updo`],
    "ponytail-h-madoka": [`ponytail`],
  },
  "bangs": {
    "beast-am7coffeelove": [`curtained bangs`],
    "h-madoka": [`curtained bangs`],
    "half-updo-h-madoka": [`curtained bangs`],
    "ponytail-h-madoka": [`curtained bangs`],
  },
  "sidelocks": {
    "beast-am7coffeelove": [`sidelocks`],
    "h-madoka": [`sidelocks`],
    "half-updo-h-madoka": [`sidelocks`],
    "ponytail-h-madoka": [`sidelocks`],
  },
  "hair-ornament": {
    "beast-am7coffeelove": [
      `hair bow`,
      `red hair bow -> red bow`,
      `jingle bell hair ornament -> jingle bell`,
    ],
    "h-madoka": [],
    "half-updo-h-madoka": [`hairpin`], // `hair stick` ?
    "ponytail-h-madoka": [],
  },
  "body-feature": {
    "beast-am7coffeelove": [
      `dark skin`,
      `dark-skinned female`,
      // `stomach tattoo`, // TODO: stomach tattoo. Idea: hook `navel` tag.
      `fake animal ears`,
      `animal ears`,
      `dog ears`,
      `animal ear fluff`,
      `dog tail`,
      `white long tail -> white tail`,
    ],
    "h-madoka": [`dark skin`, `dark-skinned female`],
    "half-updo-h-madoka": [`dark skin`, `dark-skinned female`],
    "ponytail-h-madoka": [`dark skin`, `dark-skinned female`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine["characterFeatureEntries"]>
>;

export const prismaIllyaChloe = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`fate/kaleid liner prisma illya`],
    characterNameEntries: characterNameEntries[variation],
    characterFeatureEntries: [
      ...characterFeatureEntries["eyes"][variation],
      ...characterFeatureEntries["hair"][variation],
      ...characterFeatureEntries["tie"][variation],
      ...characterFeatureEntries["bangs"][variation],
      ...characterFeatureEntries["sidelocks"][variation],
      ...characterFeatureEntries["hair-ornament"][variation],
      ...characterFeatureEntries["body-feature"][variation],
    ],
    breastSize: `small breasts`,
    fang: true,
    emotionType: `mesugaki`,
  }) as const satisfies CharacterDefine;
