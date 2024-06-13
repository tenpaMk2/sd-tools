import { CharacterDefine } from "../characters.mjs";

export const toaruMisakiHMadoka = () =>
  ({
    lora: {
      tag: `shokuhou_misaki_v2`,
      probabilityAndWeights: [{ probability: 1, weight: 0.7 }],
    },
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`toaru kagaku no railgun`],
    characterNameEntries: [`shokuhou misaki`],
    characterFeatureEntries: [
      `yellow eyes`,
      { tag: `sparkling eyes`, weight: 1.3 },
      { tag: `star-shaped pupils`, weight: 1.3 },
      { tag: `+ +`, weight: 1.3 },
      `symbol-shaped pupils`,
      `blonde hair`,
      `long hair`,
      `straight hair`,
      `hair between eyes`,
      `thick thighs`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
