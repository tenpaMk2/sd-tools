import { OutfitDefine } from "../outfits.mjs";

export const raceQueen = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `revealing clothes`,
      `race queen`,
      `shiny clothes`,
      `jacket`,
      `cropped jacket`,
      `short sleeves`,
      `clothes writing`,
      `navel`,
      `latex bikini`,
      `latex shorts`,
      `boots`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: true,
      tautClothes: true,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `only from below`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    liftType: `none`,
    upskirtEntries: [],
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
