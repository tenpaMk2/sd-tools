import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

type Variation = `no-lora` | `eft` | `nochekaiser`;

const loraVariation = {
  "no-lora": null,
  "eft": {
    tag: `chisato-lycoreco-01`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
  "nochekaiser": {
    tag: `chisato-nishikigi-s1-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies { [k in Variation]: CharacterDefine["lora"] };

const loraCharacterTriggerWordEntriesVariation = {
  "no-lora": [],
  "eft": [`chisato nishikigi`],
  "nochekaiser": [`chisato nishikigi`],
} as const satisfies {
  [k in Variation]: CharacterDefine["loraCharacterTriggerWordEntries"];
};

export const lycorisRecoilChisato = (variation: Variation) =>
  ({
    lora: loraVariation[variation],
    loraCharacterTriggerWordEntries:
      loraCharacterTriggerWordEntriesVariation[variation],
    seriesNameEntries: [`lycoris recoil`],
    characterNameEntries: [`nishikigi chisato`],
    characterFeatureEntries: [
      `red eyes`,
      `blonde hair`,
      `short hair`,
      ...(variation === `nochekaiser` ? ([`one side up`] as const) : []),
      `bob cut`,
      `hair ribbon`,
      `red hair ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
