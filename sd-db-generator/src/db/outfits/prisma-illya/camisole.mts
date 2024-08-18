import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `chloe-h-madoka`;

const loraOutfitTriggerWordEntries = {
  "chloe-h-madoka": [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hat: {
    "chloe-h-madoka": [],
  },
  shirt: {
    "chloe-h-madoka": [
      `bare shoulders`,
      `camisole`,
      `striped shirt -> striped`,
      `striped camisole`,
      `orange chest bow -> orange bow`,
      `midriff`,
      `navel`,
      `stomach tattoo`,
      `bare arms`,
    ],
  },
  jacket: {
    "chloe-h-madoka": [],
  },
  skirt: {
    "chloe-h-madoka": [`microskirt`, `pleated skirt`, `grey skirt`],
  },
  socks: {
    "chloe-h-madoka": [`bare legs`],
  },
  shoes: {
    "chloe-h-madoka": [`shoes`],
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
    armpits: true,
    hangingBreasts: true,
    tautClothes: true,
    cleavage: true,
    sideboob: true,
    backboob: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "chloe-h-madoka": {
    liftType: `skirt`,
    entries: upskirtPreset.colorfulPanties,
  },
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "chloe-h-madoka": {
    excludeTags: outfitEntries.shoes["chloe-h-madoka"],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const prismaIllyaCamisole = (variation: Variation): OutfitDefine =>
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
