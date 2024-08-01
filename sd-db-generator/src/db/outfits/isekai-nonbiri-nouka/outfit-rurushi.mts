import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `little-jelly`;

export const isekaiNonbiriNoukaOutfitRurushi = (
  variation: Variation,
): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`RuuDress`],
    outfitEntries: [
      `ascot`,
      `red ascot`,
      `brooch`,
      `multicolored dress`,
      `black dress`,
      `red trim shirt -> red trim`,
      `cleavage cutout`,
      `corset`,
      `long sleeves`,
      `juliet sleeves`,
      `puffy sleeves`,
      `short dress`,
      `pleated dress`,
      `pantyhose`,
      `red pantyhose`,
      `loafers`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
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
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
