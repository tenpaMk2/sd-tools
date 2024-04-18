import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const lycorisRecoilChisatoEft = () =>
  ({
    lora: {
      tag: `chisato-lycoreco-01`,
      probabilityAndWeights: [{ probability: 1, weight: 0.8 }],
    },
    loraCharacterTriggerWordEntries: [`chisato nishikigi`],
    seriesNameEntries: [`lycoris recoil`],
    characterNameEntries: [`nishikigi chisato`],
    characterFeatureEntries: [
      `red eyes`,
      `blonde hair`,
      `short hair`,
      `bob cut`,
      `hair ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
