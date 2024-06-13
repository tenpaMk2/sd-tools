import { CharacterDefine } from "../characters.mjs";

type Variation = `no-lora` | `eft` | `nochekaiser`;

const lora = {
  "no-lora": null,
  "eft": {
    tag: `chisato-lycoreco-01`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
  "nochekaiser": {
    tag: `chisato-nishikigi-s1-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
  "eft": [`chisato nishikigi`],
  "nochekaiser": [`chisato nishikigi`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

export const lycorisRecoilChisato = (variation: Variation) =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
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
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
