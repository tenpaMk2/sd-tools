import { CharacterDefine } from "../characters.mjs";
import { emotionPreset } from "../emotion-preset.mjs";

export const madomagiIrohaEft = () =>
  ({
    lora: {
      tag: `iroha-madomagi-01`,
      probabilityAndWeights: [
        { probability: 1, weight: 0.8 },
        { probability: 1, weight: 0.6 },
      ],
    },
    loraCharacterTriggerWordEntries: [`iroha tamaki`],
    seriesNameEntries: [`magia record: mahou shoujo madoka magica gaiden`],
    characterNameEntries: [`tamaki iroha`],
    characterFeatureEntries: [
      `pink eyes`,
      `tareme`,
      `pink hair`,
      `long hair`,
      `braid`,
      `frentch braid`,
      `half updo`,
      `braided ponytail`,
      `blunt bangs`,
      `hair intakes`,
      `blunt ends`,
      `sidelocks`,
    ],
    breastSize: `medium breasts`,
    fang: false,
    emotionEntries: emotionPreset.cute,
  }) as const satisfies CharacterDefine;
