import type { OutfitDefine } from "../outfits.mjs";

export const denimBikini = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `swimsuit`,
      `bikini`,
      `bikini top only`,
      [
        { entries: [`aqua bikini`] },
        { entries: [`black bikini`] },
        { entries: [`blue bikini`] },
        { entries: [`green bikini`] },
        { entries: [`orange bikini`] },
        { entries: [`pink bikini`] },
        { entries: [`purple bikini`] },
        { entries: [`red bikini`] },
        { entries: [`white bikini`] },
        { entries: [`yellow bikini`] },
      ],
      [
        { entries: [] },
        { entries: [`argyle bikini`] },
        { entries: [`checkered bikini`] },
        { entries: [`plaid bikini`] },
        { entries: [`polka dot bikini`] },
        { entries: [`striped bikini`] },
      ],
      `collarbone`,
      `shoulder blades`,
      `bare arms`,
      `navel`,
      `bracelet`,
      `bare arms`,
      `shorts`,
      `short shorts`,
      `denim`,
      `denim shorts`,
      `cutoffs`,
      `bare legs`,
      `barefoot`,
      // `shiny skin`, // TODO: `shiny skin` to background?
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
