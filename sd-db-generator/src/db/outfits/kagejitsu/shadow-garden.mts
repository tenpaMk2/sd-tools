import type { OutfitDefine } from "../outfits.mjs";

type Variation =
  | `alpha-nochekaiser`
  | `alpha-novowels`
  | `beta-nochekaiser`
  | `beta-novowels`;

const outfitEntries = {
  armor: {
    "alpha-nochekaiser": [],
    "alpha-novowels": [],
    "beta-nochekaiser": [`armor`],
    "beta-novowels": [],
  },
  legs: {
    "alpha-nochekaiser": [],
    "alpha-novowels": [],
    "beta-nochekaiser": [],
    "beta-novowels": [`black leggings`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

export const kagejitsuShadowGarden = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `bodysuit`,
      `skin tight`,
      `black bodysuit`,
      `gold trim bodysuit -> gold trim`,
      `cleavage cutout`,
      ...outfitEntries.armor[variation],
      `gloves`,
      `black gloves`,
      ...outfitEntries.legs[variation],
      `black footwear`,
      `covered navel`,
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
    upskirt: null,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
