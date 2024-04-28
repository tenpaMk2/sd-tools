import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../resolver.mjs";

export const fateRinSweater = (variation: `little-jelly`) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`rinsweater`],
    outfitEntries: [
      `sweater`,
      `red sweater`,
      `turtleneck sweater`,
      `long sleeves`,
      `skirt`,
      `black skirt`,
      `miniskirt`,
      `pleated skirt`,
      `thighhighs`,
      `black thighhighs`,
      `thighs skindentation`,
      `loafers`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: true,
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
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
