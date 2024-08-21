import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `regina-judge-naegi` | `riselia-judge-naegi`;

const loraOutfitTriggerWordEntries = {
  "regina-judge-naegi": [],
  "riselia-judge-naegi": [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const commonOutfitEntries = {
  shirt: [
    `excalibur academy uniform`,
    `school uniform`,
    `shirt`,
    `white shirt`,
    `collared shirt`,
    `necktie`,
    `black necktie`,
  ],
  jacket: [
    `jacket`,
    `blue jacket`,
    `open jacket`,
    `gold trim shirt -> gold trim`,
    `long sleeves`,
  ],
  skirt: [
    `belt`,
    `white belt`,
    `skirt`,
    `blue skirt`,
    `high-waist skirt`,
    `miniskirt`,
  ],
  shoes: [`loafers`],
} as const satisfies Record<string, OutfitDefine["outfitEntries"]>;

const outfitEntries = {
  hat: {
    "regina-judge-naegi": [],
    "riselia-judge-naegi": [],
  },
  shirt: {
    "regina-judge-naegi": commonOutfitEntries.shirt,
    "riselia-judge-naegi": commonOutfitEntries.shirt,
  },
  jacket: {
    "regina-judge-naegi": commonOutfitEntries.jacket,
    "riselia-judge-naegi": commonOutfitEntries.jacket,
  },
  skirt: {
    "regina-judge-naegi": commonOutfitEntries.skirt,
    "riselia-judge-naegi": commonOutfitEntries.skirt,
  },
  socks: {
    "regina-judge-naegi": [
      `thighhighs`,
      `white thighhighs`,
      `thighs skindentation -> skindentation`,
      `thigh strap`,
    ],
    "riselia-judge-naegi": [
      `thighhighs`,
      `black thighhighs`,
      `thighs skindentation -> skindentation`,
    ],
  },
  shoes: {
    "regina-judge-naegi": commonOutfitEntries.shoes,
    "riselia-judge-naegi": commonOutfitEntries.shoes,
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
  "regina-judge-naegi": {
    ...baseSpecialVisibility,
    tautClothes: true,
    zettaiRyouiki: true,
  },
  "riselia-judge-naegi": {
    ...baseSpecialVisibility,
    tautClothes: true,
    zettaiRyouiki: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "regina-judge-naegi": {
    liftType: `skirt`,
    entries: upskirtPreset.colorfulPanties,
  },
  "riselia-judge-naegi": {
    liftType: `skirt`,
    entries: upskirtPreset.colorfulPanties,
  },
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "regina-judge-naegi": {
    excludeTags: outfitEntries.shoes["riselia-judge-naegi"],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  "riselia-judge-naegi": {
    excludeTags: outfitEntries.shoes["riselia-judge-naegi"],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const sematsukaSchoolUniform = (variation: Variation): OutfitDefine =>
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
