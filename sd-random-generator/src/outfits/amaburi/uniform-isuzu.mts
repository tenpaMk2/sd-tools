import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

export const amaburiUniformIsuzu = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `uniform`,
      `aiguillette`,
      `bowtie`,
      `white bowtie`,
      `jacket`,
      `red jacket`,
      `long sleeves`,
      `skirt`,
      `black skirt`,
      `frilled skirt`,
      `pleated skirt`,
      `miniskirt`,
      `thighhighs`,
      `white thighhighs`,
      `thighs skindentation`,
      `boots`,
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
      excludeTags: [`boots`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
