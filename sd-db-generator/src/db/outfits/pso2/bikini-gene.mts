import type { OutfitDefine } from "../outfits.mjs";

type Variation = `overnerd`;

export const pso2BikiniGene = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `bikini`,
      `white bikini`,
      `breasts skindentation -> skindentation`,
      `collarbone`,
      `shoulder blades`,
      `navel`,
      `bare arms`,
      `bare legs`,
      `barefoot`,
      `thigh strap`,
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
      insideOfThighs: true,
    },
    upskirt: null,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
