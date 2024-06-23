import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

export const revealingMiko = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `revealing clothes`,
      `miko`,
      `nontraditional miko`,
      `collarbone`,
      `hakama`,
      `detached sleeves`,
      `white sleeves`,
      `hakama skirt`,
      `hip vent`,
      // `thighhighs`,
      // `white thighhighs`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: true,
      backboob: true,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.colorfulPanties,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
