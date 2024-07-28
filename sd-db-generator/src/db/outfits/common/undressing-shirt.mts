import type { OutfitDefine } from "../outfits.mjs";

export const undressingShirt = (): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `shirt`,
      `white shirt`,
      `dress shirt`,
      `collared shirt`,
      `collarbone`,
      `underwear`,
      `bra`,
      `navel`,
      `panties`,
      `no pants`,
      `bare legs`,
      `barefoot`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: true,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    upskirt: null,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
