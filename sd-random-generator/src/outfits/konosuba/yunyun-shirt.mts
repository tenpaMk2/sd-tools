import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

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
      `clothing cutout`,
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
      `thighs skindentation`,
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
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.colorfulPanties,
    whenRemoveShoes: {
      excludeTags: [`boots`, `brown footwear`, `knee boots`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
