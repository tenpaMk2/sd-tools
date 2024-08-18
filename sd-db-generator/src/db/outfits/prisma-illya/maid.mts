import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `miyu-h-madoka`;

const loraOutfitTriggerWordEntries = {
  "miyu-h-madoka": [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hat: {
    "miyu-h-madoka": [`maid headdress`],
  },
  shirt: {
    "miyu-h-madoka": [
      `maid`,
      `red bowtie`,
      `black dress`,
      `long sleeves`,
      `maid apron`,
      `frilled body apron -> frilled apron`,
      `wrist cuffs`,
    ],
  },
  jacket: {
    "miyu-h-madoka": [],
  },
  skirt: {
    "miyu-h-madoka": [],
  },
  socks: {
    "miyu-h-madoka": [`socks`],
  },
  shoes: {
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
  "miyu-h-madoka": {
    ...baseSpecialVisibility,
    tautClothes: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "miyu-h-madoka": {
    liftType: `dress`,
    entries: upskirtPreset.whitePanties,
  },
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "miyu-h-madoka": {
    excludeTags: outfitEntries.shoes["miyu-h-madoka"],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const prismaIllyaMaid = (variation: Variation): OutfitDefine =>
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
