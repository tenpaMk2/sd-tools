import { OutfitDefine } from "../outfits.mjs";

type Variation = `overnerd`;

export const pso2BikiniGene = (variation: Variation) =>
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
      // `shiny skin`,
      `thigh strap`,
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
    liftType: `none`,
    upskirtEntries: [],
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
