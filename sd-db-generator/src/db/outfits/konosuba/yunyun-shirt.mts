import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `no-lora`;

export const konosubaOutfitYunyun = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `shirt`,
      `black shirt`,
      `collared shirt`,
      `white collar`,
      `necktie`,
      `pink necktie`,
      `cleavage cutout -> clothing cutout`,
      `cleavage cutout`,
      `long sleeves`,
      `juliet sleeves`,
      `belt`,
      `brown belt`,
      `skirt`,
      `pink skirt`,
      `miniskirt`,
      `pleated skirt`,
      `thighhighs`,
      `red thighhighs`,
      `thighs skindentation -> skindentation`,
      `boots`,
      `knee boots`,
      `brown footwear`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: true,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.colorfulPanties,
    },
    whenRemoveShoes: {
      excludeTags: [`boots`, `brown footwear`, `knee boots`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
