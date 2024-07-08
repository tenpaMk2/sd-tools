import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation =
  | `arona-ibukimakisiko`
  | `yuuka-ibukimakisiko`
  | `yuuka-shirt-ibukimakisiko`;

const loraOutfitTriggerWordEntries = {
  "arona-ibukimakisiko": [],
  "yuuka-ibukimakisiko": [`yuuka-default`],
  "yuuka-shirt-ibukimakisiko": [`yuuka-default`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  jacket: {
    "arona-ibukimakisiko": [],
    "yuuka-ibukimakisiko": [`jacket`, `long sleeves`],
    "yuuka-shirt-ibukimakisiko": [],
  },
  upper: {
    "arona-ibukimakisiko": [
      `choker`,
      `white sailor collar`,
      `white bowtie`,
      `blue shirt`,
      `long sleeves`,
    ],
    "yuuka-ibukimakisiko": [
      `necktie`,
      `blue necktie`,
      `shirt`,
      `white shirt`,
      `collared shirt`,
      `long sleeves`,
    ],
    "yuuka-shirt-ibukimakisiko": [
      `necktie`,
      `blue necktie`,
      `shirt`,
      { tag: `white shirt`, weight: 1.2 },
      `collared shirt`,
      `long sleeves`,
    ],
  },
  hand: {
    "arona-ibukimakisiko": [],
    "yuuka-ibukimakisiko": [`half gloves`],
    "yuuka-shirt-ibukimakisiko": [`half gloves`],
  },
  under: {
    "arona-ibukimakisiko": [
      `skirt`,
      `white skirt`,
      `pleated skirt`,
      `miniskirt`,
      `bare legs`,
      `white sneakers`,
    ],
    "yuuka-ibukimakisiko": [
      `belt`,
      `white belt`,
      `skirt`,
      `black skirt`,
      `pleated skirt`,
      `miniskirt`,
      `bare legs`,
      `black footwear`,
    ],
    "yuuka-shirt-ibukimakisiko": [
      `skirt`,
      `black skirt`,
      `pleated skirt`,
      `miniskirt`,
      `bare legs`,
      `black footwear`,
    ],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const whenRemoveShoes = {
  "arona-ibukimakisiko": {
    excludeTags: [`white sneakers`],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
  "yuuka-ibukimakisiko": {
    excludeTags: [`black footwear`],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
  "yuuka-shirt-ibukimakisiko": {
    excludeTags: [`black footwear`],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const blueArchiveSchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      ...outfitEntries.jacket[variation],
      ...outfitEntries.upper[variation],
      ...outfitEntries.hand[variation],
      ...outfitEntries.under[variation],
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
      liftType: `skirt`,
      entries: upskirtPreset.colorfulPanties,
    },
    whenRemoveShoes: whenRemoveShoes[variation],
  }) as const satisfies OutfitDefine;
