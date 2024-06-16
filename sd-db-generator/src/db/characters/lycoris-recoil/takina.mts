import { CharacterDefine } from "../characters.mjs";

type Variation = `nochekaiser`;

const lora = {
  nochekaiser: {
    loraName: `takina-lycoreco-01`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  nochekaiser: [`chisato nishikigi`],
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
