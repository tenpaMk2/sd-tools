import type { OutfitDefine } from "../outfits.mjs";

export const tankTopDolphinShorts = (): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `collarbone`,
      `tank top`,
      [
        { entries: [`aqua tank top`] },
        { entries: [`black tank top`] },
        { entries: [`blue tank top`] },
        { entries: [`green tank top`] },
        { entries: [`orange tank top`] },
        { entries: [`pink tank top`] },
        { entries: [`purple tank top`] },
        { entries: [`red tank top`] },
        { entries: [`white tank top`], probability: 5 },
        { entries: [`yellow tank top`] },
      ],
      `sleeveless`,
      `bare shoulders`,
      `bare arms`,
      `shorts`,
      `short shorts`,
      `dolphin shorts`,
      `bare legs`,
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
      insideOfThighs: false,
    },
    upskirt: null,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
