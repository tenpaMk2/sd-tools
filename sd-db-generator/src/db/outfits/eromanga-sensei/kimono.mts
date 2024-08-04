import type { OutfitDefine } from "../outfits.mjs";

type Variation = `muramasa-little-jelly`;

const loraOutfitTriggerWordEntries = {
  "muramasa-little-jelly": [`MuramasaKimono`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  upper: {
    "muramasa-little-jelly": [
      `japanese clothes`,
      `kimono`,
      `pink kimono`,
      `collarbone`,
      `wide sleeves`,
    ],
  },
  skirt: {
    "muramasa-little-jelly": [`obi`, `sash`, `yellow sash`],
  },
  socks: {
    "muramasa-little-jelly": [],
  },
  shoes: {
    "muramasa-little-jelly": [`tabi`],
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
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "muramasa-little-jelly": null,
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "muramasa-little-jelly": {
    excludeTags: [`tabi`],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const eromangaSenseiKimono = (variation: Variation): OutfitDefine =>
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
