import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

export const spyFamilyThornPrincess = () =>
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
    liftType: `dress`,
    upskirtEntries: upskirtPreset.blackPanties,
    whenRemoveShoes: {
      excludeTags: [`thigh boots`, `black footwear`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
