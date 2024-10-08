import type { OutfitDefine } from "../outfits.mjs";

export const bandeauORingBikini = (): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `swimsuit`,
      `bikini`,
      [
        { entries: [`aqua bikini`] },
        { entries: [`black bikini`], probability: 3 },
        { entries: [`blue bikini`] },
        { entries: [`green bikini`] },
        { entries: [`orange bikini`] },
        { entries: [`pink bikini`] },
        { entries: [`purple bikini`] },
        { entries: [`red bikini`], probability: 2 },
        { entries: [`white bikini`], probability: 3 },
        { entries: [`yellow bikini`] },
      ],
      [
        { entries: [`floral print`, `floral print bikini`], probability: 3 },
        { entries: [`argyle bikini`] },
        { entries: [`plaid bikini`] },
        { entries: [`polka dot bikini`] },
        { entries: [`striped bikini`] },
      ],
      `bandeau`,
      `strapless bikini`,
      // `halterneck`,
      `o-ring bikini -> o-ring`,
      `o-ring bikini`,
      `o-ring top`,
      [{ entries: [] }, { entries: [`bracelet`] }],
      `breasts skindentation -> skindentation`,
      `collarbone`,
      `shoulder blades`,
      // `navel`,
      `bare arms`,
      `bare legs`,
      `barefoot`,
      [{ entries: [] }, { entries: [`shiny skin`] }],
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `only from below`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    upskirt: null,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
