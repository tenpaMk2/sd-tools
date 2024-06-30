import type { OutfitDefine } from "../outfits.mjs";

type Variation = `nochekaiser`;

export const isekaiOjisanOutfitMabel = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `blue shirt`,
      `jacket`,
      `blue jacket`,
      `long sleeves`,
      `puffy sleeves`,
      `shorts`,
      `short shorts`,
      `black shorts`,
      `bare legs`,
      `boots`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: false,
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
