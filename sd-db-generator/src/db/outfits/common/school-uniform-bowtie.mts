import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

export const schoolUniformBowtie = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `school uniform`,
      `shirt`,
      `white shirt`,
      `collared shirt`,
      `breast pocket`,
      `bowtie`,
      `red bowtie`,
      `short sleeves`,
      `skirt`,
      `plaid skirt`,
      `miniskirt`,
      `blue skirt`,
      `socks`,
      `white socks`,
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
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.colorfulPanties,
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
