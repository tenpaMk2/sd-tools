import type { OutfitDefine } from "../outfits.mjs";

type Variation =
  | `isuzu-little-jelly`
  | `kobori-little-jelly`
  | `latifa-little-jelly`
  | `muse-little-jelly`
  | `salama-little-jelly`
  | `sylphy-little-jelly`;

const loraOutfitTriggerWordEntries = {
  "isuzu-little-jelly": [`SentoBikini`],
  "kobori-little-jelly": [`KoboriBikini`],
  "latifa-little-jelly": [`LatifaBikini`],
  "muse-little-jelly": [`MuseBikini`],
  "salama-little-jelly": [`SalamaBikini`],
  "sylphy-little-jelly": [`SylphyBikini`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hat: {
    "isuzu-little-jelly": [],
    "kobori-little-jelly": [],
    "latifa-little-jelly": [`hairband`, `white hairband`],
    "muse-little-jelly": [],
    "salama-little-jelly": [],
    "sylphy-little-jelly": [],
  },
  shirt: {
    "isuzu-little-jelly": [
      `o-ring bikini -> o-ring`,
      `o-ring bikini`,
      `o-ring top`,
      `red bikini`,
      `bare arms`,
      `navel`,
      `shoulder blades`,
      `breasts skindentation -> skindentation`,
    ],
    "kobori-little-jelly": [
      `frilled bikini`,
      `green bikini`,
      `bare arms`,
      `navel`,
      `shoulder blades`,
      `breasts skindentation -> skindentation`,
    ],
    "latifa-little-jelly": [
      `pink bikini`,
      `frilled bikini`,
      `bow bikini`,
      `collarbone`,
      `bare arms`,
      `navel`,
      `breasts skindentation -> skindentation`,
      `shoulder blades`,
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
    "isuzu-little-jelly": [],
    "kobori-little-jelly": [],
    "latifa-little-jelly": [],
    "muse-little-jelly": [],
    "salama-little-jelly": [],
    "sylphy-little-jelly": [],
  },
  skirt: {
    "isuzu-little-jelly": [`o-ring bottom`],
    "kobori-little-jelly": [`bikini skirt`],
    "latifa-little-jelly": [`sarong`],
    "muse-little-jelly": [`bikini skirt`, `highleg bikini`],
    "salama-little-jelly": [`side-tie bikini bottom`],
    "sylphy-little-jelly": [],
  },
  socks: {
    "isuzu-little-jelly": [`bare legs`],
    "kobori-little-jelly": [`bare legs`],
    "latifa-little-jelly": [`bare legs`],
    "muse-little-jelly": [`bare legs`],
    "salama-little-jelly": [`bare legs`],
    "sylphy-little-jelly": [`bare legs`],
  },
  shoes: {
    "isuzu-little-jelly": [`barefoot`],
    "kobori-little-jelly": [`barefoot`],
    "latifa-little-jelly": [`barefoot`],
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
  "isuzu-little-jelly": {
    ...baseSpecialVisibility,
    armpits: true,
    hangingBreasts: true,
    cleavage: true,
    sideboob: true,
    backboob: true,
    underboobLevel: `only from below`,
    insideOfThighs: true,
  },
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
  "latifa-little-jelly": {
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
  "isuzu-little-jelly": null,
  "kobori-little-jelly": null,
  "latifa-little-jelly": null,
  "muse-little-jelly": null,
  "salama-little-jelly": null,
  "sylphy-little-jelly": null,
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "isuzu-little-jelly": null,
  "kobori-little-jelly": null,
  "latifa-little-jelly": null,
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
