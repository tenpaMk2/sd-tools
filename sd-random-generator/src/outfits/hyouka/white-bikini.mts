import { OutfitDefine } from "../outfits.mjs";

export const hyoukaWhiteBikini = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `collarbone`,
      `bikini`,
      `white bikini`,
      `frilled bikini`,
      `breasts skindentation`,
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
    liftType: `none`,
    upskirtEntries: [],
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
