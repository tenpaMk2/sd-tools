import { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    loraName: `mizuki-shibata-s2-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`mizuki shibata`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const sasuoniMizuki = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`mahouka koukou no rettousei`],
    characterNameEntries: [`shibata mizuki`],
    characterFeatureEntries: [
      `yellow eyes`,
      `glasses`,
      `semi-rimless eyewear`,
      `under-rim eyewear`,
      `black hair`,
      `medium hair`,
      `hair ornament`,
      `tassel hair ornament`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
