import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `ibukimakisiko`;

const loraOutfitTriggerWordEntries = {
  ibukimakisiko: [`celia-default`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const seireiOutfitCelia = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `hat`,
      `blue hat`,
      `capelet`,
      `white capelet`,
      `bowtie`,
      `blue bowtie`,
      `shirt`,
      `white shirt`,
      `frilled shirt`,
      `long sleeves`,
      `blue dress`,
      `high-waist skirt`,
      `blue skirt`,
      `pantyhose`,
      `black pantyhose`,
      `purple footwear`,
      `mary janes`,
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
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.pantiesUnderPantyhose,
    whenRemoveShoes: {
      excludeTags: [`purple footwear`, `mary janes`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
