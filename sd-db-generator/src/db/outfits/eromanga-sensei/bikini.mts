import type { OutfitDefine } from "../outfits.mjs";

type Variation = `muramasa-little-jelly`;

const loraOutfitTriggerWordEntries = {
  "muramasa-little-jelly": [`MuramasaBikini`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  upper: {
    "muramasa-little-jelly": [
      `bikini`,
      `aqua bikini`,
      `breasts skindentation -> skindentation`,
      `front-tie bikini top`,
      `bare arms`,
      `bare shoulders`,
      `navel`,
      [{ entries: [] }, { entries: [`shiny skin`] }],
    ],
  },
  skirt: {
    "muramasa-little-jelly": [`side-tie bikini bottom`],
  },
  socks: {
    "muramasa-little-jelly": [`bare legs`],
  },
  shoes: {
    "muramasa-little-jelly": [`barefoot`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const baseSpecialVisibility = {
  armpits: false,
  hangingBreasts: false,
  tautClothes: false,
  cleavage: false,
  sideboob: false,
  backboob: false,
  underboobLevel: `invisible`,
  zettaiRyouiki: false,
  insideOfThighs: false,
} as const satisfies OutfitDefine["specialVisibility"];

const specialVisibility = {
  "muramasa-little-jelly": {
    ...baseSpecialVisibility,
    armpits: true,
    hangingBreasts: true,
    cleavage: true,
    sideboob: true,
    backboob: true,
    underboobLevel: `only from below`,
    insideOfThighs: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "muramasa-little-jelly": null,
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "muramasa-little-jelly": null,
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const eromangaSenseiBikini = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      ...outfitEntries.upper[variation],
      ...outfitEntries.skirt[variation],
      ...outfitEntries.socks[variation],
      ...outfitEntries.shoes[variation],
    ],
    specialVisibility: specialVisibility[variation],
    upskirt: upskirt[variation],
    whenRemoveShoes: whenRemoveShoes[variation],
  }) as const satisfies OutfitDefine;
