import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `flujoru`;

export const prismaIllyaMagicalGirlIllya = (
  variation: Variation,
): OutfitDefine =>
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
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.whitePanties,
    },
    whenRemoveShoes: {
      excludeTags: [`thigh boots`, `pink footwear`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
