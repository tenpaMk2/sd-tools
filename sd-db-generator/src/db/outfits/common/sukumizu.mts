import type { OutfitDefine } from "../outfits.mjs";

export const sukumizu = (): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `school swimsuit`,
      [
        { entries: [`blue one-piece swimsuit`] },
        { entries: [`black one-piece swimsuit`] },
        { entries: [`white one-piece swimsuit`] },
      ],
      `collarbone`,
      `bare shoulders`,
      `bare arms`,
      `covered navel`,
      `shoulder blades`,
      `skin tight`,
      `bare legs`,
      `barefoot`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: true,
      cleavage: false,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    upskirt: null,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
