import { OutfitDefine } from "../resolver.mjs";

export const sukumizuThighhighs = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `revealing clothes`,
      `school swimsuit`,
      [
        { entries: [`blue one-piece swimsuit`, `black thighhighs`] },
        { entries: [`black one-piece swimsuit`, `black thighhighs`] },
        { entries: [`white one-piece swimsuit`, `white thighhighs`] },
      ],
      `cleavage cutout`,
      `collarbone`,
      `bare arms`,
      `covered navel`,
      `shoulder blades`,
      `thighhighs`,
      `thighs skindentation`,
      `skin tight`,
      // `shiny skin`,
      `no shoes`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: true,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    liftType: `none`,
    upskirtEntries: [],
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
