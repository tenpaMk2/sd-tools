import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `eternal2kpp`;

export const goblinSlayerOutfitPriestess = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `priestess`,
      `multicolored headwear`,
      `white hat`,
      `red chest gemstone -> red gemstone`,
      `dress`,
      `white dress`,
      `blue dress`,
      `multicolored clothes`,
      `multicolored dress`,
      `robe`,
      `long sleeves`,
      `frilled sleeves`,
      `pelvic curtain`,
      `gold trim shirt -> gold trim`,
      `gold trim skirt -> gold trim`,
      `thigh boots`,
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
    liftType: `dress`,
    upskirtEntries: upskirtPreset.whitePanties,
    whenRemoveShoes: {
      excludeTags: [`thigh boots`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
