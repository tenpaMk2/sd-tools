import { OutfitDefine } from "../outfits.mjs";

export const kagejitsuShadowGarden = (
  variation: `nochekaiser-alpha` | `nochekaiser-beta`,
) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `bodysuit`,
      `skin tight`,
      `black bodysuit`,
      `gold trim bodysuit`,
      `cleavage cutout`,
      ...(variation === `nochekaiser-beta` ? ([`armor`] as const) : []),
      `gloves`,
      `black gloves`,
      `black footwear`,
      `covered navel`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
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
