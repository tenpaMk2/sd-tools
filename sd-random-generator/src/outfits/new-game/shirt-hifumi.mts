import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

export const newGameShirtHifumi = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `shirt`,
      `white shirt`,
      `cross tie`,
      `long sleeves`,
      `skirt`,
      `red skirt`,
      `miniskirt`,
      `thighhighs`,
      `black thighhighs`,
      `thighs skindentation`,
      `loafers`,
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
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
