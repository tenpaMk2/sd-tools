import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../resolver.mjs";

type Variation = `kaho` | `mafuyu`;

const variationLoraOutfitTriggerWordEntries = {
  kaho: [`kaho-default`],
  mafuyu: [`mafuyu-default`],
} as const satisfies {
  [k in Variation]: OutfitDefine["loraOutfitTriggerWordEntries"];
};

const variationOutfitEntries = {
  shirtColor: {
    kaho: [`blue shirt`],
    mafuyu: [`yellow shirt`],
  },
  skirtColor: {
    kaho: [`blue skirt`],
    mafuyu: [`yellow skirt`],
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
