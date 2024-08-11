import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation =
  | `kobori-little-jelly`
  | `muse-little-jelly`
  | `salama-little-jelly`
  | `sylphy-little-jelly`;

const loraOutfitTriggerWordEntries = {
  "kobori-little-jelly": [`KoboriDress`],
  "muse-little-jelly": [`MuseDress`],
  "salama-little-jelly": [`SalamaDress`],
  "sylphy-little-jelly": [`SylphyDress`],
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
      `fairy wings`,
      `collarbone`,
      `multicolored dress`,
      `green dress`,
      `white dress`,
      `long sleeves`,
      `juliet sleeves`,
      `green sleeves`,
      `cross-laced dress`,
      `cross-laced dress -> cross-laced clothes`,
    ],
    "muse-little-jelly": [
      `blue choker`,
      `blue bra`,
      `cross-laced top`,
      `fairy wings`,
      `frilled bra`,
      `wrist cuffs`,
      `shoulder blades`,
      `midriff`,
      `navel`,
      `bare arms`,
    ],
    "salama-little-jelly": [
      `red choker`,
      `red chest bow -> red bow`,
      `collarbone`,
      `fairy wings`,
      `strapless dress`,
      `red dress`,
      `red armband`,
      `bare shoulders`,
      `shoulder blades`,
    ],
    "sylphy-little-jelly": [
      `revealing clothes`,
      `fairy wings`,
      `white dress`,
      `halterneck`,
      `underbust`,
      `blue chest bow -> blue bow`,
      `bare shoulders`,
      `bare arms`,
      `shoulder blades`,
      `navel`,
      `midriff`,
    ],
  },
  jacket: {
    "kobori-little-jelly": [],
    "muse-little-jelly": [],
    "salama-little-jelly": [],
    "sylphy-little-jelly": [],
  },
  skirt: {
    "kobori-little-jelly": [
      `frilled skirt`,
      `layered skirt`,
      `showgirl skirt`,
      `white panties`,
    ],
    "muse-little-jelly": [`frilled skirt`, `bow skirt`, `blue skirt`],
    "salama-little-jelly": [`short dress`],
    "sylphy-little-jelly": [`short shorts`, `blue shorts`],
  },
  socks: {
    "kobori-little-jelly": [`white thighhighs`],
    "muse-little-jelly": [`bare legs`],
    "salama-little-jelly": [`bare legs`],
    "sylphy-little-jelly": [`bare legs`],
  },
  shoes: {
    "kobori-little-jelly": [`ankle boots`],
    "muse-little-jelly": [`mary janes`],
    "salama-little-jelly": [`red footwear`, `flats`],
    "sylphy-little-jelly": [`ankle lace-up`, `cross-laced footwear`],
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
    cleavage: true,
    zettaiRyouiki: true,
  },
  "muse-little-jelly": {
    ...baseSpecialVisibility,
    armpits: true,
    hangingBreasts: true,
    cleavage: true,
    sideboob: true,
  },
  "salama-little-jelly": {
    ...baseSpecialVisibility,
    armpits: true,
    hangingBreasts: true,
    cleavage: true,
    sideboob: true,
    backboob: true,
  },
  "sylphy-little-jelly": {
    ...baseSpecialVisibility,
    armpits: true,
    hangingBreasts: true,
    cleavage: true,
    sideboob: true,
    backboob: true,
    insideOfThighs: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "kobori-little-jelly": {
    liftType: `skirt`,
    entries: upskirtPreset.whitePanties,
  },
  "muse-little-jelly": {
    liftType: `skirt`,
    entries: upskirtPreset.whitePanties,
  },
  "salama-little-jelly": {
    liftType: `dress`,
    entries: upskirtPreset.whitePanties,
  },
  "sylphy-little-jelly": null,
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "kobori-little-jelly": {
    excludeTags: [`ankle boots`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  "muse-little-jelly": {
    excludeTags: [`mary janes`],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
  "salama-little-jelly": {
    excludeTags: [`red footwear`, `flats`],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
  "sylphy-little-jelly": {
    excludeTags: [`ankle lace-up`, `cross-laced footwear`],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const amaburiElementario = (variation: Variation): OutfitDefine =>
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
