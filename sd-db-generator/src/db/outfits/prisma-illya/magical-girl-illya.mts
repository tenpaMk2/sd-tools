import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset";

type Variation = `flujoru`;

export const prismaIllyaMagicalGirlIllya = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`ruby`],
    outfitEntries: [
      `magical girl`,
      `white collar`,
      `orange ascot`,
      `pink dress`,
      `sleeveless`,
      `detached sleeves`,
      `bare shoulders`,
      `pink sleeves`,
      `white skirt`,
      `bridal garter`,
      `thigh boots`,
      `pink footwear`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: false,
      tautClothes: false,
      cleavage: false,
      sideboob: true,
      backboob: true,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.whitePanties,
    whenRemoveShoes: {
      excludeTags: [`thigh boots`, `pink footwear`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
