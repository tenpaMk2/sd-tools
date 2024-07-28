import type { OutfitDefine } from "../outfits.mjs";

type Variation = `o-ring` | `frill` | `tie`;

const outfitEntries = {
  "o-ring": [
    `o-ring bikini -> o-ring`,
    `o-ring bikini`,
    `o-ring top`,
    `o-ring bottom`,
    [
      { entries: [`aqua bikini`] },
      { entries: [`black bikini`] },
      { entries: [`blue bikini`] },
      { entries: [`green bikini`] },
      { entries: [`orange bikini`] },
      { entries: [`pink bikini`] },
      { entries: [`purple bikini`] },
      { entries: [`red bikini`] },
      { entries: [`white bikini`], probability: 2 },
      { entries: [`yellow bikini`] },
      { entries: [`gold bikini`] },
      { entries: [`silver bikini`] },
    ],
    [
      {
        entries: [
          `halterneck`,
          [
            { entries: [`argyle bikini`] },
            { entries: [`plaid bikini`] },
            { entries: [`polka dot bikini`] },
            { entries: [`striped bikini`] },
          ],
        ],
      },
      {
        entries: [`halterneck`, `criss-cross halter`],
        probability: 0.2,
      },
    ],
    [{ entries: [] }, { entries: [`bracelet`] }],
  ],
  "frill": [
    `frilled bikini -> frills`,
    `frilled bikini`,
    `bikini skirt`,
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
      { entries: [`halterneck`] },
      { entries: [`halterneck`, `criss-cross halter`] },
    ],
    [{ entries: [] }, { entries: [`bracelet`] }],
  ],
  "tie": [
    `front-tie bikini top`,
    `side-tie bikini bottom`,
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
      {
        entries: [
          `halterneck`,
          [
            { entries: [`argyle bikini`] },
            { entries: [`plaid bikini`] },
            { entries: [`polka dot bikini`] },
            { entries: [`striped bikini`] },
          ],
        ],
      },
      {
        entries: [`halterneck`, `criss-cross halter`],
        probability: 0.2,
      },
    ],
    [{ entries: [] }, { entries: [`bracelet`] }],
  ],
} as const satisfies Record<Variation, OutfitDefine["outfitEntries"]>;

export const bikini = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `swimsuit`,
      `bikini`,
      ...outfitEntries[variation],
      `breasts skindentation -> skindentation`,
      `collarbone`,
      `shoulder blades`,
      `navel`,
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
      sideboob: true,
      backboob: true,
      underboobLevel: `only from below`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    upskirt: null,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
