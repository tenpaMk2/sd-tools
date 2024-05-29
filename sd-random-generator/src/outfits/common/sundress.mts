import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "./upskirt-preset.mjs";

export const sundress = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `sundress`,
      `collarbone`,
      `dress`,
      `white dress`,
      `bare shoulders`,
      `bare arms`,
      `jewelry`,
      `bracelet`,
      `shoulder blades`,
      `loafers`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: true,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    liftType: `dress`,
    upskirtEntries: upskirtPreset.whitePanties,
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
