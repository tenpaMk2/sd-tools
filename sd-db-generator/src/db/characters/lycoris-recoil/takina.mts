import type { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser` | `nochekaiser-booru`;

const lora = {
  "nochekaiser": {
    loraName: `takina-inoue-s1-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
  "nochekaiser-booru": {
    loraName: `takina-inoue-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "nochekaiser": [`inoue takina`],
  "nochekaiser-booru": [],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;
export const lycorisRecoilTakina = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`lycoris recoil`],
    characterNameEntries: [`inoue takina`],
    characterFeatureEntries: [
      `purple eyes`,
      `tsurime`,
      `black hair`,
      `long hair`,
      `straight hair`,
      `sidelocks`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionType: `serious`,
  }) as const satisfies CharacterDefine;
