import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `maple-ibukimakisiko` | `sally-ibukimakisiko`;

const loraOutfitTriggerWordEntries = {
  "maple-ibukimakisiko": [`maple-schooluniform`],
  "sally-ibukimakisiko": [`sally-schooluniform`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  upper: {
    "maple-ibukimakisiko": [
      `white shirt`,
      `collared shirt`,
      `red necktie`,
      `blazer`,
      `blue jacket`,
      `long sleeves`,
    ],
    "sally-ibukimakisiko": [
      `white shirt`,
      `collared shirt`,
      `dress shirt`,
      `short sleeves`,
      `red necktie`,
    ],
  },
  cardigan: {
    "maple-ibukimakisiko": [],
    "sally-ibukimakisiko": [
      `clothes around waist`,
      `around waist cardigan -> cardigan`,
      `brown around waist cardigan -> brown cardigan`,
    ],
  },
  socks: {
    "maple-ibukimakisiko": [`pantyhose`, `black pantyhose`],
    "sally-ibukimakisiko": [`black socks`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

export const boufuriSchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `school uniform`,
      ...outfitEntries.upper[variation],
      ...outfitEntries.cardigan[variation],
      `grey skirt`,
      `plaid skirt`,
      `pleated skirt`,
      `miniskirt`,
      ...outfitEntries.socks[variation],
      `loafers`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: false,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: "skirt",
      entries: upskirtPreset.colorfulPanties,
    },
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
