import type { OutfitDefine } from "../outfits.mjs";

// TODO: Add skirt version.

export const santaBikini = (): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `santa costume`,
      `santa hat`,
      `santa bikini`,
      `red bikini`,
      `fur collar`,
      `fur-trimmed bikini`,
      `fur-trimmed headwear`,
      `detached sleeves`,
      `red thighhighs`,
      `bare shoulders`,
      `shoulder blades`,
      `navel`,
      `collarbone`,
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
