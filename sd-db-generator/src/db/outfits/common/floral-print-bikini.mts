import type { OutfitDefine } from "../outfits.mjs";

type Variation = `o-ring` | `frill` | `tie`;

const commonColorEntries = [
  [
    { entries: [`black bikini`], probability: 2 },
    { entries: [`orange bikini`], probability: 2 },
    { entries: [`pink bikini`], probability: 2 },
    { entries: [`red bikini`] },
    { entries: [`white bikini`], probability: 5 },
    { entries: [`yellow bikini`], probability: 2 },
  ],
] as const satisfies OutfitDefine["outfitEntries"];

const outfitEntries = {
  "o-ring": [
    `o-ring bikini -> o-ring`,
    `o-ring bikini`,
    `o-ring top`,
    `o-ring bottom`,
    ...commonColorEntries,
    [
      { entries: [`halterneck`] },
      { entries: [`halterneck`, `criss-cross halter`], probability: 0.2 },
    ],
    [{ entries: [] }, { entries: [`bracelet`] }],
  ],
  "frill": [
    `frilled bikini -> frills`,
    `frilled bikini`,
    `bikini skirt`,
    ...commonColorEntries,
    [
      { entries: [`halterneck`] },
      { entries: [`halterneck`, `criss-cross halter`], probability: 0.2 },
    ],
    [{ entries: [] }, { entries: [`bracelet`] }],
  ],
  "tie": [
    `front-tie bikini top`,
    `side-tie bikini bottom`,
    ...commonColorEntries,
    [
      { entries: [`halterneck`] },
      { entries: [`halterneck`, `criss-cross halter`], probability: 0.2 },
    ],
    [{ entries: [] }, { entries: [`bracelet`] }],
  ],
} as const satisfies Record<Variation, OutfitDefine["outfitEntries"]>;

export const floralPrintBikini = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `swimsuit`,
      `bikini`,
      `floral print`,
      `floral print bikini`,
      ...outfitEntries[variation],
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
      sideboob: true,
      backboob: true,
      underboobLevel: `only from below`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    upskirt: null,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
