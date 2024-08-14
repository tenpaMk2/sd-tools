import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `isuzu-little-jelly`;

const loraOutfitTriggerWordEntries = {
  "isuzu-little-jelly": [`SentoOffice`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hat: {
    "isuzu-little-jelly": [],
  },
  shirt: {
    "isuzu-little-jelly": [`white shirt`, `collared shirt`],
  },
  jacket: {
    "isuzu-little-jelly": [
      `suit`,
      `pinstripe suit`,
      `skirt suit`,
      `long sleeves`,
    ],
  },
  skirt: {
    "isuzu-little-jelly": [`pencil skirt`],
  },
  socks: {
    "isuzu-little-jelly": [`brown pantyhose`],
  },
  shoes: {
    "isuzu-little-jelly": [`loafers`],
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
    tautClothes: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

export const amaburiSuit = (variation: Variation): OutfitDefine =>
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
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.pantiesUnderPantyhose,
    },
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
