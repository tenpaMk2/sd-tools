import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `eternal2kpp`;

export const spyFamilyThornPrincess = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `earrings`,
      `collarbone`,
      `pendant`,
      `dress`,
      `black dress`,
      `off shoulder`,
      `off-shoulder dress`,
      `fingerless gloves`,
      `short dress`,
      `side slit`,
      `thigh boots`,
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
      entries: upskirtPreset.blackPanties,
    },
    whenRemoveShoes: {
      excludeTags: [`thigh boots`, `black footwear`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
