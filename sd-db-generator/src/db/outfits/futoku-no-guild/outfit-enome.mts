import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `zedotasco`;

export const futokuNoGuildOutfitEnome = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `shirt`,
      `white shirt`,
      `collared shirt`,
      `dress shirt`,
      `necktie`,
      `blue necktie`,
      `center frills`,
      `long sleeves`,
      `jacket`,
      `red jacket`,
      `underbust`,
      `gold trim shirt -> gold trim`,
      `skirt`,
      `white skirt`,
      `pleated skirt`,
      `miniskirt`,
      "boots",
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
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.colorfulPanties,
    whenRemoveShoes: {
      excludeTags: [`boots`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
