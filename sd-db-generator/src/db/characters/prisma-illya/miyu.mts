import { CharacterDefine } from "../characters.mjs";

type Variation = `beast-am7coffeelove`;

const lora = {
  "beast-am7coffeelove": {
    loraName: `miubeasts_ponyv1`,
    probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "beast-am7coffeelove": [],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

// const characterFeatureEntries = {
//   "eyebrows": {
//     nochekaiser: [`eyebrows`],
//     eternal2kpp: [],
//   },
//   "hair-ornament": {
//     nochekaiser: [`hair ornament`],
//     eternal2kpp: [`hair ornament`],
//   },
// } as const satisfies Record<
//   string,
//   Record<Variation, CharacterDefine["characterFeatureEntries"]>
// >;

export const prismaIllyaMiyu = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`fate/kaleid liner prisma illya`],
    characterNameEntries: [`miyu edelfelt`, `miyu edelfelt \\(beast style\\)`],
    characterFeatureEntries: [
      `brown eyes`,
      `black hair`,
      `medium hair`,
      `twintails`,
      `center-flap bangs`,
      `hair between eyes`,
      `sidelocks`,
      `hair ornament`,
      `hairclip`,
      `white hair bow -> white bow`,
      `fake animal ears`,
      `animal ears`,
      `cat ears`,
      `animal ear fluff`,
      `cat tail`,
      `grey long tail -> grey tail`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionType: `emotionless`,
  }) as const satisfies CharacterDefine;
