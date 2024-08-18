import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `chloe-h-madoka` | `illya-h-madoka` | `miyu-h-madoka`;

const loraOutfitTriggerWordEntries = {
  "chloe-h-madoka": [],
  "illya-h-madoka": [],
  "miyu-h-madoka": [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hat: {
    "chloe-h-madoka": [],
    "illya-h-madoka": [],
    "miyu-h-madoka": [],
  },
  shirt: {
    "chloe-h-madoka": [
      `breastplate`,
      `shrug \\(clothing\\)`,
      `long sleeves`,
      `bridal gauntlets`,
      `stomach tattoo`,
      `navel`,
      `black bikini`,
    ],
    "illya-h-madoka": [
      `magical girl`,
      `collarbone`,
      `orange ascot`,
      `pink shirt`,
      `bare shoulders`,
      `sleeveless`,
      `detached sleeves`,
      `white gloves`,
    ],
    "miyu-h-madoka": [
      `magical girl`,
      `white ascot`,
      `bare shoulders`,
      `purple leotard`,
      `side cutout`,
      `side cutout -> clothing cutout`,
      `detached sleeves`,
      `purple sleeves`,
      `covered navel`,
    ],
  },
  jacket: {
    "chloe-h-madoka": [`red cape`],
    "illya-h-madoka": [`cape`],
    "miyu-h-madoka": [`white cape`],
  },
  skirt: {
    "chloe-h-madoka": [`waist cape`],
    "illya-h-madoka": [`white skirt`, `miniskirt`],
    "miyu-h-madoka": [`showgirl skirt`, `black skirt`],
  },
  socks: {
    "chloe-h-madoka": [],
    "illya-h-madoka": [`bridal garter`],
    "miyu-h-madoka": [
      `thigh strap`,
      `thigh pouch`,
      `thighhighs`,
      `purple thighhighs`,
      "thighs skindentation -> skindentation",
    ],
  },
  shoes: {
    "chloe-h-madoka": [`knee boots`, `black footwear`],
    "illya-h-madoka": [`pink thighhighs`, `thigh boots`, `pink footwear`], // h_madoka specified `thigh boots` as `pink thighhighs` .
    "miyu-h-madoka": [`knee boots`, `white footwear`],
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
  "chloe-h-madoka": {
    ...baseSpecialVisibility,
    tautClothes: true,
    cleavage: true,
    insideOfThighs: true,
  },
  "illya-h-madoka": {
    ...baseSpecialVisibility,
    armpits: true,
    tautClothes: true,
    sideboob: true,
  },
  "miyu-h-madoka": {
    ...baseSpecialVisibility,
    armpits: true,
    tautClothes: true,
    sideboob: true,
    backboob: true,
    insideOfThighs: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "chloe-h-madoka": null,
  "illya-h-madoka": {
    liftType: `skirt`,
    entries: upskirtPreset.whitePanties,
  },
  "miyu-h-madoka": null,
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "chloe-h-madoka": {
    excludeTags: outfitEntries.shoes["chloe-h-madoka"],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
  "illya-h-madoka": {
    excludeTags: outfitEntries.shoes["illya-h-madoka"],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
  "miyu-h-madoka": {
    excludeTags: outfitEntries.shoes["miyu-h-madoka"],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const prismaIllyaMagicalGirl = (variation: Variation): OutfitDefine =>
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
