import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `ibukimakisiko`;
const loraOutfitTriggerWordEntries = {
  ibukimakisiko: [`hinatsuruai-default`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const ryuuouOutfitHinatsuruAi = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `beret`,
      `white hat`,
      `dress`,
      `two-tone dress`,
      `blue dress`,
      `white dress`,
      `neck ribbon`,
      `long sleeves`,
      `short dress`,
      `frilled skirt`,
      `bare legs`,
      `bobby socks`,
      `blue footwear`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: false,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `dress`,
      entries: upskirtPreset.colorfulPanties,
    },
    whenRemoveShoes: {
      excludeTags: [`blue footwear`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
