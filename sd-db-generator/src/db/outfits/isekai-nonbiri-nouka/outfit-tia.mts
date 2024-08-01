import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `little-jelly`;

export const isekaiNonbiriNoukaOutfitTia = (
  variation: Variation,
): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `dress`,
      `white dress`,
      `halterneck`,
      `halter dress`,
      `bare shoulders`,
      `armlet`,
      `shoulder blades`,
      `underbust`,
      `bridal gauntlets`,
      `white waist ribbon -> white ribbon`,
      `thigh boots`,
      `white footwear`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: true,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `dress`,
      entries: upskirtPreset.whitePanties,
    },
    whenRemoveShoes: {
      excludeTags: [`thigh boots`, `white footwear`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
