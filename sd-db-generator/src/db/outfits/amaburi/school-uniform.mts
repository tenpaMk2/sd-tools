import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `isuzu-little-jelly`;

const loraOutfitTriggerWordEntries = {
  "isuzu-little-jelly": [`SentoSchool`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hat: {
    "isuzu-little-jelly": [],
  },
  shirt: {
    "isuzu-little-jelly": [
      `white shirt`,
      `collared shirt`,
      `neck ribbon`,
      `red neck ribbon -> red ribbon`,
      `short sleeves`,
    ],
  },
  jacket: {
    "isuzu-little-jelly": [`black vest`],
  },
  skirt: {
    "isuzu-little-jelly": [
      `plaid skirt`,
      `red skirt`,
      `pleated skirt`,
      `miniskirt`,
    ],
  },
  socks: {
    "isuzu-little-jelly": [
      `white thighhighs`,
      "thighs skindentation -> skindentation",
    ],
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
    zettaiRyouiki: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

export const amaburiSchoolUniform = (variation: Variation): OutfitDefine =>
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
      entries: upskirtPreset.colorfulPanties,
    },
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
