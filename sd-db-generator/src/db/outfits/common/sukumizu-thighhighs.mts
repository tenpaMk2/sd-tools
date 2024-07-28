import type { OutfitDefine } from "../outfits.mjs";

export const sukumizuThighhighs = (): OutfitDefine =>
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
      `cleavage cutout -> clothing cutout`,
      `cleavage cutout`,
      `heart cutout`,
      `collarbone`,
      `bare arms`,
      `covered navel`,
      `shoulder blades`,
      `thighhighs`,
      `thighs skindentation -> skindentation`,
      `skin tight`,
      `no shoes`,
      [{ entries: [] }, { entries: [`shiny skin`] }],
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
    upskirt: null,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
