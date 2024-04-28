import { OutfitDefine } from "../resolver.mjs";

export const testOutfit = () =>
  ({
    lora: {
      tag: `eft_dumbell_short`,
      probabilityAndWeights: [
        { probability: 1, weight: 0.5 },
        { probability: 2, weight: 0.9 },
      ],
    },
    loraOutfitTriggerWordEntries: [`aachisato`],
    outfitEntries: [
      `bikini`,
      [{ entries: [`black bikini`] }, { entries: [`white bikini`] }],
      `breasts skindentation`,
      `gold trim skirt`,
      `boots`,
      `shoes`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: true,
      backboob: true,
      underboobLevel: `only from below`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    liftType: `none`,
    upskirtEntries: [`blue panties`],
    whenRemoveShoes: {
      excludeTags: [`boots`, `shoes`],
      additionalFootEntriesAfterRemoving: [
        `barefoot`,
        [{ entries: [`crop top`] }, { entries: [`lingerie`] }],
      ],
    },
  }) as const satisfies OutfitDefine;
