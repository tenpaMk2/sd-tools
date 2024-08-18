import type { CharacterDefine } from "../characters.mjs";

type Variation =
  | `beast-am7coffeelove`
  | `half-updo-h-madoka`
  | `ponytail-h-madoka`
  | `twintails-clip-h-madoka`
  | `twintails-x-h-madoka`;

const lora = {
  "beast-am7coffeelove": {
    loraName: `miubeasts_ponyv1`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
  "half-updo-h-madoka": {
    loraName: `miyu_edelfelt_ponyxl_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
  },
  "ponytail-h-madoka": {
    loraName: `miyu_edelfelt_ponyxl_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
  },
  "twintails-clip-h-madoka": {
    loraName: `miyu_edelfelt_ponyxl_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
  },
  "twintails-x-h-madoka": {
    loraName: `miyu_edelfelt_ponyxl_v1`,
    probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "beast-am7coffeelove": [],
  "half-updo-h-madoka": [],
  "ponytail-h-madoka": [],
  "twintails-clip-h-madoka": [],
  "twintails-x-h-madoka": [],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterNameEntries = {
  "beast-am7coffeelove": [`miyu edelfelt`, `miyu edelfelt \\(beast style\\)`],
  "half-updo-h-madoka": [`miyu edelfelt`],
  "ponytail-h-madoka": [`miyu edelfelt`],
  "twintails-clip-h-madoka": [`miyu edelfelt`],
  "twintails-x-h-madoka": [`miyu edelfelt`],
} as const satisfies Record<Variation, CharacterDefine["characterNameEntries"]>;

const characterFeatureEntries = {
  "eyes": {
    "beast-am7coffeelove": [`brown eyes`],
    "half-updo-h-madoka": [`brown eyes`],
    "ponytail-h-madoka": [`brown eyes`],
    "twintails-clip-h-madoka": [`brown eyes`],
    "twintails-x-h-madoka": [`brown eyes`],
  },
  "hair": {
    "beast-am7coffeelove": [`black hair`, `medium hair`],
    "half-updo-h-madoka": [`black hair`, `short hair`],
    "ponytail-h-madoka": [`black hair`, `long hair`],
    "twintails-clip-h-madoka": [`black hair`],
    "twintails-x-h-madoka": [`black hair`],
  },
  "tie": {
    "beast-am7coffeelove": [`twintails`],
    "half-updo-h-madoka": [`half updo`],
    "ponytail-h-madoka": [`ponytail`],
    "twintails-clip-h-madoka": [`twintails`],
    "twintails-x-h-madoka": [`twintails`],
  },
  "bangs": {
    "beast-am7coffeelove": [`center-flap bangs`, `hair between eyes`],
    "half-updo-h-madoka": [`center-flap bangs`, `hair between eyes`],
    "ponytail-h-madoka": [`swept bangs`],
    "twintails-clip-h-madoka": [`center-flap bangs`, `hair between eyes`],
    "twintails-x-h-madoka": [`center-flap bangs`, `hair between eyes`],
  },
  "sidelocks": {
    "beast-am7coffeelove": [`sidelocks`],
    "half-updo-h-madoka": [`sidelocks`],
    "ponytail-h-madoka": [`sidelocks`],
    "twintails-clip-h-madoka": [`sidelocks`],
    "twintails-x-h-madoka": [`sidelocks`],
  },
  "hair-ornament": {
    "beast-am7coffeelove": [
      `hair ornament`,
      `hairclip`,
      `white hair bow -> white bow`,
    ],
    "half-updo-h-madoka": [`hair ornament`],
    "ponytail-h-madoka": [`hairclip`],
    "twintails-clip-h-madoka": [`hairclip`],
    "twintails-x-h-madoka": [`x hair ornament`],
  },
  "body-feature": {
    "beast-am7coffeelove": [
      `fake animal ears`,
      `animal ears`,
      `cat ears`,
      `animal ear fluff`,
      `cat tail`,
      `grey long tail -> grey tail`,
    ],
    "half-updo-h-madoka": [],
    "ponytail-h-madoka": [],
    "twintails-clip-h-madoka": [],
    "twintails-x-h-madoka": [],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine["characterFeatureEntries"]>
>;

export const prismaIllyaMiyu = (variation: Variation): CharacterDefine =>
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
    fang: false,
    emotionType: `emotionless`,
  }) as const satisfies CharacterDefine;
