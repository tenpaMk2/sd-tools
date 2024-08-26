import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

export const gyaru = (): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `gyaru`,
      `choker`,
      `shirt`,
      `white shirt`,
      `collared shirt`,
      `dress shirt`,
      `partially unbuttoned`,
      `bra`,
      `short sleeves`,
      `wrist scrunchie`,
      `around waist cardigan -> cardigan`,
      `cardigan around waist`,
      `skirt`,
      `pleated skirt`,
      `miniskirt`,
      `socks`,
      `loose socks`,
      `loafers`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.colorfulPanties,
    },
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
