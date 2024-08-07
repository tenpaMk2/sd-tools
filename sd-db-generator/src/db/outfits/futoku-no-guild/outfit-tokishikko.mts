import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `ibukimakisiko`;

export const futokuNoGuildOutfitTokishikko = (
  variation: Variation,
): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`tokishikko-default`],
    outfitEntries: [
      `capelet`,
      `bowtie`,
      `orange bowtie`,
      `dress`,
      `black dress`,
      `long sleeves`,
      `white sleeves`,
      `ribbed sleeves`,
      `belt`,
      `pantyhose`,
      `black pantyhose`,
      `boots`,
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
      entries: upskirtPreset.pantiesUnderPantyhose,
    },
    whenRemoveShoes: {
      excludeTags: [`boots`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
