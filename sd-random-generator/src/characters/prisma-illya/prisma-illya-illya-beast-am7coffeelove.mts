import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const prismaIllyaIllyaBeastAm7coffeelove = () =>
  ({
    lora: {
      tag: `illyabeasts_Ponyv2`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`fate/kaleid liner prisma illya`],
    characterNameEntries: [
      `illyasviel von einzbern`,
      `illyasviel von einzbern \\(beast style\\)`,
    ],
    characterFeatureEntries: [
      `red eyes`,
      `eyelashes`,
      `white hair`,
      `long hair`,
      `curtained bangs`,
      `sidelocks`,
      `hair ribbon`,
      `red hair ribbon`,
      `jingle bell hair ornament`,
      `fake animal ears`,
      `animal ears`,
      `cat ears`,
      `animal ear fluff`,
      `cat tail`,
      `black long tail`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
