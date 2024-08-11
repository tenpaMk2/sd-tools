import type { OutfitDefine } from "../outfits.mjs";

type Variation = `little-jelly`;

const loraOutfitTriggerWordEntries = {
  "little-jelly": [`SentoPirate`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hat: {
    "little-jelly": [`pirate hat`],
  },
  shirt: {
    "little-jelly": [
      `white ascot`,
      `red bikini`,
      `print bikini`,
      `strapless bikini`,
      `bandeau`,
      `stomach tattoo`,
      `navel`,
    ],
  },
  jacket: {
    "little-jelly": [`red coat`, `white belt`, `open coat`],
  },
  skirt: {
    "little-jelly": [],
  },
  socks: {
    "little-jelly": [`bare legs`],
  },
  shoes: {
    "little-jelly": [`barefoot`],
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
  "little-jelly": {
    ...baseSpecialVisibility,
    hangingBreasts: true,
    cleavage: true,
    insideOfThighs: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

export const amaburiPirateIsuzu = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      ...outfitEntries.hat[variation],
      ...outfitEntries.shirt[variation],
      ...outfitEntries.jacket[variation],
      ...outfitEntries.skirt[variation],
      ...outfitEntries.socks[variation],
      ...outfitEntries.shoes[variation],
    ],
    specialVisibility: specialVisibility[variation],
    upskirt: null,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
