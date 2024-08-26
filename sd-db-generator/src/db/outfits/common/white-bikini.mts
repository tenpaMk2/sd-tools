import type { OutfitDefine } from "../outfits.mjs";

type Variation = `frill`;

const outfitEntries = {
  frill: [
    `frilled bikini -> frills`,
    `frilled bikini`,
    `bikini skirt`,
    `white bikini`,
    [
      { entries: [`halterneck`] },
      { entries: [`halterneck`, `criss-cross halter`], probability: 0.2 },
    ],
    [{ entries: [] }, { entries: [`bracelet`] }],
    `front-tie bikini top`,
    `side-tie bikini bottom`,
  ],
} as const satisfies Record<Variation, OutfitDefine["outfitEntries"]>;

export const whiteBikini = (variation: Variation): OutfitDefine =>
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
