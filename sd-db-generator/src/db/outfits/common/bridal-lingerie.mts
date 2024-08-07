import type { OutfitDefine } from "../outfits.mjs";

// TODO: Add non-bikini version.

export const bridalLingerie = (): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `nontraditional wedding dress`,
      `wedding dress`,
      `revealing clothes`,
      `bride`,
      `veil`,
      { tag: `bridal veil`, weight: 1.2 },
      `hair ornament`,
      `hair flower`,
      `jewelry`,
      `necklace`,
      `bridal garter`,
      `bridal gauntlets`,
      `white gloves`,
      `bridal lingerie`,
      `lingerie`,
      `thighhighs`,
      `white thighhighs`,
      `garter belt`,
      `bikini`,
      `white bikini`,
      `collarbone`,
      `bare shoulders`,
      `navel`,
      `shoulder blades`,
      `no shoes`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: true,
      backboob: true,
      underboobLevel: `only from below`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    upskirt: null,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
