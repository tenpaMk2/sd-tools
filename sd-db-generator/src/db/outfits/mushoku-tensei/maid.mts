import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `aisha-ibukimakisiko`;
const loraOutfitTriggerWordEntries = {
  "aisha-ibukimakisiko": [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const mushokuTenseiMaid = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `maid`,
      `ascot`,
      `white ascot`,
      `long sleeves`,
      `maid apron`,
      `waist apron`,
      `white waist apron -> white apron`,
      `pantyhose`,
      `white pantyhose`,
      `boots`,
      `black footwear`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: false,
      cleavage: false,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `dress`,
      entries: upskirtPreset.pantiesUnderPantyhose,
    },
    whenRemoveShoes: {
      excludeTags: [`boots`, `black footwear`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
