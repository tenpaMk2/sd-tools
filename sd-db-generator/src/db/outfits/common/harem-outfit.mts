import { OutfitDefine } from "../outfits.mjs";

export const haremOutfit = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `revealing clothes`,
      `harem outfit`,
      `mouth veil`,
      `collarbone`,
      `halterneck`,
      `criss-cross halter`,
      `necklace`,
      `detached sleeves`,
      `bracelet`,
      `bare shoulders`,
      `navel`,
      `shoulder blades`,
      `hip vent`,
      `harem pants`,
      `barefoot`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: true,
      backboob: true,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    liftType: `none`,
    upskirtEntries: [],
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
