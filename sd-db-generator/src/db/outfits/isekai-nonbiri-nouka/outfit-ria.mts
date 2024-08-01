import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `little-jelly`;

export const isekaiNonbiriNoukaOutfitRia = (
  variation: Variation,
): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `brooch`,
      `white dress`,
      `sleeveless dress`,
      `cleavage cutout -> clothing cutout`,
      `cleavage cutout`,
      `armlet`,
      `elbow gloves`,
      `asymmetrical gloves`,
      `brown belt`,
      `green skirt`,
      `miniskirt`,
      `white thighhighs`,
      `green footwear`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.whitePanties,
    },
    whenRemoveShoes: {
      excludeTags: [`green footwear`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
