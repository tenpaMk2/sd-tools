import type { OutfitDefine } from "../outfits.mjs";

export const sportsBikini = (): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `sportswear`,
      `sports bikini`,
      `collarbone`,
      `sports bra`,
      `midriff`,
      `navel`,
      `buruma`,
      `shirt`,
      [
        { entries: [`blue sports bra`, `blue buruma`] },
        { entries: [`red sports bra`, `red buruma`] },
        { entries: [`yellow sports bra`, `yellow buruma`] },
        { entries: [`orange sports bra`, `orange buruma`] },
        { entries: [`white sports bra`, `white buruma`] },
      ],
      `bare legs`,
      `shoes`,
      `sneakers`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: true,
      cleavage: true,
      sideboob: false,
      backboob: true,
      underboobLevel: `only from below`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    upskirt: null,
    whenRemoveShoes: {
      excludeTags: [`shoes`, `sneakers`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
