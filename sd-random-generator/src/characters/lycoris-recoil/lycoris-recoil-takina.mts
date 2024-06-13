import { CharacterDefine } from "../characters.mjs";

type Variation = `eft` | `nochekaiser`;

const loraVariation = {
  eft: {
    tag: `takina-lycoreco-01`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
  nochekaiser: {
    tag: `takina-inoue-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies { [k in Variation]: CharacterDefine["lora"] };

const loraCharacterTriggerWordEntriesVariation = {
  eft: [`takina inoue`],
  nochekaiser: [],
} as const satisfies {
  [k in Variation]: CharacterDefine["loraCharacterTriggerWordEntries"];
};

export const lycorisRecoilTakina = (variation: Variation) =>
  ({
    lora: loraVariation[variation],
    loraCharacterTriggerWordEntries:
      loraCharacterTriggerWordEntriesVariation[variation],
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
