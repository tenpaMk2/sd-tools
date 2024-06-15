import { OutfitDefine } from "../outfits.mjs";

type Variation =
  | `cecilia-nochekaiser`
  | `charlotte-nochekaiser`
  | `houki-nochekaiser`;

const outfitEntries = {
  necklace: {
    "cecilia-nochekaiser": [],
    "charlotte-nochekaiser": [`jewelry`, `necklace`, `pendant`],
    "houki-nochekaiser": [],
  },
  leotard: {
    "cecilia-nochekaiser": [`blue leotard`],
    "charlotte-nochekaiser": [`black leotard`],
    "houki-nochekaiser": [`white leotard`],
  },
  leg: {
    "cecilia-nochekaiser": [`white thighhighs`],
    "charlotte-nochekaiser": [`black thighhighs`],
    "houki-nochekaiser": [`white thighhighs`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

export const isPilotSuit = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `pilot suit`,
      `halterneck`,
      `turtleneck`,
      ...outfitEntries.necklace[variation],
      `bare shoulders`,
      `leotard`,
      ...outfitEntries.leotard[variation],
      `covered navel`,
      `shiny`,
      `shiny clothes`,
      `skin tight`,
      `thighhighs`,
      ...outfitEntries.leg[variation],
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
