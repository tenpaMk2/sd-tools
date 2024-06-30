import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

export const maidBikini = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `maid`,
      `maid headdress`,
      `detached collar`,
      `bikini`,
      `maid bikini`,
      `breasts skindentation -> skindentation`,
      `frills`,
      `waist apron -> apron`,
      `frilled waist apron -> frilled apron`,
      `maid apron`,
      `waist apron`,
      `detached sleeves`,
      `collarbone`,
      `shoulder blades`,
      `navel`,
      `skirt`,
      `miniskirt`,
      `thighhighs`,
      `thighs skindentation -> skindentation`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: true,
      backboob: true,
      underboobLevel: `only from below`,
      zettaiRyouiki: true,
      insideOfThighs: true,
    },
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.colorfulPanties,
    },
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
