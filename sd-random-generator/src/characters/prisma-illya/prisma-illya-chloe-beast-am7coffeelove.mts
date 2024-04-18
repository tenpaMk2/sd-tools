import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const prismaIllyaChloeBeastAm7coffeelove = () =>
  ({
    lora: {
      tag: `clobeasts_pony`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [],
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
      `red hair bow`,
      `jingle bell hair ornament`,
      `dark skin`,
      `dark-skinned female`,
      `stomach tattoo`, // TODO: stomach tattoo. Idea: hook `navel` tag.
      `fake animal ears`,
      `animal ears`,
      `dog ears`,
      `animal ear fluff`,
      `dog tail`,
      `white long tail`,
    ],
    breastSize: `small breasts`,
    fang: true,
    emotionEntries: emotionPreset.mesugaki,
  }) as const satisfies CharacterDefine;
