import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `latifa-little-jelly`;

const loraOutfitTriggerWordEntries = {
  "latifa-little-jelly": [`LatifaDress`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hat: {
    "latifa-little-jelly": [`tiara`],
  },
  shirt: {
    "latifa-little-jelly": [
      `cross necklace`,
      `multicolored dress`,
      `frilled dress`,
      `pink dress`,
      `white dress`,
      `spaghetti strap`,
      `bare shoulders`,
      `underbust`,
      `corset`,
      `see-through shawl`,
      `elbow gloves`,
      `white gloves`,
    ],
  },
  jacket: {
    "latifa-little-jelly": [],
  },
  skirt: {
    "latifa-little-jelly": [`long dress`],
  },
  socks: {
    "latifa-little-jelly": [],
  },
  shoes: {
    "latifa-little-jelly": [`mary janes`],
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
  "latifa-little-jelly": {
    ...baseSpecialVisibility,
    armpits: true,
    hangingBreasts: true,
    tautClothes: true,
    cleavage: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "latifa-little-jelly": {
    liftType: `dress`,
    entries: upskirtPreset.whitePanties,
  },
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "latifa-little-jelly": {
    excludeTags: outfitEntries.shoes["latifa-little-jelly"],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const amaburiDress = (variation: Variation): OutfitDefine =>
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
