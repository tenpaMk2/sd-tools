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
    "illya-h-madoka": [`beret`, `white hat`],
    "miyu-h-madoka": [`beret`, `white hat`],
  },
  shirt: {
    "chloe-h-madoka": [
      `homurabara academy school uniform`,
      `school uniform`,
      `collarbone`,
      `white sailor collar`,
      `neck ribbon`,
      `white shirt`,
      `puffy short sleeves`,
    ],
    "illya-h-madoka": [
      `homurabara academy school uniform`,
      `school uniform`,
      `collarbone`,
      `white sailor collar`,
      `neck ribbon`,
      `white shirt`,
      `puffy short sleeves`,
    ],
    "miyu-h-madoka": [
      `homurabara academy school uniform`,
      `school uniform`,
      `collarbone`,
      `white sailor collar`,
      `neck ribbon`,
      `white shirt`,
      `puffy short sleeves`,
    ],
  },
  jacket: {
    "chloe-h-madoka": [],
    "illya-h-madoka": [],
    "miyu-h-madoka": [],
  },
  skirt: {
    "chloe-h-madoka": [`pleated skirt`, `black skirt`, `miniskirt`],
    "illya-h-madoka": [`pleated skirt`, `black skirt`, `miniskirt`],
    "miyu-h-madoka": [`pleated skirt`, `black skirt`, `miniskirt`],
  },
  socks: {
    "chloe-h-madoka": [`socks`],
    "illya-h-madoka": [`socks`],
    "miyu-h-madoka": [
      `thighhighs`,
      `black thighhighs`,
      `thighs skindentation -> skindentation`,
    ],
  },
  shoes: {
    "chloe-h-madoka": [`loafers`],
    "illya-h-madoka": [`loafers`],
    "miyu-h-madoka": [`loafers`],
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
  },
  "illya-h-madoka": {
    ...baseSpecialVisibility,
    tautClothes: true,
  },
  "miyu-h-madoka": {
    ...baseSpecialVisibility,
    tautClothes: true,
    zettaiRyouiki: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "chloe-h-madoka": {
    liftType: `skirt`,
    entries: upskirtPreset.blackPanties,
  },
  "illya-h-madoka": {
    liftType: `skirt`,
    entries: upskirtPreset.whitePanties,
  },
  "miyu-h-madoka": {
    liftType: `skirt`,
    entries: upskirtPreset.whitePanties,
  },
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "chloe-h-madoka": {
    excludeTags: outfitEntries.shoes["chloe-h-madoka"],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  "illya-h-madoka": {
    excludeTags: outfitEntries.shoes["illya-h-madoka"],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  "miyu-h-madoka": {
    excludeTags: outfitEntries.shoes["miyu-h-madoka"],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const prismaIllyaSchoolUniform = (variation: Variation): OutfitDefine =>
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
