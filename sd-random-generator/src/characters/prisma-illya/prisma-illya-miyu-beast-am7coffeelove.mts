import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const prismaIllyaMiyuBeastAm7coffeelove = () =>
  ({
    lora: {
      tag: `miubeasts_ponyv1`,
      probabilityAndWeights: [{ probability: 1, weight: 1.0 }],
    },
    loraCharacterTriggerWordEntries: [],
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
      `white hair bow`,
      `fake animal ears`,
      `animal ears`,
      `cat ears`,
      `animal ear fluff`,
      `cat tail`,
      `grey long tail`,
    ],
    breastSize: `small breasts`,
    fang: false,
    emotionEntries: emotionPreset.deadpanned,
  }) as const satisfies CharacterDefine;
