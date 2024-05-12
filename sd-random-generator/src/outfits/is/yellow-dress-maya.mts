import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../resolver.mjs";

export const isYellowDressMaya = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `dress`,
      `yellow dress`,
      `short sleeves`,
      `collarbone`,
      `frilled sleeves`,
      `boots`,
      `knee boots`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: true,
      tautClothes: true,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    liftType: `dress`,
    upskirtEntries: upskirtPreset.pinkPanties,
    whenRemoveShoes: {
      excludeTags: [`boots`, `knee boots`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
