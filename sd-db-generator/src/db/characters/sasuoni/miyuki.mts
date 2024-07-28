import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    loraName: `miyuki-shiba-s2-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`miyuki shiba`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const sasuoniMiyuki = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`mahouka koukou no rettousei`],
    characterNameEntries: [`shiba miyuki`],
    characterFeatureEntries: [
      `blue eyes`,
      `black hair`,
      `long hair`,
      `hime cut`,
      `straight hair`,
      `blunt bangs`,
      `sidelocks`,
      `hair ornament`,
      `snowflake hair ornament`,
      `hair ribbon`,
      `tress ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
