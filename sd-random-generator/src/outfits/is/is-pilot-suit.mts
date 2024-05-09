import { OutfitDefine } from "../resolver.mjs";

type Variation = `cecilia` | `charlotte` | `houki`;

const variationParts = {
  necklace: {
    cecilia: [],
    charlotte: [`jewelry`, `necklace`, `pendant`],
    houki: [],
  },
  leotard: {
    cecilia: [`blue leotard`],
    charlotte: [`black leotard`],
    houki: [`white leotard`],
  },
  leg: {
    cecilia: [`white thighhighs`],
    charlotte: [`black thighhighs`],
    houki: [`white thighhighs`],
  },
} as const satisfies {
  [k: string]: {
    [k in Variation]: OutfitDefine["outfitEntries"];
  };
};

export const isPilotSuit = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `pilot suit`,
      `halterneck`,
      `turtleneck`,
      ...variationParts.necklace[variation],
      `bare shoulders`,
      `leotard`,
      ...variationParts.leotard[variation],
      `covered navel`,
      `shiny`,
      `shiny clothes`,
      `skin tight`,
      `thighhighs`,
      ...variationParts.leg[variation],
      `thighs skindentation`,
      `bare arms`,
      // `pelvic curtain`, // Nochekaiser specified but I think it should be removed.
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
      insideOfThighs: false,
    },
    liftType: `none`,
    upskirtEntries: [],
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
