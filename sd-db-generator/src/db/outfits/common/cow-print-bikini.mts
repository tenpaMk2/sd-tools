import type { OutfitDefine } from "../outfits.mjs";

export const cowPrintBikini = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `cow print`,
      `cow print bikini`,
      `cow print gloves`,
      `cow print thighhighs`,
      `print bikini`,
      `print gloves`,
      `print thighhighs`,
      `neck bell`,
      `choker`,
      `shoulder blades`,
      `navel`,
      `breasts skindentation -> skindentation`,
      `collarbone`,
      `shoulder blades`,
      `navel`,
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
