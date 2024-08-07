import type { OutfitDefine } from "../outfits.mjs";

type Variation = `chenkin`;

export const hyoukaWhiteBikiniEru = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `collarbone`,
      `bikini`,
      `white bikini`,
      `frilled bikini`,
      `breasts skindentation -> skindentation`,
      `bare arms`,
      `navel`,
      `shoulder blades`,
      `side-tie bikini bottom`,
      `bare legs`,
      `barefoot`,
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
