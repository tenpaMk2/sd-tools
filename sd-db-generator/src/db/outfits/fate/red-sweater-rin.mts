import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `little-jelly`;

const loraOutfitTriggerWordEntries = {
  "little-jelly": [`rinsweater`],
} as const satisfies Record<
  Variation,
  OutfitDefine[`loraOutfitTriggerWordEntries`]
>;

export const fateRedSweaterRin = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
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
      `thighs skindentation -> skindentation`,
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
