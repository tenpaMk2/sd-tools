import { OutfitDefine } from "../outfits.mjs";

type Variation = `king-dong`;

const loraOutfitTriggerWordEntries = {
  "king-dong": [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const boufuriOutfitSally = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `blue scarf`,
      `blue coat`,
      `open clothes`,
      `open coat`,
      `breastplate`,
      `white leotard`,
      `long sleeves`,
      `white gloves`,
      `white belt`,
      `blue shorts`,
      `white thighhighs`,
      `thighs skindentation -> skindentation`,
      `boots`,
      `blue footwear`,
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
    liftType: `none`,
    upskirtEntries: [],
    whenRemoveShoes: {
      excludeTags: [`boots`, `blue footwear`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
