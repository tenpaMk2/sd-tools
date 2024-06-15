import { OutfitDefine } from "../outfits.mjs";

type Variation = `kaho-ibukimakisiko`;

export const blendSSwimsuit = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`kaho-swim`],
    outfitEntries: [
      `bikini`,
      `blue bikini`,
      `frilled bikini`,
      `breasts skindentation`,
      `collarbone`,
      `shoulder blades`,
      `navel`,
      `bare arms`,
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
    liftType: `none`,
    upskirtEntries: [],
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
