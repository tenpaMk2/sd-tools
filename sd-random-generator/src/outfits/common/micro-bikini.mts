import { OutfitDefine } from "../outfits.mjs";

export const microBikini = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `bikini`,
      `micro bikini`,
      [
        { entries: [`aqua bikini`] },
        { entries: [`black bikini`] },
        { entries: [`blue bikini`] },
        { entries: [`gold bikini`] },
        { entries: [`green bikini`] },
        { entries: [`orange bikini`] },
        { entries: [`pink bikini`] },
        { entries: [`purple bikini`] },
        { entries: [`red bikini`] },
        { entries: [`silver bikini`] },
        { entries: [`white bikini`] },
        { entries: [`yellow bikini`] },
      ],
      `breasts skindentation`,
      `collarbone`,
      `shoulder blades`,
      `navel`,
      `bare arms`,
      `bare legs`,
      `barefoot`,
      // `shiny skin`,
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
