import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `muramasa-little-jelly`;

const loraOutfitTriggerWordEntries = {
  "muramasa-little-jelly": [`MuramasaSchool`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  upper: {
    "muramasa-little-jelly": [
      `school uniform`,
      `serafuku`,
      `black serafuku`,
      `black shirt`,
      `black sailor collar`,
      `collarbone`,
      `neckerchief`,
      `white neckerchief`,
      `long sleeves`,
    ],
  },
  skirt: {
    "muramasa-little-jelly": [
      `skirt`,
      `black skirt`,
      `pleated skirt`,
      `miniskirt`,
    ],
  },
  socks: {
    "muramasa-little-jelly": [`socks`],
  },
  shoes: {
    "muramasa-little-jelly": [`loafers`],
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
  "muramasa-little-jelly": {
    ...baseSpecialVisibility,
    tautClothes: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "muramasa-little-jelly": {
    liftType: `skirt`,
    entries: upskirtPreset.whitePanties,
  },
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "muramasa-little-jelly": {
    excludeTags: [`loafers`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const eromangaSenseiSerafuku = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      ...outfitEntries.upper[variation],
      ...outfitEntries.skirt[variation],
      ...outfitEntries.socks[variation],
      ...outfitEntries.shoes[variation],
    ],
    specialVisibility: specialVisibility[variation],
    upskirt: upskirt[variation],
    whenRemoveShoes: whenRemoveShoes[variation],
  }) as const satisfies OutfitDefine;
