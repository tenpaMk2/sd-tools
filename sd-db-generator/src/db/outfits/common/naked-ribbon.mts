import type { OutfitDefine } from "../outfits.mjs";

export const nakedRibbon = (): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      // `valentine`, // Can be `christmas` .
      `naked ribbon`,
      `red body ribbon -> red ribbon`,
      // `navel`, // Can be hidden by ribbons.
      `shoulder blades`,
      `barefoot`,
      [{ entries: [] }, { entries: [`shiny skin`] }],
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: true,
      backboob: true,
      underboobLevel: `full`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: null,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
