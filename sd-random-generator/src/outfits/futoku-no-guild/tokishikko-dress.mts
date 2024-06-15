import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

type Variation = `ibukimakisiko`;

export const futokuNoGuildOutfitTokishikko = (variation: Variation) =>
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
    liftType: `dress`,
    upskirtEntries: upskirtPreset.pantiesUnderPantyhose,
    whenRemoveShoes: {
      excludeTags: [`boots`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
