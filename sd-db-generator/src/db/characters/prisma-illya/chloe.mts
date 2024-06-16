import { CharacterDefine } from "../characters.mjs";

type Variation = `beast-am7coffeelove`;

const lora = {
  "beast-am7coffeelove": {
    loraName: `clobeasts_pony`,
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

export const prismaIllyaChloe = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`fate/kaleid liner prisma illya`],
    characterNameEntries: [
      `chloe von einzbern`,
      `chloe von einzbern \\(beast style\\)`,
    ],
    characterFeatureEntries: [
      `orange eyes`,
      `eyelashes`,
      `long eyelashes`,
      `pink hair`,
      `long hair`,
      `ponytail`,
      `curtained bangs`,
      `sidelocks`,
      `hair bow`,
      `red hair bow -> red bow`,
      `jingle bell hair ornament -> jingle bell`,
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
    breastSize: `small breasts`,
    fang: true,
    emotionType: `mesugaki`,
  }) as const satisfies CharacterDefine;
