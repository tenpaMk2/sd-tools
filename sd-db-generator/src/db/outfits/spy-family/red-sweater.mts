import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `eternal2kpp`;

export const spyFamilyRedSweater = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `collarbone`,
      `sweater`,
      `red sweater`,
      `off shoulder`,
      `off-shoulder sweater`,
      `aran sweater`,
      `sweater dress`,
      `bare shoulders`,
      `long sleeves`,
      `pantyhose`,
      `black pantyhose`,
      `shoes`,
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
      excludeTags: [`shoes`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
