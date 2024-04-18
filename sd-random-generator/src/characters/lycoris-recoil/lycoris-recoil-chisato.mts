import { emotionPreset } from "../emotion-preset.mjs";
import { CharacterDefine } from "../resolver.mjs";

export const lycorisRecoilChisato = () =>
  ({
    lora: null,
    loraCharacterTriggerWordEntries: [],
    seriesNameEntries: [`lycoris recoil`],
    characterNameEntries: [`nishikigi chisato`],
    characterFeatureEntries: [
      `red eyes`,
      `blonde hair`,
      `short hair`,
      `bob cut`,
      `hair ribbon`,
      `red hair ribbon`,
    ],
    breastSize: `large breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
