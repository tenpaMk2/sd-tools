import type { OutfitDefine } from "../outfits.mjs";

type Variation = `eternal2kpp`;

export const goblinSlayerOutfitCowGirl = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `collarbone`,
      `shirt`,
      `white shirt`,
      `long sleeves`,
      `suspenders`,
      `overalls`,
      `belt`,
      `black belt`,
      `belt buckle`,
      `boots`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: null,
    whenRemoveShoes: {
      excludeTags: [`boots`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
