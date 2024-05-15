import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../resolver.mjs";

type Variation = `kaho`;

export const blendSWaitress = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`kaho-default`],
    outfitEntries: [
      `head scarf`,
      `waitress`,
      `shirt`,
      `blue shirt`,
      `short sleeves`,
      `gloves`,
      `white gloves`,
      `waist apron`,
      `white apron`,
      `skirt`,
      `blue skirt`,
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
