import type { CharacterDefine } from "../characters.mjs";

type Variation = `no-lora` | `nochekaiser`;

const lora = {
  "no-lora": null,
  "nochekaiser": {
    loraName: `chisato-nishikigi-s1-ponyxl-lora-nochekaiser`,
    probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
  },
} as const satisfies Record<Variation, CharacterDefine[`lora`]>;

const loraCharacterTriggerWordEntries = {
  "no-lora": [],
  "nochekaiser": [`chisato nishikigi`],
} as const satisfies Record<
  Variation,
  CharacterDefine[`loraCharacterTriggerWordEntries`]
>;

const characterFeatureEntries = {
  "hair-style": {
    "no-lora": [],
    "nochekaiser": [`one side up`],
  },
} as const satisfies Record<
  string,
  Record<Variation, CharacterDefine["characterFeatureEntries"]>
>;

export const lycorisRecoilChisato = (variation: Variation): CharacterDefine =>
  ({
    lora: lora[variation],
    loraCharacterTriggerWordEntries: loraCharacterTriggerWordEntries[variation],
    seriesNameEntries: [`lycoris recoil`],
    characterNameEntries: [`nishikigi chisato`],
    characterFeatureEntries: [
      `red eyes`,
      `blonde hair`,
      `short hair`,
      ...characterFeatureEntries["hair-style"][variation],
      `bob cut`,
      `hair ribbon`,
      `red hair ribbon -> red ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionType: `cute`,
  }) as const satisfies CharacterDefine;
