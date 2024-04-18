import { OutfitDefine } from "../resolver.mjs";
import { upskirtPreset } from "./upskirt-preset.mjs";

export const babydoll = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitAndExposureEntries: [
      `babydoll`,
      `underwear`,
      `underwear only`,
      `panties`,
      `collarbone`,
      `navel`,
      `butt crack`,
      `bare arms`,
      `bridal garter`,
      `barefoot`,
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
