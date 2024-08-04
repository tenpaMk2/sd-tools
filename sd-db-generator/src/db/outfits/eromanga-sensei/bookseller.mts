import type { OutfitDefine } from "../outfits.mjs";

type Variation = `tomoe-little-jelly`;

const loraOutfitTriggerWordEntries = {
  "tomoe-little-jelly": [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  upper: {
    "tomoe-little-jelly": [
      `shirt`,
      `green shirt`,
      `polo shirt`,
      `unbuttoned`,
      `collarbone`,
      `striped shirt`,
      `body apron -> apron`,
      `brown body apron -> brown apron`,
    ],
  },
  skirt: {
    "tomoe-little-jelly": [`shorts`, `black shorts`],
  },
  socks: {
    "tomoe-little-jelly": [`socks`],
  },
  shoes: {
    "tomoe-little-jelly": [`shoes`],
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
  "tomoe-little-jelly": {
    ...baseSpecialVisibility,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "tomoe-little-jelly": null,
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "tomoe-little-jelly": {
    excludeTags: [`shoes`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const eromangaSenseiBookseller = (variation: Variation): OutfitDefine =>
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
