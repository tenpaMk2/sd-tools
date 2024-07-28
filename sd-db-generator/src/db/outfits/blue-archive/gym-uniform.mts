import type { OutfitDefine } from "../outfits.mjs";

type Variation = `yuuka-ibukimakisiko`;

const loraOutfitTriggerWordEntries = {
  "yuuka-ibukimakisiko": [`yuuka-gym`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const blueArchiveGymUniform = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `id card`,
      `blue jacket`,
      `track jacket`,
      `black shirt`,
      `blue buruma`,
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
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    upskirt: null,
    whenRemoveShoes: {
      excludeTags: [`black footwear`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
