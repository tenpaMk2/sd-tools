import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

type Variation = `kaho-ibukimakisiko` | `mafuyu-ibukimakisiko`;

const variationLoraOutfitTriggerWordEntries = {
  "kaho-ibukimakisiko": [`kaho-default`],
  "mafuyu-ibukimakisiko": [`mafuyu-default`],
} as const satisfies {
  [k in Variation]: OutfitDefine["loraOutfitTriggerWordEntries"];
};

const variationOutfitEntries = {
  shirtColor: {
    "kaho-ibukimakisiko": [`blue shirt`],
    "mafuyu-ibukimakisiko": [`yellow shirt`],
  },
  skirtColor: {
    "kaho-ibukimakisiko": [`blue skirt`],
    "mafuyu-ibukimakisiko": [`yellow skirt`],
  },
} as const satisfies {
  [k: string]: {
    [k in Variation]: OutfitDefine["outfitEntries"];
  };
};

export const blendSWaitress = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries:
      variationLoraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `head scarf`,
      `waitress`,
      `shirt`,
      ...variationOutfitEntries.shirtColor[variation],
      `short sleeves`,
      `gloves`,
      `white gloves`,
      `waist apron`,
      `white apron`,
      `skirt`,
      ...variationOutfitEntries.skirtColor[variation],
      `miniskirt`,
      `thighhighs`,
      `white thighhighs`,
      `thighs skindentation`,
      `black footwear`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: false,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: true,
      insideOfThighs: false,
    },
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.colorfulPanties,
    whenRemoveShoes: {
      excludeTags: [`black footwear`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
