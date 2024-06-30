import type { OutfitDefine } from "../outfits.mjs";

type Variation = `rumia-little-jelly`;

export const rokudenashiBikini = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`RumiaBikini`],
    outfitEntries: [
      `collarbone`,
      `bikini`,
      `blue bikini`,
      `striped bikini`,
      `front-tie top`,
      `front-tie bikini top`,
      `breasts skindentation -> skindentation`,
      `bare arms`,
      `navel`,
      `shoulder blades`,
      `side-tie bikini bottom`,
      `bracelet`,
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
