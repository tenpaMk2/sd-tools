import { CharacterDefine } from "../characters.mjs";

type Variation = `zedotasco`;

export const futokuNoGuildEnome = (variation: Variation) =>
  ({
    lora: {
      loraName: `Enome_1`,
      probabilityAndWeights: [{ probability: 1, weight: 0.9 }],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`futoku no guild`],
    characterNameEntries: [`enome`],
    characterFeatureEntries: [
      `blue eyes`,
      `blonde hair`,
      `long hair`,
      `hair bun`,
      `hair between eyes`,
      `curvy`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
