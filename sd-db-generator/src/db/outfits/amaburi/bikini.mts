import type { OutfitDefine } from "../outfits.mjs";

type Variation =
  | `kobori-little-jelly`
  | `muse-little-jelly`
  | `salama-little-jelly`
  | `sylphy-little-jelly`;

const loraOutfitTriggerWordEntries = {
  "kobori-little-jelly": [`KoboriBikini`],
  "muse-little-jelly": [`MuseBikini`],
  "salama-little-jelly": [`SalamaBikini`],
  "sylphy-little-jelly": [`SylphyBikini`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hat: {
    "kobori-little-jelly": [],
    "muse-little-jelly": [],
    "salama-little-jelly": [],
    "sylphy-little-jelly": [],
  },
  shirt: {
    "kobori-little-jelly": [
      `frilled bikini`,
      `green bikini`,
      `bare arms`,
      `navel`,
      `shoulder blades`,
      `breasts skindentation -> skindentation`,
    ],
    "muse-little-jelly": [
      `frilled bikini`,
      `blue bikini`,
      `front-tie top`,
      `bare arms`,
      `navel`,
      `shoulder blades`,
      `breasts skindentation -> skindentation`,
    ],
    "salama-little-jelly": [
      `camouflage`,
      `pink bikini`,
      `front-tie top`,
      `bare arms`,
      `navel`,
      `shoulder blades`,
      `breasts skindentation -> skindentation`,
    ],
    "sylphy-little-jelly": [
      `white bikini`,
      `bow bikini`,
      `frills`,
      `bare arms`,
      `navel`,
      `shoulder blades`,
      `breasts skindentation -> skindentation`,
    ],
  },
  jacket: {
    "kobori-little-jelly": [],
    "muse-little-jelly": [],
    "salama-little-jelly": [],
    "sylphy-little-jelly": [],
  },
  skirt: {
    "kobori-little-jelly": [`bikini skirt`],
    "muse-little-jelly": [`bikini skirt`, `highleg bikini`],
    "salama-little-jelly": [`side-tie bikini bottom`],
    "sylphy-little-jelly": [],
  },
  socks: {
    "kobori-little-jelly": [`bare legs`],
    "muse-little-jelly": [`bare legs`],
    "salama-little-jelly": [`bare legs`],
    "sylphy-little-jelly": [`bare legs`],
  },
  shoes: {
    "kobori-little-jelly": [`barefoot`],
    "muse-little-jelly": [`barefoot`],
    "salama-little-jelly": [`barefoot`],
    "sylphy-little-jelly": [`barefoot`],
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
  "kobori-little-jelly": {
    ...baseSpecialVisibility,
    armpits: true,
    hangingBreasts: true,
    cleavage: true,
    sideboob: true,
    backboob: true,
    underboobLevel: `only from below`,
    insideOfThighs: true,
  },
  "muse-little-jelly": {
    ...baseSpecialVisibility,
    armpits: true,
    hangingBreasts: true,
    cleavage: true,
    sideboob: true,
    backboob: true,
    underboobLevel: `only from below`,
    insideOfThighs: true,
  },
  "salama-little-jelly": {
    ...baseSpecialVisibility,
    armpits: true,
    hangingBreasts: true,
    cleavage: true,
    sideboob: true,
    backboob: true,
    underboobLevel: `full`,
    insideOfThighs: true,
  },
  "sylphy-little-jelly": {
    ...baseSpecialVisibility,
    armpits: true,
    hangingBreasts: true,
    cleavage: true,
    sideboob: true,
    backboob: true,
    underboobLevel: `full`,
    insideOfThighs: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "kobori-little-jelly": null,
  "muse-little-jelly": null,
  "salama-little-jelly": null,
  "sylphy-little-jelly": null,
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "kobori-little-jelly": null,
  "muse-little-jelly": null,
  "salama-little-jelly": null,
  "sylphy-little-jelly": null,
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const amaburiBikini = (variation: Variation): OutfitDefine =>
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
    upskirt: upskirt[variation],
    whenRemoveShoes: whenRemoveShoes[variation],
  }) as const satisfies OutfitDefine;
