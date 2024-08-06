import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `little-jelly`;

export const isekaiNonbiriNoukaOutfitHakuren = (
  variation: Variation,
): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `dress`,
      `white dress`,
      `collared dress`,
      `sleeveless`,
      `sleeveless dress`,
      `bare shoulders`,
      `elbow gloves`,
      `purple gloves`,
      `boots`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: false,
      sideboob: true,
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
      excludeTags: [`boots`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
